import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DollarSign, FileText, TrendingUp, Users, Check, AlertCircle, Calculator, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bank Statement Loans Orange County | Self-Employed Mortgage | No Income Documentation',
  description: 'Bank statement loans in Orange County for self-employed borrowers. Qualify using 12-24 months bank statements. Up to $3M loan amounts. Expert Non-QM lender. Call (949) 579-2057.',
  keywords: 'bank statement loans, self-employed mortgage, no income documentation, Non-QM loans Orange County, alternative income verification'
};

export default function BankStatementLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 mb-4">Non-QM Specialty Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-orange-600">Bank Statement Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Self-employed or have non-traditional income? Qualify for your Orange County mortgage using 
            12-24 months of bank statements instead of tax returns. Up to $3M loan amounts available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                Get Bank Statement Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* What Are Bank Statement Loans */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            What Are Bank Statement Loans?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                Bank statement loans are Non-QM (Non-Qualified Mortgage) loans that allow self-employed 
                borrowers to qualify using bank statements instead of traditional income documentation 
                like W-2s or tax returns.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">No Tax Returns Required</h3>
                    <p className="text-slate-600">Use 12-24 months of personal or business bank statements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Higher Loan Amounts</h3>
                    <p className="text-slate-600">Up to $3M for qualified borrowers in Orange County</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Investment Properties OK</h3>
                    <p className="text-slate-600">Purchase or refinance rental and investment properties</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Perfect For:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Self-employed business owners</li>
                <li>• Freelancers and contractors</li>
                <li>• Real estate investors</li>
                <li>• Commission-based professionals</li>
                <li>• Small business owners</li>
                <li>• 1099 independent contractors</li>
                <li>• Borrowers with complex income</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            How Bank Statement Loans Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-center">1. Provide Bank Statements</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Submit 12-24 months of personal or business bank statements showing 
                  consistent deposits and cash flow.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-center">2. Income Calculation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Lender analyzes your deposits to calculate qualifying income, 
                  typically using 50-75% of gross deposits.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-center">3. Loan Approval</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-center">
                  Get approved based on bank statement income, credit score, 
                  and debt-to-income ratio without traditional documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Program Details */}
        <div className="bg-slate-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Bank Statement Loan Program Details
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Loan Features</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Amount:</span>
                  <span className="font-semibold">Up to $3,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Down Payment:</span>
                  <span className="font-semibold">10% minimum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Credit Score:</span>
                  <span className="font-semibold">620+ minimum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Property Types:</span>
                  <span className="font-semibold">Primary, Second, Investment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Terms:</span>
                  <span className="font-semibold">15, 20, 25, 30 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Prepayment:</span>
                  <span className="font-semibold">No penalty</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Documentation Required</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">12-24 months bank statements</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Credit report (soft pull initially)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Asset verification</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Property appraisal</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">Business license (if applicable)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-slate-700">P&L statement (may be required)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Income Calculation Methods */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Income Calculation Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Personal Bank Statements</h3>
              <p className="text-slate-700 mb-4">
                For sole proprietors and single-member LLCs who deposit business income 
                into personal accounts.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Calculation Method:</span>
                  <span className="font-semibold">50-75% of gross deposits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Expense Factor:</span>
                  <span className="font-semibold">25-50% assumed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Best For:</span>
                  <span className="font-semibold">Sole proprietors</span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Business Bank Statements</h3>
              <p className="text-slate-700 mb-4">
                For businesses with separate business bank accounts and more complex 
                income streams.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Calculation Method:</span>
                  <span className="font-semibold">Net income + depreciation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Analysis:</span>
                  <span className="font-semibold">Detailed cash flow review</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Best For:</span>
                  <span className="font-semibold">Established businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orange County Market */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Bank Statement Loans in Orange County
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                Orange County's diverse economy creates many opportunities for self-employed 
                professionals who benefit from bank statement loans.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">High Demand Professions:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                    <div>• Real estate agents</div>
                    <div>• Contractors</div>
                    <div>• Consultants</div>
                    <div>• Restaurant owners</div>
                    <div>• Tech freelancers</div>
                    <div>• Medical practitioners</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Average Loan Amounts:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Irvine/Newport Beach:</span>
                      <span className="font-semibold">$1.2M - $2.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Costa Mesa/Huntington:</span>
                      <span className="font-semibold">$800K - $1.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>South OC:</span>
                      <span className="font-semibold">$900K - $1.8M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">Why Choose Bank Statement Loans?</h4>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Faster approval than traditional loans</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>No need to wait for tax season</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Privacy of financial information</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Qualify with fluctuating income</span>
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
                  <h4 className="font-semibold text-slate-900 mb-2">Higher Rates & Fees</h4>
                  <p className="text-sm text-slate-700">
                    Bank statement loans typically have higher interest rates (0.5-2% above conventional) 
                    and may include additional fees due to increased lender risk.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Larger Down Payments</h4>
                  <p className="text-sm text-slate-700">
                    Expect 10-25% down payment requirements, with investment properties 
                    requiring 20-30% down.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Income Verification</h4>
                  <p className="text-sm text-slate-700">
                    Lenders will scrutinize bank statements for consistent deposits, 
                    returns, and unusual transactions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cash Flow Analysis</h4>
                  <p className="text-sm text-slate-700">
                    Strong, consistent cash flow over 12-24 months is essential 
                    for qualification and favorable terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Pre-Approved?</h2>
          <p className="text-xl mb-6 text-orange-100">
            Get your bank statement loan pre-approval with an experienced Non-QM specialist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold">
                Start Your Application
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-orange-100 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Non-QM Specialist
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