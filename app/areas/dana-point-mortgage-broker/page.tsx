import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/dana-point-mortgage-broker";
  const title = "Mortgage Broker in Dana Point, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Dana Point, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Dana Point, Orange County, CA. Contact us today.",
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

const danaPointData = {
  name: 'Dana Point',
  slug: 'dana-point-mortgage-broker',
  population: 33107,
  medianHomePrice: 1485000,
  medianHouseholdIncome: 98700,
  averageLoanAmount: 1188000,
  topNeighborhoods: [
    'Dana Point Harbor',
    'Monarch Beach',
    'Capistrano Beach',
    'Lantern Village',
    'Sea Canyon',
    'Niguel Summit'
  ],
  marketTrends: {
    priceGrowth: '5.8% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 38
  },
  localFactors: [
    'Harbor community',
    'Luxury resorts',
    'Beach access',
    'Scenic coastal views'
  ],
  keywordPhrase: 'Dana Point mortgage broker'

export default function DanaPointMortgageBrokerPage() {
  return <CityPageTemplate cityData={danaPointData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/dana-point-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
