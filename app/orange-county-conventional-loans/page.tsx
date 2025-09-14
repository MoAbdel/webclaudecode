import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Phone, MapPin, DollarSign, Shield, CheckCircle, Home, Calculator, Users, Clock, TrendingDown } from 'lucide-react';
import EnhancedContactForm from '@/components/EnhancedContactForm';

export const metadata: Metadata = {
  title: 'Orange County Conventional Loans | Low Rates | Mo Abdel NMLS #1426884',
  description: 'Orange County conventional loans with competitive rates and 3% down options. Licensed broker Mo Abdel (NMLS #1426884) with access to 200+ lenders. Get approved today!',
  alternates: {
    canonical: 'https://www.mothebroker.com/orange-county-conventional-loans',
  },
};

// JSON-LD Schema for Conventional Loans
const conventionalLoansSchema = {
  "@context": "https://schema.org",
  "@type": ["FinancialProduct", "LoanOrCredit"],
  "name": "Orange County Conventional Loans",
  "description": "Conventional mortgage loans in Orange County with competitive rates and flexible down payment options. No mortgage insurance with 20% down.",
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
      "name": "Irvine, CA"
    },
    {
      "@type": "City",
      "name": "Newport Beach, CA"
    },
    {
      "@type": "City",
      "name": "Mission Viejo, CA"
    }
  ],
  "category": "Conventional Mortgage Loans",
  "loanType": "Conventional",
  "feesAndCommissionsSpecification": "Competitive rates with no mortgage insurance at 20% down",
  "amount": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "minValue": "100000",
    "maxValue": "3000000"
  },
  "offers": {
    "@type": "Offer",
    "name": "Conventional Loan with Low Down Payment",
    "description": "Competitive conventional mortgage rates with options as low as 3% down",
    "seller": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    }
  },
  "url": "https://www.mothebroker.com/orange-county-conventional-loans",
  "sameAs": [
    "https://www.fanniemae.com/",
    "https://www.freddiemac.com/"
  ]
};

