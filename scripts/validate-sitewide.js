const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const REPORTS_DIR = path.join(ROOT, 'reports');

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.isFile() && entry.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

function classify(routePath) {
  if (routePath === '/about') return 'About';
  if (routePath === '/contact') return 'Contact';
  if (routePath.startsWith('/areas/')) return 'Location';
  if (routePath.startsWith('/articles/')) return 'Article';
  if (routePath.startsWith('/guides/')) return 'Guide';
  if (routePath.startsWith('/resources/')) return 'Resource';
  if (routePath.startsWith('/calculator') || routePath.startsWith('/tools/')) return 'Calculator';
  return 'Other';
}

function read(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function extractTitle(src) {
  // Prefer generateMetadata title
  let m = src.match(/generateMetadata\(\{[\s\S]*?title:\s*'([^']+)'/);
  if (m) return m[1];
  m = src.match(/export const metadata[\s\S]*?title:\s*'([^']+)'/);
  if (m) return m[1];
  m = src.match(/AIOOptimization[\s\S]*?title=\"([^\"]+)/);
  if (m) return m[1];
  m = src.match(/LLMOptimizedSEO[\s\S]*?title=\{`([^`]+)`\}/);
  if (m) return m[1];
  return '';
}

function extractDescription(src) {
  let m = src.match(/generateMetadata\(\{[\s\S]*?description:\s*'([^']+)'/);
  if (m) return m[1];
  m = src.match(/export const metadata[\s\S]*?description:\s*'([^']+)'/);
  if (m) return m[1];
  m = src.match(/AIOOptimization[\s\S]*?description=\"([^\"]+)/);
  if (m) return m[1];
  m = src.match(/LLMOptimizedSEO[\s\S]*?description=\{`([^`]+)`\}/);
  if (m) return m[1];
  return '';
}

function hasCanonical(src) {
  // Next.js metadata alternates.canonical
  if (/alternates:\s*\{\s*canonical:/.test(src)) return true;
  // Head link rel canonical
  if (/<link[^>]+rel=\"canonical\"/.test(src)) return true;
  // Heuristic: using centralized generators implies canonical present
  if (/generateMetadata\(\{[\s\S]*?path:/.test(src)) return true;
  if (/generateCityMetadata\(/.test(src)) return true;
  return false;
}

function hasSchema(src, type) {
  // Look for JSON-LD snippets or helper components
  if (/application\/ld\+json/.test(src)) {
    if (type === 'Location' && /LocalBusiness/.test(src)) return true;
    if (type === 'Article' && /"@type"\s*:\s*"Article"/.test(src)) return true;
    if (type === 'About' && /Organization/.test(src)) return true;
    if (type === 'Contact' && /LocalBusiness/.test(src)) return true;
  }
  if (/AdvancedSchemaMarkup/.test(src)) {
    if (type === 'Location' && /type=\"LocalBusiness\"/.test(src)) return true;
    if (type === 'About' && /type=\"Organization\"/.test(src)) return true;
  }
  if (/AdvancedSchemaGenerator/.test(src)) return true; // calculators
  return false;
}

function countInternalLinks(src) {
  const anchors = src.match(/<Link\s+href=\"\/[^"]+\"/g) || [];
  const as = src.match(/<a\s+href=\"\/[^"]+\"/g) || [];
  return anchors.length + as.length;
}

function hasAltIssues(src) {
  const imgs = src.match(/<img[^>]*>/g) || [];
  const issues = imgs.filter(tag => !/alt=/.test(tag));
  const images = src.match(/<Image[^>]*(?:\/?>|>)/g) || [];
  const issues2 = images.filter(tag => !/alt=/.test(tag));
  return (issues.length + issues2.length) > 0;
}

function hasRobotsNoindex(src) {
  return /robots:\s*\{[^}]*index:\s*false/.test(src) || /robots:\s*'noindex/.test(src);
}

function routeFromFile(file) {
  const rel = file.split(path.sep).join('/').split('/app')[1];
  return rel.replace(/\/page\.tsx$/, '') || '/';
}

function pixelWidthEstimate(title) {
  // Rough estimate: average 7px per character for title case
  return Math.round((title || '').length * 7);
}

function main() {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR);

  const files = walk(APP_DIR);
  const rows = [];

  for (const file of files) {
    const src = read(file);
    const route = routeFromFile(file);
    const type = classify(route);
    const title = extractTitle(src);
    const description = extractDescription(src);
    const canonical = hasCanonical(src);
    const schema = hasSchema(src, type);
    const links = countInternalLinks(src) >= 2;
    const alt = !hasAltIssues(src);
    const robots = hasRobotsNoindex(src) || !/(thank-you|preview|draft|temp|staging)/.test(route);

    const issues = [];
    if (!canonical) issues.push('Missing canonical');
    if (description && description.length > 160) issues.push('Meta >160 chars');
    if (pixelWidthEstimate(title) > 600) issues.push('Title >600px');
    if (!schema && ['Article', 'Location', 'About', 'Contact'].includes(type)) issues.push('Missing schema');
    if (!links && ['Article', 'Resource', 'Guide'].includes(type)) issues.push('Add internal links');
    if (!alt) issues.push('Image alt missing');

    rows.push({ route, type, title, description, canonical, schema, links, alt, robots, result: issues.length ? 'WARN' : 'OK', issues });
  }

  const header = '| Path | Type | Title | Meta | Canonical | Schema | Links | Alt | Robots | Result |\n|------|------|-------|------|-----------|--------|-------|-----|--------|--------|';
  const lines = rows.map(r => `| ${r.route} | ${r.type} | ${r.title || ''} | ${r.description ? (r.description.length + ' chars') : ''} | ${r.canonical ? 'yes' : 'no'} | ${r.schema ? 'yes' : 'no'} | ${r.links ? 'yes' : 'no'} | ${r.alt ? 'yes' : 'no'} | ${r.robots ? 'ok' : 'check'} | ${r.result} |`);
  const table = [header, ...lines].join('\n');

  fs.writeFileSync(path.join(REPORTS_DIR, 'sitewide-validation.md'), table, 'utf8');

  // Top 10 longest titles by pixel estimate
  const topTitles = rows
    .map(r => ({ path: r.route, px: pixelWidthEstimate(r.title), title: r.title }))
    .sort((a, b) => b.px - a.px)
    .slice(0, 10)
    .map(x => `- ${x.px}px — ${x.path} — ${x.title}`)
    .join('\n');
  fs.writeFileSync(path.join(REPORTS_DIR, 'sitewide-top10-titles.md'), topTitles, 'utf8');

  // Alt missing report
  const altMissing = rows.filter(r => !r.alt).map(r => `- ${r.route}`).join('\n') || 'All good — no missing alt attributes detected by static scan.';
  fs.writeFileSync(path.join(REPORTS_DIR, 'sitewide-alt-missing.md'), altMissing, 'utf8');

  console.log(table);
}

main();
