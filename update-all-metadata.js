const fs = require('fs');
const path = require('path');

// Find all page.tsx files recursively
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next')) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Update metadata in a file
function updatePageMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has canonical
    if (content.includes('alternates:') && content.includes('canonical:')) {
      console.log(`✓ Already updated: ${filePath}`);
      return { status: 'already-updated', path: filePath };
    }
    
    // Extract relative path for canonical URL
    const relativePath = filePath
      .replace(/\\/g, '/')
      .replace(/.*\/app/, '')
      .replace('/page.tsx', '')
      .replace(/\/index$/, '');
    
    // Generate title based on path
    let title = '';
    let description = '';
    
    // Parse path to generate appropriate title
    const pathParts = relativePath.split('/').filter(p => p);
    
    if (pathParts[0] === 'loan-programs') {
      const program = pathParts[1] || '';
      const programName = program
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace('Fha', 'FHA')
        .replace('Va', 'VA')
        .replace('Heloc', 'HELOC')
        .replace('Heloan', 'Home Equity Loan')
        .replace('Dscr', 'DSCR')
        .replace('Non Qm', 'Non-QM')
        .replace('Usda', 'USDA');
      
      title = `${programName} | Mo Abdel - Orange County Mortgage Broker`;
      description = `${programName} in Orange County. Competitive rates, expert guidance from licensed mortgage broker NMLS #1426884.`;
    } else if (pathParts[0] === 'areas') {
      const cityName = (pathParts[1] || '')
        .replace(/-mortgage-broker/g, '')
        .replace(/-mortgage-rates/g, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      title = `${cityName} Mortgage Broker | Mo Abdel - Orange County Mortgage Broker`;
      description = `${cityName} mortgage broker serving Orange County. Home loans, refinancing, competitive rates. Licensed NMLS #1426884.`;
    } else if (pathParts[0] === 'guides') {
      const guideName = (pathParts[1] || '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace('Orange County', '')
        .trim();
      
      title = `${guideName} Guide | Mo Abdel - Orange County Mortgage Broker`;
      description = `Complete ${guideName.toLowerCase()} guide for Orange County. Expert mortgage advice from licensed broker NMLS #1426884.`;
    } else if (pathParts[0] === 'resources') {
      const resourceName = (pathParts[1] || '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      title = `${resourceName} | Mo Abdel - Orange County Mortgage Broker`;
      description = `${resourceName} resources for Orange County home buyers. Expert guidance from licensed broker NMLS #1426884.`;
    } else if (pathParts[0] === 'neighborhood-guide') {
      const neighborhoodName = (pathParts[1] || '')
        .replace(/-home-buying-guide/g, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace(' Vs ', ' vs ');
      
      title = `${neighborhoodName} Guide | Mo Abdel - Orange County Mortgage Broker`;
      description = `${neighborhoodName} comparison and home buying guide for Orange County. Licensed mortgage broker NMLS #1426884.`;
    } else if (pathParts[0] === 'luxury-markets') {
      const marketName = (pathParts[1] || '')
        .replace(/-mortgage-broker/g, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      title = `${marketName} Financing | Mo Abdel - Orange County Mortgage Broker`;
      description = `${marketName} luxury property financing in Orange County. Jumbo loans and specialized programs. NMLS #1426884.`;
    } else if (pathParts[0] === 'zip-codes') {
      const zipInfo = (pathParts[1] || '')
        .replace(/-mortgage-broker/g, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      title = `${zipInfo} Mortgage Broker | Mo Abdel - Orange County Mortgage Broker`;
      description = `Mortgage broker serving ${zipInfo} in Orange County. Local expertise, competitive rates. NMLS #1426884.`;
    } else {
      // Default for other pages
      const pageName = pathParts[pathParts.length - 1] || 'Home';
      title = `${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Mo Abdel - Orange County Mortgage Broker`;
      description = `Orange County mortgage broker offering competitive rates and expert guidance. Licensed NMLS #1426884.`;
    }
    
    // Truncate description to 155 characters
    if (description.length > 155) {
      description = description.substring(0, 152) + '...';
    }
    
    // Find existing metadata
    const metadataRegex = /export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?\n\};/;
    const match = content.match(metadataRegex);
    
    if (match) {
      const oldMetadata = match[0];
      
      // Check if it already has all required fields in correct format
      if (oldMetadata.includes('| Mo Abdel - Orange County Mortgage Broker') && 
          oldMetadata.includes('Orange County')) {
        // Just add canonical if missing
        if (!oldMetadata.includes('alternates:')) {
          const canonicalUrl = relativePath || '/';
          const newMetadata = oldMetadata.replace(
            /\n\};/,
            `,\n  alternates: {\n    canonical: 'https://www.mothebroker.com${canonicalUrl}',\n  },\n};`
          );
          
          content = content.replace(oldMetadata, newMetadata);
          fs.writeFileSync(filePath, content);
          console.log(`✅ Added canonical to: ${filePath}`);
          return { status: 'updated-canonical', path: filePath };
        }
      } else {
        // Update entire metadata
        const canonicalUrl = relativePath || '/';
        const newMetadata = `export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  alternates: {
    canonical: 'https://www.mothebroker.com${canonicalUrl}',
  },
};`;
        
        content = content.replace(oldMetadata, newMetadata);
        fs.writeFileSync(filePath, content);
        console.log(`✅ Updated metadata: ${filePath}`);
        return { status: 'updated-full', path: filePath };
      }
    } else {
      console.log(`⚠️  No metadata found: ${filePath}`);
      return { status: 'no-metadata', path: filePath };
    }
    
  } catch (error) {
    console.log(`❌ Error: ${filePath} - ${error.message}`);
    return { status: 'error', path: filePath, error: error.message };
  }
}

// Main execution
console.log('🔍 Finding all page.tsx files...\n');
const pageFiles = findPageFiles('./app');
console.log(`Found ${pageFiles.length} page files\n`);

const results = {
  'already-updated': [],
  'updated-canonical': [],
  'updated-full': [],
  'no-metadata': [],
  'error': []
};

pageFiles.forEach(file => {
  const result = updatePageMetadata(file);
  results[result.status].push(result.path);
});

// Summary
console.log('\n📊 Summary:');
console.log(`✅ Already updated: ${results['already-updated'].length}`);
console.log(`✅ Added canonical only: ${results['updated-canonical'].length}`);
console.log(`✅ Fully updated: ${results['updated-full'].length}`);
console.log(`⚠️  No metadata found: ${results['no-metadata'].length}`);
console.log(`❌ Errors: ${results['error'].length}`);

if (results['no-metadata'].length > 0) {
  console.log('\n⚠️  Files without metadata:');
  results['no-metadata'].forEach(f => console.log(`   - ${f}`));
}

if (results['error'].length > 0) {
  console.log('\n❌ Files with errors:');
  results['error'].forEach(f => console.log(`   - ${f}`));
}