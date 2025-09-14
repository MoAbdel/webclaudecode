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
              <Home className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Luxury Focus</h3>
            <p className="text-slate-600">Specializing in high-value properties and jumbo loans</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Investment Properties</h3>
            <p className="text-slate-600">Financing for Newport Beach rental and investment homes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Concierge Service</h3>
            <p className="text-slate-600">White-glove service for discerning Newport Beach clients</p>
          </div>
        </div>

        {/* Newport Beach Market Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Mortgage Rates and Market Insights</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Market Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Median Home Price:</span>
                    <span className="font-bold text-blue-600">$3,200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Average Price per Sq Ft:</span>
                    <span className="font-bold">$1,400 - $2,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Waterfront Properties:</span>
                    <span className="font-bold">$5M - $50M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Luxury Condos:</span>
                    <span className="font-bold">$1.5M - $10M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Days on Market:</span>
                    <span className="font-bold text-green-600">35-65 days</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  *Market data as of 2025. Prices vary significantly by neighborhood and proximity to water. 
                  Compare with <Link href="/areas/irvine-mortgage-broker" className="text-blue-600 hover:text-blue-700 underline">Irvine market conditions</Link> or 
                  explore <Link href="/loan-programs/jumbo-loans" className="text-blue-600 hover:text-blue-700 underline">jumbo loan options</Link> for luxury properties.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Newport Beach Financing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Jumbo Loans Required:</span>
                    <span className="font-bold text-blue-600">95%+ of sales</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Typical Down Payment:</span>
                    <span className="font-bold">20-30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cash Purchases:</span>
                    <span className="font-bold">~40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Investment Properties:</span>
                    <span className="font-bold">~25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Foreign Buyers:</span>
                    <span className="font-bold text-purple-600">~15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newport Beach Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Home Loans by Neighborhood</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏖️ Balboa Peninsula</h3>
                <p className="text-slate-600 mb-3">Beachfront living with luxury condos and vacation rentals</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $2.5M - $8M</div>
                  <div>• Beachfront condos and homes</div>
                  <div>• Strong rental income potential</div>
                  <div>• Tourist destination appeal</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏝️ Balboa Island</h3>
                <p className="text-slate-600 mb-3">Exclusive island community with waterfront estates</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $4M - $15M</div>
                  <div>• Waterfront estates and bayfront lots</div>
                  <div>• Private docks and boat slips</div>
                  <div>• Ultra-exclusive community</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">⛵ Newport Harbor</h3>
                <p className="text-slate-600 mb-3">Marina living with luxury high-rise condos</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $1.8M - $6M</div>
                  <div>• High-rise luxury condominiums</div>
                  <div>• Harbor and city views</div>
                  <div>• Resort-style amenities</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🌊 Corona del Mar</h3>
                <p className="text-slate-600 mb-3">Prestigious coastal neighborhood with ocean views</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $3.5M - $20M</div>
                  <div>• Ocean view estates</div>
                  <div>• Top-rated schools</div>
                  <div>• Upscale shopping and dining</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏡 Newport Coast</h3>
                <p className="text-slate-600 mb-3">Gated communities with custom luxury homes</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $4M - $25M</div>
                  <div>• Custom estate homes</div>
                  <div>• Golf course communities</div>
                  <div>• Gated and guard-gated options</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏢 Fashion Island Area</h3>
                <p className="text-slate-600 mb-3">Urban luxury with shopping and dining nearby</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $2M - $8M</div>
                  <div>• Luxury condos and townhomes</div>
                  <div>• Walking distance to Fashion Island</div>
                  <div>• Urban convenience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Choosing Newport Beach Mortgage Brokers */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            How to Choose the Best Newport Beach Mortgage Brokers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Luxury Market Experience</h3>
              <p className="text-slate-600 text-sm">Look for brokers with proven track record in high-value Newport Beach transactions</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Local Network</h3>
              <p className="text-slate-600 text-sm">Choose brokers with strong relationships in Newport Beach real estate community</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Jumbo Loan Expertise</h3>
              <p className="text-slate-600 text-sm">Ensure your broker specializes in jumbo loans for Newport Beach's premium pricing</p>
            </div>
          </div>
        </div>

        {/* Why Choose Mo for Newport Beach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Mo Abdel Stands Out Among Newport Beach Mortgage Brokers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏆 Luxury Market Expertise</h3>
                <p className="text-slate-600 mb-3">Extensive experience with high-value Newport Beach properties, jumbo loans, and complex financing scenarios for luxury real estate.</p>
                <p className="text-sm font-semibold text-blue-600">Specialized in $1M+ transactions</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🤝 Local Relationships</h3>
                <p className="text-slate-600 mb-3">Strong relationships with Newport Beach real estate agents, wealth managers, and other professionals serving high-net-worth clients.</p>
                <p className="text-sm font-semibold text-blue-600">Connected to your success team</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💎 Concierge-Level Service</h3>
                <p className="text-slate-600 mb-3">White-glove service including coordinated closings, flexible meeting locations, and dedicated support throughout your transaction.</p>
                <p className="text-sm font-semibold text-blue-600">Service that matches your lifestyle</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🌍 International Client Experience</h3>
                <p className="text-slate-600 mb-3">Experience working with foreign nationals, international income documentation, and cross-border wealth management situations.</p>
                <p className="text-sm font-semibold text-blue-600">Global perspective, local expertise</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ Complex Situation Solutions</h3>
                <p className="text-slate-600 mb-3">Navigate complex scenarios including multiple properties, asset-based lending, and unique income structures common with high-net-worth clients.</p>
                <p className="text-sm font-semibold text-blue-600">Solutions for sophisticated borrowers</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📱 Technology & Efficiency</h3>
                <p className="text-slate-600 mb-3">Modern technology platform for document sharing, status updates, and streamlined processing while maintaining personal service.</p>
                <p className="text-sm font-semibold text-blue-600">Efficiency without losing the personal touch</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Loan Programs for Newport Beach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Mortgage Specialist: Popular Loan Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">👑 Jumbo Loans</h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div>• No loan amount limits</div>
                  <div>• 10-20% down payment options</div>
                  <div>• Competitive rates for luxury properties</div>
                  <div>• Primary, second homes, and investment</div>
                </div>
                <p className="text-sm font-semibold text-purple-600">Perfect for Newport Beach luxury homes</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ Non-QM Programs</h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div>• Bank statement loans</div>
                  <div>• Asset-based qualification</div>
                  <div>• DSCR investor loans</div>
                  <div>• Foreign national programs</div>
                </div>
                <p className="text-sm font-semibold text-orange-600">Alternative documentation options</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🔄 Refinancing</h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div>• Cash-out refinancing</div>
                  <div>• Rate and term improvements</div>
                  <div>• Portfolio optimization</div>
                  <div>• Investment property refinancing</div>
                </div>
                <p className="text-sm font-semibold text-green-600">Optimize your Newport Beach investments</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Property Focus */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Investment Property Loans and DSCR Financing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Strong Rental Market</h3>
                    <p className="text-slate-600">
                      Newport Beach vacation rentals and luxury long-term rentals command 
                      premium rates, making investment properties highly attractive.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">DSCR Loan Programs</h3>
                    <p className="text-slate-600">
                      Qualify based on property cash flow rather than personal income. 
                      Perfect for building your Newport Beach rental portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Portfolio Building</h3>
                    <p className="text-slate-600">
                      Strategies for acquiring multiple Newport Beach properties and 
                      leveraging equity for continued portfolio growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Investment Property Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Avg. Rental Yield:</span>
                  <span className="font-bold">3-5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Vacation Rental Premium:</span>
                  <span className="font-bold text-green-600">2-3x monthly</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Typical Investment Down:</span>
                  <span className="font-bold">25-30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Appreciation (10-year avg):</span>
                  <span className="font-bold text-blue-600">6-8% annually</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Best Investment Areas:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                  <div>• Balboa Peninsula (vacation rentals)</div>
                  <div>• Newport Harbor (luxury condos)</div>
                  <div>• Corona del Mar (long-term rentals)</div>
                  <div>• Lido Isle (waterfront properties)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Newport Beach Mortgage Questions & Answers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the average home price in Newport Beach?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Newport Beach median home prices range from $2.1M to $5M+ depending on location. 
                  Waterfront properties and The Island command premium prices, while inland areas 
                  like Newport Heights offer relatively more affordable luxury options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need a jumbo loan for Newport Beach homes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, virtually all Newport Beach homes require jumbo financing above $1,089,300. 
                  We specialize in super jumbo loans up to $5M+ with competitive rates and 
                  flexible terms for luxury properties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What down payment do I need for a Newport Beach home?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Jumbo loans typically require 10-20% down payment. For luxury properties over $3M, 
                  expect 20-25% down. Asset-based programs and portfolio loans offer alternatives 
                  for high-net-worth borrowers with unique financial profiles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get financing for Newport Beach investment properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely! Newport Beach rental properties are excellent investments. DSCR loans 
                  qualify based on rental income, while portfolio lenders offer flexible terms for 
                  vacation rentals and luxury investment properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newport Beach City Resources */}
        <div className="mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">
              Official Newport Beach City Resources
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Access official city services and information for Newport Beach residents
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">City of Newport Beach</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Official city website with services, permits, and community information
                  </p>
                  <a 
                    href="https://www.newportbeachca.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit NewportBeachCA.gov →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Newport Beach Planning</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Planning department for zoning, permits, and development information
                  </p>
                  <a 
                    href="https://www.newportbeachca.gov/government/departments/community-development/planning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Planning Department →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Finance Your Newport Beach Dream Home?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get expert guidance and competitive rates for Newport Beach luxury properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start My Newport Beach Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Newport Beach luxury home specialist
          </p>
        </div>
      </div>
    </div>
  );
}