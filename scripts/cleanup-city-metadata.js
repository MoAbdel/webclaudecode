// scripts/cleanup-city-metadata.js
// Idempotent cleanup for city pages: removes legacy metadata/helpers and fixes dangling fragments.

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const AREAS_DIR = path.join(ROOT, 'app', 'areas');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}
function write(file, text) {
  fs.writeFileSync(file, text, 'utf8');
}
function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.isFile() && entry.name === 'page.tsx') yield p;
  }
}

function stripBlocks(src) {
  let out = src;

  // Skip client components entirely
  if (/['"]use client['"]/.test(out)) return out;

  // Remove imports of generateCityMetadata (anywhere)
  out = out.replace(/^\s*import\s+{?\s*generateCityMetadata\s*}?\s+from\s+['"][^'"]+['"]\s*;\s*$/gm, '');

  // Remove export const metadata = generateCityMetadata(...)
  out = out.replace(
    /export\s+const\s+metadata\s*:?\s*Metadata?\s*=\s*generateCityMetadata\s*\([^)]*\)\s*;\s*/gm,
    ''
  );

  // Remove typed/untyped export const metadata = { ... }
  out = out.replace(
    /export\s+const\s+metadata\s*:?\s*Metadata?\s*=\s*\{[\s\S]*?\}\s*;\s*/gm,
    ''
  );
  out = out.replace(
    /export\s+const\s+metadata\s*=\s*\{[\s\S]*?\}\s*;\s*/gm,
    ''
  );

  // Remove any old generateMetadata blocks (keep the last one afterwards)
  out = out.replace(
    /export\s+async\s+function\s+generateMetadata\s*\([\s\S]*?\)\s*\{[\s\S]*?\}\s*/gm,
    ''
  );

  // Remove orphan "openGraph: { ... }" fragments left behind (line or block level)
  out = out.replace(/^\s*openGraph\s*:\s*\{[\s\S]*?\}\s*,?\s*$/gm, '');

  // Remove lone '};' and dangling commas on their own lines
  out = out.replace(/^\s*};\s*$/gm, '');
  out = out.replace(/^\s*,\s*$/gm, '');

  // Collapse multiple blank lines
  out = out.replace(/\n{3,}/g, '\n\n');

  return out.trimEnd() + '\n';
}

function ensureSingleGenerateMetadata(src) {
  // If there are duplicates from previous injections, keep the last block
  const matches = [...src.matchAll(/export\s+async\s+function\s+generateMetadata\s*\(/g)];
  if (matches.length <= 1) return src;

  // Naive resolution: remove all but last occurrence
  // Find all blocks; keep the last
  let out = src;
  // Remove all blocks
  out = out.replace(/export\s+async\s+function\s+generateMetadata\s*\([\s\S]*?\)\s*\{[\s\S]*?\}\s*/gm, '');
  // Append the last block from the original
  const lastBlock = src.match(/export\s+async\s+function\s+generateMetadata\s*\([\s\S]*?\)\s*\{[\s\S]*?\}\s*$/m);
  if (lastBlock) out = out + '\n' + lastBlock[0] + '\n';
  return out;
}

(function main() {
  let changed = 0;
  for (const file of walk(AREAS_DIR)) {
    try {
      const before = read(file);
      let after = stripBlocks(before);
      after = ensureSingleGenerateMetadata(after);

      if (after !== before) {
        write(file, after);
        changed++;
      }
    } catch (e) {
      console.error('Cleanup error in', file, e.message);
    }
  }
  console.log(`City cleanup complete. Files updated: ${changed}`);
})();