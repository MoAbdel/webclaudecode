import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

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
};

export default function YorbaLindaMortgageBrokerPage() {
  return <CityPageTemplate cityData={yorbaLindaData} />;
}


