import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/costa-mesa-mortgage-rates";
  const title = "Mortgage Broker in Costa Mesa, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Costa Mesa, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Costa Mesa, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

}
\n\nimport type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

const costaMesaData = {
  name: 'Costa Mesa',
  slug: 'costa-mesa-mortgage-rates',
  population: 115000,
  medianHomePrice: 875000,
  medianHouseholdIncome: 78000,
  averageLoanAmount: 700000,
  topNeighborhoods: [
    'Mesa Verde',
    'Eastside Costa Mesa',
    'South Coast Metro',
    'Westside Costa Mesa'
  ],
  marketTrends: {
    priceGrowth: '5.1% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 35
  },
  localFactors: [
    'Central OC location',
    'Mixed housing types',
    'Business hub proximity',
    'Growing arts district'
  ],

;export default function () {
  return (
    <>
      <CityPageTemplate cityData={} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/costa-mesa-mortgage-rates","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
    </>
  );
}
