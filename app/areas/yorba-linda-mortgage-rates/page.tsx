import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/yorba-linda-mortgage-rates";
  const title = "Mortgage Broker in Yorba Linda, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Yorba Linda, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Yorba Linda, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const yorbaLindaData = {
  name: 'Yorba Linda',
  slug: 'yorba-linda-mortgage-rates',
  population: 68000,
  medianHomePrice: 1280000,
  medianHouseholdIncome: 125000,
  averageLoanAmount: 1025000,
  topNeighborhoods: [
    'Yorba Linda Estates',
    'Country Club Village',
    'Fairmont Village',
    'Hidden Hills'
  ],
  marketTrends: {
    priceGrowth: '4.2% annually',
    inventoryLevel: 'Very Limited',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Excellent schools (PYLUSD)',
    'Rural suburban character',
    'Large estate lots',
    'Presidential library proximity'
  ],
  keywordPhrase: 'Yorba Linda mortgage rates'
};

export default function YorbaLindaMortgageRatesPage() {
  return <CityPageTemplate cityData={yorbaLindaData} />;
}


