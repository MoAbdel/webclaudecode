import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/laguna-niguel-mortgage-rates";
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
  return <CityPageTemplate cityData={lagunaNiguelData} />;
}


