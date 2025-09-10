import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

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

}

}

import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

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

export default function OrangeMortgageBrokerPage() {
  return <CityPageTemplate cityData={orangeData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/orange-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
