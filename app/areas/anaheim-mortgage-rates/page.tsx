import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";

export async function generateMetadata() {
  const path = "/areas/anaheim-mortgage-rates";
  const title = "Mortgage Broker in Anaheim, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Anaheim, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Anaheim, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

}
\n\nimport type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

const anaheimData = {
  name: 'Anaheim',
  slug: 'anaheim-mortgage-rates',
  population: 354000,
  medianHomePrice: 775000,
  medianHouseholdIncome: 67800,
  averageLoanAmount: 620000,
  topNeighborhoods: [
    'Anaheim Hills',
    'Downtown Anaheim',
    'Canyon Area',
    'West Anaheim'
  ],
  marketTrends: {
    priceGrowth: '3.8% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 32
  },
  localFactors: [
    'Disney area proximity',
    'Sports venues nearby',
    'Diverse housing options',
    'Strong rental market'
  ],
  keywordPhrase: 'Anaheim mortgage rates'\n};\n\nexport default function AnaheimMortgageRatesPage() {\n  return (\n    <>\n      <CityPageTemplate cityData={anaheimData} />\n      <script/>\n    
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Mo Abdel — Mortgage Broker",
      url: CANONICAL_BASE + "/areas/anaheim-mortgage-rates",
      logo: LOGO,
      telephone: TELEPHONE,
      areaServed: ["Anaheim, CA", AREA_SERVED],
      sameAs: PROFILES,
    }),
  }}
/>
</>\n  );\n}
