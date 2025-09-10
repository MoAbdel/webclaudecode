import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import CityPageTemplate, { generateCityMetadata } from '@/components/seo/CityPageTemplate';

export async function generateMetadata() {
  const path = "/areas/westminster-mortgage-broker";
  const title = "Mortgage Broker in Westminster, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Westminster, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Westminster, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

const westminsterData = {
  name: 'Westminster',
  slug: 'westminster-mortgage-broker',
  population: 90857,
  medianHomePrice: 765000,
  medianHouseholdIncome: 71200,
  averageLoanAmount: 612000,
  topNeighborhoods: [
    'Little Saigon',
    'Midway City',
    'Bolsa',
    'Westminster Mall Area',
    'Sigler Park',
    'Westminster High'
  ],
  marketTrends: {
    priceGrowth: '3.8% annually',
    inventoryLevel: 'Good',
    averageDaysOnMarket: 32
  },
  localFactors: [
    'Diverse community',
    'Affordable by OC standards',
    'Vietnamese cultural center',
    'Good freeway access'
  ],
  keywordPhrase: 'Westminster mortgage broker'
};

export default function WestminsterMortgageBrokerPage() {
  return <CityPageTemplate cityData={westminsterData} />;
}


