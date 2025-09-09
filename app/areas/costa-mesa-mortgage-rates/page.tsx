import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Costa Mesa Mortgage Rates 2025 | Best Home Loan Rates | Mo Abdel NMLS #1426884',
  description: 'Current Costa Mesa mortgage rates and home loan options. Compare FHA, VA, conventional rates in Costa Mesa CA. Licensed mortgage broker Mo Abdel (949) 579-2057.',
  keywords: 'Costa Mesa mortgage rates, Costa Mesa home loans, Costa Mesa mortgage broker, Costa Mesa refinance rates, Costa Mesa FHA loans, Costa Mesa VA loans',
  openGraph: {
    title: 'Costa Mesa Mortgage Rates 2025 | Best Home Loan Rates',
    description: 'Current Costa Mesa mortgage rates and home loan options. Compare FHA, VA, conventional rates in Costa Mesa CA.',
    type: 'website',
  },
};

const costaMesaData = {
  name: 'Costa Mesa',
  slug: 'costa-mesa-mortgage-rates',
  population: 115000,
  medianHomePrice: 875000,
  medianHouseholdIncome: 78000,
  averageLoanAmount: 700000,
  topNeighborhoods: [
    'Mesa Verde',
    'Eastside Costa Mesa',
    'South Coast Metro',
    'Westside Costa Mesa'
  ],
  marketTrends: {
    priceGrowth: '5.1% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Central OC location',
    'Mixed housing types',
    'Business hub proximity',
    'Growing arts district'
  ],
  keywordPhrase: 'Costa Mesa mortgage rates'
};

export default function CostaMesaMortgageRatesPage() {
  return <CityPageTemplate cityData={costaMesaData} />;
}



