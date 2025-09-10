import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/irvine-mortgage-rates";
  const title = "Mortgage Broker in Irvine, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Irvine, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Irvine, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const irvineData = {
  name: 'Irvine',
  slug: 'irvine-mortgage-rates',
  population: 307000,
  medianHomePrice: 1450000,
  medianHouseholdIncome: 108000,
  averageLoanAmount: 1160000,
  topNeighborhoods: [
    'Turtle Rock',
    'Woodbridge',
    'University Park',
    'Quail Hill',
    'Cypress Village'
  ],
  marketTrends: {
    priceGrowth: '5.2% annually',
    inventoryLevel: 'Very Competitive',
    averageDaysOnMarket: 25
  },
  localFactors: [
    'World-class schools',
    'UCI proximity',
    'Master-planned communities',
    'Tech hub location'
  ],
  keywordPhrase: 'Irvine mortgage rates'
};

export default function IrvineMortgageRatesPage() {
  return <CityPageTemplate cityData={irvineData} />;
}


