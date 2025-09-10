import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/seal-beach-mortgage-broker";
  const title = "Mortgage Broker in Seal Beach, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Seal Beach, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Seal Beach, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const sealBeachData = {
  name: 'Seal Beach',
  slug: 'seal-beach-mortgage-broker',
  population: 24268,
  medianHomePrice: 1225000,
  medianHouseholdIncome: 85400,
  averageLoanAmount: 980000,
  topNeighborhoods: [
    'Seal Beach Village',
    'Hill',
    'College Park East',
    'Leisure World',
    'Naval Weapons Station',
    'Surfside Colony'
  ],
  marketTrends: {
    priceGrowth: '5.3% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Charming beach town',
    'Main Street shopping',
    'Leisure World 55+',
    'Small-town feel'
  ],
  keywordPhrase: 'Seal Beach mortgage broker'
};

export default function SealBeachMortgageBrokerPage() {
  return <CityPageTemplate cityData={sealBeachData} />;
}


