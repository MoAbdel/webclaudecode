/* eslint-disable */
const fs = require('fs');
const path = require('path');
const CANONICAL_BASE = 'https://www.mothebroker.com';

function listFiles(dir, acc=[]) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) listFiles(p, acc);
    else if (f === 'page.tsx' || f === 'page.ts') acc.push(p);
  }
  return acc;
}

function fixCanonicals(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (/https:\/\/www\.mothebroker\.com\/[A-Za-z]:\//.test(src)) {
    const rel = file.replace(/\\/g,'/').split('/app/')[1] || '';
    const route = rel.replace(/\/page\.tsx$/, '');
    const url = (CANONICAL_BASE + '/' + route).replace(/\/$/, '');
    src = src.replace(/https:\/\/www\.mothebroker\.com\/[A-Za-z]:[^"']+/g, url);
    fs.writeFileSync(file, src, 'utf8');
    console.log('fixed canonical:', file);
  }
}

function removeDanglingBraces(file) {
  let lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const origLen = lines.length;
  lines = lines.filter(l => l.trim() !== '}};');
  if (file.replace(/\\/g,'/').endsWith('/about/page.tsx')) {
    // Remove stray block lines we know are invalid
    lines = lines.filter(l => !l.includes('satisfies Metadata;') && !l.trim().startsWith('/about`'));
  }
  if (lines.length !== origLen) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    console.log('cleaned syntax:', file);
  }
}

function fixUseClientTop(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes("'use client';") && !src.includes('"use client";')) return;
  // Remove all occurrences
  src = src.replace(/['\"]use client['\"];\s*/g, '');
  // Insert at very top
  src = `'use client';\n` + src;
  fs.writeFileSync(file, src, 'utf8');
  console.log('moved use client:', file);
}

const pages = listFiles('app');
for (const f of pages) fixCanonicals(f);
for (const f of pages) removeDanglingBraces(f);
['app/admin/page.tsx','app/admin/data/page.tsx','app/admin/weekly-update/page.tsx'].forEach(f => {
  if (fs.existsSync(f)) fixUseClientTop(f);
});
console.log('repair done');