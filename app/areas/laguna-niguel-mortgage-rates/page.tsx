import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/laguna-niguel-mortgage-rates";
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
import CityPageTemplate from '@/components/seo/CityPageTemplate';

const lagunaNiguelData = {
  name: 'Laguna Niguel',
  slug: 'laguna-niguel-mortgage-rates',
  population: 65000,
  medianHomePrice: 1150000,
  medianHouseholdIncome: 92000,
  averageLoanAmount: 920000,
  topNeighborhoods: [
    'Bear Brand Ranch',
    'Crown Valley',
    'Niguel Summit',
    'Sea Country'
  ],
  marketTrends: {
    priceGrowth: '3.8% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 32
  },
  localFactors: [
    'Master-planned communities',
    'Excellent schools',
    'Hillside views',
    'Luxury suburban lifestyle'
  ],
  keywordPhrase: 'Laguna Niguel mortgage rates'

export default function LagunaNiguelMortgageRatesPage() {
  return <CityPageTemplate cityData={lagunaNiguelData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/laguna-niguel-mortgage-rates","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
