import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const lagunaWoodsData = {
  name: 'Laguna Woods',
  slug: 'laguna-woods-mortgage-broker',
  population: 16056,
  medianHomePrice: 595000,
  medianHouseholdIncome: 48200,
  averageLoanAmount: 476000,
  topNeighborhoods: [
    'Laguna Woods Village',
    'The Village',
    'Golden Rain Foundation',
    'Third Mutual',
    'Second Mutual',
    'United Mutual'
  ],
  marketTrends: {
    priceGrowth: '3.2% annually',
    inventoryLevel: 'Good',
    averageDaysOnMarket: 42
  },
  localFactors: [
    '55+ active adult community',
    'Golf courses',
    'Recreation facilities',
    'Affordable senior living'
  ],
  keywordPhrase: 'Laguna Woods mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(lagunaWoodsData);

export default function LagunaWoodsMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaWoodsData} />;
}

