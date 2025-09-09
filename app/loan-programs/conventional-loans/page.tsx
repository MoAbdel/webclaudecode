import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, Shield, Home, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conventional Loans in Orange County, CA | 3% Down Payment | Mo Abdel — Mortgage Broker',
  description: 'Conventional loans in Orange County, CA. 3% down options. Get pre-approved or call (949) 579-2057.',
  keywords: 'conventional loans Orange County CA, conforming loans Orange County 2025 limit, 3% down mortgage, purchase mortgage Orange County'
};

export default function ConventionalLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏆 Most Popular Loan Program
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Conventional Loans</span> in Orange County, CA
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            The most popular mortgage option with competitive rates, flexible terms, and as 
            little as 3% down payment. No government backing means more property types 
            and loan amounts available for Orange County buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Pre-Approved Today
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">3% Down Available</h3>
            <p className="text-slate-600">Low down payment options for qualified buyers</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Competitive Rates</h3>
            <p className="text-slate-600">Often the lowest rates available in the market</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Any Property Type</h3>
            <p className="text-slate-600">Primary, second homes, investment properties, condos</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">PMI Removable</h3>
            <p className="text-slate-600">Cancel PMI when you reach 20% equity</p>
          </div>
        </div>

        {/* Conventional Loan Limits 2025 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2025 Conventional Loan Limits in Orange County</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Conforming Loan Limits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Single Family Home:</span>
                    <span className="font-bold text-blue-600">$1,209,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">2-Unit Property:</span>
                    <span className="font-bold text-blue-600">$1,394,775</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">3-Unit Property:</span>
                    <span className="font-bold text-blue-600">$1,685,850</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">4-Unit Property:</span>
                    <span className="font-bold text-blue-600">$2,095,200</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-slate-600">Above Conforming:</span>
                    <span className="font-bold text-purple-600">Jumbo Loan Required</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*2025 conforming loan limits set by FHFA. Above these amounts require jumbo financing.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Conventional Example</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Orange County Home Price:</span>
                    <span className="font-bold">$750,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Down Payment (5%):</span>
                    <span className="font-bold text-blue-600">$37,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Loan Amount:</span>
                    <span className="font-bold">$712,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">PMI (monthly):</span>
                    <span className="font-bold text-orange-600">~$297/month</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Est. Monthly Payment:</span>
                      <span className="font-bold text-green-600">~$4,850*</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Includes principal, interest, taxes, insurance, and PMI. Rates vary.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conventional Loan Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Conventional Loans?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏆 Best Rates Available</h3>
                <p className="text-slate-600 mb-3">Conventional loans typically offer the lowest interest rates, especially for buyers with good credit scores (740+).</p>
                <p className="text-sm font-semibold text-blue-600">Often 0.125-0.25% lower than government loans</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🛡️ PMI Can Be Removed</h3>
                <p className="text-slate-600 mb-3">Unlike FHA loans, PMI automatically cancels at 78% LTV or you can request removal at 80% LTV through appreciation or payments.</p>
                <p className="text-sm font-semibold text-blue-600">Save hundreds monthly long-term</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 Any Property Type</h3>
                <p className="text-slate-600 mb-3">Primary residences, second homes, investment properties, condos, co-ops, and manufactured homes on permanent foundations.</p>
                <p className="text-sm font-semibold text-blue-600">Maximum flexibility</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💰 Higher Loan Amounts</h3>
                <p className="text-slate-600 mb-3">Conforming loans up to $766,550 in Orange County, or go jumbo for unlimited amounts with competitive rates.</p>
                <p className="text-sm font-semibold text-blue-600">Perfect for Orange County prices</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ Faster Processing</h3>
                <p className="text-slate-600 mb-3">No government approvals needed. Automated underwriting systems provide faster decisions and closings.</p>
                <p className="text-sm font-semibold text-blue-600">Often close in 2-3 weeks</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📈 Cash-Out Friendly</h3>
                <p className="text-slate-600 mb-3">Higher cash-out refinance limits (up to 80% LTV) and more flexible uses of proceeds than government programs.</p>
                <p className="text-sm font-semibold text-blue-600">Access more equity</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Down Payment Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Conventional Loan Down Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3%</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3% Down Program</h3>
              <div className="text-left space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>First-time buyers only</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Primary residence only</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Income limits may apply</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>PMI required until 20% equity</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5%</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">5% Down Standard</h3>
              <div className="text-left space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                  <span>Any buyer eligible</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                  <span>Primary or second home</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                  <span>No income limits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                  <span>PMI required until 20% equity</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">20%</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">20%+ No PMI</h3>
              <div className="text-left space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                  <span>No mortgage insurance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                  <span>Best interest rates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                  <span>Any property type</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                  <span>Investment properties OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Conventional Loan Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">✅ Qualifying Standards</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Credit Score: 620+ (740+ for best rates)</p>
                    <p className="text-slate-600 text-sm">Higher scores unlock premium pricing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Debt-to-Income: Up to 45%</p>
                    <p className="text-slate-600 text-sm">Higher ratios possible with compensating factors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Employment: 2+ years stable history</p>
                    <p className="text-slate-600 text-sm">Same field/industry preferred</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Cash Reserves: 2+ months recommended</p>
                    <p className="text-slate-600 text-sm">More required for investment properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Down Payment Source: Must be documented</p>
                    <p className="text-slate-600 text-sm">Gift funds acceptable with proper documentation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">📋 Additional Considerations</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">PMI Costs</p>
                    <p className="text-slate-600 text-sm">0.25-1.5% annually depending on credit/LTV</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Property Standards</p>
                    <p className="text-slate-600 text-sm">Must meet lender appraisal requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Investment Property Rules</p>
                    <p className="text-slate-600 text-sm">25% down minimum, higher rates and reserves</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Second Home Requirements</p>
                    <p className="text-slate-600 text-sm">10% minimum down, additional reserves needed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Occupancy Verification</p>
                    <p className="text-slate-600 text-sm">Primary residence must be occupied within 60 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conventional vs Other Loans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Conventional vs Other Loan Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Conventional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">FHA</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">VA</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Jumbo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Down Payment</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">3-20%</td>
                  <td className="px-6 py-4 text-center text-slate-600">3.5%</td>
                  <td className="px-6 py-4 text-center text-green-600">$0</td>
                  <td className="px-6 py-4 text-center text-slate-600">10-20%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Interest Rates</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Lowest*</td>
                  <td className="px-6 py-4 text-center text-slate-600">Competitive</td>
                  <td className="px-6 py-4 text-center text-slate-600">Competitive</td>
                  <td className="px-6 py-4 text-center text-slate-600">Higher</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Loan Limits (OC)</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">$1,209,750</td>
                  <td className="px-6 py-4 text-center text-slate-600">$766,550</td>
                  <td className="px-6 py-4 text-center text-green-600">No limit</td>
                  <td className="px-6 py-4 text-center text-green-600">No limit</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Mortgage Insurance</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">PMI - Removable</td>
                  <td className="px-6 py-4 text-center text-orange-600">MIP - Long Term</td>
                  <td className="px-6 py-4 text-center text-green-600">None</td>
                  <td className="px-6 py-4 text-center text-green-600">None</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Property Types</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">All Types</td>
                  <td className="px-6 py-4 text-center text-slate-600">Limited</td>
                  <td className="px-6 py-4 text-center text-slate-600">Primary Only</td>
                  <td className="px-6 py-4 text-center text-blue-600">All Types</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Credit Score</td>
                  <td className="px-6 py-4 text-center text-slate-600">620+</td>
                  <td className="px-6 py-4 text-center text-green-600">580+</td>
                  <td className="px-6 py-4 text-center text-green-600">580+</td>
                  <td className="px-6 py-4 text-center text-orange-600">700+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">*With good credit (740+). Rates vary by credit score, down payment, and market conditions.</p>
        </div>

        {/* Perfect for Orange County */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Conventional Loans Work Great in Orange County</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Perfect for OC Price Range</h3>
                    <p className="text-slate-600">
                      Conforming limits of $1,209,750 cover many Orange County homes, while jumbo 
                      options handle luxury properties seamlessly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Investment Property Friendly</h3>
                    <p className="text-slate-600">
                      Orange County's strong rental market makes investment properties attractive. 
                      Conventional loans offer the best terms for investors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Condo Approval Flexibility</h3>
                    <p className="text-slate-600">
                      Many Orange County condos may not be FHA-approved but qualify 
                      for conventional financing with more flexible requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Orange County Conventional Lending</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Market Share:</span>
                  <span className="font-bold">~65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Average Purchase Price:</span>
                  <span className="font-bold">$650K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Typical Down Payment:</span>
                  <span className="font-bold text-green-600">10-20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Investment Property Usage:</span>
                  <span className="font-bold">~25%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Popular OC Conventional Areas:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div>• Irvine</div>
                  <div>• Newport Beach</div>
                  <div>• Costa Mesa</div>
                  <div>• Tustin</div>
                  <div>• Mission Viejo</div>
                  <div>• Huntington Beach</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* Related Services (Internal Links) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Related Mortgage Options</h2>
          <ul className="list-disc list-inside text-blue-700">
            <li><Link href="/loan-programs/fha-loans">FHA Loans in Orange County, CA</Link></li>
            <li><Link href="/loan-programs/jumbo-loans">Jumbo Loans (&gt;$1,209,750) in Orange County, CA</Link></li>
            <li><Link href="/loan-programs/rate-term-refinance">Rate &amp; Term Refinance in Orange County, CA</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Conventional Loan FAQs (Orange County, CA)</h2>
          <div className="space-y-4 text-slate-700">
            <details>
              <summary className="font-semibold">What is the 2025 Orange County conforming loan limit?</summary>
              <p>The 2025 conforming limit for a single-family home in Orange County, CA is $1,209,750. Loans above this amount are considered Jumbo.</p>
            </details>
            <details>
              <summary className="font-semibold">How much down payment do I need?</summary>
              <p>Conventional loans can go as low as 3% down for well-qualified buyers. We’ll help you choose the best option for your budget and goals.</p>
            </details>
            <details>
              <summary className="font-semibold">Can I buy in Irvine or Newport Beach?</summary>
              <p>Yes. We serve all of Orange County, including Irvine, Anaheim, Huntington Beach, and Newport Beach.</p>
            </details>
          </div>
        </section>

        {/* Structured Data */}
        {(() => {
          const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Mo Abdel — Mortgage Broker — Conventional Loans",
            "areaServed": "Orange County, CA",
            "serviceType": "Conventional Loans",
            "url": "https://example.com/loan-programs/conventional-loans",
            "telephone": "(949) 579-2057",
            "provider": "NEXA Mortgage",
            "brand": "Mo Abdel — Mortgage Broker, Orange County, CA.",
            "description": "Conventional mortgages in Orange County, CA with competitive rates and low down payment options.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Orange County",
              "addressRegion": "CA",
              "addressCountry": "US"
            }
          };
          const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the 2025 Orange County conforming loan limit?",
                "acceptedAnswer": { "@type": "Answer", "text": "The 2025 conforming limit for a single-family home in Orange County, CA is $1,209,750." }
              },
              {
                "@type": "Question",
                "name": "How much down payment do I need?",
                "acceptedAnswer": { "@type": "Answer", "text": "As low as 3% down for qualified buyers; we’ll help you compare." }
              },
              {
                "@type": "Question",
                "name": "Can I buy in Irvine or Newport Beach?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, we lend throughout Orange County including Irvine, Anaheim, Huntington Beach, and Newport Beach." }
              }
            ]
          };
          return (
            <>
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </>
          );
        })()}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for the Most Popular Loan Program?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get pre-approved with competitive conventional loan rates and flexible terms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start My Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all of Orange County
          </p>
        </div>

        {/* Required Disclaimers */}
        <div className="bg-slate-100 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Important Disclaimers</h3>
          <div className="text-sm text-slate-700 space-y-2">
            <p>
              <strong>This is not a commitment to lend.</strong> All information contained herein is subject to change without notice. 
              All loans are subject to credit approval, income verification, and property appraisal. Equal Housing Lender.
            </p>
            <p>
              This material is not from HUD or FHA and has not been approved by HUD or any government agency. 
              The information provided is for informational purposes only and is not an advertisement for products or services.
            </p>
            <p>
              Interest rates and loan terms are subject to change without notice. All information must be verified prior to loan approval. 
              Mo Abdel - NMLS #1426884, Licensed Mortgage Loan Originator with NEXA Mortgage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
