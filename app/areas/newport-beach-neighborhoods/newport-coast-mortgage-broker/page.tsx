import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Mountain, TrendingUp, Calculator, Phone, Crown, Eye } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: 'Newport Coast Mortgage Broker | Ultra-Luxury Home Loans | Mo Abdel NMLS #1426884',
  description: 'Newport Coast mortgage broker specializing in ultra-luxury coastal estates. Prestigious community financing, ocean view properties, estate loans. Call (949) 579-2057.',
  keywords: 'Newport Coast mortgage, luxury coastal homes, ocean view financing, Newport Coast estates, ultra-luxury mortgage broker'
};

export default function NewportCoastMortgageBrokerPage() {
  
  const newportCoastData = {
    mainTopic: "Newport Coast Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides ultra-luxury mortgage services for Newport Coast, Orange County's most prestigious coastal community with ocean view estates ranging from $3M to $20M+.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Newport Coast luxury specialist",
      "Average home price: $5M - $15M",
      "Ocean view premium properties",
      "Ultra-luxury coastal community",
      "Custom estate financing"
    ],
    statistics: [
      {
        stat: "Newport Coast median home price: $7.2M",
        source: "Newport Beach MLS",
        year: "2025"
      },
      {
        stat: "100% require super jumbo loans above $3M",
        source: "Orange County Luxury Market Report",
        year: "2025"
      },
      {
        stat: "Average lot size: 15,000+ sq ft",
        source: "Newport Coast Master Plan",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: 'Newport Coast Luxury Mortgage FAQ',
      description: 'Common questions about Newport Coast ultra-luxury home financing',
      url: 'https://www.mothebroker.com/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker',
      data: {
        questions: [
          {
            question: "What makes Newport Coast the most prestigious address in Orange County?",
            answer: "Newport Coast offers unparalleled ocean views, custom estates on large lots, resort-style amenities, and exclusive coastal living. It's considered the crown jewel of Orange County luxury real estate."
          },
          {
            question: "What is the typical price range for Newport Coast homes?",
            answer: "Newport Coast homes range from $3M to over $20M, with a median price around $7.2M. Ocean view properties command significant premiums, often exceeding $10M."
          },
          {
            question: "Do all Newport Coast homes require jumbo financing?",
            answer: "Yes, 100% of Newport Coast properties require super jumbo loans above $3M. Many require portfolio loans or specialized ultra-high-net-worth financing programs."
          },
          {
            question: "What loan programs are available for Newport Coast estates?",
            answer: "Super jumbo loans, portfolio loans, asset-based lending, and private banking solutions. Down payments typically range from 25-40% depending on the loan amount."
          },
          {
            question: "What amenities make Newport Coast unique?",
            answer: "The Resort at Pelican Hill, championship golf courses, private beaches, hiking trails, and Crystal Cove State Park access. It's a resort-style community with permanent residences."
          }
        ]
      }
    }
  ];

  const newportCoastFeatures = [
    {
      name: 'Ocean Views',
      description: 'Panoramic Pacific Ocean and Catalina Island views',
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: 'Luxury Amenities',
      description: 'Resort at Pelican Hill and championship golf courses',
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: 'Natural Beauty',
      description: 'Coastal bluffs and Crystal Cove State Park access',
      icon: <Mountain className="w-6 h-6" />
    }
  ];

  const propertyTypes = [
    {
      name: 'Ocean View Estates',
      priceRange: '$8M - $20M+',
      description: 'Ultra-luxury custom homes with panoramic ocean views',
      features: ['Direct ocean views', 'Custom architecture', 'Large lots', 'Private settings']
    },
    {
      name: 'Golf Course Homes',
      priceRange: '$4M - $12M',
      description: 'Luxury homes overlooking championship golf courses',
      features: ['Golf course views', 'Resort access', 'Premium locations', 'Luxury finishes']
    },
    {
      name: 'Custom Estates',
      priceRange: '$3M - $8M',
      description: 'Luxury homes in gated Newport Coast communities',
      features: ['Gated security', 'Custom design', 'Premium lots', 'Resort amenities']
    }
  ];

  const financingOptions = [
    {
      name: 'Super Jumbo Loans',
      description: 'For homes $3M - $10M',
      rate: 'From 7.25%',
      downPayment: '25-30%',
      maxAmount: '$10M'
    },
    {
      name: 'Portfolio Loans',
      description: 'For homes above $10M',
      rate: 'From 7.75%',
      downPayment: '30-40%',
      maxAmount: '$20M+'
    },
    {
      name: 'Asset-Based Lending',
      description: 'For high-net-worth individuals',
      rate: 'Varies',
      downPayment: '40-50%',
      maxAmount: 'No limit'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="Newport Coast Mortgage Broker | Ultra-Luxury Home Loans | Mo Abdel NMLS #1426884"
        description="Newport Coast mortgage broker specializing in ultra-luxury coastal estates. Prestigious community financing, ocean view properties, estate loans."
        keywords={["Newport Coast mortgage", "luxury coastal homes", "ocean view financing", "ultra-luxury mortgage broker", "Newport Coast estates"]}
        city="Newport Coast, Newport Beach"
        canonicalUrl="https://www.mothebroker.com/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker"
        content={newportCoastData}
      />
      <EnhancedLocalSchema city="Newport Coast, Newport Beach" page_type="city" service_focus="ultra-luxury coastal estate financing" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Newport Coast Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in Newport Coast ultra-luxury financing, serving Orange County's most prestigious coastal community with estates ranging from $3M to $20M+. Expert in ocean view properties and custom estate financing.</p>
          
          <h2>Newport Coast Luxury Market</h2>
          <ul>
            <li>Median home price: $7.2M</li>
            <li>100% require super jumbo loans</li>
            <li>Ocean view premium properties</li>
            <li>Resort at Pelican Hill access</li>
            <li>Championship golf courses</li>
            <li>Crystal Cove State Park adjacent</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Newport Coast Ultra-Luxury Estate Financing
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
                Orange County's most prestigious coastal address. Specialized financing for ocean view estates, resort-style living, and ultra-luxury properties from $3M to $20M+.
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
              Why Newport Coast is Orange County's Crown Jewel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {newportCoastFeatures.map((feature) => (
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
                  Ultra-Luxury Coastal Living
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Unparalleled Ocean Views</h4>
                      <p className="text-slate-600">Panoramic Pacific Ocean and Catalina Island vistas from coastal bluffs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Resort-Style Amenities</h4>
                      <p className="text-slate-600">The Resort at Pelican Hill, championship golf, and luxury facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Exclusive Location</h4>
                      <p className="text-slate-600">Limited inventory in Orange County's most coveted coastal community</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl border-gold-200">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center">
                    <Crown className="w-6 h-6 mr-2" />
                    Newport Coast Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$7.2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$3M - $20M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Super Jumbo Required</span>
                      <span className="font-semibold">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Average Lot Size</span>
                      <span className="font-semibold">15,000+ sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ocean View Premium</span>
                      <span className="font-semibold">$2M - $5M</span>
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
              Newport Coast Estate Types
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
              Newport Coast Luxury Financing FAQ
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
              Ready to Finance Your Newport Coast Estate?
            </h2>
            <p className="text-xl mb-8">
              Get ultra-luxury financing expertise for Orange County's most prestigious coastal community. Specialized solutions for $3M+ properties.
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
              Licensed mortgage broker NMLS #1426884 • Ultra-luxury coastal financing specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker"
          pageType="city"
          city="Newport Coast"
          maxLinks={6}
        />
      </div>
    </>
  );
}
