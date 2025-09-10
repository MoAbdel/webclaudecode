import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/fountain-valley-mortgage-broker";
  const title = "Mortgage Broker in Fountain Valley, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Fountain Valley, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Fountain Valley, Orange County, CA. Contact us today.",
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

const fountainValleyData = {
  name: 'Fountain Valley',
  slug: 'fountain-valley-mortgage-broker',
  population: 57047,
  medianHomePrice: 865000,
  medianHouseholdIncome: 89200,
  averageLoanAmount: 692000,
  topNeighborhoods: [
    'Brookhurst',
    'Mile Square',
    'Talbert',
    'Warner',
    'Slater',
    'Ellis'
  ],
  marketTrends: {
    priceGrowth: '4.1% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 25
  },
  localFactors: [
    'Family-friendly community',
    'Mile Square Regional Park',
    'Excellent schools',
    'Safe neighborhoods'
  ],
  keywordPhrase: 'Fountain Valley mortgage broker'

export default function FountainValleyMortgageBrokerPage() {
  return <CityPageTemplate cityData={fountainValleyData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/fountain-valley-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
