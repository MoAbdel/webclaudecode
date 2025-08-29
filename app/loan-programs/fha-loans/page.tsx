import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import TopicClusterLinks from '@/components/seo/TopicClusterLinks';
import { Home, Shield, Users, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FHA Loans Orange County | 3.5% Down Payment | Mo The Mortgage Broker NMLS #1426884',
  description: 'FHA loans in Orange County with just 3.5% down payment. Government-backed mortgages with flexible credit requirements. Licensed mortgage broker with NEXA Mortgage. Call (949) 579-2057.',
  keywords: 'FHA loans Orange County, FHA mortgage California, 3.5% down payment, first time homebuyer Orange County, government backed loans'
};

export default function FHALoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏠 Government-Backed Loan Program
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">FHA Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Buy your Orange County home with as little as 3.5% down payment. FHA loans offer 
            government backing with flexible credit requirements and competitive rates - 
            perfect for first-time homebuyers and those with limited down payment savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Pre-Approved for FHA Loan
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
            <h3 className="text-lg font-bold text-slate-900 mb-2">3.5% Down</h3>
            <p className="text-slate-600">Minimum down payment - lower than most conventional loans</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Credit Score 500+</h3>
            <p className="text-slate-600">Flexible credit requirements for Orange County buyers</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Gift Funds OK</h3>
            <p className="text-slate-600">Down payment can come from family gifts</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Government Backed</h3>
            <p className="text-slate-600">FHA insurance protects lenders, benefiting buyers</p>
          </div>
        </div>

        {/* FHA Loan Limits 2025 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2025 FHA Loan Limits in Orange County</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Orange County FHA Limits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Single Family Home:</span>
                    <span className="font-bold text-blue-600">$1,089,300</span>
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
                </div>
                <p className="text-xs text-slate-500 mt-4">*2025 FHA loan limits. Limits are updated annually by HUD.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">FHA Example Purchase</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Orange County Home Price:</span>
                    <span className="font-bold">$650,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Down Payment (3.5%):</span>
                    <span className="font-bold text-blue-600">$22,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">FHA Loan Amount:</span>
                    <span className="font-bold">$627,250</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Est. Monthly Payment:</span>
                      <span className="font-bold text-green-600">~$4,250*</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Includes principal, interest, taxes, insurance, and MIP. Rates vary.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FHA Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose FHA for Your Orange County Home?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏦 Lower Down Payment Requirements</h3>
                <p className="text-slate-600 mb-3">Just 3.5% down vs 5-20% for conventional loans. On a $650K Orange County home, that's $22,750 vs $32,500-$130,000.</p>
                <p className="text-sm font-semibold text-blue-600">Save thousands upfront</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📊 Flexible Credit Standards</h3>
                <p className="text-slate-600 mb-3">Credit scores as low as 580 with 3.5% down, or 500-579 with 10% down. More forgiving of past credit issues.</p>
                <p className="text-sm font-semibold text-blue-600">Second chances for homeownership</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🎁 Gift Funds Allowed</h3>
                <p className="text-slate-600 mb-3">Entire down payment can come from family gifts, grants, or employer programs. No seasoning requirements.</p>
                <p className="text-sm font-semibold text-blue-600">Family can help with homeownership</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💰 Competitive Interest Rates</h3>
                <p className="text-slate-600 mb-3">FHA rates are often similar to or better than conventional loan rates, especially for buyers with lower credit scores.</p>
                <p className="text-sm font-semibold text-blue-600">Government backing = better rates</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🔄 FHA Streamline Refinance</h3>
                <p className="text-slate-600 mb-3">Future refinancing can be faster and easier with reduced documentation and no appraisal in many cases.</p>
                <p className="text-sm font-semibold text-blue-600">Easier future refinancing</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 Property Flexibility</h3>
                <p className="text-slate-600 mb-3">Can be used for 1-4 unit properties, condos, manufactured homes, and even some fixer-uppers with FHA 203(k) loans.</p>
                <p className="text-sm font-semibold text-blue-600">Various property types allowed</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FHA Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FHA Loan Requirements for Orange County</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">✅ Qualifying Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Credit Score: 500+ (580+ for 3.5% down, 500-579 for 10% down)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Debt-to-Income: Up to 57% in some cases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Employment: 2+ years stable employment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Primary Residence: Must be your main home</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">No Recent Bankruptcy: 2+ years since Chapter 7, 1+ year Chapter 13</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">⚠️ Important Considerations</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Mortgage Insurance Premium (MIP)</p>
                    <p className="text-slate-600 text-sm">Upfront MIP of 1.75% + annual MIP of 0.45-1.05%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Property Standards</p>
                    <p className="text-slate-600 text-sm">Home must meet FHA minimum property standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Loan Limits</p>
                    <p className="text-slate-600 text-sm">Cannot exceed FHA maximums for Orange County</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">MIP Duration</p>
                    <p className="text-slate-600 text-sm">11+ years for loans with &lt;90% LTV, life of loan for ≥90% LTV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FHA vs Conventional */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FHA vs Conventional Loans for Orange County</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">FHA Loans</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Conventional Loans</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Minimum Down Payment</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">3.5%</td>
                  <td className="px-6 py-4 text-center text-slate-600">3-5%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Credit Score Requirement</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">500+</td>
                  <td className="px-6 py-4 text-center text-slate-600">620+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Mortgage Insurance</td>
                  <td className="px-6 py-4 text-center text-orange-600">MIP - Long Term</td>
                  <td className="px-6 py-4 text-center text-green-600">PMI - Removable at 20%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Debt-to-Income Ratio</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Up to 57%</td>
                  <td className="px-6 py-4 text-center text-slate-600">Up to 45%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Gift Funds</td>
                  <td className="px-6 py-4 text-center text-blue-600"><CheckCircle className="w-5 h-5 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-green-600"><CheckCircle className="w-5 h-5 mx-auto" /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Loan Limits (OC)</td>
                  <td className="px-6 py-4 text-center text-slate-600">$1,089,300</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">$766,550+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Perfect for Orange County */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why FHA Works Great in Orange County</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">High Home Prices, Lower Down Payment</h3>
                    <p className="text-slate-600">
                      With Orange County median home prices around $1.2M, even 3.5% down saves 
                      tens of thousands compared to conventional loan requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Perfect for First-Time Buyers</h3>
                    <p className="text-slate-600">
                      Many Orange County buyers are first-time purchasers who benefit from 
                      FHA's flexible credit and income requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive in All Markets</h3>
                    <p className="text-slate-600">
                      Whether you're buying in Irvine, Newport Beach, or Anaheim, 
                      FHA loans work across all Orange County communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Orange County FHA Success</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">FHA Market Share in OC:</span>
                  <span className="font-bold">~15-20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Average FHA Purchase Price:</span>
                  <span className="font-bold">$650K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Typical Down Payment Saved:</span>
                  <span className="font-bold text-green-600">$10K-30K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">First-Time Buyer Usage:</span>
                  <span className="font-bold">~80%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Popular Orange County FHA Areas:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div>• Anaheim</div>
                  <div>• Garden Grove</div>
                  <div>• Santa Ana</div>
                  <div>• Fullerton</div>
                  <div>• Orange</div>
                  <div>• Costa Mesa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Buy Your Orange County Home with FHA?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get pre-approved with just 3.5% down and flexible credit requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start My FHA Pre-Approval
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

        {/* Topic Cluster Links */}
        <TopicClusterLinks 
          currentPage="/loan-programs/fha-loans" 
          clusterType="loan-programs" 
        />
      </div>
    </div>
  );
}