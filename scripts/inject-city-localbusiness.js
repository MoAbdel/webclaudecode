/* eslint-disable */
const fs = require('fs');
const path = require('path');

function findPages(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) findPages(p, acc);
    else if (f === 'page.tsx' || f === 'page.ts') acc.push(p);
  }
  return acc;
}

function toTitle(s) {
  return s.replace(/[-_]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()).trim();
}

const files = findPages('app/areas');
let changed = 0;

files.forEach((file) => {
  let code = fs.readFileSync(file, 'utf8');
  if (/"@type"\s*:\s*"LocalBusiness"/.test(code)) return;

  const slug = file.replace(/\\/g, '/').replace(/^app\//, '').replace(/\/page\.tsx?$/, '');
  const lastSeg = slug.split('/').pop() || '';
  const citySlug = lastSeg;
  const cityName = toTitle(citySlug.replace('-mortgage-broker', '').replace('-mortgage-rates', '')) || 'Orange County';
  const block = `\n{(() => {\n  const city = ${JSON.stringify(citySlug)};\n  const toTitle = (s) => s.replace(/[-_]+/g, ' ').replace(/\\b\\w/g, m => m.toUpperCase()).trim();\n  const cityName = '${cityName}';\n  const schema = {\n    "@context": "https://schema.org",\n    "@type": "LocalBusiness",\n    "name": "Mo Abdel — Mortgage Broker",\n    "url": \`https://www.mothebroker.com/${slug}\`,\n    "areaServed": [\`${cityName}, CA\`, "Orange County, CA"],\n    "telephone": "(949) 579-2057"\n  };\n  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />\n})()}\n`;

  if (code.includes('</main>')) {
    code = code.replace('</main>', block + '\n</main>');
  } else if (code.match(/<div[^>]*>/)) {
    // insert before last closing div
    code = code.replace(/<\/div>\s*$/m, block + '\n</div>');
  } else {
    code = code + '\n' + block;
  }
  fs.writeFileSync(file, code, 'utf8');
  changed++;
  console.log('LocalBusiness injected:', file);
});

console.log(`Done. Files changed: ${changed}`);

