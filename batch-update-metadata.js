const fs = require('fs');
const path = require('path');

// Metadata configurations for all pages
const metadataUpdates = [
  // VA Loans
  {
    file: './app/loan-programs/va-loans/page.tsx',
    title: 'VA Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'VA loans in Orange County with zero down payment for veterans. Competitive rates, no PMI required. Licensed broker NMLS #1426884.',
    canonical: '/loan-programs/va-loans'
  },
  // Conventional Loans
  {
    file: './app/loan-programs/conventional-loans/page.tsx',
    title: 'Conventional Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Conventional mortgages in Orange County with rates from 200+ lenders. Down payments from 3%. Licensed broker NMLS #1426884.',
    canonical: '/loan-programs/conventional-loans'
  },
  // Jumbo Loans
  {
    file: './app/loan-programs/jumbo-loans/page.tsx',
    title: 'Jumbo Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Jumbo loans for Orange County luxury homes above $1,089,300. Competitive rates for high-value properties. NMLS #1426884.',
    canonical: '/loan-programs/jumbo-loans'
  },
  // HELOC
  {
    file: './app/loan-programs/heloc/page.tsx',
    title: 'HELOC | Mo Abdel - Orange County Mortgage Broker',
    description: 'Home equity lines of credit in Orange County. Access your home equity with flexible draw periods. Licensed broker NMLS #1426884.',
    canonical: '/loan-programs/heloc'
  },
  // HELOAN
  {
    file: './app/loan-programs/heloan/page.tsx',
    title: 'Home Equity Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Fixed-rate home equity loans in Orange County. Lump sum funding for major expenses. Licensed mortgage broker NMLS #1426884.',
    canonical: '/loan-programs/heloan'
  },
  // Non-QM Loans
  {
    file: './app/loan-programs/non-qm-loans/page.tsx',
    title: 'Non-QM Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Non-QM loans in Orange County for self-employed and investors. Bank statement and asset-based programs. NMLS #1426884.',
    canonical: '/loan-programs/non-qm-loans'
  },
  // Bank Statement Loans
  {
    file: './app/loan-programs/bank-statement-loans/page.tsx',
    title: 'Bank Statement Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Bank statement loans for Orange County self-employed borrowers. No tax returns required. Licensed broker NMLS #1426884.',
    canonical: '/loan-programs/bank-statement-loans'
  },
  // More cities
  {
    file: './app/areas/newport-beach-mortgage-broker/page.tsx',
    title: 'Newport Beach Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Newport Beach luxury home financing and jumbo loans. Serving Corona del Mar, Balboa Island. Orange County broker NMLS #1426884.',
    canonical: '/areas/newport-beach-mortgage-broker'
  },
  {
    file: './app/areas/huntington-beach-mortgage-broker/page.tsx',
    title: 'Huntington Beach Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Huntington Beach home loans and beach property financing. Orange County mortgage specialist. Licensed broker NMLS #1426884.',
    canonical: '/areas/huntington-beach-mortgage-broker'
  },
  {
    file: './app/areas/costa-mesa-mortgage-broker/page.tsx',
    title: 'Costa Mesa Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Costa Mesa mortgage broker with competitive rates. FHA, VA, conventional loans for Orange County buyers. NMLS #1426884.',
    canonical: '/areas/costa-mesa-mortgage-broker'
  },
  {
    file: './app/areas/mission-viejo-mortgage-broker/page.tsx',
    title: 'Mission Viejo Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Mission Viejo home loans and refinancing. Lake Mission Viejo area specialist. Orange County broker NMLS #1426884.',
    canonical: '/areas/mission-viejo-mortgage-broker'
  },
  {
    file: './app/areas/laguna-beach-mortgage-broker/page.tsx',
    title: 'Laguna Beach Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Laguna Beach luxury coastal property financing. Jumbo loans for Orange County beach homes. Licensed broker NMLS #1426884.',
    canonical: '/areas/laguna-beach-mortgage-broker'
  },
  // Guides
  {
    file: './app/guides/orange-county-refinancing-guide/page.tsx',
    title: 'Orange County Refinancing Guide | Mo Abdel - Orange County Mortgage Broker',
    description: 'Orange County refinancing guide covering rate-and-term, cash-out, HELOC options. Save money on your mortgage. NMLS #1426884.',
    canonical: '/guides/orange-county-refinancing-guide'
  }
];

function updateMetadata(filePath, title, description, canonical) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find existing metadata export - improved regex to handle multiline
    const metadataRegex = /export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?\n\};/;
    
    const newMetadata = `export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  alternates: {
    canonical: 'https://www.mothebroker.com${canonical}',
  },
};`;
    
    if (metadataRegex.test(content)) {
      content = content.replace(metadataRegex, newMetadata);
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated: ${filePath}`);
      return true;
    } else {
      console.log(`⚠️  No metadata found in: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error updating ${filePath}: ${error.message}`);
    return false;
  }
}

// Process all updates
console.log('Starting batch metadata update...\n');
let successCount = 0;
let failCount = 0;

metadataUpdates.forEach(update => {
  if (updateMetadata(update.file, update.title, update.description, update.canonical)) {
    successCount++;
  } else {
    failCount++;
  }
});

console.log(`\n✅ Successfully updated: ${successCount} files`);
console.log(`❌ Failed to update: ${failCount} files`);