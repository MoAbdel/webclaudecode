const fs = require('fs');
const path = require('path');

// Find all page.tsx files with bad imports
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

function fixImportIssues(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = false;
  
  // Fix malformed imports like:
  // import { 
  // import { generatePageMetadata } from '@/lib/canonical';Button } from '@/components/ui/Button';
  const badImportPattern = /import\s*{\s*\nimport\s*{\s*generatePageMetadata\s*}\s*from\s*'@\/lib\/canonical';([^}]+)}\s*from\s*'@\/components\/ui\/(\w+)';/g;
  
  if (badImportPattern.test(content)) {
    content = content.replace(badImportPattern, (match, importContent, componentName) => {
      return `import { ${importContent.trim()} } from '@/components/ui/${componentName}';\nimport { generatePageMetadata } from '@/lib/canonical';`;
    });
    fixed = true;
    console.log(`Fixed malformed import in: ${filePath}`);
  }
  
  if (fixed) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

console.log('🔧 Starting import fixes...\n');

const pageFiles = findPageFiles('./app');
let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    if (fixImportIssues(filePath)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

console.log(`\n✅ Import fixes complete!`);
console.log(`🔧 Fixed ${fixedCount} out of ${pageFiles.length} files`);