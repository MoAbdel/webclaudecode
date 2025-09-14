import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Phone, MapPin, DollarSign, Shield, CheckCircle, Home, Calculator, Users, Clock, Crown, TrendingUp } from 'lucide-react';
import EnhancedContactForm from '@/components/EnhancedContactForm';

export const metadata: Metadata = {
  title: 'Orange County Jumbo Loans | Luxury Home Financing | Mo Abdel NMLS #1426884',
  description: 'Orange County jumbo loans for luxury homes over $1,089,300. Licensed broker Mo Abdel (NMLS #1426884) offers competitive jumbo rates in Newport Beach, Irvine, and all OC.',
  alternates: {
    canonical: 'https://www.mothebroker.com/orange-county-jumbo-loans',
  },
};

// JSON-LD Schema for Jumbo Loans
const jumboLoansSchema = {
  "@context": "https://schema.org",
  "@type": ["FinancialProduct", "LoanOrCredit"],
  "name": "Orange County Jumbo Loans",
  "description": "Jumbo mortgage loans in Orange County for luxury homes exceeding $1,089,300. Competitive rates for high-value properties in Newport Beach, Irvine, and throughout OC.",
  "provider": {
    "@type": "Person",
    "name": "Mo Abdel",
    "identifier": "NMLS #1426884",
    "telephone": "(949) 579-2057",
    "jobTitle": "Licensed Mortgage Broker",
    "worksFor": {
      "@type": "Organization",
      "name": "NEXA Mortgage LLC",
      "identifier": "NMLS #1660690"
    }
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Orange County, CA"
    },
    {
      "@type": "City",
      "name": "Newport Beach, CA"
    },
    {
      "@type": "City",
      "name": "Irvine, CA"
    },
    {
      "@type": "City",
      "name": "Laguna Beach, CA"
    }
  ],
  "category": "Jumbo Mortgage Loans",
  "loanType": "Jumbo",
  "feesAndCommissionsSpecification": "Competitive rates for high-value properties",
  "amount": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "minValue": "1089301",
    "maxValue": "10000000"
  },
  "offers": {
    "@type": "Offer",
    "name": "Jumbo Loan for Luxury Homes",
    "description": "Competitive jumbo mortgage rates for Orange County luxury properties",
    "seller": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    }
  },
  "url": "https://www.mothebroker.com/orange-county-jumbo-loans",
  "sameAs": [
    "https://www.fanniemae.com/",
    "https://www.freddiemac.com/"
  ]
};

