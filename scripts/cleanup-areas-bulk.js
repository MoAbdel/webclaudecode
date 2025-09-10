// scripts/cleanup-areas-bulk.js
// Bulk cleanup for app/areas/**/page.tsx to repair legacy fragments and syntax.
// Idempotent: safe to run multiple times.

const fs = require('fs');
const path = require('path');

const AREAS_DIR = path.join(process.cwd(), 'app', 'areas');

function listPages(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listPages(p));
    else if (entry.isFile() && entry.name === 'page.tsx') out.push(p);
  }
  return out;
}

function stripBOM(s) {
  return s.replace(/^\uFEFF/, '');
}

function cleanupFile(file) {
  let src = fs.readFileSync(file, 'utf8');
  const before = src;

  // Normalize
  src = stripBOM(src);
  src = src.replace(/\r\n/g, '\n');

  // 1) Remove literal "rn" artifacts (only when they appear as standalone tokens or glued to punctuation)
  //    Keep this conservative to avoid killing legitimate 'return'.
  src = src
    .replace(/\brn\b/g, '')                    // standalone rn
    .replace(/(\W)rn(\W)/g, '$1$2');           // rn between punctuation/spaces

  // 2) Remove top-level JSON-LD <script ...> blocks that are OUTSIDE JSX return.
  //    (We re-inject LocalBusiness later with our enforcer.)
  //    Rough heuristic: any <script type="application/ld+json"...> not inside return JSX.
  //    We'll conservatively remove ALL top-level script tags.
  src = src.replace(
    /(^|\n)<script[^>]*type=["']application\/ld\+json["'][\s\S]*?<\/script>\s*/g,
    '\n'
  );

  // 3) Remove orphan '}' sitting alone on a line before imports (common leftover)
  src = src.replace(/^\}\s*\n(?=import\s)/gm, '');

  // 4) Remove *typed* or *untyped* `export const metadata = ...` blocks entirely.
  //    Handles:
  //    export const metadata: Metadata = {...}
  //    export const metadata = {...}
  //    export const metadata: Metadata = generateCityMetadata(...);
  //    export const metadata = generateCityMetadata(...);
  src = src.replace(
    /export\s+const\s+metadata\s*:\s*Metadata\s*=\s*[\s\S]*?(;\s*|\}\s*;?)/g,
    ''
  );
  src = src.replace(
    /export\s+const\s+metadata\s*=\s*[\s\S]*?(;\s*|\}\s*;?)/g,
    ''
  );

  // 5) Ensure semicolons after common const objects that frequently missed them.
  //    e.g., const keywordPhrase = { ... };
  //          const cityData = { ... };
  const needSemiAfter = [
    'keywordPhrase',
    'cityData',
    'neighborhoods',
    'loanPrograms',
    'pageData'
  ];
  for (const name of needSemiAfter) {
    // If a closing brace `}` is followed by optional whitespace and NOT a semicolon, add it.
    const re = new RegExp(`(const\\s+${name}\\s*=\\s*\\{[\\s\\S]*?\\})(?!\\s*;)`, 'g');
    src = src.replace(re, '$1;');
  }

  // 6) Remove stray leading commas left behind on their own line.
  src = src.replace(/^\s*,\s*$/gm, '');

  // 7) Remove dangling '};' that appear before an import or export (leftover from partial deletes).
  //    If there's an isolated '};' with blank lines around it, drop it.
  src = src.replace(/\n\s*\};\s*\n(?=(import|export)\s)/g, '\n');

  // 8) If a JSON-ish fragment like "openGraph: { ... }" survived at top-level, drop that line chunk.
  src = src.replace(/^\s*openGraph\s*:\s*\{[\s\S]*?\}\s*,?\s*$/gm, '');

  // 9) Ensure file ends with newline
  if (!src.endsWith('\n')) src += '\n';

  if (src !== before) {
    fs.writeFileSync(file, src, 'utf8');
    return true;
  }
  return false;
}

function main() {
  if (!fs.existsSync(AREAS_DIR)) {
    console.error('No app/areas directory found.');
    process.exit(0);
  }
  const files = listPages(AREAS_DIR);
  let changed = 0;
  for (const f of files) {
    try {
      if (cleanupFile(f)) changed++;
    } catch (e) {
      console.error(`Error cleaning ${f}:`, e.message);
    }
  }
  console.log(`Area cleanup complete. Files updated: ${changed}/${files.length}`);
}

main();

