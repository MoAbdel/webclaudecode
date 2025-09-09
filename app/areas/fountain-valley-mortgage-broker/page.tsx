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

export const metadata: Metadata = {
  title: 'Fountain Valley Mortgage Broker | Got Mortgage? Call Mo Abdel NMLS #1426884',
  description: 'Fountain Valley mortgage broker Mo Abdel offers competitive home loan rates. FHA, VA, conventional loans in Fountain Valley CA. Got mortgage questions? Call (949) 579-2057.',
  keywords: 'Fountain Valley mortgage broker, got mortgage fountain valley, Fountain Valley home loans, Fountain Valley mortgage rates, Fountain Valley refinancing',
  openGraph: {
    title: 'Fountain Valley Mortgage Broker | Got Mortgage? Call Mo Abdel',
    description: 'Fountain Valley mortgage broker Mo Abdel offers competitive home loan rates. FHA, VA, conventional loans in Fountain Valley CA.',
    type: 'website',
  },
};

export default function FountainValleyMortgageBrokerPage() {
  return <CityPageTemplate cityData={fountainValleyData} />;
}



