import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/garden-grove-mortgage-broker";
  const title = "Mortgage Broker in Garden Grove, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Garden Grove, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Garden Grove, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const gardenGroveData = {
  name: 'Garden Grove',
  slug: 'garden-grove-mortgage-broker',
  population: 171949,
  medianHomePrice: 745000,
  medianHouseholdIncome: 68900,
  averageLoanAmount: 596000,
  topNeighborhoods: [
    'West Garden Grove',
    'East Garden Grove',
    'Magnolia Park',
    'Village Green',
    'Stanford',
    'Brookhurst'
  ],
  marketTrends: {
    priceGrowth: '3.5% annually',
    inventoryLevel: 'Good',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Affordable family housing',
    'Strong Korean community',
    'Central OC location',
    'Good schools'
  ],
  keywordPhrase: 'Garden Grove mortgage broker'
};

export default function GardenGroveMortgageBrokerPage() {
  return <CityPageTemplate cityData={gardenGroveData} />;
}


