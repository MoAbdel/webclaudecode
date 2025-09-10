import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/fullerton-mortgage-broker";
  const title = "Mortgage Broker in Fullerton, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Fullerton, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Fullerton, Orange County, CA. Contact us today.",
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

const fullertonData = {
  name: 'Fullerton',
  slug: 'fullerton-mortgage-broker',
  population: 143617,
  medianHomePrice: 875000,
  medianHouseholdIncome: 82500,
  averageLoanAmount: 700000,
  topNeighborhoods: [
    'Downtown Fullerton',
    'Sunny Hills',
    'Raymond Hills',
    'Hillcrest',
    'Wilshire',
    'Valencia Mesa'
  ],
  marketTrends: {
    priceGrowth: '4.2% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Cal State Fullerton proximity',
    'Strong rental market',
    'Transportation hub',
    'Historic downtown district'
  ],
  keywordPhrase: 'Fullerton mortgage broker'

export default function FullertonMortgageBrokerPage() {
  return <CityPageTemplate cityData={fullertonData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/fullerton-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
