import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const westminsterData = {
  name: 'Westminster',
  slug: 'westminster-mortgage-broker',
  population: 90857,
  medianHomePrice: 765000,
  medianHouseholdIncome: 71200,
  averageLoanAmount: 612000,
  topNeighborhoods: [
    'Little Saigon',
    'Midway City',
    'Bolsa',
    'Westminster Mall Area',
    'Sigler Park',
    'Westminster High'
  ],
  marketTrends: {
    priceGrowth: '3.8% annually',
    inventoryLevel: 'Good',
    averageDaysOnMarket: 32
  },
  localFactors: [
    'Diverse community',
    'Affordable by OC standards',
    'Vietnamese cultural center',
    'Good freeway access'
  ],
  keywordPhrase: 'Westminster mortgage broker'
};

export const metadata: Metadata = generateCityMetadata(westminsterData);

export default function WestminsterMortgageBrokerPage() {
  return <CityPageTemplate cityData={westminsterData} />;
}



