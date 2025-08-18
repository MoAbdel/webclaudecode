import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, DollarSign, Home, Zap, Users, CheckCircle, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HELOC in Orange County, CA | Access Your Home Equity',
  description: 'Get a Home Equity Line of Credit with competitive rates. Mo Abdel helps homeowners in Orange County access equity for projects or debt consolidation.',
  keywords: 'HELOC Orange County, home equity line of credit California, Orange County home equity loans, competitive HELOC rates'
};

export default function HELOCOrangeCountyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏠 Unlock Your Home's Potential
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            HELOC in Orange County – <span className="text-blue-600">Flexible Access to Your Home Equity</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Turn your Orange County home's equity into opportunity. Mo Abdel offers competitive 
            competitive HELOC rates with flexible access to funds when you need them most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Apply for HELOC
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* How a HELOC Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How Orange County HELOC Home Equity Lines Work</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Credit Line Approval</h3>
                    <p className="text-slate-600">Get approved for a revolving credit line based on your home's equity, up to $500,000 in Orange County.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Draw Period (10 Years)</h3>
                    <p className="text-slate-600">Access funds as needed during the draw period, paying only interest on what you borrow.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Repayment Period</h3>
                    <p className="text-slate-600">After the draw period, repay principal and interest over the remaining loan term.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">HELOC Calculator</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-blue-200">
                  <span className="text-slate-700">Home Value:</span>
                  <span className="font-bold">$1,200,000</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-200">
                  <span className="text-slate-700">Current Mortgage:</span>
                  <span className="font-bold">$600,000</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-200">
                  <span className="text-slate-700">Available Equity (80%):</span>
                  <span className="font-bold">$960,000</span>
                </div>
                <div className="flex items-center justify-between py-3 bg-green-100 px-4 rounded-lg">
                  <span className="font-bold text-slate-700">Potential HELOC:</span>
                  <span className="font-bold text-green-600 text-xl">$360,000</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500 text-center">
                *Example calculation. Actual amounts depend on credit, income, and lender guidelines.
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of a HELOC in California */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County HELOC Benefits & Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Lower Interest Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  HELOCs typically offer lower rates than credit cards or personal loans, 
                  making them cost-effective for large expenses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Flexible Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Draw funds as needed during the 10-year draw period. Perfect for ongoing 
                  projects or unexpected expenses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Tax Deductible Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Interest may be tax-deductible when funds are used to buy, build, 
                  or substantially improve your home.*
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Calculator className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Interest-Only Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  During the draw period, pay only interest on the amount you use, 
                  keeping monthly payments manageable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Home className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">High Credit Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Orange County home values allow for substantial credit lines, 
                  up to $500,000 for qualifying borrowers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Multiple Use Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Use for home improvements, debt consolidation, education expenses, 
                  or investment opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* HELOC vs Cash-Out Refinance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County HELOC vs Cash-Out Refinance Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">HELOC</th>
                  <th className="px-6 py-4 text-left">Cash-Out Refinance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Access to Funds</td>
                  <td className="px-6 py-4 text-green-600">Revolving credit line</td>
                  <td className="px-6 py-4">Lump sum at closing</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Interest Rate</td>
                  <td className="px-6 py-4">Variable rate</td>
                  <td className="px-6 py-4 text-green-600">Fixed rate</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Monthly Payments</td>
                  <td className="px-6 py-4 text-green-600">Interest-only during draw</td>
                  <td className="px-6 py-4">Principal & interest</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Closing Costs</td>
                  <td className="px-6 py-4 text-green-600">Lower costs</td>
                  <td className="px-6 py-4">Higher closing costs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Best For</td>
                  <td className="px-6 py-4 text-green-600">Ongoing projects</td>
                  <td className="px-6 py-4">Large one-time expenses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular HELOC Uses in Orange County */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Orange County HELOC Uses & Applications</h2>
            <p className="text-xl text-slate-600">How Orange County homeowners are using their home equity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Home Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Kitchen remodels, bathroom upgrades, ADU construction, and pool installations</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Investment Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Real estate investments, business ventures, or stock market opportunities</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Education Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">College tuition, private school costs, or professional development</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <Calculator className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Debt Consolidation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Pay off high-interest credit cards, personal loans, or other debts</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How to Apply for a HELOC */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County HELOC Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <CardTitle>Determine Your Equity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Calculate available equity in your Orange County home (typically 80% LTV maximum)</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <CardTitle>Apply with Mo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Submit application with income documentation, credit check, and property information</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <CardTitle>Home Appraisal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Professional appraisal determines current market value of your property</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <CardTitle>Access Your Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Once approved, access funds via checks, online transfers, or debit card</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">HELOC Requirements</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Credit Score</h4>
                  <p className="text-slate-600">Minimum 680+ credit score for best rates</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Home Equity</h4>
                  <p className="text-slate-600">At least 20% equity in your home</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Income Verification</h4>
                  <p className="text-slate-600">Stable income to support payments</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Debt-to-Income</h4>
                  <p className="text-slate-600">DTI typically below 43%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Orange County HELOC Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Average Home Value:</span>
                <span className="font-bold">$1.2M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Typical Credit Line:</span>
                <span className="font-bold text-green-600">$200K - $400K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Current Rates:</span>
                <span className="font-bold">Prime + 0.5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Maximum LTV:</span>
                <span className="font-bold">80%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-slate-600">
                *Tax deductibility depends on how you use the funds. Consult your tax advisor.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Access Your Home's Equity?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get competitive HELOC rates and flexible access to your Orange County home's equity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Apply for HELOC Today
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed competitive mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving Orange County homeowners
          </p>
        </div>
      </div>
    </div>
  );
}