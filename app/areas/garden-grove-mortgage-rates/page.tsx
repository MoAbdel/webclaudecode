import React from 'react';
import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/seo/CityPageTemplate';

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
  cityName: "Garden Grove",
  state: "California",
  population: "172,000",
  medianHomePrice: "$825,000",
  averageRate: "6.75%",
  marketTrend: "Stable",
  topNeighborhoods: [
    "West Garden Grove",
    "East Garden Grove", 
    "Magnolia Park",
    "Chapman University Area"
  ],
  nearbyAreas: [
    { name: "Westminster", url: "/areas/westminster-mortgage-broker" },
    { name: "Santa Ana", url: "/areas/santa-ana-mortgage-broker" },
    { name: "Orange", url: "/areas/orange-mortgage-broker" },
    { name: "Fountain Valley", url: "/areas/fountain-valley-mortgage-broker" }
  ],
  localInsights: "Garden Grove offers affordable family-friendly neighborhoods with easy access to major employment centers. The area has seen steady appreciation and remains popular with first-time homebuyers.",
  schools: "Garden Grove Unified School District",
  zipCodes: ["92840", "92841", "92843", "92844"],
  housingMarketData: {
    averageDaysOnMarket: 28,
    inventoryLevel: "Balanced",
    priceAppreciation: "+4.2% YoY"
  }
};

export default function GardenGroveMortgageRatesPage() {
  return (
    <CityPageTemplate 
      data={gardenGroveData}
      specializedContent={
        <div className="py-8 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Current Garden Grove Mortgage Rates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">30-Year Fixed Rate</h3>
                <div className="text-3xl font-bold text-green-600">6.75%</div>
                <p className="text-sm text-slate-600">APR varies by qualification</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">FHA 30-Year</h3>
                <div className="text-3xl font-bold text-green-600">6.25%</div>
                <p className="text-sm text-slate-600">Low down payment option</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              *Rates updated weekly. Contact Mo Abdel at (949) 579-2057 for current Garden Grove mortgage rates and personalized quotes.
            </p>
          </div>
        </div>
      }
    />
  );
}