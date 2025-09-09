import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Building, TrendingUp, Calculator, Phone, Hash, Crown } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: '92660 Newport Beach Mortgage Broker | ZIP Code Specialist | Mo Abdel NMLS #1426884',
  description: '92660 Newport Beach mortgage broker serving this luxury ZIP code area. Corona del Mar, Fashion Island area financing, competitive rates. Call (949) 579-2057.',
  keywords: '92660 mortgage broker, 92660 home loans, Newport Beach 92660 financing, ZIP code 92660 mortgage specialist'
};

export default function ZipCode92660MortgageBrokerPage() {
  
  const zipCodeData = {
    mainTopic: "92660 Newport Beach Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for ZIP code 92660 in Newport Beach, covering prestigious areas including Corona del Mar and Fashion Island vicinity, with luxury homes ranging from $2M to $15M+.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "92660 ZIP code luxury specialist",
      "Covers Corona del Mar and Fashion Island area",
      "Luxury coastal and shopping district properties",
      "Premium Newport Beach location",
      "Personalized high-end service"
    ],
    statistics: [
      {
        stat: "92660 median home price: $4.8M",
        source: "Newport Beach MLS Data",
        year: "2025"
      },
      {
        stat: "98% of 92660 homes require jumbo loans",
        source: "Orange County Housing Analysis",
        year: "2025"
      },
      {
        stat: "ZIP code includes Fashion Island shopping district",
        source: "Newport Beach City Planning",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: '92660 Newport Beach Mortgage FAQ',
      description: 'Common questions about 92660 ZIP code luxury home financing',
      url: 'https://mothebroker.com/zip-codes/92660-newport-beach-mortgage-broker',
      data: {
        questions: [
          {
            question: "What areas does ZIP code 92660 cover in Newport Beach?",
            answer: "ZIP code 92660 covers Corona del Mar, portions near Fashion Island shopping center, and other prestigious Newport Beach areas. This is one of the most desirable and expensive ZIP codes in Orange County."
          },
          {
            question: "What is the typical home price range in 92660?",
            answer: "92660 Newport Beach homes range from $2M condos to $15M+ estates, with a median price around $4.8M. Beachside and Fashion Island area properties command premium pricing."
          },
          {
            question: "Do most homes in 92660 require jumbo loans?",
            answer: "98% of homes in ZIP code 92660 exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo or super jumbo loan financing. Many properties require specialized luxury financing programs."
          },
          {
            question: "What makes 92660 a desirable ZIP code?",
            answer: "92660 offers luxury coastal living, proximity to Corona del Mar State Beach, Fashion Island shopping, fine dining, top schools, and prestigious Newport Beach addresses with excellent investment potential."
          }
        ]
      }
    }
  ];

  const areasIn92660 = [
    {
      name: 'Corona del Mar',
      description: 'Prestigious beachside community with luxury coastal homes',
      priceRange: '$3M - $12M+',
      homeTypes: 'Luxury coastal homes, beachside estates'
    },
    {
      name: 'Fashion Island Area',
      description: 'Upscale properties near premier shopping and dining',
      priceRange: '$2.5M - $8M',
      homeTypes: 'Luxury condos, upscale townhomes'
    },
    {
      name: 'Newport Center',
      description: 'High-rise luxury living with harbor and ocean views',
      priceRange: '$1.5M - $6M',
      homeTypes: 'Luxury condos, penthouses'
    },
    {
      name: 'Residential Districts',
      description: 'Established luxury neighborhoods with custom homes',
      priceRange: '$2M - $5M',
      homeTypes: 'Custom homes, luxury properties'
    }
  ];

  const loanPrograms92660 = [
    {
      name: 'Jumbo Loans',
      description: 'For luxury properties $1M-$3M',
      bestFor: 'Mid-range luxury homes',
      downPayment: '20-30%'
    },
    {
      name: 'Super Jumbo Loans',
      description: 'For estates above $3M',
      bestFor: 'High-end luxury properties',
      downPayment: '30-40%'
    },
    {
      name: 'Portfolio Loans',
      description: 'For unique luxury properties',
      bestFor: 'Ultra-luxury estates',
      downPayment: '40-50%'
    },
    {
      name: 'Asset-Based Lending',
      description: 'For high-net-worth individuals',
      bestFor: 'Alternative qualification',
      downPayment: '50%+'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="92660 Newport Beach Mortgage Broker | ZIP Code Specialist | Mo Abdel NMLS #1426884"
        description="92660 Newport Beach mortgage broker serving this luxury ZIP code area. Corona del Mar, Fashion Island area financing, competitive rates."
        keywords={["92660 mortgage broker", "92660 home loans", "Newport Beach 92660 financing", "ZIP code mortgage specialist"]}
        city="92660, Newport Beach"
        canonicalUrl="https://mothebroker.com/zip-codes/92660-newport-beach-mortgage-broker"
        content={zipCodeData}
      />
      <EnhancedLocalSchema city="92660, Newport Beach" page_type="city" service_focus="luxury ZIP code specific mortgage services" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>92660 Newport Beach Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in ZIP code 92660 Newport Beach mortgage services, covering luxury areas including Corona del Mar and Fashion Island vicinity with homes ranging from $2M to $15M+. Expert local market knowledge for this premium ZIP code.</p>
          
          <h2>92660 ZIP Code Coverage</h2>
          <ul>
            <li>Corona del Mar beachside community</li>
            <li>Fashion Island shopping area</li>
            <li>Median home price: $4.8M</li>
            <li>98% require jumbo loans</li>
            <li>Luxury coastal and shopping district</li>
            <li>Premium Newport Beach addresses</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Hash className="w-8 h-8 text-blue-600 mr-2" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  92660 Newport Beach Luxury Specialist
                </h1>
              </div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Dedicated mortgage broker serving ZIP code 92660 in Newport Beach. Luxury expertise for Corona del Mar, Fashion Island area, and prestigious coastal properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:(949) 579-2057">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (949) 579-2057
                  </Button>
                </a>
                <a href="/calculator">
                  <Button variant="outline" size="lg" className="w-full">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Payment
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ZIP Code Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why Choose a 92660 ZIP Code Specialist?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Luxury Market Expertise</h3>
                      <p className="text-slate-600">Deep understanding of 92660's premium market conditions and luxury property financing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Crown className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">High-End Property Experience</h3>
                      <p className="text-slate-600">Specialized in luxury homes, beachside estates, and ultra-premium properties</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Market Intelligence</h3>
                      <p className="text-slate-600">Current insights on 92660 luxury market trends and premium financing options</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  <CardTitle className="flex items-center">
                    <Hash className="w-6 h-6 mr-2" />
                    92660 Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$4.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$2M - $15M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jumbo Loans Required</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Key Areas</span>
                      <span className="font-semibold">Corona del Mar, Fashion Island</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Property Types</span>
                      <span className="font-semibold">Luxury & Ultra-Luxury</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas within 92660 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Premium Areas Within ZIP Code 92660
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areasIn92660.map((area) => (
                <Card key={area.name} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600 text-lg">{area.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm mb-3">{area.description}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-slate-500">Price Range:</span>
                        <span className="font-semibold ml-1">{area.priceRange}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Home Types:</span>
                        <span className="font-semibold ml-1">{area.homeTypes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Premium Loan Programs for 92660 Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanPrograms92660.map((program) => (
                <Card key={program.name} className="shadow-lg">
                  <CardHeader className="bg-slate-100">
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Best For:</span>
                        <span className="font-semibold">{program.bestFor}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Down Payment:</span>
                        <span className="font-semibold">{program.downPayment}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              92660 ZIP Code Luxury Financing FAQ
            </h2>
            <div className="space-y-8">
              {schemaData[0]?.data?.questions?.map((faq: any, index: number) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your 92660 Luxury Home?
            </h2>
            <p className="text-xl mb-8">
              Get specialized luxury financing expertise for ZIP code 92660. Local knowledge, premium service, competitive rates for Newport Beach's finest properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 579-2057
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 w-full">
                  <Crown className="w-5 h-5 mr-2" />
                  Luxury Pre-Approval
                </Button>
              </a>
            </div>
            <p className="text-sm text-amber-200 mt-4">
              Licensed mortgage broker NMLS #1426884 • 92660 ZIP code luxury specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/zip-codes/92660-newport-beach-mortgage-broker"
          pageType="city"
          city="92660 Newport Beach"
          maxLinks={6}
        />
      </div>
    </>
  );
}



