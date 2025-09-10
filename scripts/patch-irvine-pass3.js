const fs = require("fs");
const path = require("path");
const ROOT = process.cwd();

const FILES = [
  "app/areas/irvine-mortgage-broker/page.tsx",
  "app/areas/irvine-neighborhoods/cypress-village-mortgage-broker/page.tsx",
  "app/areas/irvine-neighborhoods/northwood-mortgage-broker/page.tsx",
  "app/areas/irvine-neighborhoods/quail-hill-mortgage-broker/page.tsx",
  "app/areas/irvine-neighborhoods/turtle-rock-mortgage-broker/page.tsx",
];

const read = (p)=>fs.existsSync(p)?fs.readFileSync(p,"utf8"):"";
const write = (p,s)=>fs.writeFileSync(p,s,"utf8");

function fixFeaturesClosure(s){
  // ... features: [ ... ] ];  →  ... features: [ ... ] }, ];
  return s.replace(
    /(features\s*:\s*\[[\s\S]*?\])\s*];/g,
    (_,inside)=> `${inside}\n},\n];`
  );
}
function ensureArrayEnds(name,s){
  const rx = new RegExp(`(const\\s+${name}\\s*=\\s*\\[[\\s\\S]*?)(\\n(?=const|export|return|<\\/|$))`,`g`);
  return s.replace(rx,(m,arr,tail)=>/\];\s*$/.test(arr)?m:`${arr}\n];${tail}`);
}
function commonNeighborhoodFixes(src){
  let s = src.replace(/\r\n/g,"\n");

  // Fix features closure + ensure arrays close
  s = fixFeaturesClosure(s);
  s = ensureArrayEnds("propertyTypes", s);
  s = ensureArrayEnds("loanPrograms", s);

  // Remove stray `rn`, ``r`n`` tokens
  s = s.replace(/\b`?r`?n\b/g,"").replace(/\brn\b/g,"");

  // Fix stray "/>;" → "/>"
  s = s.replace(/\/>\s*;/g,"/>");

  // Northwood specific: content={northwoodData};<EnhancedLocalSchema ...
  s = s.replace(
    /(content=\{[A-Za-z0-9_]+\})\s*;\s*(<EnhancedLocalSchema\b)/,
    "$1 />\n$2"
  );

  // If a JSON-LD <script> got outside JSX, pull it inside by ensuring it appears before the final return close
  // (soft guard)

  return s;
}

function balanceReturnAndExport(src){
  // Make sure: return ( <> ... </> ); } export default ...
  let s = src.replace(/\r\n/g,"\n");

  const hasReturn = /return\s*\(/.test(s);
  if(!hasReturn) return s;

  // Insert <> right after return ( if not present
  s = s.replace(/return\s*\(\s*\n(?!<)/, "return (\n<>\n");

  // Ensure there is a `</>` before the close of the return and proper closure before export default
  const expIdx = s.search(/export\s+default/);
  if (expIdx > -1) {
    const beforeExport = s.slice(0, expIdx);
    const afterExport  = s.slice(expIdx);

    if (!/<\/>[\s\S]*\)\s*;/.test(beforeExport)) {
      const idx = beforeExport.lastIndexOf(")\n");
      if (idx !== -1) {
        s = beforeExport.replace(/\)\s*;\s*$/, "</>\n);\n") + afterExport;
      } else {
        s = beforeExport + "</>\n);\n" + afterExport;
      }
    }
    // Ensure a closing brace exists before export default
    if (!/\}\s*$/.test(s.slice(0, s.search(/export\s+default/)))) {
      s = s.replace(/export\s+default/, "}\nexport default");
    }
  } else {
    // No export default found; just make sure we close return
    if (!/<\/>/.test(s)) s = s.replace(/\)\s*;/, "</>\n);");
  }

  // Remove lone brace after metadata → `}\nimport ...`
  s = s.replace(/\n}\s*\n(import\s+)/g, "\n$1");

  // Collapse too many closing divs if any
  s = s.replace(/(<\/div>\s*){3,}/g, "</div></div>\n");

  return s;
}

for (const rel of FILES){
  const fp = path.join(ROOT, rel);
  const src = read(fp);
  if(!src){ console.log(`skip(missing): ${rel}`); continue; }

  let out = src;

  if (rel.includes("irvine-mortgage-broker/page.tsx")) {
    out = balanceReturnAndExport(out);
  } else {
    out = commonNeighborhoodFixes(out);
  }

  if (out !== src){
    write(fp,out);
    console.log(`patched: ${rel}`);
  } else {
    console.log(`ok:      ${rel}`);
  }
}
console.log("patch-irvine-pass3 complete.");

