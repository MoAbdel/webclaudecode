import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Home, Shield, DollarSign, TrendingUp, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FHA Loans in Orange County, CA | Low Down Payment Home Loans',
  description: 'Qualify for a home with as little as 3.5% down. Mo Abdel helps Orange County buyers secure FHA loans with competitive rates.',
  keywords: 'FHA loans Orange County, low down payment home loans Orange County, first time buyer FHA loan California, competitive FHA mortgage broker'
};

export default function FHALoansOrangeCountyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 Low Down Payment Solution
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            FHA Loans in Orange County – <span className="text-blue-600">Affordable Home Financing</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Make homeownership a reality in Orange County with FHA loans requiring as little as 3.5% down. 
            Mo Abdel connects you with competitive FHA lenders for the best rates and terms. Compare with 
            <Link href="/conventional-loans-orange-county" className="text-blue-600 hover:text-blue-700 underline">conventional loan options</Link> or 
            check out our <Link href="/calculator" className="text-blue-600 hover:text-blue-700 underline">mortgage calculator</Link> to estimate payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Apply for FHA Loan
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Benefits of an FHA Loan */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County FHA Mortgage Benefits & Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Low Down Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Purchase a home with as little as 3.5% down payment, making homeownership 
                  accessible even with limited savings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Flexible Credit Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Qualify with credit scores as low as 500+ with higher down payment, 
                  or 580+ with 3.5% down payment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Home className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Gift Funds Allowed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Use gift funds from family members for your down payment and closing costs, 
                  making it easier to qualify.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FHA Loan Requirements in California */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              FHA Loan Requirements in California
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Credit Score</h3>
                  <p className="text-slate-600">Minimum 500+ with 10% down, or 580+ with 3.5% down</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Debt-to-Income Ratio</h3>
                  <p className="text-slate-600">Maximum 57% DTI in most cases with compensating factors</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Employment History</h3>
                  <p className="text-slate-600">Steady employment for at least 2 years</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Primary Residence</h3>
                  <p className="text-slate-600">Must be your primary residence, not investment property</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2025 FHA Loan Limits</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Orange County Limit:</span>
                <span className="font-bold text-blue-600">$1,089,300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Down Payment (3.5%):</span>
                <span className="font-bold">$38,126</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Mortgage Insurance:</span>
                <span className="font-bold">Required</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Perfect for Orange County Cities:</h4>
              <div className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                <div>• Irvine</div>
                <div>• Anaheim</div>
                <div>• Santa Ana</div>
                <div>• Costa Mesa</div>
                <div>• Newport Beach</div>
                <div>• Mission Viejo</div>
              </div>
            </div>
          </div>
        </div>

        {/* FHA vs Conventional Loans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County FHA vs Conventional Mortgage Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">FHA Loan</th>
                  <th className="px-6 py-4 text-left">Conventional Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Down Payment</td>
                  <td className="px-6 py-4 text-green-600">As low as 3.5%</td>
                  <td className="px-6 py-4">As low as 3%</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Credit Score</td>
                  <td className="px-6 py-4 text-green-600">580+ (3.5% down)</td>
                  <td className="px-6 py-4">620+ typically</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Mortgage Insurance</td>
                  <td className="px-6 py-4">Required (MIP)</td>
                  <td className="px-6 py-4 text-green-600">Removable (PMI)</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Property Types</td>
                  <td className="px-6 py-4">Limited to primary residence</td>
                  <td className="px-6 py-4 text-green-600">Primary, second homes, investment</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Gift Funds</td>
                  <td className="px-6 py-4 text-green-600">Allowed for entire down payment</td>
                  <td className="px-6 py-4">Allowed with restrictions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Apply for an FHA Loan */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County FHA Mortgage Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <CardTitle>Get Pre-Qualified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Contact Mo Abdel for a free FHA pre-qualification to understand your budget</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <CardTitle>Gather Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Collect income docs, tax returns, bank statements, and employment verification</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <CardTitle>Find Your Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Shop for FHA-approved properties in Orange County with your real estate agent</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <CardTitle>Close on Your Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Complete the loan process with competitive FHA rates and move into your new home</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Additional FHA Loan Resources</h3>
          <p className="text-slate-600 mb-6">
            Learn more about FHA loans from official sources: 
            <a href="https://www.hud.gov/buying/loans" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline ml-1">HUD Official FHA Information</a> | 
            <a href="https://www.fha.com/fha_loan_requirements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline ml-1">FHA Loan Requirements</a>
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Orange County FHA Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Start your FHA loan application today with competitive rates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Apply for FHA Loan Now
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed competitive mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving Orange County, CA
          </p>
        </div>
      </div>
    </div>
  );
}