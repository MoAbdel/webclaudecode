import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Santa Ana Mortgage Rates 2025 | Best Home Loan Rates CA | Mo Abdel NMLS #1426884',
  description: 'Current Santa Ana mortgage rates and home loan options. Compare FHA, VA, conventional rates in Santa Ana CA. Licensed mortgage broker Mo Abdel NMLS #1426884.',
  keywords: 'Santa Ana mortgage rates, Santa Ana home loans, Santa Ana mortgage broker, Santa Ana refinance rates, Santa Ana FHA loans, Santa Ana VA loans',
  openGraph: {
    title: 'Santa Ana Mortgage Rates 2025 | Best Home Loan Rates CA',
    description: 'Current Santa Ana mortgage rates and home loan options. Compare FHA, VA, conventional rates in Santa Ana CA.',
    type: 'website',
  },
};

const santaAnaData = {
  name: 'Santa Ana',
  slug: 'santa-ana-mortgage-rates',
  population: 332000,
  medianHomePrice: 725000,
  medianHouseholdIncome: 58900,
  averageLoanAmount: 580000,
  topNeighborhoods: [
    'Downtown Santa Ana',
    'Floral Park',
    'Park Santiago',
    'French Park',
    'South Coast Metro'
  ],
  marketTrends: {
    priceGrowth: '4.1% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Urban revitalization',
    'Arts district growth',
    'County government seat',
    'Diverse communities'
  ],
  keywordPhrase: 'Santa Ana mortgage rates'
};

export default function SantaAnaMortgageRatesPage() {
  return <CityPageTemplate cityData={santaAnaData} />;
}



