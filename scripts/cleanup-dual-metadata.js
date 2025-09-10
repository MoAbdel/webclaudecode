/* eslint-disable */
const fs = require('fs');
const path = require('path');

function findFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) findFiles(p, acc);
    else if (/\.(tsx?|mdx?)$/.test(f)) acc.push(p);
  }
  return acc;
}

let changed = 0;
findFiles('app').forEach((file) => {
  let code = fs.readFileSync(file, 'utf8');
  if (!/export\s+async\s+function\s+generateMetadata\s*\(/.test(code)) return;
  const idx = code.indexOf('export const metadata');
  if (idx === -1) return;
  // find end of block by locating the next \n}; or }; on its own line
  const after = code.slice(idx);
  const match = after.match(/\};/);
  if (!match) return;
  const endIdx = idx + match.index + 2; // position after };
  const out = code.slice(0, idx) + code.slice(endIdx);
  if (out !== code) {
    fs.writeFileSync(file, out, 'utf8');
    changed++;
    console.log('Removed static metadata:', file);
  }
});
console.log('Cleanup complete. Files changed:', changed);
