import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Zap, TrendingUp, Users, CheckCircle, AlertCircle, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Non-QM Loans Orange County | Alternative Income Documentation | Mo The Mortgage Broker',
  description: 'Non-QM loans in Orange County for self-employed, investors, and unique income situations. Bank statements, asset-based, and alternative documentation programs through mortgage broker. Call (949) 579-2057.',
  keywords: 'Non-QM loans Orange County, bank statement loans, self-employed mortgage, asset based loans, alternative documentation'
};

export default function NonQMLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚡ Alternative Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-orange-600">Non-QM Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Specialized mortgage programs for self-employed borrowers, investors, and unique 
            income situations that don't fit traditional lending guidelines. Flexible 
            documentation with competitive rates for qualified Orange County borrowers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                Get Non-QM Pre-Approval
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
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Documentation</h3>
            <p className="text-slate-600">Bank statements, asset-based, or alternative income verification</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Self-Employed Friendly</h3>
            <p className="text-slate-600">Perfect for business owners and independent contractors</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Higher DTI OK</h3>
            <p className="text-slate-600">Debt-to-income ratios up to 50% with strong compensating factors</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Investment Properties</h3>
            <p className="text-slate-600">Finance multiple investment properties with alternative income</p>
          </div>
        </div>

        {/* Non-QM Program Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Non-QM Loan Program Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/loan-programs/bank-statement-loans" className="block">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🏦 Bank Statement Loans</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>• 12-24 months bank statements</div>
                    <div>• No tax returns required</div>
                    <div>• Personal & business accounts</div>
                    <div>• Cash flow analysis</div>
                    <div>• 10-20% down payment</div>
                  </div>
                  <p className="text-sm font-semibold text-blue-600 mb-4">Best for: Self-employed, 1099 contractors</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/loan-programs/asset-depletion-loans" className="block">
              <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">💰 Asset-Based Loans</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>• Income based on liquid assets</div>
                    <div>• Stocks, bonds, retirement accounts</div>
                    <div>• Asset depletion calculation</div>
                    <div>• No employment verification</div>
                    <div>• 20-30% down payment</div>
                  </div>
                  <p className="text-sm font-semibold text-green-600 mb-4">Best for: Retirees, high-net-worth individuals</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 text-sm">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/loan-programs/profit-loss-statement-loans" className="block">
              <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">📊 P&L Statement Loans</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>• CPA-prepared P&L statements</div>
                    <div>• Business financial statements</div>
                    <div>• No personal tax returns</div>
                    <div>• Business income qualification</div>
                    <div>• 10-25% down payment</div>
                  </div>
                  <p className="text-sm font-semibold text-purple-600 mb-4">Best for: Business owners, partnerships</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 text-sm">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/loan-programs/dscr-investment-loans" className="block">
              <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 DSCR Loans</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>• Debt Service Coverage Ratio</div>
                    <div>• Property cash flow based</div>
                    <div>• No personal income verification</div>
                    <div>• Investment properties only</div>
                    <div>• 20-25% down payment</div>
                  </div>
                  <p className="text-sm font-semibold text-orange-600 mb-4">Best for: Real estate investors</p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 text-sm">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>


            <Link href="/loan-programs/foreign-national-loans" className="block">
              <Card className="border-l-4 border-l-yellow-500 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🌍 Foreign National</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>• No US credit required</div>
                    <div>• Foreign income acceptable</div>
                    <div>• ITIN or passport acceptable</div>
                    <div>• International asset verification</div>
                    <div>• 30-40% down payment</div>
                  </div>
                  <p className="text-sm font-semibold text-yellow-600 mb-4">Best for: International buyers</p>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 text-sm">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/loan-programs/fix-flip-loans" className="block">
              <Card className="border-l-4 border-l-purple-600 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🏗️ Fix & Flip Loans</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>• Short-term financing (6-24 months)</div>
                    <div>• Quick closing (7-10 days)</div>
                    <div>• Up to 90% of purchase price</div>
                    <div>• Interest-only payments</div>
                    <div>• Rehab funds available</div>
                  </div>
                  <p className="text-sm font-semibold text-purple-600 mb-4">Best for: Real estate investors, flippers</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 text-sm">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/loan-programs/usda-rural-loans" className="block">
              <Card className="border-l-4 border-l-green-600 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🌾 USDA Rural Loans</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>• 0% down payment required</div>
                    <div>• No PMI required</div>
                    <div>• Income limits apply</div>
                    <div>• Rural area requirement</div>
                    <div>• Primary residence only</div>
                  </div>
                  <p className="text-sm font-semibold text-green-600 mb-4">Best for: Rural/suburban homebuyers</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 text-sm">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Who Benefits from Non-QM */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Who Benefits from Non-QM Loans?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-800 mb-4">✅ Perfect Candidates</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700"><strong>Self-Employed Business Owners:</strong> Write off significant expenses, making tax returns lower than actual income</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700"><strong>Real Estate Investors:</strong> Multiple properties with rental income and cash flow focus</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700"><strong>Commission-Based Professionals:</strong> Realtors, loan officers, sales executives with variable income</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700"><strong>Freelancers & Consultants:</strong> 1099 income without traditional employment verification</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700"><strong>High-Net-Worth Individuals:</strong> Asset-rich but income appears low on tax returns</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700"><strong>Foreign Nationals:</strong> International buyers without US credit history</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">💡 Common Situations</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Tax Returns Don't Reflect True Income:</strong> Aggressive write-offs make qualifying income too low</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Recent Business Ownership:</strong> Less than 2 years in business but strong cash flow</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Multiple Income Sources:</strong> Complex income streams difficult to document traditionally</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Retirement Income with Assets:</strong> Significant assets but limited W-2 income</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>DTI Over Traditional Limits:</strong> Strong cash flow but higher debt ratios</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Investment Property Portfolio:</strong> Building rental property portfolio quickly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Statement Loan Deep Dive */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Bank Statement Loans - Most Popular Non-QM Option</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">How Bank Statement Loans Work</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">1</div>
                    <div>
                      <p className="font-semibold text-slate-900">Submit Bank Statements</p>
                      <p className="text-slate-600 text-sm">12 or 24 months of personal and/or business bank statements showing deposits</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">2</div>
                    <div>
                      <p className="font-semibold text-slate-900">Income Calculation</p>
                      <p className="text-slate-600 text-sm">Lender analyzes average monthly deposits to determine qualifying income</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">3</div>
                    <div>
                      <p className="font-semibold text-slate-900">Expense Factor Applied</p>
                      <p className="text-slate-600 text-sm">50% expense factor (personal) or 25% (business) applied to account for business expenses</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">4</div>
                    <div>
                      <p className="font-semibold text-slate-900">Qualification & Approval</p>
                      <p className="text-slate-600 text-sm">Calculated income used for debt-to-income ratio and loan approval</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Bank Statement Example</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Average Monthly Deposits:</span>
                    <span className="font-bold">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Expense Factor (50%):</span>
                    <span className="font-bold text-orange-600">-$12,500</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Qualifying Income:</span>
                      <span className="font-bold text-blue-600">$12,500/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Annual Qualifying Income:</span>
                      <span className="font-bold text-blue-600">$150,000</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Example only. Actual calculations vary by lender and account type.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-QM Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Non-QM Loan Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">✅ General Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Credit Score: 620+ (varies by program)</p>
                    <p className="text-slate-600 text-sm">Higher scores unlock better rates and terms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Down Payment: 10-30% (varies by program)</p>
                    <p className="text-slate-600 text-sm">Higher down payments often mean better rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Debt-to-Income: Up to 50%</p>
                    <p className="text-slate-600 text-sm">Higher ratios acceptable with compensating factors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Cash Reserves: 2-12 months</p>
                    <p className="text-slate-600 text-sm">Varies significantly by loan program and property type</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Alternative Documentation</p>
                    <p className="text-slate-600 text-sm">Bank statements, P&L, asset statements, or other verification</p>
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
                    <p className="font-semibold text-slate-900">Higher Interest Rates</p>
                    <p className="text-slate-600 text-sm">Typically 0.5-2% higher than conforming loans</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Prepayment Penalties</p>
                    <p className="text-slate-600 text-sm">Many programs have 1-5 year prepayment penalties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Portfolio Lending</p>
                    <p className="text-slate-600 text-sm">Loans typically kept by lender, not sold to agencies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">More Complex Process</p>
                    <p className="text-slate-600 text-sm">Longer processing times and more documentation required</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Specialized Underwriting</p>
                    <p className="text-slate-600 text-sm">Manual underwriting with experienced non-QM specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Non-QM vs Traditional */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Non-QM vs Traditional Loans</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">Non-QM Loans</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Traditional Loans</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Income Documentation</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Alternative Methods</td>
                  <td className="px-6 py-4 text-center text-slate-600">Tax Returns, W-2s</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">DTI Limits</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Up to 50%</td>
                  <td className="px-6 py-4 text-center text-slate-600">Up to 43-45%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Interest Rates</td>
                  <td className="px-6 py-4 text-center text-orange-600">0.5-2% Higher</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Lowest Available</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Down Payment</td>
                  <td className="px-6 py-4 text-center text-orange-600">10-30%</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">3-20%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Processing Time</td>
                  <td className="px-6 py-4 text-center text-orange-600">6-8 weeks</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">4-5 weeks</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Best For</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Complex Income</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">W-2 Employees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Orange County Non-QM Market */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Non-QM Lending in Orange County</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Briefcase className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Entrepreneurial Market</h3>
                    <p className="text-slate-600">
                      Orange County has a high concentration of business owners, real estate 
                      professionals, and self-employed individuals perfect for Non-QM programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Strong Investment Activity</h3>
                    <p className="text-slate-600">
                      Active real estate investment market with investors building portfolios 
                      using DSCR and bank statement programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">International Buyers</h3>
                    <p className="text-slate-600">
                      Significant foreign national activity, particularly from Asia-Pacific 
                      region, utilizing asset-based and foreign national programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">OC Non-QM Market Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Non-QM Market Share:</span>
                  <span className="font-bold">~8-12%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Average Loan Amount:</span>
                  <span className="font-bold">$850K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Most Popular Program:</span>
                  <span className="font-bold text-green-600">Bank Statement</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Investment Property %:</span>
                  <span className="font-bold">~40%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Top Non-QM Professions:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                  <div>• Real Estate Agents/Brokers</div>
                  <div>• Business Owners/Entrepreneurs</div>
                  <div>• Independent Contractors</div>
                  <div>• Investment Property Owners</div>
                  <div>• Commission Sales Professionals</div>
                  <div>• Foreign Nationals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Alternative Income Documentation?
          </h2>
          <p className="text-xl mb-6 text-orange-100">
            Get specialized Non-QM financing tailored to your unique income situation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold">
                Get My Non-QM Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Non-QM lending specialist
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



