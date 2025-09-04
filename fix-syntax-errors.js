const fs = require('fs');
const path = require('path');

// Find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  
  function walkDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath.replace(/\\/g, '/'));
      }
    }
  }
  
  walkDir(dir);
  return files;
}

function fixSyntaxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = false;
  
  // Fix 1: Remove extra comma and semicolon in generateCityMetadata lines
  const badPattern1 = /generateCityMetadata\([^)]+\);,/g;
  if (badPattern1.test(content)) {
    content = content.replace(badPattern1, match => match.replace(');,', ');'));
    fixed = true;
    console.log(`Fixed comma/semicolon in: ${filePath}`);
  }
  
  // Fix 2: Remove standalone closing braces after metadata
  const badPattern2 = /export const metadata = generateCityMetadata\([^)]+\);\n};/g;
  if (badPattern2.test(content)) {
    content = content.replace(badPattern2, match => match.replace('\n};', ''));
    fixed = true;
    console.log(`Removed standalone brace in: ${filePath}`);
  }
  
  // Fix 3: Fix 'app/' paths to '/' paths in generateCityMetadata
  const badPattern3 = /generateCityMetadata\('([^']+)', 'app([^']+)', '([^']+)'\)/g;
  if (badPattern3.test(content)) {
    content = content.replace(badPattern3, "generateCityMetadata('$1', '$2', '$3')");
    fixed = true;
    console.log(`Fixed app/ path in: ${filePath}`);
  }
  
  // Fix 4: Fix extra });); pattern  
  const badPattern4 = /}\);\s*\);/g;
  if (badPattern4.test(content)) {
    content = content.replace(badPattern4, '});');
    fixed = true;
    console.log(`Fixed extra closing in: ${filePath}`);
  }
  
  // Fix 5: Fix });, pattern
  const badPattern5 = /}\);,\s*\n};/g;
  if (badPattern5.test(content)) {
    content = content.replace(badPattern5, '});');
    fixed = true;
    console.log(`Fixed });, pattern in: ${filePath}`);
  }
  
  // Fix 6: Fix standalone };, pattern
  const badPattern6 = /}\);,[\s\n]*}/g;
  if (badPattern6.test(content)) {
    content = content.replace(badPattern6, '});');
    fixed = true;
    console.log(`Fixed standalone };, pattern in: ${filePath}`);
  }
  
  if (fixed) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

console.log('🔧 Starting syntax error fixes...\n');

const pageFiles = findPageFiles('./app');
let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    if (fixSyntaxErrors(filePath)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

console.log(`\n✅ Syntax fixes complete!`);
console.log(`🔧 Fixed ${fixedCount} out of ${pageFiles.length} files`);