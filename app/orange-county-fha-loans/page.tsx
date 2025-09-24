import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Phone, MapPin, DollarSign, Shield, CheckCircle, Home, Calculator, Users, Clock } from 'lucide-react';
import EnhancedContactForm from '@/components/EnhancedContactForm';

export const metadata: Metadata = {
  title: 'Orange County FHA Loans | 3.5% Down Payment | Mo Abdel NMLS #1426884',
  description: 'Orange County FHA loans with 3.5% down payment. Licensed broker Mo Abdel (NMLS #1426884) offers competitive FHA rates across all OC cities. Free consultation!',
  alternates: {
    canonical: 'https://www.mothebroker.com/orange-county-fha-loans',
  },
};

// JSON-LD Schema for FHA Loans
const fhaLoansSchema = {
  "@context": "https://schema.org",
  "@type": ["FinancialProduct", "LoanOrCredit"],
  "name": "Orange County FHA Loans",
  "description": "FHA loans in Orange County with as little as 3.5% down payment. Licensed broker with access to multiple FHA lenders for competitive rates.",
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
  "category": "FHA Mortgage Loans",
  "loanType": "FHA",
  "feesAndCommissionsSpecification": "Low down payment option",
  "amount": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "minValue": "100000",
    "maxValue": "1089300"
  },
  "offers": {
    "@type": "Offer",
    "name": "FHA Loan with 3.5% Down",
    "description": "Competitive FHA mortgage rates with low down payment options",
    "seller": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    }
  },
  "url": "https://www.mothebroker.com/orange-county-fha-loans",
  "sameAs": [
    "https://www.hud.gov/program_offices/housing/fha",
    "https://entp.hud.gov/idapp/html/hicostlook.cfm"
  ]
};

export default function OrangeCountyFHALoansPage() {
  return (
    <>
      {/* FHA Loans Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fhaLoansSchema) }}
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
                  <span className="ml-1 text-sm font-medium text-gray-500">Orange County FHA Loans</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
                <Home className="w-4 h-4 mr-2" />
                FHA Approved Lender Access
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Orange County FHA Loans - Just 3.5% Down
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
              Get approved for an FHA loan in Orange County with as little as 3.5% down payment. Licensed broker Mo Abdel (NMLS #1426884) has access to multiple FHA lenders to find you the best rates and terms.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-slate-600">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                3.5% Minimum Down Payment
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-blue-600" />
                Government-Backed Security
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-purple-600" />
                Flexible Credit Requirements
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="bg-blue-600 text-white py-4 px-6 rounded-lg mb-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Ready to Apply for Your FHA Loan?</h3>
                <p className="text-blue-100">Get pre-approved in Orange County today</p>
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
              
              {/* FHA Loan Benefits */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Home className="w-6 h-6 mr-3 text-green-600" />
                    Orange County FHA Loan Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Low Down Payment</h4>
                        <p className="text-sm text-slate-600">As little as 3.5% down payment required</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Flexible Credit</h4>
                        <p className="text-sm text-slate-600">Credit scores as low as 580 accepted</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Competitive Rates</h4>
                        <p className="text-sm text-slate-600">Government-backed for lower rates</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Gift Funds Allowed</h4>
                        <p className="text-sm text-slate-600">Down payment can be gifted from family</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Assumable Loans</h4>
                        <p className="text-sm text-slate-600">Buyers can assume your FHA loan</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Streamline Refinance</h4>
                        <p className="text-sm text-slate-600">Easy refinancing options available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Orange County FHA Loan Limits */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    2025 Orange County FHA Loan Limits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-green-700 mb-2">$1,089,300</h3>
                      <p className="text-green-600">Maximum FHA Loan Amount in Orange County (2025)</p>
                      <p className="text-sm text-slate-600 mt-2">High-cost area designation allows for higher loan limits</p>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-slate-700">
                    <p className="mb-4">
                      Orange County is designated as a high-cost area by HUD, which means FHA loan limits are significantly higher than the national baseline. This allows you to purchase homes up to $1,089,300 with just 3.5% down payment.
                    </p>
                    <p className="mb-4">
                      <strong>Key Facts for Orange County FHA Loans:</strong>
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>• Minimum down payment: 3.5% of purchase price</li>
                      <li>• Mortgage insurance premium: 0.85% annually</li>
                      <li>• Credit score minimum: 580 for 3.5% down</li>
                      <li>• Debt-to-income ratio: Up to 57% in some cases</li>
                      <li>• Property types: Single-family, condos, townhomes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Orange County Cities */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    FHA Loans Available in All Orange County Cities
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
                      <div key={city} className="text-center p-3 bg-slate-50 hover:bg-green-50 rounded-lg transition-colors">
                        <span className="text-slate-700 hover:text-green-600 font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-slate-600">
                    <strong>Licensed to serve all Orange County communities</strong> with local market expertise
                  </p>
                </CardContent>
              </Card>

              {/* Why Choose Mo Abdel for FHA Loans */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Why Choose Mo Abdel for Your Orange County FHA Loan?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Multiple FHA Lenders</h3>
                      <p className="text-slate-600">
                        Access to 200+ lenders including top FHA-approved institutions for best rates.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Fast FHA Approvals</h3>
                      <p className="text-slate-600">
                        18-day average closing time with streamlined FHA processing.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">Orange County Expert</h3>
                      <p className="text-slate-600">
                        Extensive local expertise with Orange County FHA lending.
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
                    Get Your FHA Loan Pre-Approval
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
                    FHA Loan Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Min Down Payment:</span>
                      <span className="font-semibold">3.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Min Credit Score:</span>
                      <span className="font-semibold">580</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Max OC Loan Amount:</span>
                      <span className="font-semibold">$1,089,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Mortgage Insurance:</span>
                      <span className="font-semibold">0.85% Annual</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Property Types:</span>
                      <span className="font-semibold">1-4 Units</span>
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