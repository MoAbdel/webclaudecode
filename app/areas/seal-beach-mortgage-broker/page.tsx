import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const sealBeachData = {
  name: 'Seal Beach',
  slug: 'seal-beach-mortgage-broker',
  population: 24268,
  medianHomePrice: 1225000,
  medianHouseholdIncome: 85400,
  averageLoanAmount: 980000,
  topNeighborhoods: [
    'Seal Beach Village',
    'Hill',
    'College Park East',
    'Leisure World',
    'Naval Weapons Station',
    'Surfside Colony'
  ],
  marketTrends: {
    priceGrowth: '5.3% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Charming beach town',
    'Main Street shopping',
    'Leisure World 55+',
    'Small-town feel'
  ],
  keywordPhrase: 'Seal Beach mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(sealBeachData);

export default function SealBeachMortgageBrokerPage() {
  return <CityPageTemplate cityData={sealBeachData} />;
}