import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Yorba Linda Mortgage Rates 2025 | Best Home Loan Rates | Mo Abdel NMLS #1426884',
  description: 'Current Yorba Linda mortgage rates and home loan options. Compare FHA, VA, conventional rates in Yorba Linda CA. Licensed mortgage broker Mo Abdel (949) 579-2057.',
  keywords: 'Yorba Linda mortgage rates, Yorba Linda home loans, Yorba Linda mortgage broker, Yorba Linda refinance rates, Yorba Linda FHA loans, Yorba Linda VA loans',
  openGraph: {
    title: 'Yorba Linda Mortgage Rates 2025 | Best Home Loan Rates',
    description: 'Current Yorba Linda mortgage rates and home loan options. Compare FHA, VA, conventional rates in Yorba Linda CA.',
    type: 'website',
  },
};

const yorbaLindaData = {
  name: 'Yorba Linda',
  slug: 'yorba-linda-mortgage-rates',
  population: 68000,
  medianHomePrice: 1280000,
  medianHouseholdIncome: 125000,
  averageLoanAmount: 1025000,
  topNeighborhoods: [
    'Yorba Linda Estates',
    'Country Club Village',
    'Fairmont Village',
    'Hidden Hills'
  ],
  marketTrends: {
    priceGrowth: '4.2% annually',
    inventoryLevel: 'Very Limited',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Excellent schools (PYLUSD)',
    'Rural suburban character',
    'Large estate lots',
    'Presidential library proximity'
  ],
  keywordPhrase: 'Yorba Linda mortgage rates'
};

export default function YorbaLindaMortgageRatesPage() {
  return <CityPageTemplate cityData={yorbaLindaData} />;
}