export default function OrangeCountyConventionalLoansPage() {
  return (
    <>
      {/* Conventional Loans Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conventionalLoansSchema) }}
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
                  <span className="ml-1 text-sm font-medium text-gray-500">Orange County Conventional Loans</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                <TrendingDown className="w-4 h-4 mr-2" />
                Competitive Rates Available
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Orange County Conventional Loans - Best Rates
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
              Get the best conventional loan rates in Orange County with down payments as low as 3%. Licensed broker Mo Abdel (NMLS #1426884) compares 200+ lenders to secure your ideal mortgage terms.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-slate-600">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                3% Minimum Down Payment
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-blue-600" />
                No MI with 20% Down
              </div>
              <div className="flex items-center">
                <TrendingDown className="w-4 h-4 mr-1 text-purple-600" />
                Competitive Interest Rates
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="bg-blue-600 text-white py-4 px-6 rounded-lg mb-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Ready for Your Conventional Loan?</h3>
                <p className="text-blue-100">Compare rates from 200+ lenders today</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:(949) 579-2057">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    <Phone className="w-4 h-4 mr-2" />
                    (949) 579-2057
                  </Button>
                </a>
                <Link href="/contact-orange-county-mortgage-broker">
                  <Button variant="ghost" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Calculator className="w-4 h-4 mr-2" />
                    Get Rate Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Conventional Loan Benefits */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Home className="w-6 h-6 mr-3 text-blue-600" />
                    Orange County Conventional Loan Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Low Down Payment Options</h4>
                        <p className="text-sm text-slate-600">As little as 3% down for qualified borrowers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">No Mortgage Insurance</h4>
                        <p className="text-sm text-slate-600">Eliminate PMI with 20% down payment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Competitive Rates</h4>
                        <p className="text-sm text-slate-600">Often lower rates than FHA loans</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">No Property Restrictions</h4>
                        <p className="text-sm text-slate-600">Can be used for any property type</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Higher Loan Limits</h4>
                        <p className="text-sm text-slate-600">Up to $1,089,300 in Orange County</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Flexible Terms</h4>
                        <p className="text-sm text-slate-600">15, 20, and 30-year options available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Orange County Conventional Loan Limits */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    2025 Orange County Conventional Loan Limits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-blue-700 mb-2">$1,089,300</h3>
                      <p className="text-blue-600">Conforming Conventional Loan Limit (2025)</p>
                      <p className="text-sm text-slate-600 mt-2">High-cost area allows for higher loan amounts</p>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-slate-700">
                    <p className="mb-4">
                      Orange County's designation as a high-cost area means conventional loan limits are significantly above the national baseline. This allows you to purchase homes up to $1,089,300 while still getting the benefits of conforming loan rates.
                    </p>
                    <p className="mb-4">
                      <strong>Key Facts for Orange County Conventional Loans:</strong>
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>• Minimum down payment: 3% for qualified borrowers</li>
                      <li>• No mortgage insurance with 20% down payment</li>
                      <li>• Credit score minimum: Typically 620 or higher</li>
                      <li>• Debt-to-income ratio: Usually up to 45%</li>
                      <li>• Property types: Primary, secondary, investment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Conventional vs Other Loans */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Conventional Loans vs. FHA Loans in Orange County
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold">Feature</th>
                          <th className="text-left py-3 px-4 font-semibold text-blue-600">Conventional</th>
                          <th className="text-left py-3 px-4 font-semibold text-green-600">FHA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4">Down Payment</td>
                          <td className="py-3 px-4">3% minimum</td>
                          <td className="py-3 px-4">3.5% minimum</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4">Credit Score</td>
                          <td className="py-3 px-4">620+ typically</td>
                          <td className="py-3 px-4">580+ accepted</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4">Mortgage Insurance</td>
                          <td className="py-3 px-4">None with 20% down</td>
                          <td className="py-3 px-4">Required for life of loan</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4">Interest Rates</td>
                          <td className="py-3 px-4">Often lower</td>
                          <td className="py-3 px-4">Competitive</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Property Types</td>
                          <td className="py-3 px-4">All types allowed</td>
                          <td className="py-3 px-4">Primary residence only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Orange County Cities */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Conventional Loans Throughout Orange County
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Irvine', 'Newport Beach', 'Mission Viejo', 'Huntington Beach',
                      'Costa Mesa', 'Orange', 'Anaheim', 'Santa Ana', 
                      'Fullerton', 'Laguna Beach', 'Yorba Linda', 'Tustin',
                      'Aliso Viejo', 'Dana Point', 'Lake Forest', 'Fountain Valley'
                    ].map((city) => (
                      <div key={city} className="text-center p-3 bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors">
                        <span className="text-slate-700 hover:text-blue-600 font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-slate-600">
                    <strong>Licensed to serve all Orange County communities</strong> with local market expertise
                  </p>
                </CardContent>
              </Card>

              {/* Why Choose Mo Abdel */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Why Choose Mo Abdel for Your Orange County Conventional Loan?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">200+ Lender Network</h3>
                      <p className="text-slate-600">
                        Compare conventional loan rates from hundreds of lenders for the best deal.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">18-Day Closings</h3>
                      <p className="text-slate-600">
                        Fast conventional loan processing with efficient underwriting.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Local Expertise</h3>
                      <p className="text-slate-600">
                        15+ years of Orange County conventional lending experience.
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
                    Get Your Conventional Loan Rate
                  </CardTitle>
                  <p className="text-slate-600 text-center text-sm">
                    Licensed Orange County broker Mo Abdel NMLS #1426884
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
                    Conventional Loan Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Min Down Payment:</span>
                      <span className="font-semibold">3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Min Credit Score:</span>
                      <span className="font-semibold">620</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Max OC Loan Amount:</span>
                      <span className="font-semibold">$1,089,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Mortgage Insurance:</span>
                      <span className="font-semibold">None at 20% down</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Loan Terms:</span>
                      <span className="font-semibold">15-30 years</span>
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