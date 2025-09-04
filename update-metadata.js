const fs = require('fs');
const path = require('path');

// Metadata configuration for each page type
const metadataConfig = {
  // Loan Programs
  '/loan-programs/fha-loans': {
    title: 'FHA Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'FHA loans in Orange County with 3.5% down. Government-backed mortgages with flexible credit requirements. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/va-loans': {
    title: 'VA Loans | Mo Abdel - Orange County Mortgage Broker', 
    description: 'VA loans in Orange County with zero down payment for veterans. Competitive rates, no PMI required. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/conventional-loans': {
    title: 'Conventional Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Conventional mortgages in Orange County with rates from 200+ lenders. Down payments from 3%. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/jumbo-loans': {
    title: 'Jumbo Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Jumbo loans for Orange County luxury homes above $1,089,300. Competitive rates for high-value properties. NMLS #1426884.',
  },
  '/loan-programs/heloc': {
    title: 'HELOC | Mo Abdel - Orange County Mortgage Broker',
    description: 'Home equity lines of credit in Orange County. Access your home equity with flexible draw periods. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/heloan': {
    title: 'Home Equity Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Fixed-rate home equity loans in Orange County. Lump sum funding for major expenses. Licensed mortgage broker NMLS #1426884.',
  },
  '/loan-programs/non-qm-loans': {
    title: 'Non-QM Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Non-QM loans in Orange County for self-employed and investors. Bank statement and asset-based programs. NMLS #1426884.',
  },
  '/loan-programs/bank-statement-loans': {
    title: 'Bank Statement Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Bank statement loans for Orange County self-employed borrowers. No tax returns required. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/dscr-investment-loans': {
    title: 'DSCR Investment Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'DSCR loans for Orange County investment properties. Qualify based on rental income, not personal income. NMLS #1426884.',
  },
  '/loan-programs/cash-out-refinance': {
    title: 'Cash-Out Refinance | Mo Abdel - Orange County Mortgage Broker',
    description: 'Cash-out refinancing in Orange County. Access home equity for renovations or debt consolidation. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/rate-term-refinance': {
    title: 'Rate & Term Refinance | Mo Abdel - Orange County Mortgage Broker',
    description: 'Rate and term refinancing in Orange County. Lower your rate or change loan terms. No cash out. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/asset-depletion-loans': {
    title: 'Asset Depletion Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Asset depletion loans in Orange County for retirees and high-asset borrowers. Qualify using assets as income. NMLS #1426884.',
  },
  '/loan-programs/foreign-national-loans': {
    title: 'Foreign National Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Foreign national loans for Orange County property purchases. No US credit required. International buyer specialist. NMLS #1426884.',
  },
  '/loan-programs/fix-flip-loans': {
    title: 'Fix & Flip Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Fix and flip financing in Orange County. Short-term loans for real estate investors. Fast funding available. NMLS #1426884.',
  },
  '/loan-programs/profit-loss-statement-loans': {
    title: 'P&L Statement Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Profit & loss statement loans for Orange County business owners. Alternative to tax return documentation. NMLS #1426884.',
  },
  '/loan-programs/usda-rural-loans': {
    title: 'USDA Rural Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'USDA rural development loans for eligible Orange County areas. Zero down payment options available. NMLS #1426884.',
  },
  '/loan-programs/orange-county-fha-loan-limits': {
    title: 'Orange County FHA Loan Limits | Mo Abdel - Orange County Mortgage Broker',
    description: '2025 FHA loan limits for Orange County: $1,089,300. Get pre-approved for government-backed financing. NMLS #1426884.',
  },
  '/loan-programs/orange-county-va-loans': {
    title: 'Orange County VA Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'VA loans specifically for Orange County veterans. Zero down, no PMI, competitive rates. Licensed broker NMLS #1426884.',
  },
  '/loan-programs/bank-statement-loans-irvine': {
    title: 'Irvine Bank Statement Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'Bank statement loans for Irvine self-employed buyers. Specialized for high-cost Orange County market. NMLS #1426884.',
  },
  '/loan-programs/fha-loans-irvine': {
    title: 'Irvine FHA Loans | Mo Abdel - Orange County Mortgage Broker',
    description: 'FHA loans in Irvine with 3.5% down. Government-backed financing for Orange County buyers. Licensed broker NMLS #1426884.',
  },

  // Main Areas/Cities
  '/areas/irvine-mortgage-broker': {
    title: 'Irvine Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Irvine mortgage broker specializing in University Park, Woodbridge, Northwood. Orange County home loans expert. NMLS #1426884.',
  },
  '/areas/newport-beach-mortgage-broker': {
    title: 'Newport Beach Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Newport Beach luxury home financing and jumbo loans. Serving Corona del Mar, Balboa Island. Orange County broker NMLS #1426884.',
  },
  '/areas/huntington-beach-mortgage-broker': {
    title: 'Huntington Beach Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Huntington Beach home loans and beach property financing. Orange County mortgage specialist. Licensed broker NMLS #1426884.',
  },
  '/areas/costa-mesa-mortgage-broker': {
    title: 'Costa Mesa Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Costa Mesa mortgage broker with competitive rates. FHA, VA, conventional loans for Orange County buyers. NMLS #1426884.',
  },
  '/areas/mission-viejo-mortgage-broker': {
    title: 'Mission Viejo Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Mission Viejo home loans and refinancing. Lake Mission Viejo area specialist. Orange County broker NMLS #1426884.',
  },
  '/areas/laguna-beach-mortgage-broker': {
    title: 'Laguna Beach Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Laguna Beach luxury coastal property financing. Jumbo loans for Orange County beach homes. Licensed broker NMLS #1426884.',
  },
  '/areas/anaheim-mortgage-broker': {
    title: 'Anaheim Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Anaheim home loans near Disneyland. FHA, VA, conventional mortgages for Orange County families. NMLS #1426884.',
  },
  '/areas/santa-ana-mortgage-broker': {
    title: 'Santa Ana Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Santa Ana mortgage broker with bilingual service. First-time buyer programs in Orange County. Licensed NMLS #1426884.',
  },
  '/areas/fullerton-mortgage-broker': {
    title: 'Fullerton Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Fullerton home loans near Cal State campus. Student housing and family homes in Orange County. NMLS #1426884.',
  },
  '/areas/garden-grove-mortgage-broker': {
    title: 'Garden Grove Mortgage Broker | Mo Abdel - Orange County Mortgage Broker',
    description: 'Garden Grove mortgage financing with diverse loan programs. Orange County multicultural specialist. NMLS #1426884.',
  },

  // Guides
  '/guides/orange-county-home-buyer-guide': {
    title: 'Orange County Home Buyer Guide | Mo Abdel - Orange County Mortgage Broker',
    description: 'Complete Orange County home buying guide. Mortgage pre-approval, neighborhoods, closing costs explained. NMLS #1426884.',
  },
  '/guides/orange-county-refinancing-guide': {
    title: 'Orange County Refinancing Guide | Mo Abdel - Orange County Mortgage Broker',
    description: 'Orange County refinancing guide covering rate-and-term, cash-out, HELOC options. Save money on your mortgage. NMLS #1426884.',
  },
  '/guides/orange-county-va-loans': {
    title: 'Orange County VA Loan Guide | Mo Abdel - Orange County Mortgage Broker',
    description: 'Complete guide to VA loans in Orange County. Benefits, eligibility, zero down payment options for veterans. NMLS #1426884.',
  },
  '/guides/orange-county-jumbo-loans': {
    title: 'Orange County Jumbo Loan Guide | Mo Abdel - Orange County Mortgage Broker',
    description: 'Jumbo loan guide for Orange County luxury properties over $1,089,300. Requirements and best rates. NMLS #1426884.',
  },
  '/guides/orange-county-investment-property': {
    title: 'Orange County Investment Property Guide | Mo Abdel - Orange County Mortgage Broker',
    description: 'Investment property financing guide for Orange County. DSCR loans, rental income strategies. NMLS #1426884.',
  },

  // Resources
  '/resources/down-payment-assistance': {
    title: 'Down Payment Assistance Programs | Mo Abdel - Orange County Mortgage Broker',
    description: 'Orange County down payment assistance programs. Grants, loans, and first-time buyer help. Licensed broker NMLS #1426884.',
  },
  '/resources/credit-repair': {
    title: 'Credit Repair Resources | Mo Abdel - Orange County Mortgage Broker',
    description: 'Credit repair strategies for Orange County home buyers. Improve scores for better mortgage rates. NMLS #1426884.',
  },
  '/resources/market-data': {
    title: 'Orange County Market Data | Mo Abdel - Orange County Mortgage Broker',
    description: 'Current Orange County real estate market data. Home prices, trends, and mortgage rate analysis. NMLS #1426884.',
  },
  '/resources/document-checklist': {
    title: 'Mortgage Document Checklist | Mo Abdel - Orange County Mortgage Broker',
    description: 'Complete mortgage application checklist for Orange County loans. Required documents organized. NMLS #1426884.',
  },
  '/resources/glossary': {
    title: 'Mortgage Glossary | Mo Abdel - Orange County Mortgage Broker',
    description: 'Mortgage terms glossary for Orange County home buyers. Understand loan terminology and processes. NMLS #1426884.',
  },
  '/resources/service-providers': {
    title: 'Service Provider Directory | Mo Abdel - Orange County Mortgage Broker',
    description: 'Trusted Orange County real estate service providers. Inspectors, contractors, insurance agents. NMLS #1426884.',
  },
};

// Function to generate metadata export
function generateMetadataExport(config, urlPath) {
  return `export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.description}',
  alternates: {
    canonical: 'https://www.mothebroker.com${urlPath}',
  },
};`;
}

// Log all configurations
console.log('Metadata configurations prepared for the following pages:\n');
Object.entries(metadataConfig).forEach(([path, config]) => {
  console.log(`Path: ${path}`);
  console.log(`Title: ${config.title}`);
  console.log(`Description: ${config.description} (${config.description.length} chars)`);
  console.log(`Canonical: https://www.mothebroker.com${path}`);
  console.log('---');
});

console.log(`\nTotal pages to update: ${Object.keys(metadataConfig).length}`);