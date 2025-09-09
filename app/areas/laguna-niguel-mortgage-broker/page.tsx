import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const lagunaNiguelData = {
  name: 'Laguna Niguel',
  slug: 'laguna-niguel-mortgage-broker',
  population: 64355,
  medianHomePrice: 1095000,
  medianHouseholdIncome: 107300,
  averageLoanAmount: 876000,
  topNeighborhoods: [
    'Bear Brand Ranch',
    'Coronado Pointe',
    'Sea Country',
    'Laguna Niguel Regional Park',
    'Moulton Ranch',
    'Golden Lantern'
  ],
  marketTrends: {
    priceGrowth: '4.9% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 30
  },
  localFactors: [
    'Master-planned community',
    'Excellent schools',
    'Golf courses',
    'Family-oriented'
  ],
  keywordPhrase: 'Laguna Niguel mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(lagunaNiguelData);

export default function LagunaNiguelMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaNiguelData} />;
}



