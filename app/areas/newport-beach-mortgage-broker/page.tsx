import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MapPin, Home, TrendingUp, Users, Star, Phone, DollarSign, Calculator, Crown, CheckCircle, Shield, Clock, Anchor } from 'lucide-react';
import EnhancedContactForm from '@/components/EnhancedContactForm';

export const metadata: Metadata = {
  title: 'Newport Beach Mortgage Broker | Luxury Home Loans | Mo Abdel NMLS #1426884',
  description: 'Newport Beach mortgage broker specializing in luxury waterfront properties. Expert in jumbo loans for Balboa Island, Corona del Mar, Newport Coast. Licensed NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/areas/newport-beach-mortgage-broker',
  },
};

// JSON-LD Schema for Newport Beach Mortgage Services
const newportBeachSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FinancialService"],
  "name": "Newport Beach Mortgage Broker - Mo Abdel",
  "description": "Licensed mortgage broker specializing in Newport Beach luxury home financing including waterfront properties, condos, and investment homes.",
  "provider": {
    "@type": "Person",
    "name": "Mo Abdel",
    "identifier": "NMLS #1426884",
    "telephone": "(949) 579-2057",
    "jobTitle": "Licensed Mortgage Broker"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Newport Beach",
      "addressRegion": "CA"
    },
    {
      "@type": "Place",
      "name": "Balboa Island"
    },
    {
      "@type": "Place", 
      "name": "Corona del Mar"
    },
    {
      "@type": "Place",
      "name": "Newport Coast"
    }
  ],
  "specialties": [
    "Jumbo Loans",
    "Luxury Home Financing",
    "Waterfront Property Loans",
    "Investment Property Loans"
  ],
  "url": "https://www.mothebroker.com/areas/newport-beach-mortgage-broker"
};

// FAQ Schema for Newport Beach
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the average home price in Newport Beach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The median home price in Newport Beach is $2.8M as of 2025, with waterfront properties averaging $4M-$15M+ and Corona del Mar homes typically $3M-$8M."
      }
    },
    {
      "@type": "Question", 
      "name": "Do I need a jumbo loan for Newport Beach homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 95% of Newport Beach homes exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo loan financing. Mo Abdel specializes in luxury jumbo loans up to $10M+."
      }
    },
    {
      "@type": "Question",
      "name": "Which Newport Beach neighborhoods are most popular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Balboa Island, Corona del Mar, Newport Coast, and Lido Isle are the most sought-after areas, each offering unique luxury living experiences and strong investment potential."
      }
    },
    {
      "@type": "Question",
      "name": "What loan programs work best for Newport Beach properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jumbo loans are essential for most Newport Beach properties. Interest-only loans, portfolio loans, and asset-based financing are popular for luxury and investment properties."
      }
    }
  ]
};

export default function NewportBeachMortgageBrokerPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newportBeachSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/areas" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                    Areas
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500">Newport Beach Mortgage Broker</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                <Anchor className="w-4 h-4 mr-2" />
                Luxury Waterfront Specialist
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Newport Beach Mortgage Broker - Luxury Home Financing
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
              Licensed Newport Beach mortgage broker Mo Abdel (NMLS #1426884) specializes in luxury waterfront properties, jumbo loans, and investment financing. Expert in Balboa Island, Corona del Mar, and Newport Coast markets.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-slate-600 mb-8">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                $2.8M Median Home Price
              </div>
              <div className="flex items-center">
                <Crown className="w-4 h-4 mr-1 text-purple-600" />
                95% Require Jumbo Loans
              </div>
              <div className="flex items-center">
                <Anchor className="w-4 h-4 mr-1 text-blue-600" />
                Waterfront Property Expert
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 579-2057
                </Button>
              </a>
              <Link href="/contact-orange-county-mortgage-broker">
                <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Luxury Loan Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Newport Beach Market Overview */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                    Newport Beach Real Estate Market 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-700">$2.8M</h3>
                        <p className="text-blue-600 text-sm">Median Home Price</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-700">$4M-$15M+</h3>
                        <p className="text-green-600 text-sm">Waterfront Properties</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-purple-700">95%</h3>
                        <p className="text-purple-600 text-sm">Require Jumbo Loans</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-slate-700">
                    <p className="mb-4">
                      Newport Beach represents one of Orange County's most prestigious real estate markets. With its stunning waterfront locations, world-class marinas, and luxury amenities, Newport Beach properties command premium prices that require specialized financing solutions.
                    </p>
                    <p className="mb-4">
                      <strong>Key Market Insights for 2025:</strong>
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>• Inventory remains limited with high demand for waterfront properties</li>
                      <li>• Balboa Island properties average $3M-$6M for bay-front homes</li>
                      <li>• Corona del Mar luxury homes range from $3M-$8M+</li>
                      <li>• Newport Coast new construction starting at $2.5M</li>
                      <li>• Investment properties popular for short-term luxury rentals</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Newport Beach Neighborhoods */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Premier Newport Beach Neighborhoods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Anchor className="w-5 h-5 mr-2 text-blue-600" />
                        Balboa Island
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">$3M-$6M Average</p>
                      <p className="text-xs text-slate-600">
                        Exclusive island living with bayfront homes, charming village atmosphere, and prestigious yacht clubs.
                      </p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Crown className="w-5 h-5 mr-2 text-purple-600" />
                        Corona del Mar
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">$3M-$8M Average</p>
                      <p className="text-xs text-slate-600">
                        Luxury hillside homes with ocean views, prestigious schools, and world-class beaches.
                      </p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Home className="w-5 h-5 mr-2 text-green-600" />
                        Newport Coast
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">$2.5M-$10M Average</p>
                      <p className="text-xs text-slate-600">
                        Master-planned luxury community with golf courses, resorts, and panoramic ocean views.
                      </p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-600" />
                        Lido Isle
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">$4M-$12M Average</p>
                      <p className="text-xs text-slate-600">
                        Ultra-exclusive island with custom luxury homes, private docks, and bay access.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Loan Programs for Newport Beach */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Specialized Loan Programs for Newport Beach Properties
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Jumbo Loans up to $10M+</h4>
                        <p className="text-sm text-slate-600">Essential for Newport Beach's luxury market</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Interest-Only Options</h4>
                        <p className="text-sm text-slate-600">Lower initial payments for luxury properties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Investment Property Loans</h4>
                        <p className="text-sm text-slate-600">Financing for rental and vacation properties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Asset-Based Lending</h4>
                        <p className="text-sm text-slate-600">Qualify based on assets, not just income</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Portfolio Loans</h4>
                        <p className="text-sm text-slate-600">Flexible underwriting for unique properties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Bridge Loans</h4>
                        <p className="text-sm text-slate-600">Short-term financing for quick purchases</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-700 font-semibold mb-2">Newport Beach Financing Expertise:</p>
                    <p className="text-purple-600 text-sm">
                      Mo Abdel understands the complexities of Newport Beach luxury real estate, including waterfront property appraisals, HOA considerations, and seasonal rental income calculations for investment properties.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Frequently Asked Questions - Newport Beach Mortgages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-bold text-slate-900 mb-2">What is the average home price in Newport Beach?</h4>
                      <p className="text-slate-600 text-sm">
                        The median home price in Newport Beach is $2.8M as of 2025, with waterfront properties averaging $4M-$15M+ and Corona del Mar homes typically $3M-$8M.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold text-slate-900 mb-2">Do I need a jumbo loan for Newport Beach homes?</h4>
                      <p className="text-slate-600 text-sm">
                        Yes, 95% of Newport Beach homes exceed the 2025 conforming loan limit of $1,089,300, requiring jumbo loan financing. Mo Abdel specializes in luxury jumbo loans up to $10M+.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h4 className="font-bold text-slate-900 mb-2">Which Newport Beach neighborhoods are most popular?</h4>
                      <p className="text-slate-600 text-sm">
                        Balboa Island, Corona del Mar, Newport Coast, and Lido Isle are the most sought-after areas, each offering unique luxury living experiences and strong investment potential.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-orange-600 pl-4">
                      <h4 className="font-bold text-slate-900 mb-2">What loan programs work best for Newport Beach properties?</h4>
                      <p className="text-slate-600 text-sm">
                        Jumbo loans are essential for most Newport Beach properties. Interest-only loans, portfolio loans, and asset-based financing are popular for luxury and investment properties.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    Get Your Newport Beach Loan Quote
                  </CardTitle>
                  <p className="text-slate-600 text-center text-sm">
                    Licensed luxury home specialist Mo Abdel NMLS #1426884
                  </p>
                </CardHeader>
                <CardContent>
                  <EnhancedContactForm />
                </CardContent>
              </Card>

              {/* Local Expertise */}
              <Card className="shadow-xl mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Newport Beach Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Licensed NMLS #1426884</h4>
                      <p className="text-xs text-slate-600">Fully licensed California mortgage broker</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">18-Day Average Closing</h4>
                      <p className="text-xs text-slate-600">Fast luxury loan processing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Anchor className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Waterfront Specialist</h4>
                      <p className="text-xs text-slate-600">15+ years Newport Beach experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Crown className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Luxury Market Expert</h4>
                      <p className="text-xs text-slate-600">$1M+ property financing specialist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Links */}
              <Card className="shadow-xl mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Related Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <Link href="/orange-county-jumbo-loans" className="block text-blue-600 hover:text-blue-700 font-medium">
                      Orange County Jumbo Loans →
                    </Link>
                    <Link href="/loan-programs/heloc" className="block text-blue-600 hover:text-blue-700 font-medium">
                      HELOC for Luxury Homes →
                    </Link>
                    <Link href="/areas/corona-del-mar-mortgage-broker" className="block text-blue-600 hover:text-blue-700 font-medium">
                      Corona del Mar Loans →
                    </Link>
                    <Link href="/areas/balboa-island-mortgage-broker" className="block text-blue-600 hover:text-blue-700 font-medium">
                      Balboa Island Financing →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}