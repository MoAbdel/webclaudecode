import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Star, Shield, DollarSign, TrendingUp, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'VA Loans in Orange County, CA | Zero Down for Veterans',
  description: 'Buy your dream home with zero down and no PMI. Mo The Broker helps veterans in Orange County secure VA loans at competitive wholesale rates.',
  keywords: 'VA loans Orange County, zero down VA loan California, veteran home loans Orange County, wholesale VA mortgage broker'
};

export default function VALoansOrangeCountyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🇺🇸 Honoring Our Veterans
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            VA Loans in Orange County – <span className="text-blue-600">Home Financing for Veterans</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Thank you for your service. Now let us serve you with zero down payment VA loans 
            in Orange County. Mo The Broker specializes in VA lending with wholesale rates and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Apply for VA Loan
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* VA Loan Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">VA Loan Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Zero Down Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Purchase a home with $0 down payment, making homeownership immediately 
                  accessible without years of saving.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">No PMI Required</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  VA loans don't require private mortgage insurance, saving you hundreds 
                  of dollars per month compared to conventional loans.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Star className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Competitive Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  VA loans typically offer lower interest rates than conventional loans, 
                  backed by the Department of Veterans Affairs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">No Prepayment Penalty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Pay off your loan early without penalties, giving you flexibility 
                  to save on interest costs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Assumable Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Future buyers can assume your VA loan, making your home more 
                  attractive when you decide to sell.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Reusable Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Use your VA loan benefit multiple times throughout your life, 
                  perfect for military families who move frequently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who Qualifies for a VA Loan in CA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Who Qualifies for a VA Loan in CA
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Active Duty Military</h3>
                  <p className="text-slate-600">Currently serving members of Army, Navy, Air Force, Marines, Space Force, or Coast Guard</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Veterans</h3>
                  <p className="text-slate-600">Honorably discharged veterans who served minimum required time</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">National Guard & Reserves</h3>
                  <p className="text-slate-600">Members with 6+ years of service or activated for federal service</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">Surviving Spouses</h3>
                  <p className="text-slate-600">Un-remarried surviving spouses of service members who died in service or from service-connected disabilities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2025 VA Loan Limits in Orange County</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Orange County Limit:</span>
                <span className="font-bold text-blue-600">$1,089,300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Down Payment:</span>
                <span className="font-bold text-green-600">$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">VA Funding Fee:</span>
                <span className="font-bold">2.15% - 3.3%*</span>
              </div>
              <div className="text-xs text-slate-500">*First-time use, can be rolled into loan</div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Perfect for Orange County Military:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• Camp Pendleton Marines</div>
                <div>• Naval Weapons Station Seal Beach</div>
                <div>• Los Alamitos Joint Forces</div>
                <div>• Coast Guard Station Newport</div>
                <div>• Retired Military Personnel</div>
              </div>
            </div>
          </div>
        </div>

        {/* VA Loan Limits in Orange County */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">VA Loan Limits in Orange County</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$1,089,300</div>
                <div className="text-slate-600">2025 Orange County Limit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                <div className="text-slate-600">Down Payment Required</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">No Limit</div>
                <div className="text-slate-600">Above County Limit*</div>
                <div className="text-xs text-slate-500 mt-1">*25% down on amount over limit</div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Important Notes:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• VA loans can exceed county limits with partial down payment</li>
                <li>• Full entitlement allows up to $1,089,300 with zero down</li>
                <li>• Partial entitlement may have different limits based on previous use</li>
                <li>• No mortgage insurance required regardless of loan amount</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applying for Your VA Loan */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Applying for Your VA Loan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <CardTitle>Get Your COE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Obtain your Certificate of Eligibility from VA.gov or let Mo handle it for you</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <CardTitle>Get Pre-Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Contact Mo for VA loan pre-approval with competitive wholesale rates</p>
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
                <p className="text-slate-600">Shop for homes in Orange County with confidence knowing your financing is secure</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <CardTitle>Close & Move In</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Complete VA appraisal and inspection, then close on your new Orange County home</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            VA Loan FAQ for Orange County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use a VA loan for a condo in Orange County?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, but the condo complex must be VA-approved. Many Orange County 
                  condos are approved, and Mo can help verify eligibility before you shop.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I've used my VA loan benefit before?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  You may still have remaining entitlement. Mo can help determine your 
                  available benefit and structure a loan accordingly, even for higher-priced OC homes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do VA loans work for Orange County's high prices?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely! With the 2025 limit of $1,089,300, many Orange County homes 
                  qualify for zero down VA financing. Above this amount, you'd put 25% down on the excess.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does VA loan approval take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  With Mo's wholesale lender network, most VA loans close in 30-45 days. 
                  The VA appraisal is typically the longest part of the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Your VA Benefits in Orange County?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Honor your service with homeownership. Get started with your VA loan today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start My VA Loan Application
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Proudly serving our veterans
          </p>
        </div>
      </div>
    </div>
  );
}