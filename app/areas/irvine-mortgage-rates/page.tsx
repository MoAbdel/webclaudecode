import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/irvine-mortgage-rates";
  const title = "Mortgage Broker in Irvine, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Irvine, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Irvine, Orange County, CA. Contact us today.",
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

const irvineData = {
  name: 'Irvine',
  slug: 'irvine-mortgage-rates',
  population: 307000,
  medianHomePrice: 1450000,
  medianHouseholdIncome: 108000,
  averageLoanAmount: 1160000,
  topNeighborhoods: [
    'Turtle Rock',
    'Woodbridge',
    'University Park',
    'Quail Hill',
    'Cypress Village'
  ],
  marketTrends: {
    priceGrowth: '5.2% annually',
    inventoryLevel: 'Very Competitive',
    averageDaysOnMarket: 25
  },
  localFactors: [
    'World-class schools',
    'UCI proximity',
    'Master-planned communities',
    'Tech hub location'
  ],
  keywordPhrase: 'Irvine mortgage rates'

export default function IrvineMortgageRatesPage() {
  return <CityPageTemplate cityData={irvineData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/irvine-mortgage-rates","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
