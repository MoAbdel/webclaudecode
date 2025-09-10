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

function read(p){return fs.existsSync(p)?fs.readFileSync(p,"utf8"):"";}
function write(p,s){fs.writeFileSync(p,s,"utf8");}

function fixCommon(src){
  let s = src.replace(/\r\n/g,"\n");

  // --- Array/object closers (the [ ... ] ]; → [ ... ]\n},\n]; issue) ---
  s = s.replace(
    /(features\s*:\s*\[[\s\S]*?\])\s*];/g,
    (_,inside)=> `${inside}\n},\n];`
  );

  // Ensure property arrays end with "];"
  s = s.replace(
    /(const\s+propertyTypes\s*=\s*\[[\s\S]*?)(\n(?:const|export|return|<\/|$))/g,
    (m,arr,tail)=> /\];\s*$/.test(arr) ? m : `${arr}\n];${tail}`
  );
  s = s.replace(
    /(const\s+loanPrograms\s*=\s*\[[\s\S]*?)(\n(?:const|export|return|<\/|$))/g,
    (m,arr,tail)=> /\];\s*$/.test(arr) ? m : `${arr}\n];${tail}`
  );

  // Remove literal rn artifacts
  s = s.replace(/\b`?r`?n\b/g,"").replace(/\brn\b/g,"");

  // Stray "/>;" → "/>"
  s = s.replace(/\/>\s*;/g,"/>");

  // Northwood: "content={northwoodData};<EnhancedLocalSchema" → close the tag then new line
  s = s.replace(
    /(content=\{[A-Za-z0-9_]+\})\s*;\s*(<EnhancedLocalSchema\b)/g,
    "$1 />\n$2"
  );

  // Stray lone brace directly after metadata blocks
  s = s.replace(/\n}\s*\n(import\s+)/g, "\n$1");

  // If we see "keywordPhrase: '..."\n/>;" (rates pages), normalize
  s = s.replace(/(keywordPhrase\s*:\s*['"`][\s\S]*?['"`])\s*\/>\n+\s*;/g, "$1");

  return s;
}

function balanceIrvineCityTail(s) {
  // Heuristic: wrap return body in a fragment and ensure we close it before export default.
  s = s.replace(/return\s*\(\s*\n([^<\s])/m, "return (\n<>\n$1");
  s = s.replace(/\)\s*;\s*\}\s*export\s+default/m, "\n</>\n);\n}\nexport default");

  // Reduce triple </div> sequences to a sane pair
  s = s.replace(/(<\/div>\s*){3,}/g, "</div></div>\n");

  // If file ends without closing the component, append a safe closure
  if (!/export\s+default[\s\S]*\}\s*$/.test(s)) {
    s = s.replace(/export\s+default[\s\S]*$/, (m)=>"}\n"+m);
  }
  return s;
}

for (const rel of FILES){
  const fp = path.join(ROOT, rel);
  const src = read(fp);
  if(!src){ console.log(`skip(missing): ${rel}`); continue; }

  let out = fixCommon(src);

  if (rel.includes("app/areas/irvine-mortgage-broker/page.tsx")) {
    out = balanceIrvineCityTail(out);
  }

  if (out !== src){
    write(fp,out);
    console.log(`patched: ${rel}`);
  } else {
    console.log(`ok:      ${rel}`);
  }
}
console.log("patch-irvine-pass2 complete.");

