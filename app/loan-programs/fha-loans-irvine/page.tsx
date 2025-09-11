import React from 'react';

export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/loan-programs/fha-loans-irvine" },
    openGraph: { title, description, url: BASE + "/loan-programs/fha-loans-irvine", siteName: "Mo Abdel â€” Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Home, Shield, Users, CheckCircle, MapPin, Phone, Calculator, Star, Building } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';
import InternalLinkEngine from '@/components/optimization/InternalLinkEngine';



export default function FHALoansIrvinePage() {
  
  const fhaIrvineData = {
    mainTopic: "FHA Loans in Irvine California",
    quickAnswer: "FHA loans in Irvine offer 3.5% down payment options for condos, townhomes, and single-family homes. Perfect for first-time buyers and those with limited down payment savings in Irvine's competitive market.",
    keyFacts: [
      "3.5% down payment minimum",
      "FHA loan limits: $1,089,300 (2025)",
      "Credit scores as low as 580",
      "Government-backed mortgage insurance",
      "Perfect for Irvine condos and townhomes",
      "Competitive rates with flexible terms"
    ],
    statistics: [
      {
        stat: "FHA loan limit in Irvine: $1,089,300",
        source: "HUD 2025 Loan Limits",
        year: "2025"
      },
      {
        stat: "35% of Irvine condos qualify for FHA financing",
        source: "Orange County Housing Analysis",
        year: "2025"
      },
      {
        stat: "Irvine median condo price: $975,000",
        source: "Irvine MLS Data",
        year: "2025"
      }
    ]
  };

  const schemaData = [
    {
      type: 'faq' as const,
      title: 'FHA Loans Irvine California FAQ',
      description: 'Common questions about FHA loans in Irvine CA',
      url: 'https://mothebroker.com/loan-programs/fha-loans-irvine',
      data: {
        questions: [
          {
            question: "What is the FHA loan limit in Irvine CA for 2025?",
            answer: "The FHA loan limit in Irvine for 2025 is $1,089,300 for single-family homes. This high-cost area limit allows FHA financing for many Irvine condos, townhomes, and some single-family properties."
          },
          {
            question: "Can I buy a condo in Irvine with an FHA loan?",
            answer: "Yes, many Irvine condos qualify for FHA financing. The condo project must be FHA-approved, and the unit price must be within the $1,089,300 loan limit. Many Irvine condos fall within this range."
          },
          {
            question: "What down payment do I need for an FHA loan in Irvine?",
            answer: "FHA loans in Irvine require just 3.5% down payment with a credit score of 580 or higher. For credit scores 500-579, a 10% down payment is required."
          },
          {
            question: "Are there good starter homes in Irvine for FHA buyers?",
            answer: "Yes, Irvine has numerous condos and townhomes under the FHA limit, particularly in established communities like Woodbridge, Northwood, and various condo developments throughout the city."
          }
        ]
      }
    }
  ];

  const irvineNeighborhoods = [
    {
      name: 'Woodbridge',
      description: 'Established lake community with FHA-eligible condos and townhomes',
      fhaProperties: 'Condos: $650K-$950K, Townhomes: $800K-$1.1M',
      whyGood: 'Many units under FHA limit, established community'
    },
    {
      name: 'Northwood',
      description: 'Family-oriented area with modern condos and townhomes',
      fhaProperties: 'Condos: $700K-$1M, Townhomes: $900K-$1.1M',
      whyGood: 'Newer construction within FHA limits'
    },
    {
      name: 'University Town Center',
      description: 'Convenient location with various condo options',
      fhaProperties: 'Condos: $600K-$950K',
      whyGood: 'Multiple FHA-approved complexes, good value'
    },
    {
      name: 'Spectrum Area',
      description: 'Modern developments near shopping and entertainment',
      fhaProperties: 'Condos: $750K-$1M, Townhomes: $950K-$1.1M',
      whyGood: 'Contemporary living within FHA reach'
    }
  ];

  const fhaBenefits = [
    {
      title: 'Low Down Payment',
      description: 'Just 3.5% down payment required',
      benefit: 'On a $900K Irvine condo, that\'s only $31,500 down',
      icon: <Home className="w-6 h-6" />
    },
    {
      title: 'Flexible Credit',
      description: 'Credit scores as low as 580 accepted',
      benefit: 'More accessible than conventional loans',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Government Backing',
      description: 'FHA insurance protects lenders',
      benefit: 'Easier approval for marginal credit',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Competitive Rates',
      description: 'Often lower than conventional with poor credit',
      benefit: '2-3 week closing timeline typical',
      icon: <Star className="w-6 h-6" />
    }
  ];

  const irvineMarketInsights = [
    {
      insight: 'Condo Market',
      data: 'Strong inventory under $1M',
      opportunity: 'Many FHA-eligible options available'
    },
    {
      insight: 'Townhome Options',
      data: 'Limited but available under FHA limits',
      opportunity: 'Best values in established communities'
    },
    {
      insight: 'First-Time Buyer Focus',
      data: '40% of Irvine FHA buyers are first-time',
      opportunity: 'Combine with down payment assistance'
    },
    {
      insight: 'School Districts',
      data: 'All Irvine schools highly rated',
      opportunity: 'Great investment in child education'
    }
  ];

  return (
    <>
      {/* SEO Optimization Components */}
      <AIOOptimization
        title="FHA Loans Irvine CA | 3.5% Down Payment | Mo Abdel NMLS #1426884"
        description="FHA loans in Irvine CA with 3.5% down payment. Government-backed mortgages for Irvine condos, townhomes, and family homes."
        keywords={["FHA loans Irvine", "Irvine FHA mortgage", "3.5% down Irvine", "first time buyer Irvine", "government backed loans Irvine CA"]}
        city="Irvine"
        canonicalUrl="https://mothebroker.com/loan-programs/fha-loans-irvine"
        content={fhaIrvineData}
      />
      <EnhancedLocalSchema city="Irvine" page_type="service" service_focus="FHA loan services" />
      <AdvancedSchemaGenerator schemas={schemaData} />

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>FHA Loans Irvine California 2025</h1>
          <p>FHA loans in Irvine CA with 3.5% down payment for condos, townhomes, and single-family homes. Government-backed mortgages with flexible credit requirements and competitive rates. Expert guidance from Mo Abdel NMLS #1426884.</p>
          
          <h2>Irvine FHA Loan Benefits</h2>
          <ul>
            <li>FHA loan limit: $1,089,300 for 2025</li>
            <li>35% of Irvine condos qualify for FHA</li>
            <li>3.5% down payment minimum</li>
            <li>Credit scores as low as 580</li>
            <li>Perfect for first-time Irvine buyers</li>
            <li>2-3 week closing timeline</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-blue-600 mr-2" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  FHA Loans in Irvine, California
                </h1>
              </div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Buy your Irvine home with just 3.5% down payment. FHA loans make homeownership accessible in one of Orange County's most desirable cities, perfect for condos and townhomes.
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
                    Calculate FHA Payment
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FHA Benefits for Irvine */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Why FHA Loans Work Great in Irvine
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fhaBenefits.map((benefit) => (
                <Card key={benefit.title} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600">{benefit.icon}</div>
                      <CardTitle className="text-blue-600">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-3">{benefit.description}</p>
                    <p className="text-sm font-semibold text-green-700">{benefit.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Irvine FHA Market Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Irvine FHA Market Opportunity
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Perfect for Condos</h3>
                      <p className="text-slate-600">Many Irvine condos fall within the $1,089,300 FHA limit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Home className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Townhome Options</h3>
                      <p className="text-slate-600">Select townhomes available within FHA financing limits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">First-Time Buyer Friendly</h3>
                      <p className="text-slate-600">Lower down payment makes Irvine homeownership accessible</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-xl">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-2" />
                    Irvine FHA Loan Data 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">FHA Loan Limit</span>
                      <span className="font-semibold">$1,089,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Condo Price</span>
                      <span className="font-semibold">$975,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">FHA-Eligible Properties</span>
                      <span className="font-semibold">35% of condos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Min Down Payment</span>
                      <span className="font-semibold">3.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Min Credit Score</span>
                      <span className="font-semibold">580</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Irvine Neighborhoods for FHA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Best Irvine Neighborhoods for FHA Buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {irvineNeighborhoods.map((neighborhood) => (
                <Card key={neighborhood.name} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{neighborhood.name}</CardTitle>
                    <p className="text-slate-600">{neighborhood.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-slate-500 text-sm">FHA Properties:</span>
                        <p className="text-slate-700 font-medium">{neighborhood.fhaProperties}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-sm">Why It Works:</span>
                        <p className="text-green-700 font-medium">{neighborhood.whyGood}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Irvine FHA Market Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {irvineMarketInsights.map((market) => (
                <Card key={market.insight} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{market.insight}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-slate-600 text-sm">{market.data}</p>
                      <p className="text-green-700 font-semibold text-sm">{market.opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              FHA Loans Irvine FAQ
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Your Irvine FHA Loan?
            </h2>
            <p className="text-xl mb-8">
              Get specialized FHA financing expertise for Irvine condos and townhomes. Low down payment, competitive rates, local market knowledge.
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
                  <Building className="w-5 h-5 mr-2" />
                  FHA Pre-Approval
                </Button>
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Licensed mortgage broker NMLS #1426884 â€¢ Irvine FHA loan specialist
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkEngine 
          currentPage="/loan-programs/fha-loans-irvine"
          pageType="loan-program"
          city="Irvine"
          maxLinks={6}
        />
      </div>
    </>
  );
}





