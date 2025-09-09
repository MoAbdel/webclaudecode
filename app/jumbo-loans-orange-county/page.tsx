import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Star, Shield, DollarSign, TrendingUp, Users, CheckCircle, Home, Calculator, FileText, Award, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jumbo Loans Orange County 2025 | High-Balance Mortgage Financing',
  description: 'Get jumbo loans in Orange County above $1,209,750 for luxury homes. Mo Abdel specializes in high-balance mortgage financing with competitive rates and flexible terms.',
  keywords: 'jumbo loans Orange County, high balance mortgage California, luxury home loans OC, jumbo mortgage specialist Orange County, high-value home financing 2025'
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo Abdel - Jumbo Loan Specialist",
  "description": "Specialized jumbo loan services for high-value homes in Orange County, California. Financing above $1,209,750 with competitive rates.",
  "serviceType": "Jumbo Loans and High-Balance Home Financing",
  "provider": {
    "@type": "Person",
    "name": "Mo Abdel",
    "jobTitle": "Licensed Mortgage Broker",
    "telephone": "(949) 579-2057",
    "email": "mo@mothebroker.com"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Orange County, California"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "telephone": "(949) 579-2057",
  "url": "https://www.mothebroker.com/jumbo-loans-orange-county",
  "sameAs": [
    "https://www.facebook.com/mothebroker",
    "https://www.linkedin.com/in/mo-abdel-mortgage"
  ],
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "Competitive jumbo loan rates"
};

