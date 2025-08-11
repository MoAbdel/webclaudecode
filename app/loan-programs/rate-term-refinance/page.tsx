import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingDown, Calendar, Shield, CheckCircle, AlertCircle, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rate & Term Refinance Orange County | Lower Payment & Rate | Mo The Wholesale Mortgage Broker',
  description: 'Rate and term refinance in Orange County. Lower your mortgage payment, eliminate PMI, or switch to fixed rate. Wholesale mortgage broker rates through NEXA Mortgage. Call (949) 579-2057.',
  keywords: 'rate and term refinance Orange County, lower mortgage payment, eliminate PMI, refinance California'
};

export default function RateTermRefinancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 Money Saver
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-green-600">Rate & Term Refinance</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Lower your interest rate, reduce monthly payments, eliminate PMI, or change your 
            loan term without taking cash out. Perfect for optimizing your current mortgage 
            when rates have dropped.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Get My New Rate & Payment
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
              <TrendingDown className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Lower Payments</h3>
            <p className="text-slate-600">Reduce monthly payments with today's rates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Eliminate PMI</h3>
            <p className="text-slate-600">Remove private mortgage insurance when you hit 20% equity</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Change Term</h3>
            <p className="text-slate-600">Switch to 15-year to pay off faster or 30-year for lower payments</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Stability</h3>
            <p className="text-slate-600">Switch from ARM to fixed rate for predictable payments</p>
          </div>
        </div>

        {/* Potential Savings Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">See Your Potential Savings</h2>
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Orange County Example</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Current Loan Balance:</span>
                    <span className="font-bold">$600,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Current Rate:</span>
                    <span className="font-bold text-red-600">7.25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Current Payment:</span>
                    <span className="font-bold text-red-600">$4,095/month</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-600">New Rate:</span>
                      <span className="font-bold text-green-600">6.50%</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-600">New Payment:</span>
                      <span className="font-bold text-green-600">$3,794/month</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-slate-900 font-semibold">Monthly Savings:</span>
                      <span className="font-bold text-green-600">$301/month</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Example only. Actual savings depend on your specific situation and current market rates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Annual Savings Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Payment Reduction:</span>
                    <span className="font-bold text-green-600">$301</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Annual Payment Savings:</span>
                    <span className="font-bold text-green-600">$3,612</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">5-Year Total Savings:</span>
                    <span className="font-bold text-green-600">$18,060</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-lg">
                      <span className="text-slate-900 font-semibold">Lifetime Interest Saved:</span>
                      <span className="font-bold text-green-600">~$54,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rate & Term Refinance Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Rate & Term Refinancing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💵 Lower Monthly Payments</h3>
                <p className="text-slate-600 mb-3">Reduce your payment by hundreds per month when rates drop or your credit improves.</p>
                <p className="text-sm font-semibold text-green-600">Free up cash flow for other goals</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🛡️ Remove PMI</h3>
                <p className="text-slate-600 mb-3">Eliminate private mortgage insurance when your Orange County home reaches 20% equity.</p>
                <p className="text-sm font-semibold text-green-600">Save $200-500+ monthly</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ ARM to Fixed Conversion</h3>
                <p className="text-slate-600 mb-3">Lock in a fixed rate if you have an adjustable-rate mortgage and want stability.</p>
                <p className="text-sm font-semibold text-green-600">Protection from rising rates</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⏰ Shorten Loan Term</h3>
                <p className="text-slate-600 mb-3">Switch to a 15-year mortgage to pay off your Orange County home faster.</p>
                <p className="text-sm font-semibold text-green-600">Save massive interest long-term</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📊 Better Loan Features</h3>
                <p className="text-slate-600 mb-3">Get better loan terms, remove prepayment penalties, or switch lenders.</p>
                <p className="text-sm font-semibold text-green-600">Improved loan conditions</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💡 Credit Improvement Benefits</h3>
                <p className="text-slate-600 mb-3">If your credit has improved since your original loan, qualify for much better rates.</p>
                <p className="text-sm font-semibold text-green-600">Reward your improved credit</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* When to Refinance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">When Should You Consider Rate & Term Refinancing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Great Time to Refinance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">Rates are 0.5%+ lower than your current rate</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">You're paying PMI but have 20%+ equity</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">Your credit score has improved 50+ points</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">You have an ARM and want rate stability</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">You plan to stay in your home 2+ years</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700">You want to pay off your loan faster</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-800 mb-4">⏳ Wait or Consider Other Options</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700">Rates are higher than your current rate</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700">You plan to move within 2 years</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700">You have less than 20% equity and good PMI rate</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700">Your current loan is less than 2 years old</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700">Your current loan has excellent terms</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-orange-700">You need cash and should consider cash-out refi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refinance Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Your Orange County Refinance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rate Analysis</h3>
              <p className="text-slate-600 text-sm">We compare your current rate to today's market rates and calculate your savings.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-slate-600 text-sm">Quick online application with your financial information and loan preferences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Processing</h3>
              <p className="text-slate-600 text-sm">We handle underwriting, appraisal, and coordinate with your current lender.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Closing</h3>
              <p className="text-slate-600 text-sm">Sign docs, your old loan is paid off, and your new lower payment starts!</p>
            </div>
          </div>
        </div>

        {/* Rate & Term vs Cash-Out */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Rate & Term vs Cash-Out Refinance</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Rate & Term Refinance</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">Cash-Out Refinance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Cash Back at Closing</td>
                  <td className="px-6 py-4 text-center text-slate-600">No</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Yes - Large Amounts</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Maximum LTV</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">95%+</td>
                  <td className="px-6 py-4 text-center text-slate-600">80%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Interest Rates</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Lowest Available</td>
                  <td className="px-6 py-4 text-center text-slate-600">Slightly Higher</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Loan Amount</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Current Balance or Less</td>
                  <td className="px-6 py-4 text-center text-slate-600">Higher than Current</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Best For</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Lowering Payments</td>
                  <td className="px-6 py-4 text-center text-orange-600 font-bold">Need Cash</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Lower Your Orange County Mortgage Payment?
          </h2>
          <p className="text-xl mb-6 text-green-100">
            Get your personalized rate and payment analysis in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold">
                Check My New Rate & Payment
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-green-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all of Orange County
          </p>
        </div>
      </div>
    </div>
  );
}