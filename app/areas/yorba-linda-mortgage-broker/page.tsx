import React from 'react';
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
};

export const metadata: Metadata = generateCityMetadata(yorbaLindaData);

export default function YorbaLindaMortgageBrokerPage() {
  return <CityPageTemplate cityData={yorbaLindaData} />;
}