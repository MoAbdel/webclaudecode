import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Irvine Mortgage Rates 2025 | Best Home Loan Rates CA | Mo Abdel NMLS #1426884',
  description: 'Current Irvine mortgage rates and home loan options. Compare FHA, VA, conventional, jumbo rates in Irvine CA. Licensed mortgage broker Mo Abdel NMLS #1426884.',
  keywords: 'Irvine mortgage rates, Irvine home loans, Irvine mortgage broker, Irvine refinance rates, Irvine jumbo loans, Irvine VA loans',
  openGraph: {
    title: 'Irvine Mortgage Rates 2025 | Best Home Loan Rates CA',
    description: 'Current Irvine mortgage rates and home loan options. Compare FHA, VA, conventional, jumbo rates in Irvine CA.',
    type: 'website',
  },
};

const irvineData = {
  name: 'Irvine',
  slug: 'irvine-mortgage-rates',
  population: 307000,
  medianHomePrice: 1450000,
  medianHouseholdIncome: 108000,
  averageLoanAmount: 1160000,
  topNeighborhoods: [
    'Turtle Rock',
    'Woodbridge',
    'University Park',
    'Quail Hill',
    'Cypress Village'
  ],
  marketTrends: {
    priceGrowth: '5.2% annually',
    inventoryLevel: 'Very Competitive',
    averageDaysOnMarket: 25
  },
  localFactors: [
    'World-class schools',
    'UCI proximity',
    'Master-planned communities',
    'Tech hub location'
  ],
  keywordPhrase: 'Irvine mortgage rates'
};

export default function IrvineMortgageRatesPage() {
  return <CityPageTemplate cityData={irvineData} />;
}

