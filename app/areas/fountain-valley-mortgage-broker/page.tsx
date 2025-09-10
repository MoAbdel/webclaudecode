import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/fountain-valley-mortgage-broker";
  const title = "Mortgage Broker in Fountain Valley, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Fountain Valley, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Fountain Valley, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const fountainValleyData = {
  name: 'Fountain Valley',
  slug: 'fountain-valley-mortgage-broker',
  population: 57047,
  medianHomePrice: 865000,
  medianHouseholdIncome: 89200,
  averageLoanAmount: 692000,
  topNeighborhoods: [
    'Brookhurst',
    'Mile Square',
    'Talbert',
    'Warner',
    'Slater',
    'Ellis'
  ],
  marketTrends: {
    priceGrowth: '4.1% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 25
  },
  localFactors: [
    'Family-friendly community',
    'Mile Square Regional Park',
    'Excellent schools',
    'Safe neighborhoods'
  ],
  keywordPhrase: 'Fountain Valley mortgage broker'
};

export default function FountainValleyMortgageBrokerPage() {
  return <CityPageTemplate cityData={fountainValleyData} />;
}


