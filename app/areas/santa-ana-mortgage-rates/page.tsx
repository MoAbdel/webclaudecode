import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/santa-ana-mortgage-rates";
  const title = "Mortgage Broker in Santa Ana, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Santa Ana, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Santa Ana, Orange County, CA. Contact us today.",
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

const santaAnaData = {
  name: 'Santa Ana',
  slug: 'santa-ana-mortgage-rates',
  population: 332000,
  medianHomePrice: 725000,
  medianHouseholdIncome: 58900,
  averageLoanAmount: 580000,
  topNeighborhoods: [
    'Downtown Santa Ana',
    'Floral Park',
    'Park Santiago',
    'French Park',
    'South Coast Metro'
  ],
  marketTrends: {
    priceGrowth: '4.1% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Urban revitalization',
    'Arts district growth',
    'County government seat',
    'Diverse communities'
  ],
  keywordPhrase: 'Santa Ana mortgage rates'

export default function SantaAnaMortgageRatesPage() {
  return <CityPageTemplate cityData={santaAnaData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/santa-ana-mortgage-rates","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