export default function OrangeCountyJumboLoansPage() {
  return (
    <>
      {/* Jumbo Loans Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jumboLoansSchema) }}
      />
      
      <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
                  <Link href="/loan-programs" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                    Loan Programs
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500">Orange County Jumbo Loans</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
                <Crown className="w-4 h-4 mr-2" />
                Luxury Home Financing
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Orange County Jumbo Loans - Luxury Home Financing
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
              Finance your Orange County luxury home with competitive jumbo loan rates. Licensed broker Mo Abdel (NMLS #1426884) specializes in high-value properties throughout Newport Beach, Irvine, and all of Orange County.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-slate-600">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                Loans Above $1,089,300
              </div>
              <div className="flex items-center">
                <Crown className="w-4 h-4 mr-1 text-purple-600" />
                Luxury Property Specialist
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1 text-blue-600" />
                Competitive Jumbo Rates
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="bg-purple-600 text-white py-4 px-6 rounded-lg mb-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Ready for Your Jumbo Loan?</h3>
                <p className="text-purple-100">Luxury home financing specialist serving Orange County</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:(949) 579-2057">
                  <Button className="bg-white text-purple-600 hover:bg-purple-50">
                    <Phone className="w-4 h-4 mr-2" />
                    (949) 579-2057
                  </Button>
                </a>
                <Link href="/contact-orange-county-mortgage-broker">
                  <Button variant="ghost" className="border-white text-white hover:bg-white hover:text-purple-600">
                    <Calculator className="w-4 h-4 mr-2" />
                    Get Jumbo Rate Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Jumbo Loan Benefits */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Crown className="w-6 h-6 mr-3 text-purple-600" />
                    Orange County Jumbo Loan Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Higher Loan Amounts</h4>
                        <p className="text-sm text-slate-600">Finance luxury homes above $1,089,300</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Competitive Rates</h4>
                        <p className="text-sm text-slate-600">Often similar to conforming loan rates</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Flexible Down Payments</h4>
                        <p className="text-sm text-slate-600">Options from 10-20% depending on loan type</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Various Property Types</h4>
                        <p className="text-sm text-slate-600">Primary, secondary, and investment properties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">No Mortgage Insurance</h4>
                        <p className="text-sm text-slate-600">Avoid PMI with adequate down payment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Interest-Only Options</h4>
                        <p className="text-sm text-slate-600">Available for qualified borrowers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Orange County Jumbo Loan Market */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    2025 Orange County Jumbo Loan Market
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-purple-700 mb-2">$1,089,300+</h3>
                      <p className="text-purple-600">Jumbo Loan Threshold in Orange County (2025)</p>
                      <p className="text-sm text-slate-600 mt-2">Loans above this amount require jumbo financing</p>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-slate-700">
                    <p className="mb-4">
                      Orange County's luxury real estate market requires specialized financing solutions. With median home prices well above the conforming loan limit, jumbo loans are essential for many homebuyers in premium areas like Newport Beach, Laguna Beach, and parts of Irvine.
                    </p>
                    <p className="mb-4">
                      <strong>Orange County Jumbo Loan Landscape:</strong>
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>• Loan amounts: $1,089,301 to $10+ million</li>
                      <li>• Down payment: Typically 10-20% minimum</li>
                      <li>• Credit score: 700+ recommended</li>
                      <li>• Debt-to-income: Usually up to 43%</li>
                      <li>• Cash reserves: 2-6 months typically required</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Orange County Areas */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Orange County Luxury Markets We Serve
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">Coastal Premium</h4>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Newport Beach</li>
                        <li>• Laguna Beach</li>
                        <li>• Dana Point</li>
                        <li>• Huntington Beach</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">Inland Luxury</h4>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Irvine</li>
                        <li>• Mission Viejo</li>
                        <li>• Yorba Linda</li>
                        <li>• Villa Park</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-600">
                      <strong>Median Home Prices in Premium OC Areas:</strong> $1.2M - $3.5M+
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Jumbo Loan Types */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Types of Jumbo Loans Available
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Home className="w-5 h-5 mr-2 text-blue-600" />
                        Conforming Jumbo
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Loans that exceed conforming limits but follow GSE guidelines
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Fixed and adjustable rates</li>
                        <li>• 10-20% down payment</li>
                        <li>• Competitive pricing</li>
                      </ul>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-green-600" />
                        Portfolio Jumbo
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Loans held by lenders with flexible guidelines
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• More flexible underwriting</li>
                        <li>• Higher DTI ratios possible</li>
                        <li>• Unique property types</li>
                      </ul>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <Calculator className="w-5 h-5 mr-2 text-purple-600" />
                        Interest-Only Jumbo
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Pay only interest for initial period
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Lower initial payments</li>
                        <li>• 5-10 year interest-only periods</li>
                        <li>• Ideal for income growth scenarios</li>
                      </ul>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                        ARM Jumbo
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Adjustable rate with lower initial rates
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Lower initial rate periods</li>
                        <li>• 5/1, 7/1, 10/1 ARM options</li>
                        <li>• Rate caps for protection</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Mo Abdel for Jumbo Loans */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Why Choose Mo Abdel for Your Orange County Jumbo Loan?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Crown className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Luxury Market Expertise</h3>
                      <p className="text-slate-600">
                        15+ years specializing in Orange County's premium real estate market.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Jumbo Lender Network</h3>
                      <p className="text-slate-600">
                        Access to specialized jumbo lenders with competitive rates and terms.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Personalized Service</h3>
                      <p className="text-slate-600">
                        White-glove service for high-value transactions with dedicated attention.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    Get Your Jumbo Loan Rate Quote
                  </CardTitle>
                  <p className="text-slate-600 text-center text-sm">
                    Licensed Orange County luxury home specialist Mo Abdel NMLS #1426884
                  </p>
                </CardHeader>
                <CardContent>
                  <EnhancedContactForm />
                </CardContent>
              </Card>

              {/* Quick Facts Card */}
              <Card className="shadow-xl mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Jumbo Loan Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Min Loan Amount:</span>
                      <span className="font-semibold">$1,089,301</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Typical Down Payment:</span>
                      <span className="font-semibold">10-20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Credit Score:</span>
                      <span className="font-semibold">700+ preferred</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Loan Terms:</span>
                      <span className="font-semibold">15-30 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Property Types:</span>
                      <span className="font-semibold">All types</span>
                    </div>
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