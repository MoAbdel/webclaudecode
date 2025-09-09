import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Santa Ana Refinance Rates 2025 | Cash-Out & Rate-Term Refinancing | Mo Abdel NMLS #1426884',
  description: 'Current Santa Ana refinance rates and cash-out refinancing options. Compare rate-and-term refinance rates in Santa Ana CA. Licensed mortgage broker Mo Abdel (949) 579-2057.',
  keywords: 'Santa Ana refinance rates, Santa Ana cash out refinance, Santa Ana rate and term refinance, Santa Ana mortgage refinancing, Santa Ana HELOC rates',
  openGraph: {
    title: 'Santa Ana Refinance Rates 2025 | Cash-Out & Rate-Term Refinancing',
    description: 'Current Santa Ana refinance rates and cash-out refinancing options. Compare rate-and-term refinance rates in Santa Ana CA.',
    type: 'website',
  },
};

const santaAnaData = {
  name: 'Santa Ana',
  slug: 'santa-ana-refinance-rates',
  population: 335000,
  medianHomePrice: 720000,
  medianHouseholdIncome: 65000,
  averageLoanAmount: 575000,
  topNeighborhoods: [
    'South Coast Metro',
    'Floral Park',
    'Park Santiago',
    'French Court'
  ],
  marketTrends: {
    priceGrowth: '4.8% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 38
  },
  localFactors: [
    'County seat location',
    'Diverse housing stock',
    'Historic neighborhoods',
    'Urban redevelopment'
  ],
  keywordPhrase: 'Santa Ana refinance rates',
  specialization: 'refinance'
};

export default function SantaAnaRefinanceRatesPage() {
  return <CityPageTemplate cityData={santaAnaData} />;
}



