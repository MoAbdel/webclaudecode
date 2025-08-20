import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Garden Grove Mortgage Rates 2025 | Best Home Loan Rates CA | Mo Abdel NMLS #1426884',
  description: 'Current Garden Grove mortgage rates and home loan options. Compare FHA, VA, conventional rates in Garden Grove CA. Licensed mortgage broker Mo Abdel NMLS #1426884.',
  keywords: 'Garden Grove mortgage rates, Garden Grove home loans, Garden Grove mortgage broker, Garden Grove refinance rates, Garden Grove FHA loans, Garden Grove VA loans',
  openGraph: {
    title: 'Garden Grove Mortgage Rates 2025 | Best Home Loan Rates CA',
    description: 'Current Garden Grove mortgage rates and home loan options. Compare FHA, VA, conventional rates in Garden Grove CA.',
    type: 'website',
  },
};

const gardenGroveData = {
  name: 'Garden Grove',
  slug: 'garden-grove-mortgage-rates',
  population: 172000,
  medianHomePrice: 825000,
  medianHouseholdIncome: 68900,
  averageLoanAmount: 660000,
  topNeighborhoods: [
    'West Garden Grove',
    'East Garden Grove',
    'Magnolia Park',
    'Village Green'
  ],
  marketTrends: {
    priceGrowth: '4.2% annually',
    inventoryLevel: 'Balanced',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Affordable family housing',
    'Strong Korean community',
    'Central OC location',
    'First-time buyer friendly'
  ],
  keywordPhrase: 'Garden Grove mortgage rates'
};

export default function GardenGroveMortgageRatesPage() {
  return <CityPageTemplate cityData={gardenGroveData} />;
}