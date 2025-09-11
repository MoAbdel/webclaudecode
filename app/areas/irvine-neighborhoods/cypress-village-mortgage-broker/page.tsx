import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO } from "@/lib/seo-constants";
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Sparkles, Calculator, Phone, Building, Users } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';

export async function generateMetadata(): Promise<Metadata> {
  const path = "/areas/irvine-neighborhoods/cypress-village-mortgage-broker";
  const title = "Mortgage Broker in Cypress Village, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Cypress Village, Irvine? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Cypress Village, Irvine. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

export default function CypressVillageMortgageBrokerPage() {
  const cypressVillageData = {
    mainTopic: "Cypress Village Irvine Mortgage Broker Services",
    quickAnswer: "Mo Abdel provides specialized mortgage services for Cypress Village Irvine, the newest master-planned community featuring brand new construction homes, cutting-edge amenities, and properties ranging from $1.3M to $2.8M.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Cypress Village newest community specialist",
      "Average home price: $1.3M - $2.8M",
      "Brand new master-planned development",
      "State-of-the-art community amenities",
      "Modern family-oriented design"
    ],
    statistics: [
      { stat: "Cypress Village median home price: $1.85M", source: "Irvine MLS Data", year: "2025" },
      { stat: "88% of homes require jumbo loans", source: "Orange County Housing Analysis", year: "2025" },
      { stat: "Developed 2010s–2020s as Irvine's newest village", source: "Irvine Company", year: "2024" }
    ]
  };

  const schemaData: any[] = [];
  const cypressVillageFeatures = [
    { name: 'Newest Construction', description: 'Brand new homes with latest construction standards and modern technology', icon: <Sparkles className="w-6 h-6" /> },
    { name: 'Modern Amenities', description: 'State-of-the-art community facilities and recreational amenities', icon: <Building className="w-6 h-6" /> },
    { name: 'Family Innovation', description: 'Innovative family-focused design and contemporary lifestyle features', icon: <Users className="w-6 h-6" /> },
  ];

  const propertyTypes = [
    { name: 'Executive Homes', priceRange: '$2.2M - $3.2M', description: 'Premium executive homes with luxury features and large lots', features: ['Smart home technology', 'Premium finishes', 'Large lots', 'Executive layouts'] },
    { name: 'Modern Family Homes', priceRange: '$1.6M - $2.4M', description: 'Contemporary family homes with open floor plans and modern amenities', features: ['Open floor plans', 'Energy-efficient', 'Community parks', 'Modern kitchens'] },
    { name: 'Townhomes & Condos', priceRange: '$1.3M - $1.9M', description: 'Low-maintenance options with access to community amenities', features: ['Community pools', 'Low maintenance', 'Great location', 'Modern finishes'] },
  ];

  const loanPrograms = [
    { name: 'New Construction Jumbo', description: 'Financing for brand new construction homes', rate: 'From 6.50%', downPayment: '10-20%' },
    { name: 'Conventional 30-Year Fixed', description: 'Popular option for primary residences', rate: 'From 6.25%', downPayment: '5-20%' },
    { name: 'Portfolio Loans', description: 'Flexible solutions for complex income', rate: 'From 7.00%', downPayment: '20-30%' },
  ];

  return (
    <>
      <AIOOptimization
        title="Cypress Village Irvine Mortgage Broker | Newest Community Home Loans | Mo Abdel NMLS #1426884"
        description="Cypress Village Irvine mortgage broker specializing in newest master-planned community homes. Brand new construction financing, modern amenities, competitive rates."
        keywords={["Cypress Village Irvine mortgage", "new community loans", "brand new construction Irvine", "Cypress Village mortgage broker"]}
        city="Cypress Village, Irvine"
        canonicalUrl="https://www.mothebroker.com/areas/irvine-neighborhoods/cypress-village-mortgage-broker"
        content={cypressVillageData}
      />
      <EnhancedLocalSchema city="Cypress Village, Irvine" page_type="city" service_focus="newest community home financing" />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Cypress Village Irvine Mortgage Broker 2025</h1>
          <p>Specialized financing for Irvine's newest village with modern construction and amenities. Expert guidance for brand new homes.</p>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Cypress Village Mortgage Specialist</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">Newest master-planned community in Irvine with brand new construction and modern amenities. Tailored financing for your needs.</p>
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

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Cypress Village Stands Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {cypressVillageFeatures.map((feature) => (
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
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Cypress Village Home Types & Features</h2>
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
                      {property.features.map((feature: any, index: number) => (
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

        {/* Loan Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Specialized Financing for Cypress Village</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {loanPrograms.map((program) => (
                <Card key={program.name} className="shadow-lg">
                  <CardHeader className="bg-slate-100">
                    <CardTitle>{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Interest Rate:</span>
                        <span className="font-semibold">{program.rate}</span>
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

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Finance Your Cypress Village Home?</h2>
            <p className="text-xl mb-8">Get specialized financing for Irvine's newest master-planned community. Expert guidance for brand new construction with modern amenities.</p>
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
          currentPage="/areas/irvine-neighborhoods/cypress-village-mortgage-broker"
          pageType="city"
          city="Cypress Village"
          maxLinks={6}
        />
      </div>
    </>
  );
}

