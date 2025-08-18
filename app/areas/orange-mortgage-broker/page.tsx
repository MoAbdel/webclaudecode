import React from 'react';
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
};

export const metadata: Metadata = generateCityMetadata(orangeData);

export default function OrangeMortgageBrokerPage() {
  return <CityPageTemplate cityData={orangeData} />;
}