import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const fountainValleyData = {
  name: 'Fountain Valley',
  slug: 'fountain-valley-mortgage-broker',
  population: 57047,
  medianHomePrice: 865000,
  medianHouseholdIncome: 89200,
  averageLoanAmount: 692000,
  topNeighborhoods: [
    'Brookhurst',
    'Mile Square',
    'Talbert',
    'Warner',
    'Slater',
    'Ellis'
  ],
  marketTrends: {
    priceGrowth: '4.1% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 25
  },
  localFactors: [
    'Family-friendly community',
    'Mile Square Regional Park',
    'Excellent schools',
    'Safe neighborhoods'
  ],
  keywordPhrase: 'Fountain Valley mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(fountainValleyData);

export default function FountainValleyMortgageBrokerPage() {
  return <CityPageTemplate cityData={fountainValleyData} />;
}