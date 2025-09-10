import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/santa-ana-mortgage-rates";
  const title = "Mortgage Broker in Santa Ana, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Santa Ana, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Santa Ana, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const santaAnaData = {
  name: 'Santa Ana',
  slug: 'santa-ana-mortgage-rates',
  population: 332000,
  medianHomePrice: 725000,
  medianHouseholdIncome: 58900,
  averageLoanAmount: 580000,
  topNeighborhoods: [
    'Downtown Santa Ana',
    'Floral Park',
    'Park Santiago',
    'French Park',
    'South Coast Metro'
  ],
  marketTrends: {
    priceGrowth: '4.1% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Urban revitalization',
    'Arts district growth',
    'County government seat',
    'Diverse communities'
  ],
  keywordPhrase: 'Santa Ana mortgage rates'
};

export default function SantaAnaMortgageRatesPage() {
  return <CityPageTemplate cityData={santaAnaData} />;
}


