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
  return (
    <CityPageTemplate 
      cityData={lagunaNiguelData}
      specializedContent={
        <div className="py-8 bg-green-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Current Laguna Niguel Mortgage Rates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">30-Year Fixed Rate</h3>
                <div className="text-3xl font-bold text-green-600">6.85%</div>
                <p className="text-sm text-slate-600">APR varies by qualification</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Jumbo 30-Year</h3>
                <div className="text-3xl font-bold text-green-600">6.95%</div>
                <p className="text-sm text-slate-600">For luxury Laguna Niguel homes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">FHA 30-Year</h3>
                <div className="text-3xl font-bold text-green-600">6.35%</div>
                <p className="text-sm text-slate-600">Low down payment option</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">15-Year Fixed</h3>
                <div className="text-3xl font-bold text-green-600">6.25%</div>
                <p className="text-sm text-slate-600">Faster equity building</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              *Rates updated weekly. Contact Mo Abdel at (949) 579-2057 for current Laguna Niguel mortgage rates and personalized quotes.
            </p>
          </div>
        </div>
      }
    />
  );
}