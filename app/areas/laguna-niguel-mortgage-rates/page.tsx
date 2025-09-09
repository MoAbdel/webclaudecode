import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Laguna Niguel Mortgage Rates 2025 | Best Home Loan Rates | Mo Abdel NMLS #1426884',
  description: 'Current Laguna Niguel mortgage rates and home loan options. Compare FHA, VA, conventional rates in Laguna Niguel CA. Licensed mortgage broker Mo Abdel (949) 579-2057.',
  keywords: 'Laguna Niguel mortgage rates, Laguna Niguel home loans, Laguna Niguel mortgage broker, Laguna Niguel refinance rates, Laguna Niguel FHA loans, Laguna Niguel VA loans',
  openGraph: {
    title: 'Laguna Niguel Mortgage Rates 2025 | Best Home Loan Rates',
    description: 'Current Laguna Niguel mortgage rates and home loan options. Compare FHA, VA, conventional rates in Laguna Niguel CA.',
    type: 'website',
  },
};

const lagunaNiguelData = {
  name: 'Laguna Niguel',
  slug: 'laguna-niguel-mortgage-rates',
  population: 65000,
  medianHomePrice: 1150000,
  medianHouseholdIncome: 92000,
  averageLoanAmount: 920000,
  topNeighborhoods: [
    'Bear Brand Ranch',
    'Crown Valley',
    'Niguel Summit',
    'Sea Country'
  ],
  marketTrends: {
    priceGrowth: '3.8% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 32
  },
  localFactors: [
    'Master-planned communities',
    'Excellent schools',
    'Hillside views',
    'Luxury suburban lifestyle'
  ],
  keywordPhrase: 'Laguna Niguel mortgage rates'
};

export default function LagunaNiguelMortgageRatesPage() {
  return <CityPageTemplate cityData={lagunaNiguelData} />;
}

