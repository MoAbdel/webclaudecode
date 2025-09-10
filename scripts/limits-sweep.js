/* eslint-disable */
const fs = require("fs");
const path = require("path");

function findFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) findFiles(p, acc);
    else if (/\.(tsx?|mdx?)$/.test(f)) acc.push(p);
  }
  return acc;
}
const files = findFiles("app");
let changed = 0;

files.forEach((file) => {
  const src = fs.readFileSync(file, "utf8");
  let out = src;

  // FHA 2025
  out = out.replace(/\$1,0(8|89),?300/g, "$1,089,300").replace(/\$1,089,3(0|00)/g, "$1,089,300");

  // Conforming 2025
  out = out.replace(/\$1,2(0|09),?750/g, "$1,209,750").replace(/\$1,209,7(0|50)/g, "$1,209,750");

  // Jumbo definition
  out = out.replace(/(above|over)\s+\$1,209,750/gi, "above $1,209,750");
  out = out.replace(/>\s*\$1,209,750/g, ">$1,209,750");

  if (out !== src) {
    fs.writeFileSync(file, out, "utf8");
    changed++;
    console.log("limits normalized:", file);
  }
});
console.log(`Done. Files changed: ${changed}`);

