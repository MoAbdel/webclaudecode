import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/laguna-niguel-mortgage-broker";
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

}

}

import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const lagunaNiguelData = {
  name: 'Laguna Niguel',
  slug: 'laguna-niguel-mortgage-broker',
  population: 64355,
  medianHomePrice: 1095000,
  medianHouseholdIncome: 107300,
  averageLoanAmount: 876000,
  topNeighborhoods: [
    'Bear Brand Ranch',
    'Coronado Pointe',
    'Sea Country',
    'Laguna Niguel Regional Park',
    'Moulton Ranch',
    'Golden Lantern'
  ],
  marketTrends: {
    priceGrowth: '4.9% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 30
  },
  localFactors: [
    'Master-planned community',
    'Excellent schools',
    'Golf courses',
    'Family-oriented'
  ],
  keywordPhrase: 'Laguna Niguel mortgage broker'

export default function LagunaNiguelMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaNiguelData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/laguna-niguel-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
