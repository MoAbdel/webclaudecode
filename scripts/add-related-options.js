/* eslint-disable */
const fs = require('fs');
const path = require('path');

function findServicePages(dir, acc=[]) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) findServicePages(p, acc);
    else if ((f === 'page.tsx' || f === 'page.ts') && /app[\\\/]loan-programs[\\\/]/.test(p)) acc.push(p);
  }
  return acc;
}

function ensureRelatedOptions(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (/Related Options/.test(src)) return false;
  const block = `\n<section className="mt-12">\n  <h2 className="text-2xl font-bold mb-4">Related Options</h2>\n  <ul className="list-disc list-inside text-blue-700 space-y-1">\n    <li><a href="/loan-programs/conventional-loans">Conventional Loans</a></li>\n    <li><a href="/loan-programs/jumbo-loans">Jumbo Loans</a></li>\n  </ul>\n</section>\n`;
  src = src + "\n" + block;
  fs.writeFileSync(file, src, 'utf8');
  console.log('added Related Options:', file);
  return true;
}

let changed = 0;
for (const f of findServicePages('app/loan-programs')) if (ensureRelatedOptions(f)) changed++;
console.log('related options update complete. Files changed:', changed);