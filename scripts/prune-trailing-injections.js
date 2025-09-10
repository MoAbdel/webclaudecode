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

const targets = [...findFiles('app/guides'), ...findFiles('app/articles')];
let changed = 0;

targets.forEach((file) => {
  let code = fs.readFileSync(file, 'utf8');
  const trailing = code.slice(-1000);
  if (!/(<div className=\"sr-only\"|<script type=\"application\/ld\+json\")/.test(trailing)) return;
  let lastBrace = code.lastIndexOf('\n}\n');
  if (lastBrace === -1) lastBrace = code.lastIndexOf('\r\n}\r\n');
  if (lastBrace === -1) return;
  const pruned = code.slice(0, lastBrace + 2) + '\n';
  fs.writeFileSync(file, pruned, 'utf8');
  changed++;
  console.log('Pruned trailing injections:', file);
});
console.log('Prune complete. Files changed:', changed);
