import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const danaPointData = {
  name: 'Dana Point',
  slug: 'dana-point-mortgage-broker',
  population: 33107,
  medianHomePrice: 1485000,
  medianHouseholdIncome: 98700,
  averageLoanAmount: 1188000,
  topNeighborhoods: [
    'Dana Point Harbor',
    'Monarch Beach',
    'Capistrano Beach',
    'Lantern Village',
    'Sea Canyon',
    'Niguel Summit'
  ],
  marketTrends: {
    priceGrowth: '5.8% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 38
  },
  localFactors: [
    'Harbor community',
    'Luxury resorts',
    'Beach access',
    'Scenic coastal views'
  ],
  keywordPhrase: 'Dana Point mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(danaPointData);

export default function DanaPointMortgageBrokerPage() {
  return <CityPageTemplate cityData={danaPointData} />;
}