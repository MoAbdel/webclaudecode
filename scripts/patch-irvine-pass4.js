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

function read(p){ return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : ""; }
function write(p,s){ fs.writeFileSync(p, s, "utf8"); }

function fixLoneClosingFragmentBeforeExport(s){
  // Remove a stray top-level `</>` just before `export default`
  return s.replace(/^\s*<\/>\s*\r?\n\s*(?=export\s+default)/m, "");
}

function ensureReturnFragmentBalanced(s){
  // If export default component has return (...) without a fragment,
  // add <> ... </> guards. Be conservative.
  const expIdx = s.search(/export\s+default\s+function|export\s+default\s*\(/);
  if (expIdx === -1) return s;

  // Look between export default and the next `return (`
  const before = s.slice(0, expIdx);
  const after = s.slice(expIdx);

  // Add opening fragment right after `return (`
  let out = after.replace(/return\s*\(\s*\r?\n(?!<)/, "return (\n<> \n");
  // Ensure there's a closing `</>` before the matching `);`
  // Insert just before the final `);` that closes the return (greedy last occurrence before component end)
  out = out.replace(/(\n\)\s*;)(\s*\n\})/, "\n</>\n);$2");
  return before + out;
}

function fixNeighborhoodArrayEndings(s){
  let t = s;

  // Case 1:  ... features: [ ... ] ];
  t = t.replace(
    /(features\s*:\s*\[[\s\S]*?\])\s*];/g,
    (_, inside) => `${inside}\n},\n];`
  );

  // Case 2:  ... features: [ ... ] ]  (missing object close & semicolon)
  t = t.replace(
    /(features\s*:\s*\[[\s\S]*?\])\s*\]\s*(\r?\n\s*\]|$)/g,
    (_, inside, tail) => `${inside}\n},\n]${tail.replace(/^\s*\]/, "]")}`
  );

  // Case 3: final object inside array missing a comma before the closing bracket
  // Turn `}\n]` into `},\n]` when inside a const X = [ ... ];
  t = t.replace(/(\}\s*\r?\n)\]/g, "},\n]");

  return t;
}

function removeLiteralRnArtifacts(s){
  return s
    .replace(/\b`?r`?n\b/g, "")
    .replace(/\brn\b/g, "");
}

function fixSelfClosingNoise(s){
  // Replace "/>;" with "/>"
  return s.replace(/\/>\s*;/g, "/>"
  );
}

function fixNorthwoodSemicolon(s){
  // content={northwoodData};<EnhancedLocalSchema ...  →  content={northwoodData} />\n<EnhancedLocalSchema ...
  return s.replace(
    /(content=\{northwoodData\})\s*;\s*(<EnhancedLocalSchema\b)/,
    "$1 />\n$2"
  );
}

for (const rel of FILES){
  const fp = path.join(ROOT, rel);
  const src = read(fp);
  if (!src) { console.log(`skip(missing): ${rel}`); continue; }

  let out = src;

  if (rel.endsWith("app/areas/irvine-mortgage-broker/page.tsx")) {
    out = fixLoneClosingFragmentBeforeExport(out);
    out = ensureReturnFragmentBalanced(out);
  } else {
    out = fixNeighborhoodArrayEndings(out);
    out = removeLiteralRnArtifacts(out);
    out = fixSelfClosingNoise(out);
    if (rel.includes("northwood-mortgage-broker")) {
      out = fixNorthwoodSemicolon(out);
    }
  }

  if (out !== src) {
    write(fp, out);
    console.log(`patched: ${rel}`);
  } else {
    console.log(`ok:      ${rel}`);
  }
}
console.log("patch-irvine-pass4 complete.");
