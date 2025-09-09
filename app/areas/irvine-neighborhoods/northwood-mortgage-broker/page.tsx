import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Home, Building2, TrendingUp, Calculator, Phone, Sparkles } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export const metadata: Metadata = {
  title: 'Northwood Irvine Mortgage Broker | New Construction Home Loans | Mo Abdel NMLS #1426884',
  description: 'Northwood Irvine mortgage broker specializing in newer construction homes. Modern amenities, family community, competitive financing. Call (949) 579-2057.',
  keywords: 'Northwood Irvine mortgage, newer construction loans, modern Irvine homes, Northwood mortgage broker, family community financing'
};

export default function NorthwoodMortgageBrokerPage() {
  
  const northwoodData = {
    mainTopic: "Northwood Irvine Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for Northwood Irvine, featuring newer construction homes with modern amenities, family-friendly design, and prices ranging from $1.3M to $2M.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Northwood newer construction specialist",
      "Average home price: $1.3M - $2M",
      "Modern family community",
      "Built in 1990s-2000s",
      "Contemporary amenities and layouts"
    ],
    statistics: [
      {
        stat: "Northwood median home price: $1.65M",
        source: "Irvine MLS Data",
        year: "2025"
      },
      {
        stat: "80% of Northwood homes require jumbo loans",
        source: "Orange County Housing Analysis",
        year: "2025"
      },
      {
        stat: "Average home age: 20-30 years",
        source: "Irvine Company Development Data",
        year: "2024"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: 'Northwood Irvine Mortgage FAQ',
      description: 'Common questions about Northwood Irvine home financing',
      url: 'https://www.mothebroker.com/areas/irvine-neighborhoods/northwood-mortgage-broker',
      data: {
        questions: [
          {
            question: "What makes Northwood different from other Irvine communities?",
            answer: "Northwood features newer construction homes built in the 1990s-2000s with modern floor plans, updated amenities, and contemporary family-focused designs compared to older Irvine communities."
          },
          {
            question: "What is the typical price range in Northwood?",
            answer: "Northwood homes typically range from $1.3M to $2M, with a median price around $1.65M. The newer construction and modern amenities command premium pricing in the Irvine market."
          },
          {
            question: "Do Northwood homes require jumbo financing?",
            answer: "80% of Northwood homes exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo loan financing. The newer construction typically commands higher values."
          },
          {
            question: "What amenities are available in Northwood?",
            answer: "Northwood features modern community centers, newer parks, updated recreational facilities, and contemporary family amenities designed for modern lifestyle preferences."
          }
        ]
      }
    }
  ];

  const northwoodFeatures = [
    {
      name: 'Modern Design',
      description: 'Contemporary architecture with open floor plans and updated features',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: 'Newer Construction',
      description: 'Homes built in 1990s-2000s with modern building standards',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: 'Family Focus',
      description: 'Community designed with modern family lifestyle in mind',
      icon: <Home className="w-6 h-6" />
    }
  ];

  const propertyTypes = [
    {
      name: 'Single Family Homes',
      priceRange: '$1.5M - $2.2M',
      description: 'Modern single-family homes with contemporary features',
      features: ['Open floor plans', 'Modern kitchens', 'Updated bathrooms', 'Family rooms']
    },
    {
      name: 'Townhomes',
      priceRange: '$1.1M - $1.5M',
      description: 'Newer construction townhomes with modern amenities',
      features: ['Multi-level living', 'Private patios', 'Modern fixtures', 'Efficient layouts']
    },
    {
      name: 'Condominiums',
      priceRange: '$800K - $1.3M',
      description: 'Contemporary condos with modern conveniences',
      features: ['Low maintenance', 'Modern amenities', 'Central location', 'Community features']
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="Northwood Irvine Mortgage Broker | New Construction Home Loans | Mo Abdel NMLS #1426884"
        description="Northwood Irvine mortgage broker specializing in newer construction homes. Modern amenities, family community, competitive financing."
        keywords={["Northwood Irvine mortgage", "newer construction loans", "modern Irvine homes", "family community financing", "Northwood homes"]}
        city="Northwood, Irvine"
        canonicalUrl="https://www.mothebroker.com/areas/irvine-neighborhoods/northwood-mortgage-broker"
        content={northwoodData}
      />
      <EnhancedLocalSchema city="Northwood, Irvine" page_type="city" service_focus="newer construction home financing" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Northwood Irvine Mortgage Broker 2025</h1>
          <p>Mo Abdel specializes in Northwood Irvine mortgage financing, serving this newer construction community with modern homes ranging from $1.3M to $2M. Expert in contemporary family home financing.</p>
          
          <h2>Northwood Community Features</h2>
          <ul>
            <li>Newer construction (1990s-2000s)</li>
            <li>Median home price: $1.65M</li>
            <li>80% require jumbo loans</li>
            <li>Modern family amenities</li>
            <li>Contemporary floor plans</li>
            <li>Updated community facilities</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Northwood Modern Family Community Financing
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Specialized financing for Irvine's premier modern family community. Expert in newer construction homes with contemporary amenities and family-focused design.
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
              Why Choose Northwood for Modern Living
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {northwoodFeatures.map((feature) => (
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
                  Modern Community Advantages
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Contemporary Floor Plans</h4>
                      <p className="text-slate-600">Open concepts, modern kitchens, and family-focused layouts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Updated Infrastructure</h4>
                      <p className="text-slate-600">Modern utilities, newer systems, and contemporary amenities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Family Lifestyle</h4>
                      <p className="text-slate-600">Designed for contemporary family living with modern conveniences</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Northwood Market Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Home Price</span>
                      <span className="font-semibold">$1.65M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price Range</span>
                      <span className="font-semibold">$1.3M - $2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jumbo Loans Required</span>
                      <span className="font-semibold">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Construction Era</span>
                      <span className="font-semibold">1990s-2000s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Community Type</span>
                      <span className="font-semibold">Modern Family</span>
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
              Northwood Home Types & Financing Options
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

        {/* FAQ Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Northwood Financing FAQ
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
              Ready to Finance Your Modern Northwood Home?
            </h2>
            <p className="text-xl mb-8">
              Get specialized financing for Irvine's premier modern family community. Expert guidance for contemporary home features.
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
          currentPage="/areas/irvine-neighborhoods/northwood-mortgage-broker"
          pageType="city"
          city="Northwood"
          maxLinks={6}
        />
      </div>
    </>
  );
}
