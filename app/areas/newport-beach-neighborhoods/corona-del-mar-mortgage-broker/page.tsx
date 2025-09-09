import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Sun, TrendingUp, Calculator, Phone, Crown, Waves } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: 'Corona del Mar Newport Beach Mortgage Broker | Luxury Coastal Home Loans | Mo Abdel NMLS #1426884',
  description: 'Corona del Mar Newport Beach mortgage broker specializing in luxury coastal home financing. Prestigious beachside community loans, competitive rates. Call (949) 579-2057.',
  keywords: 'Corona del Mar Newport Beach mortgage, luxury coastal homes, beachside community loans, Corona del Mar mortgage broker, Newport Beach luxury financing'
};

export default function CoronaDelMarMortgageBrokerPage() {
  
  const coronaDelMarData = {
    mainTopic: "Corona del Mar Newport Beach Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for Corona del Mar Newport Beach, a prestigious beachside community featuring luxury coastal homes, excellent schools, and properties ranging from $2M to $12M+.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Corona del Mar luxury coastal specialist",
      "Average home price: $2M - $12M+",
      "Prestigious beachside community",
      "Close proximity to beaches and harbor",
      "Top-rated schools and family amenities"
    ],
    statistics: [
      {
        stat: "Corona del Mar median home price: $4.2M",
        source: "Newport Beach MLS",
        year: "2025"
      },
      {
        stat: "95% require jumbo or super jumbo loans",
        source: "Orange County Luxury Market Report",
        year: "2025"
      },
      {
        stat: "Walking distance to Corona del Mar State Beach",
        source: "Newport Beach City Planning",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: 'Corona del Mar Newport Beach Mortgage FAQ',
      description: 'Common questions about Corona del Mar Newport Beach luxury home financing',
      url: 'https://mothebroker.com/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker',
      data: {
        questions: [
          {
            question: "What makes Corona del Mar a prestigious Newport Beach community?",
            answer: "Corona del Mar offers luxury beachside living with direct beach access, top-rated schools, upscale shopping and dining, and beautiful coastal homes. It's considered one of Newport Beach's most desirable family-oriented luxury communities."
          },
          {
            question: "What is the typical price range for Corona del Mar homes?",
            answer: "Corona del Mar homes range from $2M to over $12M, with beachside and view properties commanding premium prices. The median home price is around $4.2M as of 2025."
          },
          {
            question: "Do Corona del Mar homes require jumbo financing?",
            answer: "95% of Corona del Mar homes exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo or super jumbo loan financing. Beachside properties typically require super jumbo loans."
          },
          {
            question: "What financing options are best for Corona del Mar?",
            answer: "Jumbo loans for properties $1M-$3M, super jumbo loans for luxury homes above $3M, and portfolio loans for unique or ultra-luxury properties. Down payments typically range from 20-40%."
          },
          {
            question: "What amenities make Corona del Mar attractive to families?",
            answer: "Direct beach access, top-rated Corona del Mar High School, upscale shopping at Fashion Island, fine dining, harbor activities, and family-friendly beach culture in a luxury setting."
          }
        ]
      }
    }
  ];

  const coronaDelMarFeatures = [
    {
      name: 'Beachside Living',
      description: 'Direct access to Corona del Mar State Beach and coastal lifestyle',
      icon: <Waves className="w-6 h-6" />
    },
    {
      name: 'Luxury Community',
      description: 'Prestigious neighborhood with upscale homes and amenities',
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: 'Family Excellence',
      description: 'Top-rated schools and family-oriented luxury community',
      icon: <Sun className="w-6 h-6" />
    }
  ];

  const propertyTypes = [
    {
      name: 'Beachside Estates',
      priceRange: '$8M - $20M+',
      description: 'Ultra-luxury homes with direct beach access and ocean views',
      features: ['Ocean proximity', 'Beach access', 'Luxury finishes', 'Premium locations']
    },
    {
      name: 'Luxury Family Homes',
      priceRange: '$3M - $8M',
      description: 'Upscale family homes with modern amenities and prestigious location',
      features: ['Family-focused design', 'Modern amenities', 'Top schools', 'Luxury features']
    },
    {
      name: 'Coastal Properties',
      priceRange: '$2M - $4M',
      description: 'Beautiful coastal homes with community amenities and beach access',
      features: ['Coastal living', 'Community access', 'Modern updates', 'Family-friendly']
    }
  ];

  const financingOptions = [
    {
      name: 'Jumbo Loans',
      description: 'For properties $1M - $3M',
      rate: 'From 7.25%',
      downPayment: '20-30%',
      maxAmount: '$3M'
    },
    {
      name: 'Super Jumbo Loans',
      description: 'For luxury homes $3M - $12M',
      rate: 'From 7.75%',
      downPayment: '30-40%',
      maxAmount: '$12M'
    },
    {
      name: 'Portfolio Loans',
      description: 'For ultra-luxury beachside estates',
      rate: 'From 8.25%',
      downPayment: '40-50%',
      maxAmount: '$20M+'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="Corona del Mar Newport Beach Mortgage Broker | Luxury Coastal Home Loans | Mo Abdel NMLS #1426884"
        description="Corona del Mar Newport Beach mortgage broker specializing in luxury coastal home financing. Prestigious beachside community loans, competitive rates."
        keywords={["Corona del Mar Newport Beach mortgage", "luxury coastal homes", "beachside community loans", "Corona del Mar mortgage broker", "Newport Beach luxury financing"]}
        city="Corona del Mar, Newport Beach"
        canonicalUrl="https://mothebroker.com/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker"
        content={coronaDelMarData}
      />
      <EnhancedLocalSchema city="Corona del Mar, Newport Beach" page_type="city" service_focus="luxury coastal home financing" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Corona del Mar Newport Beach Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in Corona del Mar Newport Beach mortgage financing, serving this prestigious beachside community with luxury homes ranging from $2M to $12M+. Expert in coastal luxury property financing.</p>
          
          <h2>Corona del Mar Community Features</h2>
          <ul>
            <li>Prestigious beachside community</li>
            <li>Median home price: $4.2M</li>
            <li>95% require jumbo or super jumbo loans</li>
            <li>Direct beach access to Corona del Mar State Beach</li>
            <li>Top-rated schools and family amenities</li>
            <li>Luxury coastal lifestyle</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Corona del Mar Luxury Beachside Financing
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Specialized financing for Newport Beach's most prestigious beachside community. Expert in luxury coastal homes with direct beach access, top schools, and family-oriented luxury living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 579-2057
                </Button>
                <Button variant="outline" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Payment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Corona del Mar for Luxury Beachside Living
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {coronaDelMarFeatures.map((feature) => (
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
                  Beachside Community Advantages
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Beach Access</h4>
                      <p className="text-slate-600">Direct access to Corona del Mar State Beach with pristine sand and coastal recreation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Educational Excellence</h4>
                      <p className="text-slate-600">Top-rated Corona del Mar High School and excellent educational opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Luxury Lifestyle</h4>
                      <p className="text-slate-600">Upscale shopping, fine dining, and sophisticated coastal living experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Corona del Mar Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$4.2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$2M - $12M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jumbo Loans Required</span>
                      <span className="font-semibold">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Beach Access</span>
                      <span className="font-semibold">Direct</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Community Type</span>
                      <span className="font-semibold">Luxury Beachside</span>
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
              Corona del Mar Home Types & Coastal Features
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
              Luxury Financing Solutions for Corona del Mar
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
              Corona del Mar Luxury Financing FAQ
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
        <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your Corona del Mar Home?
            </h2>
            <p className="text-xl mb-8">
              Get luxury financing expertise for Newport Beach's most prestigious beachside community. Specialized solutions for $2M+ coastal properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100">
                <Sun className="w-5 h-5 mr-2" />
                Beachside Pre-Approval
              </Button>
            </div>
            <p className="text-sm text-orange-200 mt-4">
              Licensed mortgage broker NMLS #1426884 • Corona del Mar luxury coastal specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker"
          pageType="city"
          city="Corona del Mar"
          maxLinks={6}
        />
      </div>
    </>
  );
}

