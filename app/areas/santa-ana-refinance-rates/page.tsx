import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/santa-ana-refinance-rates";
  const title = "Mortgage Broker in Santa Ana Refinance Rates, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Santa Ana Refinance Rates, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Santa Ana Refinance Rates, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const santaAnaData = {
  name: 'Santa Ana',
  slug: 'santa-ana-refinance-rates',
  population: 335000,
  medianHomePrice: 720000,
  medianHouseholdIncome: 65000,
  averageLoanAmount: 575000,
  topNeighborhoods: [
    'South Coast Metro',
    'Floral Park',
    'Park Santiago',
    'French Court'
  ],
  marketTrends: {
    priceGrowth: '4.8% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 38
  },
  localFactors: [
    'County seat location',
    'Diverse housing stock',
    'Historic neighborhoods',
    'Urban redevelopment'
  ],
  keywordPhrase: 'Santa Ana refinance rates',
  specialization: 'refinance'

};
export default function SantaAnaRefinanceRatesPage() {
  return <CityPageTemplate cityData={santaAnaData} />;
}


