import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const gardenGroveData = {
  name: 'Garden Grove',
  slug: 'garden-grove-mortgage-broker',
  population: 171949,
  medianHomePrice: 745000,
  medianHouseholdIncome: 68900,
  averageLoanAmount: 596000,
  topNeighborhoods: [
    'West Garden Grove',
    'East Garden Grove',
    'Magnolia Park',
    'Village Green',
    'Stanford',
    'Brookhurst'
  ],
  marketTrends: {
    priceGrowth: '3.5% annually',
    inventoryLevel: 'Good',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Affordable family housing',
    'Strong Korean community',
    'Central OC location',
    'Good schools'
  ],
  keywordPhrase: 'Garden Grove mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(gardenGroveData);

export default function GardenGroveMortgageBrokerPage() {
  return <CityPageTemplate cityData={gardenGroveData} />;
}