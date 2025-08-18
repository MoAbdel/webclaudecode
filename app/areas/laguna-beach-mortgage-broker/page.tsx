import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const lagunaBeachData = {
  name: 'Laguna Beach',
  slug: 'laguna-beach-mortgage-broker',
  population: 23032,
  medianHomePrice: 2150000,
  medianHouseholdIncome: 105600,
  averageLoanAmount: 1720000,
  topNeighborhoods: [
    'Village Laguna',
    'Top of the World',
    'Woods Cove',
    'Emerald Bay',
    'Irvine Cove',
    'Three Arch Bay'
  ],
  marketTrends: {
    priceGrowth: '6.2% annually',
    inventoryLevel: 'Very Limited',
    averageDaysOnMarket: 45
  },
  localFactors: [
    'Luxury coastal community',
    'Art galleries and festivals',
    'Pristine beaches',
    'Strict development limits'
  ],
  keywordPhrase: 'Laguna Beach mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(lagunaBeachData);

export default function LagunaBeachMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaBeachData} />;
}