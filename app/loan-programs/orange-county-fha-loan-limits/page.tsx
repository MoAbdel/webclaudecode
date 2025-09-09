import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DollarSign, Home, TrendingUp, MapPin, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County FHA Loan Limits 2025 | Current FHA Limits CA | Mo Abdel NMLS #1426884',
  description: 'Current Orange County FHA loan limits for 2025. $1,089,300 limit allows FHA financing for most OC homes. Licensed FHA specialist Mo Abdel (949) 579-2057.',
  keywords: 'Orange County FHA loan limits, FHA loan limits Orange County, Orange County FHA loans, FHA loan limit California 2025, FHA Orange County CA',
  openGraph: {
    title: 'Orange County FHA Loan Limits 2025 | Current FHA Limits CA',
    description: 'Current Orange County FHA loan limits for 2025. $1,089,300 limit allows FHA financing for most OC homes.',
    type: 'website',
  },
};

export default function OrangeCountyFHALoanLimitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📈 Updated for 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Orange County <span className="text-green-600">FHA Loan Limits</span> 2025
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Current FHA loan limits in Orange County allow financing up to $1,089,300 for single-family homes. 
            This high-cost area designation makes FHA loans accessible for most Orange County properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Get FHA Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Current FHA Limits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2025 Orange County FHA Loan Limits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Single Family</h3>
                <div className="text-2xl font-bold text-green-600">$1,089,300</div>
                <p className="text-sm text-slate-600 mt-2">Most OC homes eligible</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Duplex (2-unit)</h3>
                <div className="text-2xl font-bold text-blue-600">$1,394,775</div>
                <p className="text-sm text-slate-600 mt-2">Investment opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Triplex (3-unit)</h3>
                <div className="text-2xl font-bold text-purple-600">$1,685,850</div>
                <p className="text-sm text-slate-600 mt-2">Multi-family investing</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Fourplex (4-unit)</h3>
                <div className="text-2xl font-bold text-orange-600">$2,095,200</div>
                <p className="text-sm text-slate-600 mt-2">Maximum property size</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coverage by City */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FHA Loan Coverage by Orange County City</h2>
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">🏠 High Coverage Cities</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Garden Grove</span>
                    <span className="text-green-600 font-semibold">95% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Westminster</span>
                    <span className="text-green-600 font-semibold">90% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Santa Ana</span>
                    <span className="text-green-600 font-semibold">85% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fountain Valley</span>
                    <span className="text-green-600 font-semibold">80% of homes</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">🏘️ Moderate Coverage Cities</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Irvine</span>
                    <span className="text-yellow-600 font-semibold">65% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Costa Mesa</span>
                    <span className="text-yellow-600 font-semibold">70% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Orange</span>
                    <span className="text-yellow-600 font-semibold">75% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Huntington Beach</span>
                    <span className="text-yellow-600 font-semibold">60% of homes</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">🏖️ Premium Coastal Cities</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Newport Beach</span>
                    <span className="text-red-600 font-semibold">25% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laguna Beach</span>
                    <span className="text-red-600 font-semibold">15% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mission Viejo</span>
                    <span className="text-yellow-600 font-semibold">55% of homes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laguna Niguel</span>
                    <span className="text-yellow-600 font-semibold">45% of homes</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4 text-center">
              *Percentages based on current listings under FHA loan limits. 
              <Link href="/loan-programs/jumbo-loans" className="text-green-600 hover:text-green-700 underline ml-1">
                Jumbo loans available for properties above limits
              </Link>
            </p>
          </div>
        </div>

        {/* FHA Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County FHA Loan Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Low Down Payment</h3>
                <p className="text-slate-600 mb-3">
                  Just 3.5% down payment required for Orange County homes up to $1,089,300. 
                  Perfect for first-time buyers in expensive OC market.
                </p>
                <p className="text-sm font-semibold text-green-600">Example: $38,125 down on $1M home</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Flexible Credit</h3>
                <p className="text-slate-600 mb-3">
                  580+ credit score qualifies for 3.5% down. 500-579 scores may qualify 
                  with 10% down payment.
                </p>
                <p className="text-sm font-semibold text-blue-600">More forgiving than conventional loans</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gift Funds Allowed</h3>
                <p className="text-slate-600 mb-3">
                  100% of down payment and closing costs can come from family gifts. 
                  Great for Orange County families helping first-time buyers.
                </p>
                <p className="text-sm font-semibold text-purple-600">Family assistance welcome</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FHA vs Conventional vs Jumbo Loans in Orange County</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600">FHA Loans</th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600">Conventional</th>
                  <th className="px-6 py-4 text-center font-semibold text-purple-600">Jumbo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Loan Limit</td>
                  <td className="px-6 py-4 text-center">Up to $1,089,300</td>
                  <td className="px-6 py-4 text-center">Up to $1,089,300</td>
                  <td className="px-6 py-4 text-center">$1,089,301+</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium">Down Payment</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">3.5%</td>
                  <td className="px-6 py-4 text-center">3-20%</td>
                  <td className="px-6 py-4 text-center">10-25%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Credit Score</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">580+</td>
                  <td className="px-6 py-4 text-center">620+</td>
                  <td className="px-6 py-4 text-center">680+</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium">Mortgage Insurance</td>
                  <td className="px-6 py-4 text-center">MIP Required</td>
                  <td className="px-6 py-4 text-center">PMI if &lt;20% down</td>
                  <td className="px-6 py-4 text-center">No MI typically</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Gift Funds</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">100% allowed</td>
                  <td className="px-6 py-4 text-center">Varies</td>
                  <td className="px-6 py-4 text-center">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County FHA Loan Limits FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the FHA loan limit in Orange County for 2025?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The 2025 FHA loan limit in Orange County is $1,089,300 for single-family homes. 
                  This represents a significant increase from previous years due to Orange County's 
                  high-cost area designation and rising home values.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I buy a condo with an FHA loan in Orange County?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! Many Orange County condos qualify for FHA financing, but the condo project 
                  must be FHA-approved. The same $1,089,300 limit applies to condos. We can verify 
                  FHA approval status for any condo you're considering.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if the home price exceeds FHA limits?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  For homes above $1,089,300, you'll need a jumbo loan. We offer competitive jumbo 
                  rates with down payments as low as 10% for qualified borrowers. Many Orange County 
                  luxury properties require jumbo financing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do FHA loan limits vary by Orange County city?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  No, FHA loan limits are consistent across all Orange County cities. However, 
                  the percentage of homes within these limits varies significantly - Garden Grove 
                  has 95% coverage while Newport Beach has only 25% coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Your FHA Loan in Orange County?
          </h2>
          <p className="text-xl mb-6 text-green-100">
            Get pre-approved for an FHA loan up to $1,089,300 with just 3.5% down
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold">
                Start My FHA Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-green-200 mt-4">
            Licensed FHA specialist • NMLS #1426884 • Orange County mortgage broker since 2015
          </p>
        </div>
      </div>
    </div>
  );
}

