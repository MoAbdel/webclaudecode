/* eslint-disable */
const fs = require('fs');
const path = require('path');

function findFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) findFiles(p, acc);
    else if (f === 'page.tsx' || f === 'page.ts') acc.push(p);
  }
  return acc;
}

let changed = 0;
for (const file of [...findFiles('app/guides'), ...findFiles('app/articles'), ...findFiles('app/loan-programs')]) {
  let code = fs.readFileSync(file, 'utf8');
  if (/<Link\s/.test(code) && !/import\s+Link\s+from\s+['"]next\/link['"]/.test(code)) {
    code = code.replace(/(import[^\n]*;\s*)+/m, (m) => m + "\nimport Link from 'next/link';\n");
    fs.writeFileSync(file, code, 'utf8');
    console.log('added Link import:', file);
    changed++;
  }
}
console.log('added', changed, 'imports');
