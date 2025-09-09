import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const fullertonData = {
  name: 'Fullerton',
  slug: 'fullerton-mortgage-broker',
  population: 143617,
  medianHomePrice: 875000,
  medianHouseholdIncome: 82500,
  averageLoanAmount: 700000,
  topNeighborhoods: [
    'Downtown Fullerton',
    'Sunny Hills',
    'Raymond Hills',
    'Hillcrest',
    'Wilshire',
    'Valencia Mesa'
  ],
  marketTrends: {
    priceGrowth: '4.2% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Cal State Fullerton proximity',
    'Strong rental market',
    'Transportation hub',
    'Historic downtown district'
  ],
  keywordPhrase: 'Fullerton mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(fullertonData);

export default function FullertonMortgageBrokerPage() {
  return <CityPageTemplate cityData={fullertonData} />;
}



