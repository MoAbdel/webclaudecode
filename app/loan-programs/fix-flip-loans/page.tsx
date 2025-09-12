import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Hammer, Clock, TrendingUp, DollarSign, Check, AlertCircle, Calculator, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fix & Flip Loans Orange County | Real Estate Investor Financing | Short-Term Bridge Loans',
  description: 'Fix & flip loans in Orange County for real estate investors. Quick 7-10 day closings, up to 90% ARV, 6-24 month terms. Experienced investor lender. Call (949) 579-2057.',
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs/fix-flip-loans',
  },
};

export default function FixFlipLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-600 mb-4">Real Estate Investor Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-purple-600">Fix & Flip Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Fast financing for real estate investors and flippers. Get up to 90% of purchase price + 
            100% of rehab costs with quick 7-10 day closings in Orange County's competitive market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Get Investor Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Program Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Fix & Flip Loan Program Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                Our fix and flip loans provide short-term financing for real estate investors 
                to purchase and renovate properties for resale. Perfect for Orange County's 
                hot real estate market where speed and reliability matter.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Lightning Fast Closings</h3>
                    <p className="text-slate-600">Close in 4-5 weeks with proper documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">High Loan-to-Cost Ratios</h3>
                    <p className="text-slate-600">Up to 90% of purchase price + 100% rehab costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Flexible Terms</h3>
                    <p className="text-slate-600">6-24 month terms with interest-only payments</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ideal For:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Experienced real estate investors</li>
                <li>• House flippers and rehabbers</li>
                <li>• Real estate wholesalers</li>
                <li>• Construction and development pros</li>
                <li>• Property management companies</li>
                <li>• Real estate syndicators</li>
                <li>• Fix and hold investors (bridge to perm)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Fix & Flip Loan Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">Quick Closings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Close in 4-5 weeks with streamlined 
                  underwriting and fast approvals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">High LTC</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Up to 90% loan-to-cost including purchase 
                  price and renovation expenses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">Rehab Funding</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  100% of rehab costs funded in draws 
                  as work is completed and inspected.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">High ARV</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Loan amounts up to 70-75% of After 
                  Repair Value (ARV) on most properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Loan Terms & Requirements */}
        <div className="bg-slate-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Loan Terms & Requirements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Loan Terms</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Amount:</span>
                  <span className="font-semibold">$100K - $5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Term:</span>
                  <span className="font-semibold">6-24 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Interest Rate:</span>
                  <span className="font-semibold">9-14% (market dependent)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan-to-Cost:</span>
                  <span className="font-semibold">Up to 90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan-to-ARV:</span>
                  <span className="font-semibold">Up to 75%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Points/Fees:</span>
                  <span className="font-semibold">2-4 points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Payments:</span>
                  <span className="font-semibold">Interest-only monthly</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Borrower Requirements</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Credit score 600+ minimum</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Real estate investment experience</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Proof of funds for down payment</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Detailed rehab scope and budget</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Exit strategy (sale or refinance)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Licensed contractor references</span>
                </div>
              </div>
              
              <div className="bg-white border border-purple-200 rounded-lg p-4 mt-4">
                <h4 className="font-bold text-slate-900 mb-2">Experience Preferred:</h4>
                <p className="text-sm text-slate-700">
                  While we work with newer investors, preference given to borrowers 
                  with proven track record of successful flips or rehabs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orange County Fix & Flip Market */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Orange County Fix & Flip Market
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                Orange County's strong real estate market and high demand for renovated homes 
                creates excellent opportunities for experienced fix and flip investors.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Popular Fix & Flip Areas:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                    <div>• Santa Ana</div>
                    <div>• Costa Mesa</div>
                    <div>• Garden Grove</div>
                    <div>• Fullerton</div>
                    <div>• Anaheim</div>
                    <div>• Orange</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Typical Project Profiles:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Purchase Price:</span>
                      <span className="font-semibold">$600K - $1.2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rehab Budget:</span>
                      <span className="font-semibold">$50K - $150K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ARV Target:</span>
                      <span className="font-semibold">$850K - $1.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Timeline:</span>
                      <span className="font-semibold">3-6 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">Why Orange County?</h4>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Strong buyer demand for move-in ready homes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Consistent appreciation and market stability</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Large inventory of older homes needing updates</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>High-income buyers willing to pay for quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Fix & Flip Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            The Fix & Flip Loan Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Application</h3>
              <p className="text-sm text-slate-600">
                Submit application with project details, 
                contractor bids, and ARV analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Appraisal</h3>
              <p className="text-sm text-slate-600">
                Property appraised in current condition 
                and projected ARV after renovations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Closing</h3>
              <p className="text-sm text-slate-600">
                Quick 7-10 day closing with 
                funds for purchase and initial costs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Rehab Draws</h3>
              <p className="text-sm text-slate-600">
                Rehab funds released in scheduled 
                draws as work is completed.
              </p>
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
                  <h4 className="font-semibold text-slate-900 mb-2">Higher Cost of Capital</h4>
                  <p className="text-sm text-slate-700">
                    Fix & flip loans have higher rates and fees than traditional mortgages. 
                    Factor all costs into your profit projections.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Strict Timelines</h4>
                  <p className="text-sm text-slate-700">
                    Loans are short-term with balloon payments. Have a clear exit strategy 
                    and realistic renovation timeline.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Market Risk</h4>
                  <p className="text-sm text-slate-700">
                    Real estate markets can change. Conservative ARV estimates and 
                    adequate profit margins are essential.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Experience Matters</h4>
                  <p className="text-sm text-slate-700">
                    Successful flips require construction knowledge, contractor management, 
                    and market expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fund Your Next Flip?</h2>
          <p className="text-xl mb-6 text-purple-100">
            Get fast approval and quick closing for your Orange County investment property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
                Get Investor Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-purple-100 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Investor Specialist
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