import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Shield, Home, Award, DollarSign, Phone, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County VA Loans | VA Loans Orange County | Military Home Loans | Mo Abdel NMLS #1426884',
  description: 'Orange County VA loans with no down payment required. Licensed VA loan specialist Mo Abdel helps veterans and military buy homes in Orange County CA. Call (949) 579-2057.',
  openGraph: {
    title: 'Orange County VA Loans | VA Loans Orange County | Military Home Loans',
    description: 'Orange County VA loans with no down payment required. Licensed VA loan specialist helps veterans buy homes in Orange County CA.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs/orange-county-va-loans',
  },
};

export default function OrangeCountyVALoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🇺🇸 Serving Those Who Served
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Orange County <span className="text-blue-600">VA Loans</span> & Military Home Financing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Helping Orange County veterans, active military, and eligible spouses purchase homes with
            $0 down payment. Licensed VA loan specialist dedicated to serving
            military families in Orange County's competitive housing market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get VA Loan Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* VA Loan Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County VA Loan Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">$0 Down Payment</h3>
                <p className="text-sm text-slate-600">100% financing available for qualified veterans</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">No PMI Required</h3>
                <p className="text-sm text-slate-600">Save hundreds monthly on mortgage insurance</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Competitive Rates</h3>
                <p className="text-sm text-slate-600">Often lower than conventional loan rates</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Reusable Benefit</h3>
                <p className="text-sm text-slate-600">Use your VA loan multiple times</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Loan Limits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2025 VA Loan Limits Orange County</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Current Limits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Basic Entitlement:</span>
                    <span className="font-bold text-blue-600">$1,089,300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Maximum No-Down Loan:</span>
                    <span className="font-bold text-blue-600">$1,089,300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">VA Funding Fee:</span>
                    <span className="font-bold">2.15% - 3.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Disabled Veterans:</span>
                    <span className="font-bold text-green-600">$0 Funding Fee</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  *Higher loan amounts available with down payment. 
                  <Link href="/loan-programs/va-loans" className="text-blue-600 hover:text-blue-700 underline ml-1">
                    Learn more about VA loan details
                  </Link>
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Example Orange County Purchase</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Home Price:</span>
                    <span className="font-bold">$1,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Down Payment:</span>
                    <span className="font-bold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">VA Funding Fee:</span>
                    <span className="font-bold">$21,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Loan Amount:</span>
                    <span className="font-bold text-blue-600">$1,021,500</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    *Funding fee can be financed into loan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Cities for VA Loans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Best Orange County Cities for VA Home Loans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏘️ Irvine</h3>
                <p className="text-slate-600 mb-3">Family-friendly with excellent schools and amenities</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $1.4M</div>
                  <div>• Top-rated schools</div>
                  <div>• Master-planned communities</div>
                  <div>• 75% under VA loan limit</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏠 Westminster</h3>
                <p className="text-slate-600 mb-3">Affordable family homes with good value</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $800K</div>
                  <div>• 95% under VA loan limit</div>
                  <div>• Close to military bases</div>
                  <div>• Strong appreciation</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🌊 Huntington Beach</h3>
                <p className="text-slate-600 mb-3">Beach lifestyle with diverse housing options</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $1.1M</div>
                  <div>• Beach community</div>
                  <div>• 60% under VA loan limit</div>
                  <div>• Military-friendly area</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Military Base Proximity */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County Military Base Access</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Los Alamitos Joint Forces</h3>
                    <p className="text-slate-600">
                      15-30 minutes from most Orange County cities. Active National Guard 
                      and Reserve facilities with easy access.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">MCAS El Toro (Former)</h3>
                    <p className="text-slate-600">
                      Now the Great Park in Irvine. Many veterans chose to stay in 
                      the area after the base closure in 1999.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Nearby Bases</h3>
                    <p className="text-slate-600">
                      Camp Pendleton (45 minutes), Naval Base San Diego (90 minutes), 
                      and other Southern California military installations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Commute Times to Military Bases</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Los Alamitos JFT:</span>
                  <span className="font-bold">15-30 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Camp Pendleton:</span>
                  <span className="font-bold">45-60 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Naval Base San Diego:</span>
                  <span className="font-bold">90-120 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Edwards AFB:</span>
                  <span className="font-bold">120-150 min</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Military-Friendly Cities:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                  <div>• Westminster (close to Los Alamitos)</div>
                  <div>• Garden Grove (military families)</div>
                  <div>• Irvine (veteran community)</div>
                  <div>• Huntington Beach (coastal access)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County VA Loan Eligibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Active Duty Military</h3>
                <p className="text-slate-600 mb-3">
                  90+ days active duty during wartime or 181+ days during peacetime. 
                  Current active duty with 90+ days of service.
                </p>
                <p className="text-sm font-semibold text-blue-600">Immediate eligibility</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Veterans</h3>
                <p className="text-slate-600 mb-3">
                  Honorable discharge with minimum service requirements met. 
                  Service-connected disabled veterans with any discharge.
                </p>
                <p className="text-sm font-semibold text-green-600">Most common eligibility</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">National Guard & Reserves</h3>
                <p className="text-slate-600 mb-3">
                  6+ years of service or called to active duty. 
                  Some shorter service periods qualify under specific conditions.
                </p>
                <p className="text-sm font-semibold text-purple-600">Service requirements vary</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County VA Loans Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I buy a condo with a VA loan in Orange County?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! Many Orange County condos are VA-approved. The condo project must be on the 
                  VA's approved list. We can verify approval status and help find VA-approved 
                  condos in your preferred Orange County location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I want to buy above the VA loan limit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  For homes above $1,089,300, you can use a VA jumbo loan with a down payment 
                  covering the difference. Example: $1.5M home requires $410,700 down payment 
                  to use your VA benefit for the remaining $1,089,300.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need to pay the VA funding fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Most borrowers pay 2.15-3.3% funding fee, but veterans with service-connected 
                  disabilities are exempt. First-time users pay less than subsequent uses. 
                  The fee can be financed into your loan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use my VA loan for investment properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  VA loans are for primary residences only. However, you can rent out a previous 
                  home you purchased with a VA loan and buy a new primary residence with your 
                  remaining VA entitlement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Your VA Home Loan Benefit in Orange County?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get pre-approved for $0 down VA financing and start your Orange County home search
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start My VA Loan Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed VA loan specialist • NMLS #1426884 • Proudly serving Orange County veterans and military
          </p>
        </div>
      </div>
    </div>
  );
}