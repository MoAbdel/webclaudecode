import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Fountain Valley Mortgage Rates 2025 | Best Home Loan Rates CA | Mo Abdel NMLS #1426884',
  description: 'Current Fountain Valley mortgage rates and home loan options. Compare FHA, VA, conventional rates in Fountain Valley CA. Licensed mortgage broker Mo Abdel NMLS #1426884.',
  keywords: 'Fountain Valley mortgage rates, Fountain Valley home loans, Fountain Valley mortgage broker, Fountain Valley refinance rates, Fountain Valley FHA loans, Fountain Valley VA loans',
  openGraph: {
    title: 'Fountain Valley Mortgage Rates 2025 | Best Home Loan Rates CA',
    description: 'Current Fountain Valley mortgage rates and home loan options. Compare FHA, VA, conventional rates in Fountain Valley CA.',
    type: 'website',
  },
};

const fountainValleyData = {
  name: 'Fountain Valley',
  slug: 'fountain-valley-mortgage-rates',
  population: 56000,
  medianHomePrice: 1125000,
  medianHouseholdIncome: 89500,
  averageLoanAmount: 900000,
  topNeighborhoods: [
    'Mile Square Area',
    'Central Fountain Valley',
    'Talbert Nature Preserve Area',
    'Warner Avenue Corridor'
  ],
  marketTrends: {
    priceGrowth: '4.5% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Highly rated schools',
    'Family-oriented community',
    'Central OC location',
    'Low crime rates'
  ],
  keywordPhrase: 'Fountain Valley mortgage rates'
};

export default function FountainValleyMortgageRatesPage() {
  return <CityPageTemplate cityData={fountainValleyData} />;
}