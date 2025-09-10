const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const files = [
  // City page
  "app/areas/irvine-mortgage-broker/page.tsx",
  // Neighborhoods
  "app/areas/irvine-neighborhoods/cypress-village-mortgage-broker/page.tsx",
  "app/areas/irvine-neighborhoods/northwood-mortgage-broker/page.tsx",
  "app/areas/irvine-neighborhoods/quail-hill-mortgage-broker/page.tsx",
  "app/areas/irvine-neighborhoods/turtle-rock-mortgage-broker/page.tsx",
];

function read(fp){ return fs.existsSync(fp) ? fs.readFileSync(fp, "utf8") : ""; }
function write(fp, s){ fs.writeFileSync(fp, s, "utf8"); }

// Replace patterns safely
function fixNeighborhoodBlocks(src) {
  let out = src.replace(/\r\n/g, "\n");

  // 1) features: [ ... ] ];  →  features: [ ... ]\n},\n];
  out = out.replace(
    /(features\s*:\s*\[[\s\S]*?\])\s*];/g,
    (_, inside) => `${inside}\n},\n];`
  );

  // 2) Stray semicolon inside JSX before next component:
  //    content={northwoodData};<EnhancedLocalSchema ... />
  out = out.replace(
    /(content=\{[A-Za-z0-9_]+\})\s*;\s*(<EnhancedLocalSchema\b)/g,
    "$1 />\n$2"
  );

  // 3) Stray component end like `/>;` → `/>`
  out = out.replace(/\/>\s*;/g, "/>"
  );

  // 4) Common orphan tokens after edits
  out = out.replace(/\b`?r`?n\b/g, "");
  out = out.replace(/\brn\b/g, "");

  // 5) Extra trailing commas after object close
  out = out.replace(/};\s*,\s*\n(\s*\]|\/\/)/g, "};\n$1");

  // 6) Make sure major arrays/objects end with proper closers when obvious:
  //    propertyTypes = [ ...  → ensure final `];`
  out = out.replace(
    /(const\s+propertyTypes\s*=\s*\[[\s\S]*?)(\n(?:const|export|return|\)<|<\/|$))/g,
    (m, arr, tail) => (/\];\s*$/.test(arr) ? m : `${arr}\n];${tail}`)
  );
  out = out.replace(
    /(const\s+loanPrograms\s*=\s*\[[\s\S]*?)(\n(?:const|export|return|\)<|<\/|$))/g,
    (m, arr, tail) => (/\];\s*$/.test(arr) ? m : `${arr}\n];${tail}`)
  );

  return out;
}

// Heuristic balance for the Irvine city page tail: ensure a single root and clean ending.
function fixIrvineCityTail(src) {
  let s = src.replace(/\r\n/g, "\n");

  // 1) Ensure there is a single fragment root around return (if not, wrap common case)
  //    If return starts without a fragment, try to add one conservatively.
  s = s.replace(/return\s*\(\s*\n([^<\s])/m, "return (\n<>\n$1");
  // Close fragment before the final );
  s = s.replace(/\)\s*;\s*\}\s*export\s+default/m, "\n</>\n);\n}\nexport default");

  // 2) Remove duplicated closing tags leftover (two consecutive </div></div> → keep one pair)
  s = s.replace(/(<\/div>\s*){3,}/g, "</div></div>\n");

  // 3) Remove stray `});` at EOF → `);`
  s = s.replace(/\)\s*\}\s*;\s*$/m, ");");

  // 4) Normalize any `/>;` endings
  s = s.replace(/\/>\s*;\s*$/m, "/>"
  );

  return s;
}

function processFile(rel) {
  const fp = path.join(ROOT, rel);
  let src = read(fp);
  if (!src) { console.log(`skip (missing): ${rel}`); return; }

  let out = src;

  // Apply neighborhood-safe block fixes
  out = fixNeighborhoodBlocks(out);

  // Apply city-tail heuristic only to the city page
  if (rel.includes("irvine-mortgage-broker/page.tsx")) {
    out = fixIrvineCityTail(out);
  }

  if (out !== src) {
    write(fp, out);
    console.log(`patched: ${rel}`);
  } else {
    console.log(`ok:      ${rel}`);
  }
}

(function main(){
  files.forEach(processFile);
  console.log("Irvine patch complete.");
})();

