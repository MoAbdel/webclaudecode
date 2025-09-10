import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/yorba-linda-mortgage-rates";
  const title = "Mortgage Broker in Yorba Linda, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Yorba Linda, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Yorba Linda, Orange County, CA. Contact us today.",
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

const yorbaLindaData = {
  name: 'Yorba Linda',
  slug: 'yorba-linda-mortgage-rates',
  population: 68000,
  medianHomePrice: 1280000,
  medianHouseholdIncome: 125000,
  averageLoanAmount: 1025000,
  topNeighborhoods: [
    'Yorba Linda Estates',
    'Country Club Village',
    'Fairmont Village',
    'Hidden Hills'
  ],
  marketTrends: {
    priceGrowth: '4.2% annually',
    inventoryLevel: 'Very Limited',
    averageDaysOnMarket: 28
  },
  localFactors: [
    'Excellent schools (PYLUSD)',
    'Rural suburban character',
    'Large estate lots',
    'Presidential library proximity'
  ],
  keywordPhrase: 'Yorba Linda mortgage rates'

export default function YorbaLindaMortgageRatesPage() {
  return <CityPageTemplate cityData={yorbaLindaData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/yorba-linda-mortgage-rates","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
