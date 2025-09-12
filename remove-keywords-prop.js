const fs = require('fs');
const path = require('path');

const files = [
  'app/areas/irvine-neighborhoods/cypress-village-mortgage-broker/page.tsx',
  'app/areas/irvine-neighborhoods/northwood-mortgage-broker/page.tsx',
  'app/areas/irvine-neighborhoods/quail-hill-mortgage-broker/page.tsx',
  'app/areas/irvine-neighborhoods/turtle-rock-mortgage-broker/page.tsx',
  'app/areas/irvine-neighborhoods/university-park-mortgage-broker/page.tsx',
  'app/areas/irvine-neighborhoods/woodbridge-mortgage-broker/page.tsx',
  'app/areas/irvine-unified-school-district-mortgage-broker/page.tsx',
  'app/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker/page.tsx',
  'app/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker/page.tsx',
  'app/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker/page.tsx',
  'app/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker/page.tsx',
  'app/guides/spring-2025-home-buying-guide/page.tsx',
  'app/guides/summer-2025-market-guide/page.tsx',
  'app/loan-programs/fha-loans-irvine/page.tsx',
  'app/luxury-markets/golf-course-homes-mortgage-broker/page.tsx',
  'app/luxury-markets/ultra-luxury-estates-mortgage-broker/page.tsx',
  'app/luxury-markets/waterfront-homes-mortgage-broker/page.tsx',
  'app/tools/mortgage-calculator/page.tsx',
  'app/zip-codes/92602-irvine-mortgage-broker/page.tsx',
  'app/zip-codes/92614-irvine-mortgage-broker/page.tsx',
  'app/zip-codes/92625-corona-del-mar-mortgage-broker/page.tsx',
  'app/zip-codes/92660-newport-beach-mortgage-broker/page.tsx'
];

let fixedCount = 0;

for (const file of files) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`File not found: ${file}`);
      continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Remove keywords prop line (including multi-line arrays)
    content = content.replace(/\s*keywords=\{[^}]*\}[,]?/g, '');
    
    // Clean up any double commas or trailing commas before closing props
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/,(\s*)\/>/g, '$1/>');
    content = content.replace(/,(\s*)>/g, '$1>');

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Removed keywords prop from: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nRemoved keywords prop from ${fixedCount} files.`);
