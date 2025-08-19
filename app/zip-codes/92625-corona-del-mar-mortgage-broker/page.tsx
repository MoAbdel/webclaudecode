import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Waves, TrendingUp, Calculator, Phone, Hash, Crown, Sun } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: '92625 Corona del Mar Mortgage Broker | Beachside ZIP Code Specialist | Mo Abdel NMLS #1426884',
  description: '92625 Corona del Mar mortgage broker serving this exclusive beachside ZIP code. Luxury coastal homes, beach access properties, competitive rates. Call (949) 579-2057.',
  keywords: '92625 mortgage broker, 92625 home loans, Corona del Mar 92625 financing, ZIP code 92625 mortgage specialist, beachside mortgage'
};

export default function ZipCode92625CoronaDelMarMortgageBrokerPage() {
  
  const zipCodeData = {
    mainTopic: "92625 Corona del Mar Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for ZIP code 92625 in Corona del Mar, covering exclusive beachside properties, luxury coastal homes, and prestigious Newport Beach addresses with homes ranging from $1.5M to $8M+.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "92625 ZIP code luxury coastal specialist",
      "Covers Corona del Mar beachside area",
      "Exclusive Newport Beach coastal properties",
      "Beach access and ocean proximity",
      "Personalized luxury home expertise"
    ],
    statistics: [
      {
        stat: "92625 median home price: $3.8M",
        source: "Newport Beach MLS Data",
        year: "2025"
      },
      {
        stat: "95% of 92625 homes require jumbo loans",
        source: "Orange County Housing Analysis",
        year: "2025"
      },
      {
        stat: "ZIP code includes Corona del Mar State Beach area",
        source: "Newport Beach City Planning",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: '92625 Corona del Mar Mortgage FAQ',
      description: 'Common questions about 92625 ZIP code luxury beachside financing',
      url: 'https://mothebroker.com/zip-codes/92625-corona-del-mar-mortgage-broker',
      data: {
        questions: [
          {
            question: "What areas does ZIP code 92625 cover in Corona del Mar?",
            answer: "ZIP code 92625 covers the heart of Corona del Mar including the main beachside residential areas, properties near Corona del Mar State Beach, the village shopping area, and prestigious coastal neighborhoods. This is one of Newport Beach's most exclusive ZIP codes."
          },
          {
            question: "What is the typical home price range in 92625?",
            answer: "92625 Corona del Mar homes range from $1.5M condos to $8M+ luxury estates, with a median price around $3.8M. Beachside and ocean view properties command significant premiums in this exclusive coastal location."
          },
          {
            question: "Do most homes in 92625 require jumbo loans?",
            answer: "95% of homes in ZIP code 92625 exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo or super jumbo loan financing. Many properties require specialized luxury financing programs."
          },
          {
            question: "What makes 92625 a prestigious address?",
            answer: "92625 offers direct beach access, Corona del Mar State Beach proximity, upscale village shopping and dining, excellent schools, and some of Orange County's most desirable coastal living with strong investment potential."
          }
        ]
      }
    }
  ];

  const areasIn92625 = [
    {
      name: 'Beachside Residential',
      description: 'Prime beachside homes with ocean proximity and beach access',
      priceRange: '$3M - $8M+',
      homeTypes: 'Luxury beach homes, coastal estates'
    },
    {
      name: 'Corona del Mar Village',
      description: 'Central area near shopping, dining, and community amenities',
      priceRange: '$2M - $5M',
      homeTypes: 'Village homes, luxury condos'
    },
    {
      name: 'Hillside Properties',
      description: 'Elevated homes with ocean and harbor views',
      priceRange: '$2.5M - $6M',
      homeTypes: 'View homes, luxury estates'
    },
    {
      name: 'Beach Adjacent',
      description: 'Properties within walking distance to Corona del Mar Beach',
      priceRange: '$1.8M - $4M',
      homeTypes: 'Coastal homes, luxury townhomes'
    }
  ];

  const loanPrograms92625 = [
    {
      name: 'Jumbo Loans',
      description: 'For luxury properties $1M-$3M',
      bestFor: 'Most 92625 properties',
      downPayment: '20-30%'
    },
    {
      name: 'Super Jumbo Loans',
      description: 'For estates above $3M',
      bestFor: 'Beachside luxury homes',
      downPayment: '30-40%'
    },
    {
      name: 'Portfolio Loans',
      description: 'For unique luxury properties',
      bestFor: 'Exceptional coastal estates',
      downPayment: '40-50%'
    },
    {
      name: 'Asset-Based Lending',
      description: 'For high-net-worth individuals',
      bestFor: 'Alternative qualification',
      downPayment: '50%+'
    }
  ];

  const beachsideAdvantages = [
    {
      advantage: 'Beach Access',
      description: 'Direct access to Corona del Mar State Beach and coastal recreation',
      value: 'Unparalleled lifestyle amenity'
    },
    {
      advantage: 'Investment Stability',
      description: 'Beachside properties maintain strong value appreciation',
      value: 'Proven long-term investment'
    },
    {
      advantage: 'Exclusive Community',
      description: 'Limited inventory in highly desirable coastal location',
      value: 'Prestigious address with scarcity'
    },
    {
      advantage: 'Quality of Life',
      description: 'Beach lifestyle with upscale amenities and recreation',
      value: 'Premium coastal living experience'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="92625 Corona del Mar Mortgage Broker | Beachside ZIP Code Specialist | Mo Abdel NMLS #1426884"
        description="92625 Corona del Mar mortgage broker serving this exclusive beachside ZIP code. Luxury coastal homes, beach access properties, competitive rates."
        keywords={["92625 mortgage broker", "92625 home loans", "Corona del Mar 92625 financing", "ZIP code mortgage specialist", "beachside mortgage"]}
        city="92625, Corona del Mar"
        canonicalUrl="https://mothebroker.com/zip-codes/92625-corona-del-mar-mortgage-broker"
        content={zipCodeData}
      />
      <EnhancedLocalSchema city="92625, Corona del Mar" page_type="city" service_focus="beachside luxury ZIP code specific mortgage services" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>92625 Corona del Mar Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in ZIP code 92625 Corona del Mar mortgage services, covering exclusive beachside properties and luxury coastal homes ranging from $1.5M to $8M+. Expert local market knowledge for this prestigious Newport Beach ZIP code.</p>
          
          <h2>92625 ZIP Code Coverage</h2>
          <ul>
            <li>Corona del Mar beachside residential areas</li>
            <li>Corona del Mar State Beach proximity</li>
            <li>Median home price: $3.8M</li>
            <li>95% require jumbo or super jumbo loans</li>
            <li>Exclusive Newport Beach coastal location</li>
            <li>Premium beachside lifestyle amenities</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Hash className="w-8 h-8 text-blue-600 mr-2" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  92625 Corona del Mar Beachside Specialist
                </h1>
              </div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Dedicated mortgage broker serving ZIP code 92625 in Corona del Mar. Luxury expertise for beachside properties, coastal homes, and prestigious Newport Beach addresses.
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

        {/* ZIP Code Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why Choose a 92625 ZIP Code Specialist?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Waves className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Beachside Expertise</h3>
                      <p className="text-slate-600">Deep understanding of 92625's luxury beachside market conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Crown className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Luxury Property Experience</h3>
                      <p className="text-slate-600">Specialized in high-end coastal homes and beachside estates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Market Intelligence</h3>
                      <p className="text-slate-600">Current insights on 92625 luxury market trends and coastal property financing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <CardTitle className="flex items-center">
                    <Hash className="w-6 h-6 mr-2" />
                    92625 Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$3.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$1.5M - $8M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jumbo Loans Required</span>
                      <span className="font-semibold">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Key Feature</span>
                      <span className="font-semibold">Beach Access</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Property Type</span>
                      <span className="font-semibold">Luxury Coastal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas within 92625 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Exclusive Areas Within ZIP Code 92625
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areasIn92625.map((area) => (
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

        {/* Beachside Advantages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              92625 Beachside Living Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beachsideAdvantages.map((item) => (
                <Card key={item.advantage} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-cyan-600">{item.advantage}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-slate-600">{item.description}</p>
                      <div>
                        <span className="text-slate-500 text-sm">Investment Value:</span>
                        <p className="text-green-700 font-medium">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Programs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Luxury Financing Options for 92625 Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanPrograms92625.map((program) => (
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
              92625 ZIP Code Luxury Financing FAQ
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
        <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your 92625 Beachside Home?
            </h2>
            <p className="text-xl mb-8">
              Get specialized luxury financing expertise for ZIP code 92625. Beachside market knowledge, premium service, competitive rates for Corona del Mar's finest properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <Sun className="w-5 h-5 mr-2" />
                Beachside Pre-Approval
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Licensed mortgage broker NMLS #1426884 • 92625 ZIP code beachside specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/zip-codes/92625-corona-del-mar-mortgage-broker"
          pageType="city"
          city="92625 Corona del Mar"
          maxLinks={6}
        />
      </div>
    </>
  );
}