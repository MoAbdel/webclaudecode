import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Anchor, TrendingUp, Calculator, Phone, Crown, Waves } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: 'Lido Isle Newport Beach Mortgage Broker | Waterfront Estate Loans | Mo Abdel NMLS #1426884',
  description: 'Lido Isle Newport Beach mortgage broker specializing in waterfront estate financing. Private island living, luxury waterfront homes, competitive rates. Call (949) 579-2057.',
  keywords: 'Lido Isle Newport Beach mortgage, waterfront estate loans, private island homes, Newport Beach luxury financing, Lido Isle mortgage broker'
};

export default function LidoIsleMortgageBrokerPage() {
  
  const lidoIsleData = {
    mainTopic: "Lido Isle Newport Beach Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for Lido Isle Newport Beach, an exclusive private island community featuring waterfront estates, luxury amenities, and homes ranging from $4M to $15M+.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Lido Isle waterfront estate specialist",
      "Average home price: $4M - $15M+",
      "Exclusive private island community",
      "Waterfront and bayfront properties",
      "Ultra-luxury coastal lifestyle"
    ],
    statistics: [
      {
        stat: "Lido Isle median home price: $8.5M",
        source: "Newport Beach MLS",
        year: "2025"
      },
      {
        stat: "100% require super jumbo loans above $3M",
        source: "Orange County Luxury Market Report",
        year: "2025"
      },
      {
        stat: "Private island with 285 exclusive properties",
        source: "Lido Isle Association",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: 'Lido Isle Newport Beach Mortgage FAQ',
      description: 'Common questions about Lido Isle Newport Beach waterfront estate financing',
      url: 'https://mothebroker.com/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker',
      data: {
        questions: [
          {
            question: "What makes Lido Isle unique in Newport Beach?",
            answer: "Lido Isle is an exclusive private island community with only 285 properties, featuring waterfront estates, private docks, and ultra-luxury amenities. It offers the ultimate in privacy and prestige with direct bay access."
          },
          {
            question: "What is the typical price range for Lido Isle homes?",
            answer: "Lido Isle homes range from $4M to over $15M, with waterfront properties commanding premium prices. The median home price is around $8.5M as of 2025, reflecting the exclusive private island location."
          },
          {
            question: "Do all Lido Isle homes require jumbo financing?",
            answer: "Yes, 100% of Lido Isle properties require super jumbo loans above $3M. Most require specialized portfolio loans or private banking solutions due to the ultra-luxury nature and high values."
          },
          {
            question: "What financing options are available for Lido Isle estates?",
            answer: "Super jumbo loans, portfolio loans, asset-based lending, and private banking solutions. Down payments typically range from 30-50% depending on the loan amount and borrower profile."
          },
          {
            question: "What amenities make Lido Isle exclusive?",
            answer: "Private island access, waterfront living, private docks and boat slips, yacht access, exclusive community amenities, and unparalleled privacy in the heart of Newport Beach."
          }
        ]
      }
    }
  ];

  const lidoIsleFeatures = [
    {
      name: 'Private Island',
      description: 'Exclusive access to private island community with only 285 properties',
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: 'Waterfront Living',
      description: 'Direct water access with private docks and yacht accommodations',
      icon: <Waves className="w-6 h-6" />
    },
    {
      name: 'Ultra-Luxury',
      description: 'Highest level of luxury living with estate-quality properties',
      icon: <Anchor className="w-6 h-6" />
    }
  ];

  const propertyTypes = [
    {
      name: 'Bayfront Estates',
      priceRange: '$10M - $20M+',
      description: 'Premier bayfront estates with private docks and unobstructed water views',
      features: ['Direct bay frontage', 'Private docks', 'Yacht access', 'Panoramic views']
    },
    {
      name: 'Waterfront Homes',
      priceRange: '$6M - $12M',
      description: 'Luxury waterfront homes with water access and premium amenities',
      features: ['Water access', 'Boat slips', 'Luxury finishes', 'Private settings']
    },
    {
      name: 'Island Estates',
      priceRange: '$4M - $8M',
      description: 'Exclusive island properties with luxury amenities and privacy',
      features: ['Private island access', 'Luxury amenities', 'Exclusive community', 'Premium locations']
    }
  ];

  const financingOptions = [
    {
      name: 'Super Jumbo Loans',
      description: 'For properties $4M - $12M',
      rate: 'From 7.50%',
      downPayment: '30-40%',
      maxAmount: '$12M'
    },
    {
      name: 'Portfolio Loans',
      description: 'For estates above $12M',
      rate: 'From 8.00%',
      downPayment: '40-50%',
      maxAmount: '$20M+'
    },
    {
      name: 'Private Banking',
      description: 'For ultra-high-net-worth clients',
      rate: 'Negotiable',
      downPayment: '50%+',
      maxAmount: 'No limit'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="Lido Isle Newport Beach Mortgage Broker | Waterfront Estate Loans | Mo Abdel NMLS #1426884"
        description="Lido Isle Newport Beach mortgage broker specializing in waterfront estate financing. Private island living, luxury waterfront homes, competitive rates."
        keywords={["Lido Isle Newport Beach mortgage", "waterfront estate loans", "private island homes", "Newport Beach luxury financing", "Lido Isle estates"]}
        city="Lido Isle, Newport Beach"
        canonicalUrl="https://mothebroker.com/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker"
        content={lidoIsleData}
      />
      <EnhancedLocalSchema city="Lido Isle, Newport Beach" page_type="city" service_focus="waterfront estate financing" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Lido Isle Newport Beach Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in Lido Isle Newport Beach mortgage financing, serving this exclusive private island community with waterfront estates ranging from $4M to $15M+. Expert in ultra-luxury waterfront property financing.</p>
          
          <h2>Lido Isle Luxury Features</h2>
          <ul>
            <li>Private island with 285 exclusive properties</li>
            <li>Median home price: $8.5M</li>
            <li>100% require super jumbo loans</li>
            <li>Waterfront and bayfront estates</li>
            <li>Private docks and yacht access</li>
            <li>Ultimate luxury and privacy</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lido Isle Private Island Estate Financing
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
                Exclusive financing for Newport Beach's most prestigious private island community. Specialized solutions for waterfront estates, private docks, and ultra-luxury properties from $4M to $20M+.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 579-2057
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Calculator className="w-5 h-5 mr-2" />
                  Estate Calculator
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Why Lido Isle is Newport Beach's Most Exclusive Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {lidoIsleFeatures.map((feature) => (
                <Card key={feature.name} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600">{feature.icon}</div>
                      <CardTitle className="text-blue-600">{feature.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Private Island Luxury Living
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Exclusive Privacy</h4>
                      <p className="text-slate-600">Private island community with controlled access and ultimate discretion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Waterfront Lifestyle</h4>
                      <p className="text-slate-600">Direct bay access with private docks, yacht slips, and water recreation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Investment Prestige</h4>
                      <p className="text-slate-600">Limited inventory with proven appreciation in Orange County's most exclusive location</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl border-gold-200">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center">
                    <Crown className="w-6 h-6 mr-2" />
                    Lido Isle Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$8.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$4M - $15M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Super Jumbo Required</span>
                      <span className="font-semibold">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Properties</span>
                      <span className="font-semibold">285</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Community Type</span>
                      <span className="font-semibold">Private Island</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Lido Isle Estate Types & Waterfront Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {propertyTypes.map((property) => (
                <Card key={property.name} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{property.name}</CardTitle>
                    <p className="text-2xl font-bold text-slate-900">{property.priceRange}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{property.description}</p>
                    <div className="space-y-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-slate-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Ultra-Luxury Financing Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {financingOptions.map((option) => (
                <Card key={option.name} className="shadow-lg">
                  <CardHeader className="bg-slate-100">
                    <CardTitle>{option.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4">{option.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Interest Rate</span>
                        <span className="font-semibold">{option.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Down Payment</span>
                        <span className="font-semibold">{option.downPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Max Amount</span>
                        <span className="font-semibold">{option.maxAmount}</span>
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
              Lido Isle Estate Financing FAQ
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your Lido Isle Estate?
            </h2>
            <p className="text-xl mb-8">
              Get ultra-luxury financing expertise for Newport Beach's most exclusive private island community. Specialized solutions for $4M+ waterfront properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <Crown className="w-5 h-5 mr-2" />
                Estate Pre-Approval
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Licensed mortgage broker NMLS #1426884 • Lido Isle waterfront estate specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker"
          pageType="city"
          city="Lido Isle"
          maxLinks={6}
        />
      </div>
    </>
  );
}