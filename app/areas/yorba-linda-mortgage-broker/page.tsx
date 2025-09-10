import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/yorba-linda-mortgage-broker";
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
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

const yorbaLindaData = {
  name: 'Yorba Linda',
  slug: 'yorba-linda-mortgage-broker',
  population: 68103,
  medianHomePrice: 1125000,
  medianHouseholdIncome: 126800,
  averageLoanAmount: 900000,
  topNeighborhoods: [
    'Brush Canyon',
    'Fairmont',
    'East Lake Village',
    'Yorba Linda Boulevard',
    'Savi Ranch',
    'Country Club'
  ],
  marketTrends: {
    priceGrowth: '5.1% annually',
    inventoryLevel: 'Limited',
    averageDaysOnMarket: 20
  },
  localFactors: [
    'Land of Gracious Living',
    'Nixon Presidential Library',
    'Excellent schools',
    'Spacious lots'
  ],
  keywordPhrase: 'Yorba Linda mortgage broker'

export default function YorbaLindaMortgageBrokerPage() {
  return <CityPageTemplate cityData={yorbaLindaData} />;

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com/areas/yorba-linda-mortgage-broker","areaServed":"Orange County, CA","telephone":"(949) 579-2057","image":"https://www.mothebroker.com/logo.png","sameAs":["https://www.facebook.com/profile.php?id=61573517340174","https://www.instagram.com/mo_thebroker/","https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest","https://www.zillow.com/lender-profile/mabdel0/","https://maps.google.com/?cid=KsoqAEbkqoKiBVjgz"]})
}} />
