import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Building, TrendingUp, Calculator, Phone, Hash, Star } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: '92614 Irvine Mortgage Broker | Spectrum Area ZIP Code Specialist | Mo Abdel NMLS #1426884',
  description: '92614 Irvine mortgage broker serving this dynamic ZIP code area. Irvine Spectrum, Great Park vicinity financing, competitive rates. Call (949) 579-2057.',
  keywords: '92614 mortgage broker, 92614 home loans, Irvine 92614 financing, ZIP code 92614 mortgage specialist, Irvine Spectrum area'
};

export default function ZipCode92614MortgageBrokerPage() {
  
  const zipCodeData = {
    mainTopic: "92614 Irvine Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for ZIP code 92614 in Irvine, covering dynamic areas including Irvine Spectrum vicinity, Great Park neighborhoods, and newer developments, with homes ranging from $800K to $2.5M.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "92614 ZIP code development specialist",
      "Covers Irvine Spectrum and Great Park areas",
      "Mix of established and new developments",
      "Dynamic growth and family community",
      "Personalized neighborhood expertise"
    ],
    statistics: [
      {
        stat: "92614 median home price: $1.55M",
        source: "Irvine MLS Data",
        year: "2025"
      },
      {
        stat: "82% of 92614 homes require jumbo loans",
        source: "Orange County Housing Analysis",
        year: "2025"
      },
      {
        stat: "ZIP code includes Great Park and Spectrum vicinity",
        source: "Irvine City Planning",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: '92614 Irvine Mortgage FAQ',
      description: 'Common questions about 92614 ZIP code home financing',
      url: 'https://mothebroker.com/zip-codes/92614-irvine-mortgage-broker',
      data: {
        questions: [
          {
            question: "What areas does ZIP code 92614 cover in Irvine?",
            answer: "ZIP code 92614 covers areas near the Irvine Spectrum Center, portions of Great Park neighborhoods, Cypress Village areas, and several newer developments. This is a dynamic ZIP code with both established and emerging communities."
          },
          {
            question: "What is the typical home price range in 92614?",
            answer: "92614 Irvine homes range from $800K condos and townhomes to $2.5M family estates, with a median price around $1.55M. The Great Park area and newer developments command premium pricing."
          },
          {
            question: "Do most homes in 92614 require jumbo loans?",
            answer: "82% of homes in ZIP code 92614 exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo loan financing. The mix of newer developments and premium locations drives higher values."
          },
          {
            question: "What makes 92614 attractive for families?",
            answer: "92614 offers proximity to Irvine Spectrum shopping and dining, Great Park recreational facilities, excellent Irvine schools, newer community amenities, and easy access to business centers and transportation."
          }
        ]
      }
    }
  ];

  const areasIn92614 = [
    {
      name: 'Great Park Neighborhoods',
      description: 'Newer master-planned communities with modern amenities',
      priceRange: '$1.2M - $2.5M',
      homeTypes: 'New construction homes, family estates'
    },
    {
      name: 'Spectrum Area',
      description: 'Convenient location near shopping and entertainment',
      priceRange: '$900K - $1.8M',
      homeTypes: 'Condos, townhomes, single-family'
    },
    {
      name: 'Cypress Village Area',
      description: 'Newest developments with cutting-edge design',
      priceRange: '$1.3M - $2.2M',
      homeTypes: 'Modern homes, contemporary layouts'
    },
    {
      name: 'Established Communities',
      description: 'Mature neighborhoods with established character',
      priceRange: '$800K - $1.5M',
      homeTypes: 'Various housing types'
    }
  ];

  const loanPrograms92614 = [
    {
      name: 'Conventional Loans',
      description: 'For homes under conforming limits',
      bestFor: 'Condos and townhomes',
      downPayment: '3-20%'
    },
    {
      name: 'Jumbo Loans',
      description: 'For properties $1M-$3M',
      bestFor: 'Single-family homes',
      downPayment: '10-25%'
    },
    {
      name: 'FHA Loans',
      description: 'Government-backed with flexible terms',
      bestFor: 'First-time buyers',
      downPayment: '3.5%'
    },
    {
      name: 'New Construction Loans',
      description: 'For Great Park and new developments',
      bestFor: 'Brand new homes',
      downPayment: '15-30%'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="92614 Irvine Mortgage Broker | Spectrum Area ZIP Code Specialist | Mo Abdel NMLS #1426884"
        description="92614 Irvine mortgage broker serving this dynamic ZIP code area. Irvine Spectrum, Great Park vicinity financing, competitive rates."
        keywords={["92614 mortgage broker", "92614 home loans", "Irvine 92614 financing", "ZIP code mortgage specialist", "Irvine Spectrum area"]}
        city="92614, Irvine"
        canonicalUrl="https://mothebroker.com/zip-codes/92614-irvine-mortgage-broker"
        content={zipCodeData}
      />
      <EnhancedLocalSchema city="92614, Irvine" page_type="city" service_focus="dynamic ZIP code specific mortgage services" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>92614 Irvine Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in ZIP code 92614 Irvine mortgage services, covering dynamic areas including Irvine Spectrum vicinity, Great Park neighborhoods, and newer developments with homes ranging from $800K to $2.5M. Expert local market knowledge for this growth area ZIP code.</p>
          
          <h2>92614 ZIP Code Coverage</h2>
          <ul>
            <li>Great Park neighborhoods and vicinity</li>
            <li>Irvine Spectrum shopping area</li>
            <li>Median home price: $1.55M</li>
            <li>82% require jumbo loans</li>
            <li>Mix of new and established developments</li>
            <li>Dynamic growth and family amenities</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Hash className="w-8 h-8 text-blue-600 mr-2" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  92614 Irvine Dynamic Growth Specialist
                </h1>
              </div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Dedicated mortgage broker serving ZIP code 92614 in Irvine. Expertise for Great Park area, Irvine Spectrum vicinity, and dynamic newer developments with diverse housing options.
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
                  Why Choose a 92614 ZIP Code Specialist?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Growth Area Expertise</h3>
                      <p className="text-slate-600">Deep understanding of 92614's dynamic development and emerging communities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Diverse Housing Knowledge</h3>
                      <p className="text-slate-600">Experience with condos, townhomes, new construction, and established homes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Market Intelligence</h3>
                      <p className="text-slate-600">Current insights on 92614 trends and optimal financing strategies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                  <CardTitle className="flex items-center">
                    <Hash className="w-6 h-6 mr-2" />
                    92614 Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$1.55M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$800K - $2.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jumbo Loans Required</span>
                      <span className="font-semibold">82%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Key Areas</span>
                      <span className="font-semibold">Great Park, Spectrum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Community Type</span>
                      <span className="font-semibold">Growth & Established</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas within 92614 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Dynamic Areas Within ZIP Code 92614
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areasIn92614.map((area) => (
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
              Optimal Loan Programs for 92614 Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanPrograms92614.map((program) => (
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
              92614 ZIP Code Financing FAQ
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
        <section className="py-16 bg-gradient-to-r from-green-500 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your 92614 Home?
            </h2>
            <p className="text-xl mb-8">
              Get specialized financing expertise for ZIP code 92614. Local knowledge, dynamic market insights, competitive rates for Irvine's growth areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 579-2057
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                  <Star className="w-5 h-5 mr-2" />
                  Get Pre-Approved
                </Button>
              </a>
            </div>
            <p className="text-sm text-green-200 mt-4">
              Licensed mortgage broker NMLS #1426884 • 92614 ZIP code growth area specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/zip-codes/92614-irvine-mortgage-broker"
          pageType="city"
          city="92614 Irvine"
          maxLinks={6}
        />
      </div>
    </>
  );
}