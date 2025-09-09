import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Waves, TrendingUp, Calculator, Phone, TreePine } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: 'Woodbridge Irvine Mortgage Broker | Lake Community Home Loans | Mo Abdel NMLS #1426884',
  description: 'Woodbridge Irvine mortgage broker specializing in lake community homes. Established neighborhood financing, family-friendly loans, competitive rates. Call (949) 579-2057.',
  keywords: 'Woodbridge Irvine mortgage, lake community loans, Irvine family homes, Woodbridge mortgage broker, established community financing'
};

export default function WoodbridgeMortgageBrokerPage() {
  
  const woodbridgeData = {
    mainTopic: "Woodbridge Irvine Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for Woodbridge Irvine, the established lake community known for family-friendly amenities, excellent schools, and homes ranging from $1.2M to $1.8M.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Woodbridge lake community specialist",
      "Average home price: $1.2M - $1.8M",
      "Established 1970s community",
      "Lakes, parks, and recreation focus",
      "Family-oriented neighborhood"
    ],
    statistics: [
      {
        stat: "Woodbridge median home price: $1.5M",
        source: "Irvine MLS Data",
        year: "2025"
      },
      {
        stat: "75% of Woodbridge homes require jumbo loans",
        source: "Orange County Housing Analysis",
        year: "2025"
      },
      {
        stat: "5 man-made lakes in community",
        source: "Irvine Company",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: 'Woodbridge Irvine Mortgage FAQ',
      description: 'Common questions about Woodbridge Irvine home financing',
      url: 'https://mothebroker.com/areas/irvine-neighborhoods/woodbridge-mortgage-broker',
      data: {
        questions: [
          {
            question: "What makes Woodbridge special for families?",
            answer: "Woodbridge features 5 man-made lakes, extensive parks, top-rated schools, and family-friendly amenities. It's one of Irvine's most established communities, built in the 1970s with mature landscaping."
          },
          {
            question: "What is the price range for Woodbridge homes?",
            answer: "Woodbridge homes typically range from $1.2M to $1.8M, with lakefront properties commanding premium prices. The median home price is around $1.5M as of 2025."
          },
          {
            question: "Do Woodbridge homes require jumbo loans?",
            answer: "75% of Woodbridge homes exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo loan financing. Lakefront properties almost always need jumbo loans."
          },
          {
            question: "What loan programs work best for Woodbridge?",
            answer: "Jumbo loans are most common, with conventional loans for condos and townhomes. Physician loans are popular due to proximity to medical facilities, and investment property loans for rental homes."
          }
        ]
      }
    }
  ];

  const woodbridgeFeatures = [
    {
      name: 'Lake Access',
      description: '5 private lakes with walking trails and recreational activities',
      icon: <Waves className="w-6 h-6" />
    },
    {
      name: 'Mature Community',
      description: 'Established 1970s development with mature trees and landscaping',
      icon: <TreePine className="w-6 h-6" />
    },
    {
      name: 'Family Amenities',
      description: 'Recreation centers, pools, tennis courts, and playgrounds',
      icon: <Home className="w-6 h-6" />
    }
  ];

  const propertyTypes = [
    {
      name: 'Lakefront Homes',
      priceRange: '$1.6M - $2.2M',
      description: 'Premium homes with direct lake views and private access',
      sqft: '3,000-4,500 sq ft'
    },
    {
      name: 'Interior Homes',
      priceRange: '$1.2M - $1.6M',
      description: 'Family homes on tree-lined streets with community amenities',
      sqft: '2,500-3,500 sq ft'
    },
    {
      name: 'Townhomes',
      priceRange: '$900K - $1.3M',
      description: 'Attached homes with shared walls, often conventional loan eligible',
      sqft: '1,800-2,800 sq ft'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="Woodbridge Irvine Mortgage Broker | Lake Community Home Loans | Mo Abdel NMLS #1426884"
        description="Woodbridge Irvine mortgage broker specializing in lake community homes. Established neighborhood financing, family-friendly loans, competitive rates."
        keywords={["Woodbridge Irvine mortgage", "lake community loans", "Irvine family homes", "established community financing", "Woodbridge homes"]}
        city="Woodbridge, Irvine"
        canonicalUrl="https://mothebroker.com/areas/irvine-neighborhoods/woodbridge-mortgage-broker"
        content={woodbridgeData}
      />
      <EnhancedLocalSchema city="Woodbridge, Irvine" page_type="city" service_focus="lake community home financing" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Woodbridge Irvine Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in Woodbridge Irvine mortgage financing, serving this established lake community with homes ranging from $1.2M to $1.8M. Expert in family-oriented financing and established community properties.</p>
          
          <h2>Woodbridge Community Features</h2>
          <ul>
            <li>5 man-made lakes with recreation</li>
            <li>Established 1970s community</li>
            <li>Median home price: $1.5M</li>
            <li>75% require jumbo loans</li>
            <li>Top-rated family amenities</li>
            <li>Mature landscaping and trees</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Woodbridge Lake Community Mortgage Specialist
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Financing for Irvine's most established family community. Expert in lake community homes, mature neighborhood properties, and family-focused financing solutions.
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
              Why Choose Woodbridge for Your Family
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {woodbridgeFeatures.map((feature) => (
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
                  Established Community Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Mature Landscaping</h4>
                      <p className="text-slate-600">50+ year old trees and established gardens create park-like settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Proven Investment</h4>
                      <p className="text-slate-600">Consistent appreciation over decades with stable property values</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Family Infrastructure</h4>
                      <p className="text-slate-600">Well-established amenities, schools, and community programs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Woodbridge Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$1.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$1.2M - $1.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jumbo Loans Required</span>
                      <span className="font-semibold">75%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Community Age</span>
                      <span className="font-semibold">50+ years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Private Lakes</span>
                      <span className="font-semibold">5 lakes</span>
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
              Woodbridge Home Types & Financing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {propertyTypes.map((property) => (
                <Card key={property.name} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{property.name}</CardTitle>
                    <p className="text-2xl font-bold text-slate-900">{property.priceRange}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-3">{property.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Typical Size:</span>
                      <span className="font-semibold">{property.sqft}</span>
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
              Woodbridge Financing FAQ
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
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your Woodbridge Dream Home?
            </h2>
            <p className="text-xl mb-8">
              Get specialized financing for Irvine's premier lake community. Expert guidance for established neighborhood properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Pre-Approved
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/areas/irvine-neighborhoods/woodbridge-mortgage-broker"
          pageType="city"
          city="Woodbridge"
          maxLinks={6}
        />
      </div>
    </>
  );
}



