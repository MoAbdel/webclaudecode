// scripts/strip-bom.js
const fs = require('fs');
const p = 'package.json';
let buf = fs.readFileSync(p);
const UTF8_BOM = Buffer.from([0xEF, 0xBB, 0xBF]);
if (buf.slice(0, 3).equals(UTF8_BOM)) {
  buf = buf.slice(3);
  fs.writeFileSync(p, buf);
  console.log('Removed BOM from package.json');
} else {
  console.log('No BOM found in package.json');
}