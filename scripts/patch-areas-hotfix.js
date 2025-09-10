const fs = require("fs");
const path = require("path");

function listPages(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listPages(p));
    else if (entry.isFile() && entry.name === 'page.tsx') out.push(p);
  }
  return out;
}

function fixFile(fp) {
  if (!fs.existsSync(fp)) return console.log(`(skip) ${fp} not found`);
  let src = fs.readFileSync(fp, "utf8");
  const before = src;

  // Normalize endings
  src = src.replace(/\r\n/g, "\n");

  // Ensure `const keywordPhrase = { ... };` ends with a semicolon.
  // (Non-greedy block to first closing brace.)
  src = src.replace(
    /(const\s+keywordPhrase\s*=\s*\{[\s\S]*?\})(?!\s*;)/,
    "$1;"
  );

  // Remove the specific bad token pattern after keywordPhrase: `/>;`
  // e.g., "} />;"  →  "};"
  src = src.replace(/\}\s*\/?>\s*;?/g, "};");

  // Remove literal rn / r`n / `r`n junk tokens that got left after the block.
  // Keep this conservative so we don't touch real content words.
  src = src.replace(/`r`n/g, "\n"); // convert backtick rn to real newline
  src = src.replace(/\b`?r`?n\b/g, ""); // handles leftover tokens
  src = src.replace(/\brn\b/g, "");

  // Drop any standalone '/>;' or '/>' lines left by broken inserts
  src = src.replace(/^\s*\/>;?\s*$/gm, "");

  // Remove malformed JSON-LD script blocks outside JSX (from <script ... to '/>')
  src = src.replace(/(^|\n)<script[\s\S]*?\/>\s*/g, "\n");

  // Extra safety: if someone left `};,` (dangling comma) normalize to `};`
  src = src.replace(/};\s*,/g, "};");

  // Also remove any isolated "};" left *before* an import/export (orphan terminators)
  src = src.replace(/\n\s*\};\s*\n(?=(import|export)\s)/g, "\n");

  // If keywordPhrase line is immediately followed by an export, reinsert a closing for the data object
  src = src.replace(/(keywordPhrase\s*:\s*[^\n]+)\n\s*(export\s+)/, '$1\n};\n\n$2');

  // Fix common broken return: ensure CityPageTemplate is self-closed
  src = src.replace(/(<CityPageTemplate[^>]*?)\s*;\s*$/m, '$1 />;');

  // Remove malformed JSON-LD script blocks that end with '}};' before a closing div
  src = src.replace(/<script[\s\S]*?}};\s*<\/div>/g, '</div>');
  // Remove malformed JSON-LD script blocks that end with '}};' at file end
  src = src.replace(/(^|\n)<script[\s\S]*?}};\s*/g, '\n');

  // Heal trailing object missing '}' before array close in common patterns
  // Case 1: neighborhood objects ending with description before '];'
  src = src.replace(/(description\s*:\s*['"][^'"\n]*['"][ \t]*)\n\s*\];/g, '$1\n    },\n  ];');
  // Case 1b: objects ending with 'icon: <...>' before '];'
  src = src.replace(/(icon\s*:\s*<[^>]+>\s*)\n\s*\];/g, '$1\n    },\n  ];');
  // Case 2: small fact objects ending with year before ']'
  src = src.replace(/(year\s*:\s*['"][^'"\n]*['"][ \t]*)\n\s*\]/g, '$1\n  },\n]');

  // Ensure arrays are properly terminated before next const:
  // if it's a property array, use '],' else leave top-level const arrays alone.
  // First pass previously converted "]\n const" to "];\n\nconst". Here, convert that case to "],\n\nconst" to fix property arrays.
  src = src.replace(/\];\s*\n\s*const\s/g, '],\n\nconst ');

  // Ensure object element before closing ']' has a trailing comma
  src = src.replace(/\}\s*\]/g, '},\n]');

  if (src !== before) {
    fs.writeFileSync(fp, src, "utf8");
    console.log(`fixed: ${fp}`);
  } else {
    console.log(`ok:    ${fp} (no change)`);
  }
}

function main() {
  const root = process.cwd();
  const areasDir = path.join(root, 'app', 'areas');
  const files = fs.existsSync(areasDir) ? listPages(areasDir) : [];
  for (const fp of files) fixFile(fp);
  console.log("Hot-fix complete.");
}
main();
