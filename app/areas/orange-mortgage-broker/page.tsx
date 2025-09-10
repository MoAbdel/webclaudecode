import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/orange-mortgage-broker";
  const title = "Mortgage Broker in Orange, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Orange, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Orange, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const orangeData = {
  name: 'Orange',
  slug: 'orange-mortgage-broker',
  population: 139911,
  medianHomePrice: 925000,
  medianHouseholdIncome: 95400,
  averageLoanAmount: 740000,
  topNeighborhoods: [
    'Old Towne Orange',
    'Orange Park Acres',
    'Villa Park Adjacent',
    'Chapman University Area',
    'Prospect Park',
    'Canyon Hills'
  ],
  marketTrends: {
    priceGrowth: '4.8% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 22
  },
  localFactors: [
    'Historic charm',
    'Chapman University',
    'Antique shopping district',
    'Tree-lined neighborhoods'
  ],
  keywordPhrase: 'Orange mortgage broker'
};

export default function OrangeMortgageBrokerPage() {
  return <CityPageTemplate cityData={orangeData} />;
}


