import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/laguna-woods-mortgage-broker";
  const title = "Mortgage Broker in Laguna Woods, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Laguna Woods, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Laguna Woods, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

}

}

import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const lagunaWoodsData = {
  name: 'Laguna Woods',
  slug: 'laguna-woods-mortgage-broker',
  population: 16056,
  medianHomePrice: 595000,
  medianHouseholdIncome: 48200,
  averageLoanAmount: 476000,
  topNeighborhoods: [
    'Laguna Woods Village',
    'The Village',
    'Golden Rain Foundation',
    'Third Mutual',
    'Second Mutual',
    'United Mutual'
  ],
  marketTrends: {
    priceGrowth: '3.2% annually',
    inventoryLevel: 'Good',
    averageDaysOnMarket: 42
  },
  localFactors: [
    '55+ active adult community',
    'Golf courses',
    'Recreation facilities',
    'Affordable senior living'
  ],
  keywordPhrase: 'Laguna Woods mortgage broker'

export default function LagunaWoodsMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaWoodsData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/laguna-woods-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
