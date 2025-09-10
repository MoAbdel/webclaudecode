import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const costaMesaData = {
  name: 'Costa Mesa',
  slug: 'costa-mesa-mortgage-rates',
  population: 115000,
  medianHomePrice: 875000,
  medianHouseholdIncome: 78000,
  averageLoanAmount: 700000,
  topNeighborhoods: ['Mesa Verde', 'Eastside Costa Mesa', 'South Coast Metro', 'Westside Costa Mesa'],
  marketTrends: {
    priceGrowth: '5.1% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 35,
  },
  localFactors: [
    'Central OC location',
    'Mixed housing types',
    'Business hub proximity',
    'Growing arts district',
  ],
  keywordPhrase: 'Costa Mesa mortgage rates',
};

export async function generateMetadata(): Promise<Metadata> {
  return generateCityMetadata(costaMesaData);
}

export default function CostaMesaMortgageRatesPage() {
  return <CityPageTemplate cityData={costaMesaData} />;
}

