/* eslint-disable */
const fs = require('fs');
const path = require('path');

function find(dir, acc=[]) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) find(p, acc);
    else if (f === 'page.tsx' || f === 'page.ts') acc.push(p);
  }
  return acc;
}

function cleanup(file) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  // Remove stray top-level , openGraph: { ... } leftovers
  src = src.replace(/^[ \t]*,[ \t]*\r?\n[ \t]*openGraph\s*:\s*\{[\s\S]*?\}\s*\r?\n/gm, '');
  // Remove dangling 'satisfies Metadata;' fragments
  src = src.replace(/satisfies\s+Metadata;?/g, '');
  // Remove duplicate consecutive blank lines
  src = src.replace(/\n{3,}/g, '\n\n');
  if (src !== before) {
    fs.writeFileSync(file, src, 'utf8');
    console.log('cleaned leftovers:', file);
  }
}

find('app').forEach(cleanup);
console.log('leftover cleanup done');