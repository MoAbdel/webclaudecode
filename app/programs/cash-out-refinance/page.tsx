import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DollarSign, Home, TrendingUp, CheckCircle, AlertCircle, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cash-Out Refinance Orange County | Replace Mortgage + Get Cash | Mo The Broker',
  description: 'Cash-out refinance in Orange County. Replace your mortgage with a larger loan and get cash from your equity. Wholesale rates through NEXA Mortgage. Call (949) 579-2057.',
  keywords: 'cash out refinance Orange County, cash out refi California, home equity cash out, mortgage refinance cash'
};

export default function CashOutRefinancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 Most Popular Refinance Option
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-orange-600">Cash-Out Refinance</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Replace your current mortgage with a larger loan and get cash from your Orange County 
            home's equity at closing. Perfect for major expenses with potentially lower rates 
            than your current mortgage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                Get Cash-Out Refinance Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Large Cash Amounts</h3>
            <p className="text-slate-600">Access $50K to $500K+ in cash from your equity</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Lower Your Rate</h3>
            <p className="text-slate-600">Potentially get cash AND lower your interest rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tax Benefits*</h3>
            <p className="text-slate-600">Interest may be deductible for home improvements</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">One Payment</h3>
            <p className="text-slate-600">Replace multiple debts with one mortgage payment</p>
          </div>
        </div>

        {/* How Cash-Out Refinance Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How Cash-Out Refinancing Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Current Mortgage Payoff</h3>
                    <p className="text-slate-600">Your new, larger loan pays off your existing mortgage completely.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cash at Closing</h3>
                    <p className="text-slate-600">The difference between your new loan and old balance is cash in your pocket.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">New Mortgage Terms</h3>
                    <p className="text-slate-600">Your new mortgage may have a lower rate, different term, or better features.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Use Your Cash</h3>
                    <p className="text-slate-600">Use the cash for any purpose - home improvements, investments, debt payoff, etc.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Cash-Out Refinance Example</h3>
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
                  <span className="text-slate-600">Max New Loan (80% LTV):</span>
                  <span className="font-bold">$960,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">New Loan Amount:</span>
                    <span className="font-bold">$650,000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Pays Off Old Mortgage:</span>
                    <span className="font-bold">-$400,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cash to You:</span>
                    <span className="font-bold text-orange-600">$250,000</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">*Example only. Actual amounts depend on home value, credit, and lender requirements.</p>
            </div>
          </div>
        </div>

        {/* Cash-Out vs Other Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Cash-Out Refinance vs Other Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">Cash-Out Refinance</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">HELOC</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">HELOAN</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Personal Loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Replaces Current Mortgage</td>
                  <td className="px-6 py-4 text-center text-orange-600"><CheckCircle className="w-5 h-5 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-slate-600">No</td>
                  <td className="px-6 py-4 text-center text-slate-600">No</td>
                  <td className="px-6 py-4 text-center text-slate-600">No</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Maximum Cash Amount</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Highest</td>
                  <td className="px-6 py-4 text-center text-slate-600">High</td>
                  <td className="px-6 py-4 text-center text-slate-600">High</td>
                  <td className="px-6 py-4 text-center text-slate-600">Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Interest Rate</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Lowest*</td>
                  <td className="px-6 py-4 text-center text-slate-600">Variable</td>
                  <td className="px-6 py-4 text-center text-slate-600">Fixed</td>
                  <td className="px-6 py-4 text-center text-slate-600">Higher</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Closing Costs</td>
                  <td className="px-6 py-4 text-center text-slate-600">2-3% of loan</td>
                  <td className="px-6 py-4 text-center text-green-600">Often $0</td>
                  <td className="px-6 py-4 text-center text-slate-600">2-5% of loan</td>
                  <td className="px-6 py-4 text-center text-green-600">Minimal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Best When</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Rate is lower than current</td>
                  <td className="px-6 py-4 text-center text-slate-600">Ongoing access needed</td>
                  <td className="px-6 py-4 text-center text-slate-600">Want fixed payment</td>
                  <td className="px-6 py-4 text-center text-slate-600">Small amounts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">*When current rates are lower than your existing mortgage rate</p>
        </div>

        {/* Popular Uses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Cash-Out Refinance Uses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 Major Home Improvements</h3>
                <p className="text-slate-600 mb-3">Kitchen remodels, bathroom upgrades, ADU construction, pools, and whole-house renovations.</p>
                <p className="text-sm font-semibold text-orange-600">Tax-deductible interest*</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💳 Debt Consolidation</h3>
                <p className="text-slate-600 mb-3">Pay off high-interest credit cards, personal loans, and other debts with lower mortgage rates.</p>
                <p className="text-sm font-semibold text-orange-600">Potentially save thousands per year</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏘️ Real Estate Investment</h3>
                <p className="text-slate-600 mb-3">Down payment for rental properties, fix-and-flip projects, or other real estate opportunities.</p>
                <p className="text-sm font-semibold text-orange-600">Leverage Orange County equity</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💼 Business Investment</h3>
                <p className="text-slate-600 mb-3">Start or expand a business with lower-cost capital than business loans or lines of credit.</p>
                <p className="text-sm font-semibold text-orange-600">Lower rates than business loans</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🎓 Education Expenses</h3>
                <p className="text-slate-600 mb-3">College tuition, private school, or other educational investments at lower rates than student loans.</p>
                <p className="text-sm font-semibold text-orange-600">Often better than student loans</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🚨 Large Emergency Fund</h3>
                <p className="text-slate-600 mb-3">Create a substantial emergency fund or cash reserve for financial security and opportunities.</p>
                <p className="text-sm font-semibold text-orange-600">Financial peace of mind</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* When Cash-Out Makes Sense */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">When Does Cash-Out Refinancing Make Sense?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Great Time for Cash-Out Refinance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">Current rates are lower than your mortgage rate</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">You have 20%+ equity in your Orange County home</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">You need a large lump sum (&gt;$50K)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">You want to eliminate PMI</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">Your credit score has improved significantly</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Consider Other Options When</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700">Current rates are higher than your mortgage rate</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700">You have less than 20% equity</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700">You plan to move within 2-3 years</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700">You only need access to funds occasionally</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700">Your current mortgage has excellent terms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Cash-Out Refinance Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Credit & Income</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <div>• Credit score: 620+ (640+ for best rates)</div>
                <div>• Debt-to-income: ≤45%</div>
                <div>• 2+ years employment history</div>
                <div>• Income documentation required</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Property & Equity</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <div>• 20%+ equity required</div>
                <div>• Max 80% combined LTV</div>
                <div>• Property appraisal required</div>
                <div>• Primary, second home, or investment</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Costs & Timeline</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <div>• Closing costs: 2-3% of loan amount</div>
                <div>• Can be financed into loan</div>
                <div>• 30-45 day process</div>
                <div>• Cash at closing</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Access Your Orange County Home's Equity?
          </h2>
          <p className="text-xl mb-6 text-orange-100">
            Get personalized cash-out refinance rates and see how much cash you can access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold">
                Calculate My Cash-Out Amount
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-4">
            Licensed broker with NEXA Mortgage • NMLS #1426884 • Serving all of Orange County
          </p>
        </div>
      </div>
    </div>
  );
}