import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DollarSign, Calendar, Shield, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HELOAN (Home Equity Loan) - Orange County | Mo The Mortgage Broker',
  description: 'Get a fixed-rate Home Equity Loan in Orange County. Lump sum up to $500K with predictable payments. Licensed mortgage broker with NEXA Mortgage. Call (949) 579-2057.',
  keywords: 'HELOAN Orange County, home equity loan California, fixed rate home equity, second mortgage Orange County'
};

export default function HELOANPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 Fixed Payment Solution
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            HELOAN: <span className="text-green-600">Home Equity Loan</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Get a lump sum from your Orange County home's equity with a fixed interest rate 
            and predictable monthly payments. Perfect for large one-time expenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Get HELOAN Rates & Terms
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Fixed Rate</h3>
            <p className="text-slate-600">Interest rate never changes - budget with confidence</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Up to $500K</h3>
            <p className="text-slate-600">Large lump sum for major projects or investments</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">15-30 Year Terms</h3>
            <p className="text-slate-600">Choose the payment schedule that fits your budget</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tax Benefits*</h3>
            <p className="text-slate-600">Interest may be deductible for home improvements</p>
          </div>
        </div>

        {/* HELOAN vs HELOC Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">HELOAN vs HELOC: Which is Right for You?</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">HELOAN (Home Equity Loan)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">HELOC (Line of Credit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Interest Rate Type</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Fixed Rate</td>
                  <td className="px-6 py-4 text-center text-slate-600">Variable Rate</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Payment Amount</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Same Every Month</td>
                  <td className="px-6 py-4 text-center text-slate-600">Can Vary</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Fund Access</td>
                  <td className="px-6 py-4 text-center text-slate-600">Lump Sum at Closing</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Draw as Needed</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Best For</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">One-Time Expenses</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Ongoing Projects</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Rate Stability</td>
                  <td className="px-6 py-4 text-center text-green-600"><CheckCircle className="w-5 h-5 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-orange-500">⚠️ Variable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How HELOAN Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How a HELOAN Works in Orange County</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Apply for Your Loan Amount</h3>
                    <p className="text-slate-600">We determine how much equity you can access based on your Orange County home's value and your financial situation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lock in Your Fixed Rate</h3>
                    <p className="text-slate-600">Secure a fixed interest rate that won't change for the life of the loan, giving you payment predictability.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Receive Your Lump Sum</h3>
                    <p className="text-slate-600">Get all your funds at closing to use immediately for your project, purchase, or investment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Make Fixed Monthly Payments</h3>
                    <p className="text-slate-600">Enjoy predictable principal and interest payments that never change throughout the loan term.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">HELOAN Example</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Orange County Home Value:</span>
                  <span className="font-bold">$1,200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Current Mortgage Balance:</span>
                  <span className="font-bold">$400,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Available Equity (80% LTV):</span>
                  <span className="font-bold">$560,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">HELOAN Amount:</span>
                    <span className="font-bold text-green-600">$200,000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Fixed Rate:</span>
                    <span className="font-bold text-green-600">8.25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Payment (15 years):</span>
                    <span className="font-bold text-green-600">$1,924/mo</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">*Example rates and payments for illustration. Actual rates may vary.</p>
            </div>
          </div>
        </div>

        {/* Popular Uses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular HELOAN Uses in Orange County</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 Major Home Renovations</h3>
                <p className="text-slate-600 mb-3">Kitchen remodels, room additions, ADU construction, and other large home improvement projects.</p>
                <p className="text-sm font-semibold text-green-600">Perfect for big one-time projects</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💳 Debt Consolidation</h3>
                <p className="text-slate-600 mb-3">Pay off all high-interest credit cards and personal loans with one fixed payment.</p>
                <p className="text-sm font-semibold text-green-600">Predictable debt payoff</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏘️ Investment Property Down Payment</h3>
                <p className="text-slate-600 mb-3">Use your Orange County home equity as a down payment for rental or investment properties.</p>
                <p className="text-sm font-semibold text-green-600">Leverage your equity</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🎓 Education Expenses</h3>
                <p className="text-slate-600 mb-3">College tuition, private school costs, or other educational investments with fixed payments.</p>
                <p className="text-sm font-semibold text-green-600">Lower than most student loans</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💼 Business Investment</h3>
                <p className="text-slate-600 mb-3">Start or expand a business with a large lump sum and predictable monthly payments.</p>
                <p className="text-sm font-semibold text-green-600">Fixed business funding</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🚗 Major Purchases</h3>
                <p className="text-slate-600 mb-3">RVs, boats, luxury vehicles, or other large purchases with better rates than auto loans.</p>
                <p className="text-sm font-semibold text-green-600">Better rates than auto loans</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements & Considerations */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">HELOAN Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Credit Score: 640+</p>
                    <p className="text-slate-600 text-sm">Higher scores qualify for better fixed rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Combined LTV: Up to 80%</p>
                    <p className="text-slate-600 text-sm">Total of first mortgage plus HELOAN</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Debt-to-Income: 43% or lower</p>
                    <p className="text-slate-600 text-sm">Including the new HELOAN payment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Stable Income</p>
                    <p className="text-slate-600 text-sm">2+ years employment history preferred</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Important Considerations</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Closing Costs</p>
                    <p className="text-slate-600 text-sm">Typically 2-5% of loan amount (can often be financed)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Home as Collateral</p>
                    <p className="text-slate-600 text-sm">Your Orange County property secures the loan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Fixed Payment Commitment</p>
                    <p className="text-slate-600 text-sm">Monthly payment stays the same regardless of use</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">No Additional Borrowing</p>
                    <p className="text-slate-600 text-sm">Can't borrow additional funds without a new loan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Fixed-Rate Home Equity Financing?
          </h2>
          <p className="text-xl mb-6 text-green-100">
            Get personalized HELOAN rates and payment options from multiple lenders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold">
                Get My HELOAN Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-green-200 mt-4">
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