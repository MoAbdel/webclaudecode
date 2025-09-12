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

function fixAllSyntaxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix missing comma before openGraph
  content = content.replace(/description:\s*'([^']*)'openGraph:/g, "description: '$1',\n  openGraph:");
  
  // Fix missing comma after closing } before alternates
  content = content.replace(/}\s*alternates:/g, "},\n  alternates:");
  
  // Fix missing comma after closing } before other properties
  content = content.replace(/}(\s*)([a-zA-Z_]+):/g, "},\n$1$2:");
  
  // Remove /page.tsx from canonical URLs
  content = content.replace(/canonical:\s*'([^']+)\/page\.tsx'/g, "canonical: '$1'");
  
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
    if (fixAllSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed syntax errors in ${fixedCount} files.`);
