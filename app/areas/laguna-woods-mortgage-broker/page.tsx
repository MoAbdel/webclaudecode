import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/laguna-woods-mortgage-broker";
  const title = "Mortgage Broker in Laguna Woods, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Laguna Woods, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Laguna Woods, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const lagunaWoodsData = {
  name: 'Laguna Woods',
  slug: 'laguna-woods-mortgage-broker',
  population: 16056,
  medianHomePrice: 595000,
  medianHouseholdIncome: 48200,
  averageLoanAmount: 476000,
  topNeighborhoods: [
    'Laguna Woods Village',
    'The Village',
    'Golden Rain Foundation',
    'Third Mutual',
    'Second Mutual',
    'United Mutual'
  ],
  marketTrends: {
    priceGrowth: '3.2% annually',
    inventoryLevel: 'Good',
    averageDaysOnMarket: 42
  },
  localFactors: [
    '55+ active adult community',
    'Golf courses',
    'Recreation facilities',
    'Affordable senior living'
  ],
  keywordPhrase: 'Laguna Woods mortgage broker'
};

export default function LagunaWoodsMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaWoodsData} />;
}


