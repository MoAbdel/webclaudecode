import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/laguna-beach-mortgage-broker";
  const title = "Mortgage Broker in Laguna Beach, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Laguna Beach, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Laguna Beach, Orange County, CA. Contact us today.",
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

const lagunaBeachData = {
  name: 'Laguna Beach',
  slug: 'laguna-beach-mortgage-broker',
  population: 23032,
  medianHomePrice: 2150000,
  medianHouseholdIncome: 105600,
  averageLoanAmount: 1720000,
  topNeighborhoods: [
    'Village Laguna',
    'Top of the World',
    'Woods Cove',
    'Emerald Bay',
    'Irvine Cove',
    'Three Arch Bay'
  ],
  marketTrends: {
    priceGrowth: '6.2% annually',
    inventoryLevel: 'Very Limited',
    averageDaysOnMarket: 45
  },
  localFactors: [
    'Luxury coastal community',
    'Art galleries and festivals',
    'Pristine beaches',
    'Strict development limits'
  ],
  keywordPhrase: 'Laguna Beach mortgage broker'

export default function LagunaBeachMortgageBrokerPage() {
  return <CityPageTemplate cityData={lagunaBeachData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/laguna-beach-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
