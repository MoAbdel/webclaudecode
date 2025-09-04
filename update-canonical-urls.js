const fs = require('fs');
const path = require('path');

const BASE_DIR = './app';

// Define page types and their patterns
const PAGE_PATTERNS = {
  areas: {
    pattern: /app\/areas\/([^\/]+)\/page\.tsx$/,
    cityBroker: /(.+)-mortgage-broker$/,
    cityRates: /(.+)-mortgage-rates$/,
    neighborhoods: /app\/areas\/([^\/]+)\/neighborhoods\/([^\/]+)\/page\.tsx$/,
  },
  loanPrograms: {
    pattern: /app\/loan-programs\/([^\/]+)\/page\.tsx$/,
  },
  guides: {
    pattern: /app\/guides\/([^\/]+)\/page\.tsx$/,
  },
  calculators: {
    pattern: /app\/calculator\/([^\/]+)\/page\.tsx$/,
  },
  resources: {
    pattern: /app\/resources\/([^\/]+)\/page\.tsx$/,
  },
  zipCodes: {
    pattern: /app\/zip-codes\/([^\/]+)\/page\.tsx$/,
  },
  tools: {
    pattern: /app\/tools\/([^\/]+)\/page\.tsx$/,
  },
  luxuryMarkets: {
    pattern: /app\/luxury-markets\/([^\/]+)\/page\.tsx$/,
  },
  neighborhoodGuide: {
    pattern: /app\/neighborhood-guide\/([^\/]+)\/page\.tsx$/,
  },
};

// Helper functions
function capitalizeWords(str) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

function getCityFromPath(filePath) {
  const areaMatch = filePath.match(PAGE_PATTERNS.areas.pattern);
  if (!areaMatch) return null;
  
  const segment = areaMatch[1];
  const brokerMatch = segment.match(PAGE_PATTERNS.areas.cityBroker);
  const ratesMatch = segment.match(PAGE_PATTERNS.areas.cityRates);
  
  if (brokerMatch) {
    return { city: capitalizeWords(brokerMatch[1]), type: 'broker' };
  } else if (ratesMatch) {
    return { city: capitalizeWords(ratesMatch[1]), type: 'rates' };
  }
  
  return { city: capitalizeWords(segment), type: 'broker' };
}

function getMetadataReplacement(filePath, relativePath) {
  // Home page already updated
  if (relativePath === '/') return null;
  
  // Loan programs
  const loanMatch = filePath.match(PAGE_PATTERNS.loanPrograms.pattern);
  if (loanMatch) {
    const program = capitalizeWords(loanMatch[1]);
    return {
      import: `import { generatePageMetadata } from '@/lib/canonical';`,
      metadata: `export const metadata = generatePageMetadata({
  title: '${program} | Mo Abdel - Orange County Mortgage Broker',
  description: '${program} in Orange County with competitive rates and expert guidance. Licensed mortgage broker NMLS #1426884.',
  pathname: '${relativePath}',
  keywords: '${program.toLowerCase()} Orange County, Orange County mortgage broker, home loans, NMLS 1426884',
});`
    };
  }
  
  // Areas/Cities
  const cityInfo = getCityFromPath(filePath);
  if (cityInfo) {
    return {
      import: `import { generateCityMetadata } from '@/lib/canonical';`,
      metadata: `export const metadata = generateCityMetadata('${cityInfo.city}', '${relativePath}', '${cityInfo.type}');`
    };
  }
  
  // Guides
  const guideMatch = filePath.match(PAGE_PATTERNS.guides.pattern);
  if (guideMatch) {
    const guide = capitalizeWords(guideMatch[1]);
    return {
      import: `import { generatePageMetadata } from '@/lib/canonical';`,
      metadata: `export const metadata = generatePageMetadata({
  title: '${guide} | Mo Abdel - Orange County Mortgage Broker',
  description: 'Complete guide to ${guide.toLowerCase()} in Orange County. Expert insights from licensed mortgage broker Mo Abdel, NMLS #1426884.',
  pathname: '${relativePath}',
  keywords: '${guide.toLowerCase()}, Orange County mortgage guide, home buying guide',
});`
    };
  }
  
  // Calculators
  const calcMatch = filePath.match(PAGE_PATTERNS.calculators.pattern);
  if (calcMatch) {
    const calc = capitalizeWords(calcMatch[1]);
    return {
      import: `import { generatePageMetadata } from '@/lib/canonical';`,
      metadata: `export const metadata = generatePageMetadata({
  title: '${calc} Calculator | Orange County Mortgage Tools',
  description: 'Free ${calc.toLowerCase()} calculator for Orange County home buyers. Get accurate estimates from licensed mortgage broker Mo Abdel, NMLS #1426884.',
  pathname: '${relativePath}',
  keywords: '${calc.toLowerCase()} calculator, Orange County mortgage calculator, mortgage tools',
});`
    };
  }
  
  // Resources
  const resourceMatch = filePath.match(PAGE_PATTERNS.resources.pattern);
  if (resourceMatch) {
    const resource = capitalizeWords(resourceMatch[1]);
    return {
      import: `import { generatePageMetadata } from '@/lib/canonical';`,
      metadata: `export const metadata = generatePageMetadata({
  title: '${resource} | Orange County Mortgage Resources',
  description: '${resource} for Orange County homebuyers and homeowners. Professional guidance from licensed mortgage broker Mo Abdel, NMLS #1426884.',
  pathname: '${relativePath}',
  keywords: '${resource.toLowerCase()}, Orange County mortgage resources, home buying resources',
});`
    };
  }
  
  // Default fallback
  const pageName = path.basename(path.dirname(filePath));
  const title = capitalizeWords(pageName);
  return {
    import: `import { generatePageMetadata } from '@/lib/canonical';`,
    metadata: `export const metadata = generatePageMetadata({
  title: '${title} | Mo Abdel - Orange County Mortgage Broker',
  description: '${title} services in Orange County. Professional mortgage guidance from licensed broker Mo Abdel, NMLS #1426884.',
  pathname: '${relativePath}',
});`
  };
}

function updatePageFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = filePath.replace(/^\.\/app/, '').replace(/\/page\.tsx$/, '') || '/';
  
  // Skip if already using generatePageMetadata or generateCityMetadata
  if (content.includes('generatePageMetadata') || content.includes('generateCityMetadata')) {
    console.log(`✓ Already updated: ${relativePath}`);
    return false;
  }
  
  // Skip if no metadata export found
  if (!content.includes('export const metadata')) {
    console.log(`⚠ No metadata found: ${relativePath}`);
    return false;
  }
  
  const replacement = getMetadataReplacement(filePath, relativePath);
  if (!replacement) {
    console.log(`⚠ No replacement needed: ${relativePath}`);
    return false;
  }
  
  let updatedContent = content;
  
  // Add import if not already present
  if (!updatedContent.includes(replacement.import.split("'")[1])) {
    // Find the last import statement
    const lastImportMatch = updatedContent.match(/^import.*$/gm);
    if (lastImportMatch) {
      const lastImport = lastImportMatch[lastImportMatch.length - 1];
      updatedContent = updatedContent.replace(
        lastImport,
        lastImport + '\n' + replacement.import
      );
    }
  }
  
  // Replace metadata export
  const metadataRegex = /export const metadata[^}]+}/s;
  const metadataWithTypeRegex = /export const metadata:\s*Metadata\s*=\s*{[^}]+}/s;
  
  if (metadataWithTypeRegex.test(updatedContent)) {
    updatedContent = updatedContent.replace(metadataWithTypeRegex, replacement.metadata);
  } else if (metadataRegex.test(updatedContent)) {
    updatedContent = updatedContent.replace(metadataRegex, replacement.metadata);
  }
  
  // Remove canonical URL if it exists
  updatedContent = updatedContent.replace(
    /alternates:\s*{\s*canonical:\s*['""][^'"]*['""],?\s*},?/g,
    ''
  );
  
  fs.writeFileSync(filePath, updatedContent);
  console.log(`✓ Updated: ${relativePath}`);
  return true;
}

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

// Main execution
console.log('🚀 Starting canonical URL updates...\n');

const pageFiles = findPageFiles(BASE_DIR);
let updatedCount = 0;

for (const filePath of pageFiles) {
  try {
    if (updatePageFile(filePath)) {
      updatedCount++;
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

console.log(`\n✅ Canonical URL update complete!`);
console.log(`📊 Updated ${updatedCount} out of ${pageFiles.length} pages`);
console.log(`🎯 All pages now use dynamic canonical URLs`);