import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DollarSign, PieChart, TrendingUp, Users, Check, AlertCircle, Calculator, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asset Depletion Loans Orange County | Asset-Based Mortgage | High Net Worth Lending',
  description: 'Asset depletion loans in Orange County for high net worth borrowers. Qualify using retirement accounts, investments, and liquid assets. No income documentation required. Call (949) 579-2057.',
  keywords: 'asset depletion loans, asset-based mortgage, high net worth lending, retirement account loans, investment portfolio lending Orange County'
};

export default function AssetDepletionLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-600 mb-4">High Net Worth Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-green-600">Asset Depletion Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            High net worth but limited income documentation? Qualify for your Orange County mortgage 
            using retirement accounts, investment portfolios, and liquid assets instead of traditional income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Get Asset-Based Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* What Are Asset Depletion Loans */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            What Are Asset Depletion Loans?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                Asset depletion loans allow borrowers to qualify based on their liquid assets 
                rather than traditional income documentation. The lender calculates a monthly 
                "income" by dividing your qualifying assets by the loan term.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">No Income Documentation</h3>
                    <p className="text-slate-600">No W-2s, tax returns, or employment verification required</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Asset-Based Qualification</h3>
                    <p className="text-slate-600">Use retirement accounts, investments, and savings to qualify</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">High Loan Amounts</h3>
                    <p className="text-slate-600">Up to $5M for qualified high net worth borrowers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Perfect For:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Retirees with substantial assets</li>
                <li>• High net worth individuals</li>
                <li>• Business owners with asset-heavy portfolios</li>
                <li>• Investors with multiple income streams</li>
                <li>• Trust fund beneficiaries</li>
                <li>• Foreign nationals with US assets</li>
                <li>• Those between jobs but asset-rich</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Asset Depletion Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            How Asset Depletion Qualification Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">1. Asset Documentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Provide statements for all qualifying liquid assets including 
                  retirement accounts, investment portfolios, and savings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">2. Income Calculation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Lender divides total qualifying assets by loan term (typically 360 months) 
                  to create a monthly "income" for qualification.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">3. Loan Approval</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Get approved based on asset-derived income, credit score, 
                  and debt-to-income ratio without employment verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Qualifying Assets */}
        <div className="bg-slate-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            What Assets Qualify?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">✅ Qualifying Assets (100%)</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Bank accounts (checking/savings)</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Money market accounts</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">CDs (Certificates of Deposit)</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Treasury bills and bonds</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Publicly traded securities</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-6">✅ Retirement Accounts (70%)</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">401(k) and 403(b) accounts</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Traditional and Roth IRAs</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">SEP-IRAs and SIMPLE IRAs</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Pension plans</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">❌ Non-Qualifying Assets</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-slate-700">Real estate equity</span>
                </div>
                <div className="flex items-center bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-slate-700">Business ownership interests</span>
                </div>
                <div className="flex items-center bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-slate-700">Collectibles and artwork</span>
                </div>
                <div className="flex items-center bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-slate-700">Cryptocurrency</span>
                </div>
                <div className="flex items-center bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-slate-700">Life insurance cash value</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                <h4 className="font-bold text-slate-900 mb-2">Asset Calculation Example:</h4>
                <div className="text-sm text-slate-700">
                  <div className="flex justify-between mb-1">
                    <span>Total Liquid Assets:</span>
                    <span>$2,000,000</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Divided by 360 months:</span>
                    <span>$5,556/month</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Qualifying Income:</span>
                    <span>$5,556/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Asset Depletion Loan Program Details
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Loan Features</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Amount:</span>
                  <span className="font-semibold">Up to $5,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Down Payment:</span>
                  <span className="font-semibold">25% minimum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Credit Score:</span>
                  <span className="font-semibold">680+ minimum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Property Types:</span>
                  <span className="font-semibold">Primary, Second homes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Terms:</span>
                  <span className="font-semibold">15, 20, 25, 30 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Rate Type:</span>
                  <span className="font-semibold">Fixed or ARM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Documentation Required</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Asset statements (2-3 months)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Credit report</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Property appraisal</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Purchase contract (if buying)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Asset verification letters</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Identity verification</span>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <h4 className="font-bold text-slate-900 mb-2">Asset Requirements:</h4>
                <p className="text-sm text-slate-700">
                  Minimum $500K in qualifying liquid assets required. 
                  Assets must be seasoned (2-3 months statements) and properly documented.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orange County Market */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Asset Depletion Loans in Orange County
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                Orange County's high net worth population and expensive real estate market 
                make asset depletion loans particularly valuable for qualified borrowers.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Typical Orange County Scenarios:</h4>
                  <div className="space-y-2 text-slate-700">
                    <div>• Tech executives with substantial stock options</div>
                    <div>• Retirees downsizing from larger homes</div>
                    <div>• Business owners with asset-heavy portfolios</div>
                    <div>• Foreign investors with US investment accounts</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Common Loan Amounts:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Newport Beach/Laguna Beach:</span>
                      <span className="font-semibold">$2M - $5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Irvine/Mission Viejo:</span>
                      <span className="font-semibold">$1.2M - $3M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Second homes:</span>
                      <span className="font-semibold">$1.5M - $4M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">Advantages for Orange County Buyers</h4>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>No income documentation delays</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Perfect for luxury home purchases</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Privacy protection for high net worth</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Quick closings for competitive offers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Considerations */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-12">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Important Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Asset Preservation</h4>
                  <p className="text-sm text-slate-700">
                    While you don't actually deplete your assets, lenders calculate income 
                    as if you would. Your assets remain untouched.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Higher Rates</h4>
                  <p className="text-sm text-slate-700">
                    Expect rates 1-2% higher than conventional loans due to the 
                    non-traditional income verification method.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Reserves Required</h4>
                  <p className="text-sm text-slate-700">
                    Lenders typically require 2-6 months of mortgage payments in reserves 
                    after closing, separate from qualifying assets.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Property Restrictions</h4>
                  <p className="text-sm text-slate-700">
                    Investment properties may not be available. Program typically 
                    limited to primary and second homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Leverage Your Assets for Your Dream Home</h2>
          <p className="text-xl mb-6 text-green-100">
            Get pre-approved using your investment portfolio and liquid assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold">
                Start Asset-Based Application
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-green-100 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • High Net Worth Specialist
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

