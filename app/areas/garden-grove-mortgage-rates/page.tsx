import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/garden-grove-mortgage-rates";
  const title = "Mortgage Broker in Garden Grove, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Garden Grove, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Garden Grove, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

}

}

import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

const gardenGroveData = {
  name: 'Garden Grove',
  slug: 'garden-grove-mortgage-rates',
  population: 172000,
  medianHomePrice: 825000,
  medianHouseholdIncome: 68900,
  averageLoanAmount: 660000,
  topNeighborhoods: [
    'West Garden Grove',
    'East Garden Grove',
    'Magnolia Park',
    'Village Green'
  ],
  marketTrends: {
    priceGrowth: '4.2% annually',
    inventoryLevel: 'Balanced',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Affordable family housing',
    'Strong Korean community',
    'Central OC location',
    'First-time buyer friendly'
  ],
  keywordPhrase: 'Garden Grove mortgage rates'

export default function GardenGroveMortgageRatesPage() {
  return <CityPageTemplate cityData={gardenGroveData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/garden-grove-mortgage-rates","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
