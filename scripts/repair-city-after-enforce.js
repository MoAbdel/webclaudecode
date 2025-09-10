/* eslint-disable */
const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();
const AREAS = path.join(ROOT,'app','areas');
function walk(dir, acc=[]) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir,{withFileTypes:true})){
    const p = path.join(dir,e.name);
    if (e.isDirectory()) walk(p,acc);
    else if (e.isFile() && e.name==='page.tsx') acc.push(p);
  }
  return acc;
}
function read(f){return fs.readFileSync(f,'utf8');}
function write(f,s){fs.writeFileSync(f,s,'utf8');}
const files = walk(AREAS);
let changed=0;
for (const f of files){
  let s = read(f);
  // Remove stray lines immediately after a generateMetadata block
  // Pattern: export async function generateMetadata(){ ... } then stray lines
  s = s.replace(/(export\s+async\s+function\s+generateMetadata[\s\S]*?\}\s*)\n([\s\S]*?)\n(?=(import|export\s+default|const\s|function|<))/m, (m, gm, mid, next) => {
    const cleaned = mid.split(/\r?\n/).filter(line => {
      if (/^\s*}\s*;?\s*$/.test(line)) return false;
      if (/^\s*,\s*$/.test(line)) return false;
      if (/^\s*openGraph\s*:\s*\{/.test(line)) return false;
      if (/^\s*twitter\s*:\s*\{.*\},?\s*$/.test(line)) return false;
      if (/^\s*export\s+const\s+dynamic\b/.test(line)) return false;
      return true;
    }).join('\n');
    return gm + '\n' + cleaned + '\n';
  });
  // Global cleanup of orphan lines
  s = s.replace(/^\s*openGraph\s*:\s*\{[\s\S]*?\}\s*,?\s*$/gm,'');
  s = s.replace(/^\s*twitter\s*:\s*\{.*\},?\s*$/gm,'');
  s = s.replace(/^\s*}\s*;?\s*$/gm,'');
  s = s.replace(/^\s*,\s*$/gm,'');
  // Ensure only one generateMetadata block
  const blocks = s.match(/export\s+async\s+function\s+generateMetadata\s*\(/g) || [];
  if (blocks.length>1){
    // keep first occurrence; remove others
    let first = true;
    s = s.replace(/export\s+async\s+function\s+generateMetadata\s*\([\s\S]*?\)\s*\{[\s\S]*?\}\s*/gm, m=>{
      if (first){ first=false; return m; }
      return '';
    });
  }
  if (s!==read(f)) { write(f,s); console.log('repaired:',f); changed++; }
}
console.log('city repair done. files changed:',changed);