const fs = require('fs');
const path = require('path');

function findAllPageTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findAllPageTsxFiles(fullPath, files);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixSyntaxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix pattern: Missing comma before openGraph (with single quotes)
  content = content.replace(/description:\s*'([^']*)'openGraph:/g, "description: '$1',\n  openGraph:");
  
  // Fix pattern: Missing comma after closing } before alternates
  content = content.replace(/}\s*alternates:/g, "},\n  alternates:");
  
  // Fix pattern: Duplicated metadata declarations
  content = content.replace(/export const metadata: Metadata = \{[\s\S]*?export const metadata: Metadata = \{/g, 'export const metadata: Metadata = {');
  
  // Fix unterminated strings with 'export const metadata'
  content = content.replace(/description:\s*'([^']*)'export const metadata: Metadata = \{/g, "description: '$1',\n  alternates: {\n    canonical: 'https://www.mothebroker.com',\n  },\n};\n\nexport const metadata2: Metadata = {");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed syntax errors in: ${filePath}`);
    return true;
  }
  
  return false;
}

// Find and fix all page.tsx files
const appDir = path.join(__dirname, 'app');
const files = findAllPageTsxFiles(appDir);

console.log(`Found ${files.length} page.tsx files to check...`);

let fixedCount = 0;

for (const file of files) {
  try {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed syntax errors in ${fixedCount} files.`);
