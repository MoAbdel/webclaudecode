import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/fountain-valley-mortgage-rates";
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
  slug: 'fountain-valley-mortgage-rates',
  population: 56000,
  medianHomePrice: 1125000,
  medianHouseholdIncome: 89500,
  averageLoanAmount: 900000,
  topNeighborhoods: [
    'Mile Square Area',
    'Central Fountain Valley',
    'Talbert Nature Preserve Area',
    'Warner Avenue Corridor'
  ],
  marketTrends: {
    priceGrowth: '4.5% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Highly rated schools',
    'Family-oriented community',
    'Central OC location',
    'Low crime rates'
  ],
  keywordPhrase: 'Fountain Valley mortgage rates'
};

export default function FountainValleyMortgageRatesPage() {
  return <CityPageTemplate cityData={fountainValleyData} />;
}


