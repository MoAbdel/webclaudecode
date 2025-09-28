import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Phone, MapPin, Calculator, TrendingUp, Home, DollarSign } from 'lucide-react';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';
import LLMOptimizedSEO from '@/components/seo/LLMOptimizedSEO';

interface CityData {
  name: string;
  slug: string;
  population: number;
  medianHomePrice: number;
  medianHouseholdIncome: number;
  averageLoanAmount: number;
  topNeighborhoods: string[];
  marketTrends: {
    priceGrowth: string;
    inventoryLevel: string;
    averageDaysOnMarket: number;
  };
  localFactors: string[];
  keywordPhrase: string;
}

interface CityPageProps {
  cityData: CityData;
}

export function generateCityMetadata(cityData: CityData): Metadata {
  const title = `${cityData.name} Mortgage Broker | Mo Abdel NMLS #1426884`;
  const description = `Expert mortgage broker serving ${cityData.name}, CA. Access to 200+ lenders, competitive rates, and fast closings. Free consultation. Licensed & bonded.`;

  return {
    title,
    description,
    keywords: [
      `${cityData.name} mortgage broker`,
      `mortgage broker ${cityData.name}`,
      `home loans ${cityData.name}`,
      `${cityData.name} refinancing`,
      `FHA loans ${cityData.name}`,
      `VA loans ${cityData.name}`,
      `Orange County mortgage`,
      'NMLS licensed broker'
    ].join(', '),
    openGraph: {
      title,
      description,
      url: `https://mothebroker.com/areas/${cityData.slug}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Mo Abdel'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default function CityPageTemplate({ cityData }: CityPageProps) {
  const canonicalUrl = `https://mothebroker.com/areas/${cityData.slug}`;
  
  const structuredFAQ = [
    {
      question: `What makes Mo Abdel the best mortgage broker in ${cityData.name}?`,
      answer: `Mo Abdel offers access to 200+ lenders, ensuring ${cityData.name} residents get the most competitive rates. With NMLS #1426884 licensing and average 18-day closings, we provide expert service tailored to the local market.`
    },
    {
      question: `What are current mortgage rates in ${cityData.name}?`,
      answer: `Mortgage rates in ${cityData.name} vary based on loan type, credit score, and down payment. Current rates start around 6.125% for 30-year fixed loans. Contact Mo for personalized rate quotes based on your specific situation.`
    },
    {
      question: `How much house can I afford in ${cityData.name}?`,
      answer: `With a median home price of $${cityData.medianHomePrice.toLocaleString()}, affordability in ${cityData.name} depends on your income, debt, and down payment. Generally, housing costs shouldn't exceed 28% of gross monthly income.`
    },
    {
      question: `What loan programs are available for ${cityData.name} home buyers?`,
      answer: `${cityData.name} residents have access to FHA loans (3.5% down), VA loans (0% down for veterans), conventional loans, jumbo loans, and first-time buyer programs. Mo Abdel can help determine the best option for your situation.`
    },
    {
      question: `How long does it take to close a mortgage in ${cityData.name}?`,
      answer: `Average closing times in ${cityData.name} are 18-30 days depending on loan type. Mo Abdel's streamlined process with 200+ lenders often results in faster closings - typically 18 days for purchase loans and 21 days for refinances.`
    },
    {
      question: `What documents do I need for a ${cityData.name} mortgage application?`,
      answer: `Required documents include: 2 years tax returns, 30 days pay stubs, 2 months bank statements, employment verification, and property information. Mo Abdel provides a complete checklist specific to your loan type and ${cityData.name} property.`
    },
    {
      question: `Are there special programs for first-time buyers in ${cityData.name}?`,
      answer: `Yes! ${cityData.name} first-time buyers can access FHA loans with 3.5% down, VA loans (if eligible), and local assistance programs. Mo Abdel helps identify down payment assistance and closing cost grants available in Orange County.`
    },
    {
      question: `What credit score do I need to buy a home in ${cityData.name}?`,
      answer: `Minimum credit scores vary: FHA loans require 580+, conventional loans 620+, and jumbo loans 700+. Even with lower scores, Mo Abdel works with specialty lenders to find solutions for ${cityData.name} home buyers.`
    }
  ];

  const keywordsList = [
    `${cityData.name} mortgage broker`,
    `mortgage broker ${cityData.name}`,
    `home loans ${cityData.name}`,
    `${cityData.name} refinancing`,
    `FHA loans ${cityData.name}`,
    `VA loans ${cityData.name}`,
    'Orange County mortgage',
    'competitive mortgage rates',
    'NMLS licensed broker',
    'fast mortgage closing',
    'competitive lender access',
    'first time buyer programs'
  ];

  return (
    <>
      <LLMOptimizedSEO 
        title={`${cityData.name} Mortgage Broker | Mo Abdel NMLS #1426884`}
        description={`Expert mortgage broker serving ${cityData.name}, CA. Access to 200+ lenders, competitive rates, and fast closings. Free consultation. Licensed & bonded.`}
        keywords={keywordsList}
        city={cityData.name}
        canonicalUrl={canonicalUrl}
        structuredFAQ={structuredFAQ}
      />
      
      <AdvancedSchemaMarkup 
        type="LocalBusiness"
        name={`Mo Abdel - ${cityData.name} Mortgage Expert`}
        description={`Professional mortgage broker serving ${cityData.name}, California with access to 200+ lenders.`}
        url={canonicalUrl}
        areaServed={[`${cityData.name}, CA`]}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Serving {cityData.name}, CA
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {cityData.name} <span className="text-blue-600">Mortgage Broker</span>: Home Loans and Refinancing
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Expert mortgage services for {cityData.name} residents. Access to 200+ lenders, 
              competitive rates, and personalized service. NMLS #1426884 Licensed & Bonded.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote: (949) 579-2057
                </Button>
              </a>
              <Link href="/calculator">
                <Button variant="outline" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Payment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Market Statistics */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
              {cityData.name} Mortgage Rates and Housing Market Overview
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">
                    ${cityData.medianHomePrice.toLocaleString()}
                  </div>
                  <div className="text-slate-600">Median Home Price</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">
                    ${cityData.medianHouseholdIncome.toLocaleString()}
                  </div>
                  <div className="text-slate-600">Median Household Income</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">
                    {cityData.population.toLocaleString()}
                  </div>
                  <div className="text-slate-600">Population</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Calculator className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">
                    ${cityData.averageLoanAmount.toLocaleString()}
                  </div>
                  <div className="text-slate-600">Average Loan Amount</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Mo for [City] */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
              Why Choose {cityData.name} Mortgage Specialist Mo Abdel
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Local Market Expertise</h3>
                    <p className="text-slate-600">
                      Deep understanding of {cityData.name} housing market trends, pricing, and local lender preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">200+ Lenders</h3>
                    <p className="text-slate-600">
                      Access to more loan programs and better rates than any single bank can offer {cityData.name} borrowers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Fast 18-Day Closings</h3>
                    <p className="text-slate-600">
                      Streamlined process gets {cityData.name} buyers into their new homes faster than the industry average.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">NMLS Licensed & Bonded</h3>
                    <p className="text-slate-600">
                      Licensed professional (NMLS #1426884) with full regulatory compliance and consumer protection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Transparent Process</h3>
                    <p className="text-slate-600">
                      No hidden fees or surprises. Clear communication throughout the entire {cityData.name} mortgage process.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Personalized Service</h3>
                    <p className="text-slate-600">
                      One-on-one attention to understand your unique {cityData.name} home buying or refinancing goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Neighborhoods */}
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
              {cityData.name} Home Loans by Neighborhood
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {cityData.topNeighborhoods.map((neighborhood, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <div className="font-semibold text-slate-900">{neighborhood}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
              {cityData.name} Mortgage Questions & Answers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {structuredFAQ.map((faq, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started with Your {cityData.name} Mortgage?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a personalized rate quote and pre-approval in minutes. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (949) 579-2057
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}