export default function JumboLoansOrangeCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏰 Luxury Home Financing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Jumbo Loans Orange County 2025 – <span className="text-blue-600">High-Balance Luxury Home Financing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Finance luxury homes above $1,209,750 in Orange County with competitive jumbo loans. 
              Mo Abdel specializes in high-balance mortgage financing for Newport Beach, Irvine, Laguna Beach, and premium properties throughout OC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Apply for Jumbo Loan
                </Button>
              </Link>
              <a href="tel:(949) 579-2057">
                <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Call Jumbo Specialist
                </Button>
              </a>
            </div>
          </div>

          {/* 2025 Jumbo Loan Limits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">2025 Jumbo Loan Limits Orange County</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$1,209,750</div>
                  <div className="text-slate-600">2025 Conforming Loan Limit</div>
                  <div className="text-sm text-slate-500 mt-1">Maximum conventional loan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$1,209,751+</div>
                  <div className="text-slate-600">Jumbo Loan Territory</div>
                  <div className="text-sm text-slate-500 mt-1">Above conforming limits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">No Limit</div>
                  <div className="text-slate-600">Maximum Loan Amount</div>
                  <div className="text-sm text-slate-500 mt-1">Based on qualification</div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">Orange County Jumbo Loan Benefits 2025:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Finance luxury homes throughout Orange County without borrowing restrictions</li>
                  <li>• Competitive interest rates for high-balance mortgages</li>
                  <li>• Flexible down payment options starting at 10%</li>
                  <li>• Available for primary residences, second homes, and investment properties</li>
                  <li>• Portfolio lending options for unique properties and situations</li>
                  <li>• Cash-out refinancing up to 80% loan-to-value ratio</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Jumbo Loan Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Orange County Jumbo Loan Benefits & Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Building className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Luxury Home Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Finance premium properties in Newport Beach, Irvine, Laguna Beach, and other 
                    exclusive Orange County communities with loan amounts up to $5 million+.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Star className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Competitive Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Jumbo loan rates often competitive with conventional loans, sometimes even 
                    lower due to the high-quality borrower profile and low risk.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Flexible Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Choose from 15, 20, or 30-year terms with fixed or adjustable rates. 
                    Interest-only payment options available for qualifying borrowers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-orange-600 mb-4" />
                  <CardTitle className="text-xl">Low Down Payment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Down payments as low as 10% for primary residences, 15% for second homes, 
                    and 20% for investment properties in Orange County.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-xl">Portfolio Lending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Access to portfolio lenders for unique properties, self-employed borrowers, 
                    or complex financial situations that don't fit traditional guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Award className="w-12 h-12 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Premium Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    White-glove service with dedicated jumbo loan specialists who understand 
                    the unique needs of luxury home buyers in Orange County.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Jumbo vs Conventional Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Jumbo vs Conventional Loans Orange County 2025</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Loan Feature</th>
                    <th className="px-6 py-4 text-center">Jumbo Loan</th>
                    <th className="px-6 py-4 text-center">Conventional</th>
                    <th className="px-6 py-4 text-center">Super Jumbo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Orange County 2025 Limits</td>
                    <td className="px-6 py-4 text-center text-purple-600 font-bold">$1,209,751 - $3M</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">Up to $1,209,750</td>
                    <td className="px-6 py-4 text-center text-pink-600 font-bold">$3M+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Minimum Down Payment</td>
                    <td className="px-6 py-4 text-center text-green-600">10% - 20%</td>
                    <td className="px-6 py-4 text-center text-blue-600">3% - 20%</td>
                    <td className="px-6 py-4 text-center text-orange-600">20% - 30%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Private Mortgage Insurance</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Not Available</td>
                    <td className="px-6 py-4 text-center text-red-600">Required if &lt; 20% down</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Not Available</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Credit Score Requirement</td>
                    <td className="px-6 py-4 text-center text-yellow-600">700+ preferred</td>
                    <td className="px-6 py-4 text-center text-green-600">620+</td>
                    <td className="px-6 py-4 text-center text-red-600">740+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Debt-to-Income Ratio</td>
                    <td className="px-6 py-4 text-center text-blue-600">43% max (flexible)</td>
                    <td className="px-6 py-4 text-center text-green-600">Up to 50%</td>
                    <td className="px-6 py-4 text-center text-yellow-600">36% preferred</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Cash Reserves Required</td>
                    <td className="px-6 py-4 text-center text-yellow-600">2-6 months</td>
                    <td className="px-6 py-4 text-center text-green-600">0-2 months</td>
                    <td className="px-6 py-4 text-center text-red-600">6-12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Popular Orange County Markets for Jumbo Loans */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Orange County Luxury Markets for Jumbo Loans
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Newport Beach</div>
                    <p className="text-slate-600">Waterfront estates, luxury condos, and premium properties. Median home prices $3M+</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Irvine</div>
                    <p className="text-slate-600">Luxury master-planned communities, new construction homes $1.5M - $4M+</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Laguna Beach</div>
                    <p className="text-slate-600">Ocean-view estates, artistic community homes, unique luxury properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Manhattan Beach Border</div>
                    <p className="text-slate-600">Luxury beachside communities, high-end family homes and estates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Yorba Linda & Villa Park</div>
                    <p className="text-slate-600">Executive homes, gated communities, luxury custom-built properties</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Jumbo Loan Qualification Requirements</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Minimum Loan Amount:</span>
                  <span className="font-bold text-purple-600">$1,209,751</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Typical Down Payment:</span>
                  <span className="font-bold text-blue-600">10% - 20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Credit Score:</span>
                  <span className="font-bold text-green-600">700+ Preferred</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Debt-to-Income:</span>
                  <span className="font-bold">43% Max</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Income Documentation:</h4>
                <div className="space-y-1 text-sm text-slate-600">
                  <div>• Full income verification required</div>
                  <div>• Asset documentation and reserves</div>
                  <div>• Employment verification (2+ years)</div>
                  <div>• Bank statements (2+ months)</div>
                  <div>• Investment account statements</div>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Jumbo Loans */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Types of Jumbo Loans Available in Orange County</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Home className="w-10 h-10 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Jumbo Purchase Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Finance luxury homes above $1,209,750 in Orange County. Perfect for high-end 
                    properties in Newport Beach, Irvine, and premium OC communities.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Loan amounts up to $5M+ (qualified borrowers)</li>
                    <li>• Primary residence, second home, or investment</li>
                    <li>• Fixed or adjustable rate options</li>
                    <li>• Down payments as low as 10%</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Jumbo Refinance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Refinance existing jumbo mortgages to lower rates, change terms, or access 
                    equity from your Orange County luxury home.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Rate-and-term refinancing</li>
                    <li>• Cash-out refinancing up to 80% LTV</li>
                    <li>• ARM to fixed-rate conversions</li>
                    <li>• Debt consolidation options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Calculator className="w-10 h-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Interest-Only Jumbo Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Interest-only payment options for the first 5-10 years, perfect for 
                    high-income professionals with variable compensation.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Lower initial monthly payments</li>
                    <li>• Preserve cash flow for investments</li>
                    <li>• Qualify for larger loan amounts</li>
                    <li>• Converts to principal and interest</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Building className="w-10 h-10 text-orange-600 mb-4" />
                  <CardTitle className="text-xl">Portfolio Jumbo Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Non-QM jumbo loans held in portfolio by lenders, offering more flexibility 
                    for unique situations and complex borrower profiles.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Self-employed borrower programs</li>
                    <li>• Asset-based qualification</li>
                    <li>• Non-warrantable condos</li>
                    <li>• Unique property types</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Jumbo Loan Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Orange County Jumbo Loan Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">1</span>
                  </div>
                  <CardTitle>Pre-Qualification Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Discuss your financial situation, income, assets, and luxury home goals</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">2</span>
                  </div>
                  <CardTitle>Documentation & Pre-Approval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Provide comprehensive financial documentation and receive pre-approval letter</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <CardTitle>Property Selection & Appraisal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Find your luxury Orange County home and complete professional appraisal</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">4</span>
                  </div>
                  <CardTitle>Underwriting & Closing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Final underwriting review and closing on your luxury home financing</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Internal Links to Related Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Explore Other Orange County Loan Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/va-loans-orange-county" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <CardTitle className="text-lg group-hover:text-blue-600">VA Loans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      Zero down payment loans for Orange County veterans
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/fha-loans-orange-county" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg group-hover:text-blue-600">FHA Loans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      3.5% down payment option for Orange County homebuyers
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/heloc-orange-county" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-lg group-hover:text-blue-600">HELOC</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      Access your Orange County home equity with flexible credit line
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cash-out-refinance" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <Calculator className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <CardTitle className="text-lg group-hover:text-blue-600">Cash-Out Refi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      Access equity from your Orange County luxury home
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Jumbo Loan FAQ for Orange County Luxury Homes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What qualifies as a jumbo loan in Orange County?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Any mortgage above $1,209,750 in Orange County is considered a jumbo loan in 2025. 
                    This includes most luxury homes in Newport Beach, high-end Irvine properties, 
                    and premium communities throughout OC where home values exceed conforming limits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are jumbo loan rates higher than conventional rates?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Not necessarily! Jumbo loan rates are often competitive with or sometimes lower than 
                    conventional loan rates due to the high-quality borrower profile. Rates vary by 
                    lender, loan amount, and borrower qualifications. Mo can help you compare options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much down payment is required for a jumbo loan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Down payment requirements vary: 10% minimum for primary residences, 15% for second homes, 
                    and 20% for investment properties. Some lenders may require 20% regardless of property type. 
                    Higher down payments often result in better rates and terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I get a jumbo loan for an Orange County condo?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Yes! Jumbo loans are available for luxury condos throughout Orange County, including 
                    high-rise buildings in Newport Beach and Irvine. The condo complex must meet lender 
                    requirements, and some buildings may require higher down payments or reserves.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What credit score do I need for a jumbo loan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Most lenders prefer credit scores of 700+ for jumbo loans, though some programs accept 
                    scores as low as 660. Higher credit scores (740+) typically qualify for the best rates 
                    and terms. Mo can help improve your profile for optimal qualification.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does jumbo loan approval take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Jumbo loan approval typically takes 30-45 days due to additional documentation and 
                    underwriting requirements. Complex financial situations or unique properties may take longer. 
                    Pre-approval can expedite the process significantly for serious luxury home buyers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Finance Your Orange County Luxury Home?
            </h2>
            <p className="text-xl mb-6 text-purple-100">
              Unlock luxury homeownership with competitive jumbo loan financing. Get started with Mo Abdel, 
              your trusted Orange County jumbo loan specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
                  Apply for Jumbo Loan
                </Button>
              </Link>
              <a href="tel:(949) 579-2057">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                  Call Jumbo Expert: (949) 579-2057
                </Button>
              </a>
            </div>
            <p className="text-sm text-purple-200 mt-4">
              Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Specializing in Orange County luxury home financing
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
