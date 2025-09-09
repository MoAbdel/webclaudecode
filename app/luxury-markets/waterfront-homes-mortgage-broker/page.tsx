import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Waves, Anchor, Crown, MapPin, Calculator, Phone, Eye, Ship } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: 'Orange County Waterfront Homes Mortgage Broker | Luxury Coastal Financing | Mo Abdel NMLS #1426884',
  description: 'Orange County waterfront homes mortgage broker specializing in luxury coastal properties. Bayfront, oceanfront, and harbor homes financing expertise. Call (949) 579-2057.',
  keywords: 'waterfront homes mortgage Orange County, luxury coastal financing, bayfront homes loans, oceanfront property financing, harbor homes mortgage'
};

export default function WaterfrontHomesMortgageBrokerPage() {
  
  const waterfrontData = {
    mainTopic: "Orange County Waterfront Homes Mortgage Specialist",
    quickAnswer: "Mo Abdel specializes in financing Orange County's most exclusive waterfront properties, from bayfront estates to oceanfront mansions, with expert knowledge of luxury coastal real estate markets and specialized lending programs.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Waterfront and coastal property specialist",
      "Super jumbo and portfolio loan expertise",
      "Bayfront, oceanfront, and harbor properties",
      "Luxury coastal market knowledge",
      "Premium financing solutions"
    ],
    statistics: [
      {
        stat: "Orange County waterfront median price: $6.5M",
        source: "Luxury Coastal Market Report",
        year: "2025"
      },
      {
        stat: "98% of waterfront homes require jumbo financing",
        source: "Orange County Luxury Analysis",
        year: "2025"
      },
      {
        stat: "Average waterfront premium: $2-5M over inland",
        source: "Coastal Property Valuation Study",
        year: "2025"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: 'Orange County Waterfront Homes Financing FAQ',
      description: 'Common questions about financing luxury waterfront properties',
      url: 'https://mothebroker.com/luxury-markets/waterfront-homes-mortgage-broker',
      data: {
        questions: [
          {
            question: "What makes waterfront home financing different?",
            answer: "Waterfront homes require specialized appraisals, environmental assessments, flood insurance considerations, and typically super jumbo loans. Lenders also evaluate water rights, dock access, and coastal property risks."
          },
          {
            question: "What is the typical price range for Orange County waterfront homes?",
            answer: "Orange County waterfront homes range from $3M to $20M+, with bayfront properties averaging $6.5M and oceanfront estates often exceeding $10M. Harbor and canal homes start around $2.5M."
          },
          {
            question: "Do I need flood insurance for waterfront properties?",
            answer: "Most waterfront properties require flood insurance, especially those in designated flood zones. This is typically mandatory for mortgage approval and adds to monthly housing costs."
          },
          {
            question: "What financing options are available for luxury waterfront homes?",
            answer: "Super jumbo loans up to $10M, portfolio loans for higher amounts, asset-based lending, and private banking solutions. Down payments typically range from 30-50% for waterfront properties."
          }
        ]
      }
    }
  ];

  const waterfrontTypes = [
    {
      type: 'Oceanfront Estates',
      priceRange: '$8M - $25M+',
      locations: 'Newport Beach, Laguna Beach, Dana Point',
      features: ['Direct ocean access', 'Private beaches', 'Panoramic views', 'Ultimate privacy']
    },
    {
      type: 'Bayfront Properties',
      priceRange: '$4M - $15M',
      locations: 'Newport Harbor, Balboa Island, Lido Isle',
      features: ['Bay access', 'Private docks', 'Yacht parking', 'Harbor views']
    },
    {
      type: 'Canal & Harbor Homes',
      priceRange: '$2.5M - $8M',
      locations: 'Huntington Harbor, Naples, Belmont Shore',
      features: ['Canal frontage', 'Boat slips', 'Water recreation', 'Marina access']
    },
    {
      type: 'Luxury Condos Waterfront',
      priceRange: '$1.5M - $5M',
      locations: 'Newport Beach, Marina del Rey area',
      features: ['Water views', 'Marina access', 'Luxury amenities', 'Lower maintenance']
    }
  ];

  const financingChallenges = [
    {
      challenge: 'Appraisal Complexity',
      issue: 'Limited comparable sales and unique property features',
      solution: 'Experienced waterfront appraisers and detailed market analysis'
    },
    {
      challenge: 'Environmental Factors',
      issue: 'Flood zones, erosion, and coastal regulations',
      solution: 'Comprehensive environmental assessments and proper insurance'
    },
    {
      challenge: 'High Loan Amounts',
      issue: 'Properties often exceed standard jumbo limits',
      solution: 'Portfolio loans and private banking relationships'
    },
    {
      challenge: 'Seasonal Market',
      issue: 'Limited inventory and seasonal buyer patterns',
      solution: 'Strategic timing and market expertise'
    }
  ];

  const premiumLocations = [
    {
      location: 'Newport Beach Oceanfront',
      highlight: 'Premier beachfront estates with private beach access',
      pricePoint: '$12M - $30M',
      uniqueFeature: 'Direct sand frontage and private beach rights'
    },
    {
      location: 'Lido Isle',
      highlight: 'Exclusive private island community with bay access',
      pricePoint: '$4M - $15M',
      uniqueFeature: 'Private island living with yacht access'
    },
    {
      location: 'Corona del Mar Beachside',
      highlight: 'Luxury homes near Corona del Mar State Beach',
      pricePoint: '$6M - $18M',
      uniqueFeature: 'Beach proximity with village amenities'
    },
    {
      location: 'Huntington Harbor',
      highlight: 'Canal-front homes with boat slips and marina access',
      pricePoint: '$2.5M - $6M',
      uniqueFeature: 'Private boat slips and harbor recreation'
    },
    {
      location: 'Laguna Beach Oceanfront',
      highlight: 'Dramatic coastline with artist community charm',
      pricePoint: '$8M - $20M',
      uniqueFeature: 'Scenic cliffs and artistic community culture'
    },
    {
      location: 'Dana Point Harbor',
      highlight: 'Harbor-front properties with marina and yacht club access',
      pricePoint: '$3M - $8M',
      uniqueFeature: 'Full-service marina and yacht club amenities'
    }
  ];

  const luxuryFinancingOptions = [
    {
      program: 'Super Jumbo Loans',
      loanRange: '$3M - $10M',
      downPayment: '30-40%',
      features: 'Traditional underwriting with luxury property expertise'
    },
    {
      program: 'Portfolio Loans',
      loanRange: '$10M - $25M+',
      downPayment: '40-50%',
      features: 'Flexible terms, relationship-based lending'
    },
    {
      program: 'Asset-Based Lending',
      loanRange: 'No limit',
      downPayment: '50%+',
      features: 'Qualification based on assets rather than income'
    },
    {
      program: 'Private Banking',
      loanRange: 'Varies',
      downPayment: 'Negotiable',
      features: 'Comprehensive wealth management solutions'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="Orange County Waterfront Homes Mortgage Broker | Luxury Coastal Financing | Mo Abdel NMLS #1426884"
        description="Orange County waterfront homes mortgage broker specializing in luxury coastal properties. Bayfront, oceanfront, and harbor homes financing expertise."
        keywords={["waterfront homes mortgage Orange County", "luxury coastal financing", "bayfront homes loans", "oceanfront property financing", "harbor homes mortgage"]}
        city="Orange County"
        canonicalUrl="https://mothebroker.com/luxury-markets/waterfront-homes-mortgage-broker"
        content={waterfrontData}
      />
      <EnhancedLocalSchema city="Orange County" page_type="service" service_focus="waterfront and luxury coastal home financing" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Orange County Waterfront Homes Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in Orange County waterfront homes financing, including oceanfront estates, bayfront properties, canal homes, and luxury coastal condos. Expert in super jumbo loans, portfolio financing, and luxury coastal real estate markets.</p>
          
          <h2>Waterfront Property Types</h2>
          <ul>
            <li>Oceanfront estates: $8M - $25M+</li>
            <li>Bayfront properties: $4M - $15M</li>
            <li>Canal and harbor homes: $2.5M - $8M</li>
            <li>Luxury waterfront condos: $1.5M - $5M</li>
            <li>98% require jumbo financing</li>
            <li>Specialized appraisals and environmental assessments</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Waves className="w-8 h-8 text-cyan-200 mr-2" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Orange County Waterfront Homes Specialist
                </h1>
              </div>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
                Exclusive financing for Orange County's most prestigious waterfront properties. From oceanfront estates to bayfront mansions, expert guidance for luxury coastal real estate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:(949) 579-2057">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (949) 579-2057
                  </Button>
                </a>
                <a href="/calculator">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 w-full">
                    <Calculator className="w-5 h-5 mr-2" />
                    Waterfront Calculator
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Waterfront Property Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Orange County Waterfront Property Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {waterfrontTypes.map((property) => (
                <Card key={property.type} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{property.type}</CardTitle>
                    <p className="text-2xl font-bold text-slate-900">{property.priceRange}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-slate-500 text-sm">Prime Locations:</span>
                        <p className="text-slate-700 font-medium">{property.locations}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-sm">Key Features:</span>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {property.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-slate-700">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Locations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Premier Waterfront Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumLocations.map((location) => (
                <Card key={location.location} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-cyan-600">{location.location}</CardTitle>
                    <p className="text-xl font-bold text-slate-900">{location.pricePoint}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-slate-600">{location.highlight}</p>
                      <div>
                        <span className="text-slate-500 text-sm">Unique Feature:</span>
                        <p className="text-green-700 font-medium text-sm">{location.uniqueFeature}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financing Challenges */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Waterfront Financing Challenges & Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {financingChallenges.map((challenge) => (
                <Card key={challenge.challenge} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-orange-600">{challenge.challenge}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-red-600 text-sm font-semibold">Challenge:</span>
                        <p className="text-slate-600">{challenge.issue}</p>
                      </div>
                      <div>
                        <span className="text-green-600 text-sm font-semibold">Our Solution:</span>
                        <p className="text-green-700 font-medium">{challenge.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Financing Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Waterfront Property Financing Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {luxuryFinancingOptions.map((option) => (
                <Card key={option.program} className="shadow-lg">
                  <CardHeader className="bg-blue-100">
                    <CardTitle className="text-blue-800">{option.program}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div>
                        <span className="text-slate-500 text-sm">Loan Range:</span>
                        <p className="text-slate-700 font-semibold">{option.loanRange}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-sm">Down Payment:</span>
                        <p className="text-slate-700 font-semibold">{option.downPayment}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-sm">Features:</span>
                        <p className="text-slate-600 text-sm">{option.features}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Waterfront Market Expertise
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Eye className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Market Intelligence</h3>
                      <p className="text-slate-600">Deep knowledge of waterfront property values, trends, and seasonal patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Anchor className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Specialized Appraisals</h3>
                      <p className="text-slate-600">Network of waterfront property appraisers who understand unique value factors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Ship className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Lifestyle Understanding</h3>
                      <p className="text-slate-600">Appreciation for waterfront lifestyle and recreational property features</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl border-cyan-200">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <CardTitle className="flex items-center">
                    <Crown className="w-6 h-6 mr-2" />
                    Waterfront Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Waterfront Price</span>
                      <span className="font-semibold">$6.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$2.5M - $25M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jumbo Financing</span>
                      <span className="font-semibold">98% Required</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Waterfront Premium</span>
                      <span className="font-semibold">$2M - $5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Avg Down Payment</span>
                      <span className="font-semibold">35-50%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Waterfront Financing FAQ
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your Waterfront Dream Home?
            </h2>
            <p className="text-xl mb-8">
              Get specialized expertise for Orange County's most exclusive waterfront properties. Luxury financing solutions for coastal living at its finest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 579-2057
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Waves className="w-5 h-5 mr-2" />
                  Waterfront Pre-Approval
                </Button>
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Licensed mortgage broker NMLS #1426884 • Waterfront and luxury coastal specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/luxury-markets/waterfront-homes-mortgage-broker"
          pageType="resource"
          city="Orange County"
          maxLinks={6}
        />
      </div>
    </>
  );
}

