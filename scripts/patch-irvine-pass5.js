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

function rd(p){ return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : ""; }
function wr(p,s){ fs.writeFileSync(p, s, "utf8"); }

function stripTopLevelClosingFragment(src){
  // Remove any lone `</>` that appears before the first `export default`
  const idx = src.search(/^\s*export\s+default/m);
  if (idx < 0) return src;
  const head = src.slice(0, idx);
  const tail = src.slice(idx);
  const cleanedHead = head.replace(/^\s*<\/>\s*$(\r?\n)?/mg, "");
  return cleanedHead + tail;
}

function fixNeighborhoodArrayEndings(src){
  let s = src;

  // Ensure last object in array has comma before closing bracket: `}\n]` -> `},\n]`
  s = s.replace(/(\}\s*\r?\n)\]/g, "},\n]");

  // Fix pattern: `features: [ ... ] ];` -> close object, then array
  s = s.replace(
    /(features\s*:\s*\[[\s\S]*?\])\s*];/g,
    (_, inside) => `${inside}\n},\n];`
  );

  // Fix pattern: `features: [ ... ] ]` (missing object close & semicolon)
  s = s.replace(
    /(features\s*:\s*\[[\s\S]*?\])\s*\]\s*([\r\n]+)(?=(const|export\s+default|<\/))/g,
    (_, inside, nl) => `${inside}\n},\n]${nl}`
  );

  // Enforce `];` when a const array is immediately followed by `const` or `export default`
  s = s.replace(
    /(\]\s*)(\r?\n)(?=(const\s+|export\s+default))/g,
    (m, bracket, nl) => (/\];\s*$/.test(m) ? m : `];${nl}`)
  );

  return s;
}

function removeLiteralRnArtifacts(s){
  return s.replace(/`?r`?n/g, "").replace(/\brn\b/g, "");
}

function fixSelfClosingNoise(s){
  // Replace "/>;" with "/>"
  return s.replace(/\/>\s*;/g, "/>"
  );
}

function fixNorthwoodSemicolon(s){
  // content={northwoodData};<EnhancedLocalSchema ... -> content={northwoodData} />\n<EnhancedLocalSchema ...
  return s.replace(
    /(content=\{northwoodData\})\s*;\s*(<EnhancedLocalSchema\b)/,
    "$1 />\n$2"
  );
}

for (const rel of FILES){
  const fp = path.join(ROOT, rel);
  let src = rd(fp);
  if (!src) { console.log(`skip: ${rel} (not found)`); continue; }

  let out = src;

  if (rel.endsWith("irvine-mortgage-broker/page.tsx")) {
    out = stripTopLevelClosingFragment(out);
  } else {
    out = fixNeighborhoodArrayEndings(out);
    out = removeLiteralRnArtifacts(out);
    out = fixSelfClosingNoise(out);
    if (rel.includes("northwood-mortgage-broker")) {
      out = fixNorthwoodSemicolon(out);
    }
  }

  if (out !== src) {
    wr(fp, out);
    console.log(`patched: ${rel}`);
  } else {
    console.log(`ok:      ${rel}`);
  }
}
console.log("patch-irvine-pass5 complete.");

