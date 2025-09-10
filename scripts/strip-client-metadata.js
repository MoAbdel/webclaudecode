/* eslint-disable */
const fs = require('fs');
const path = require('path');

function findPages(dir, acc=[]) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) findPages(p, acc);
    else if (f === 'page.tsx' || f === 'page.ts') acc.push(p);
  }
  return acc;
}

function stripPageMetadataOnClient(file) {
  let src = fs.readFileSync(file, 'utf8');
  const head = src.split(/\r?\n/).slice(0, 8).join('\n');
  const isClient = /['\"]use client['\"]/.test(head);
  if (!isClient) return false;
  const before = src;
  src = src.replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\}\s*;?\s*/gm, '');
  src = src.replace(/export\s+async\s+function\s+generateMetadata\s*\([\s\S]*?\)\s*\{[\s\S]*?\}\s*/gm, '');
  if (src !== before) {
    fs.writeFileSync(file, src, 'utf8');
    console.log('stripped client metadata:', file);
    return true;
  }
  return false;
}

function stripDuplicateMetadata(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (!/export\s+async\s+function\s+generateMetadata\s*\(/.test(src)) return false;
  const before = src;
  src = src.replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\}\s*;?\s*/gm, '');
  if (src !== before) {
    fs.writeFileSync(file, src, 'utf8');
    console.log('removed duplicate metadata:', file);
    return true;
  }
  return false;
}

const pages = findPages('app');
let changed = 0;
for (const f of pages) if (stripPageMetadataOnClient(f)) changed++;
for (const f of pages) if (stripDuplicateMetadata(f)) changed++;
console.log('client/duplicate metadata cleanup complete. Files changed:', changed);