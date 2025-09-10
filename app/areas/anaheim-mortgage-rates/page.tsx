import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const anaheimData = {
  name: 'Anaheim',
  slug: 'anaheim-mortgage-rates',
  population: 354000,
  medianHomePrice: 775000,
  medianHouseholdIncome: 67800,
  averageLoanAmount: 620000,
  topNeighborhoods: ['Anaheim Hills', 'Downtown Anaheim', 'Canyon Area', 'West Anaheim'],
  marketTrends: {
    priceGrowth: '3.8% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 32,
  },
  localFactors: [
    'Disney area proximity',
    'Sports venues nearby',
    'Diverse housing options',
    'Strong rental market',
  ],
  keywordPhrase: 'Anaheim mortgage rates',
};

export async function generateMetadata(): Promise<Metadata> {
  return generateCityMetadata(anaheimData);
}

export default function AnaheimMortgageRatesPage() {
  return <CityPageTemplate cityData={anaheimData} />;
}

