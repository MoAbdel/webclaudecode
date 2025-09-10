/* eslint-disable */
const fs = require('fs');
const path = require('path');

const APP = path.join(process.cwd(), 'app');

function asPosix(p){return p.replace(/\\/g,'/');}
function walkAreas(dir, acc=[]) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkAreas(p, acc);
    else if (e.isFile() && e.name === 'page.tsx') acc.push(p);
  }
  return acc;
}
function read(p){return fs.readFileSync(p,'utf8');}
function write(p,s){fs.writeFileSync(p,s,'utf8');}
function routeFromFile(file){
  let rel = asPosix(file).replace(asPosix(APP), '');
  rel = rel.replace(/\/page\.tsx$/, '');
  return rel || '/';
}
function leafSlugFromRoute(route){
  const parts = route.split('/').filter(Boolean);
  return parts[parts.length-1] || '';
}
function toTitleCase(s){return s.replace(/-/g,' ').replace(/\b\w/g, m=>m.toUpperCase());}
function cityFromSlug(slug){
  return toTitleCase(slug.replace(/-mortgage-(broker|rates)$/,''));
}
function stripOldMetadata(src){
  let out = src;
  out = out.replace(/export\s+const\s+metadata\s*:\s*[^=]*=\s*\{[\s\S]*?\}\s*;?/gm,'');
  out = out.replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\}\s*;?/gm,'');
  out = out.replace(/export\s+const\s+metadata\s*=\s*generateCityMetadata\([^\)]*\)\s*;?/gm,'');
  out = out.replace(/export\s+async\s+function\s+generateMetadata\s*\([\s\S]*?\)\s*\{[\s\S]*?\}\s*/gm,'');
  // cleanup dangling lines
  out = out.replace(/^[\t ]*,\s*$/gm,'');
  out = out.replace(/^[\t ]*};\s*$/gm,'');
  return out;
}
function hasUseClient(src){
  const head = src.split(/\r?\n/).slice(0,6).join('\n');
  return /['\"]use client['\"]/.test(head);
}
function ensureImports(src){
  if (/from\s+['\"]@\/lib\/seo-constants['\"]/.test(src)) return src;
  // Place after existing imports and after optional 'use client'
  const lines = src.split(/\r?\n/);
  let insertAt = 0;
  // skip 'use client' line
  if (/^\s*['\"]use client['\"];?/.test(lines[0])) insertAt = 1;
  while (insertAt < lines.length && /^\s*import\s/.test(lines[insertAt])) insertAt++;
  const imp = "import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from \"@/lib/seo-constants\";";
  lines.splice(insertAt, 0, imp);
  return lines.join('\n');
}
function insertGenerateMetadata(src, route, city){
  const block = `\nexport async function generateMetadata() {\n  const path = "${route}";\n  const title = "Mortgage Broker in ${city}, CA | " + SHORT_BRAND;\n  const description = "Looking for a trusted mortgage broker in ${city}, Orange County, CA? Compare rates, refinance, or get pre-approved today.";\n  return {\n    title,\n    description,\n    alternates: { canonical: CANONICAL_BASE + path },\n    openGraph: {\n      title,\n      description: "Get expert mortgage help in ${city}, Orange County, CA. Contact us today.",\n      url: CANONICAL_BASE + path,\n      siteName: SHORT_BRAND,\n      images: [LOGO],\n    },\n  };\n}`;
  // Insert after imports and after any 'use client' line if present
  const lines = src.split(/\r?\n/);
  let insertAt = 0;
  if (/^\s*['\"]use client['\"];?/.test(lines[0])) insertAt = 1;
  while (insertAt < lines.length && /^\s*import\s/.test(lines[insertAt])) insertAt++;
  lines.splice(insertAt, 0, block);
  return lines.join('\n');
}
function hasLocalBusinessJsonLd(src){
  const m = src.match(/application\/ld\+json[\s\S]*LocalBusiness/);
  return !!m;
}
function appendCitySchema(src, route, city){
  if (hasLocalBusinessJsonLd(src)) return src;
  const block = `\n<script\n  type=\"application/ld+json\"\n  dangerouslySetInnerHTML={{\n    __html: JSON.stringify({\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"LocalBusiness\",\n      name: \"Mo Abdel — Mortgage Broker\",\n      url: CANONICAL_BASE + \"${route}\",\n      logo: LOGO,\n      telephone: TELEPHONE,\n      areaServed: [\"${city}, CA\", AREA_SERVED],\n      sameAs: PROFILES,\n    }),\n  }}\n/>`;
  // try to append before last closing tag
  const idx = src.lastIndexOf('</');
  if (idx !== -1) return src.slice(0, idx) + block + '\n' + src.slice(idx);
  return src + '\n' + block + '\n';
}

const files = walkAreas(path.join(APP,'areas'));
let changed = 0, skipped = 0;
for (const file of files){
  let src = read(file);
  if (hasUseClient(src)) { skipped++; continue; }
  const route = routeFromFile(file);
  const slug = leafSlugFromRoute(route);
  const city = cityFromSlug(slug);

  let out = stripOldMetadata(src);
  out = ensureImports(out);
  out = insertGenerateMetadata(out, route, city);
  out = appendCitySchema(out, route, city);

  if (out !== src){ write(file, out); console.log('updated city page:', asPosix(file)); changed++; }
}
console.log(`City metadata/schema enforced. Files changed: ${changed}. Skipped (client): ${skipped}`);