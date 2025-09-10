import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/laguna-niguel-mortgage-broker";
  const title = "Mortgage Broker in Laguna Niguel, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Laguna Niguel, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Laguna Niguel, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const lagunaNiguelData = {
  name: 'Laguna Niguel',
  slug: 'laguna-niguel-mortgage-broker',
  population: 64355,
  medianHomePrice: 1095000,
  medianHouseholdIncome: 107300,
  averageLoanAmount: 876000,
  topNeighborhoods: [
    'Bear Brand Ranch',
    'Coronado Pointe',
    'Sea Country',
    'Laguna Niguel Regional Park',
    'Moulton Ranch',
    'Golden Lantern'
  ],
  marketTrends: {
    priceGrowth: '4.9% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 30
  },
  localFactors: [
    'Master-planned community',
    'Excellent schools',
    'Golf courses',
    'Family-oriented'
  ],
  keywordPhrase: 'Laguna Niguel mortgage broker'
};

export default function LagunaNiguelMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaNiguelData} />;
}


