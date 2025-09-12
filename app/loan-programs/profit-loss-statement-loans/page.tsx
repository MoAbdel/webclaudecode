import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  FileText, 
  Calculator, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Users,
  Clock,
  DollarSign,
  Shield,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'P&L Statement Loans Orange County | CPA Prepared Income Verification | Mo Abdel',
  description: 'P&L Statement loans for business owners in Orange County. Use CPA-prepared profit & loss statements for income verification instead of tax returns. Flexible Non-QM financing. Call (949) 579-2057.',
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs/profit-loss-statement-loans',
  },
};

export default function ProfitLossStatementLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📊 CPA-Prepared Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-purple-600">P&L Statement Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Use CPA-prepared Profit & Loss statements for income verification instead of tax returns. 
            Perfect for business owners who want to qualify based on their business financial statements 
            without revealing personal tax information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Get P&L Loan Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">CPA-Prepared P&L</h3>
            <p className="text-slate-600">Professional financial statements prepared by your CPA</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Personal Tax Returns</h3>
            <p className="text-slate-600">Keep your personal tax information private</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Business Income Focus</h3>
            <p className="text-slate-600">Qualify based on business performance and cash flow</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Terms</h3>
            <p className="text-slate-600">Various loan amounts and terms available</p>
          </div>
        </div>

        {/* How P&L Statement Loans Work */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How P&L Statement Loans Work</h2>
          <div className="bg-purple-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The P&L Loan Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">1</div>
                    <div>
                      <p className="font-semibold text-slate-900">CPA Prepares P&L Statement</p>
                      <p className="text-slate-600 text-sm">Your CPA creates a detailed profit & loss statement for the most recent 12 months</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">2</div>
                    <div>
                      <p className="font-semibold text-slate-900">Business Income Analysis</p>
                      <p className="text-slate-600 text-sm">Lender reviews net income, cash flow, and business performance trends</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">3</div>
                    <div>
                      <p className="font-semibold text-slate-900">Income Verification</p>
                      <p className="text-slate-600 text-sm">CPA letter confirms accuracy and business income is used for qualification</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-sm">4</div>
                    <div>
                      <p className="font-semibold text-slate-900">Loan Approval</p>
                      <p className="text-slate-600 text-sm">Business income used for debt-to-income calculations and loan approval</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">P&L Statement Example</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Gross Revenue (12 months):</span>
                    <span className="font-bold">$850,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Business Expenses:</span>
                    <span className="font-bold text-red-600">-$600,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Net Business Income:</span>
                    <span className="font-bold text-green-600">$250,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monthly Qualifying Income:</span>
                      <span className="font-bold text-purple-600">$20,833/month</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Max Loan Amount (43% DTI):</span>
                      <span className="font-bold text-purple-600">~$580,000</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Example only. Actual calculations vary by lender and individual situation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Who Benefits from P&L Statement Loans?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-4">✅ Perfect Candidates</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-purple-700"><strong>S-Corp & LLC Owners:</strong> Business income flows through to personal returns but want to use business statements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-purple-700"><strong>Partnership Business Owners:</strong> Multiple partners with complex K-1 distributions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-purple-700"><strong>Professional Service Providers:</strong> Lawyers, doctors, consultants with established practices</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-purple-700"><strong>Franchisee Owners:</strong> Multiple franchise locations with consolidated P&L statements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-purple-700"><strong>Growing Businesses:</strong> Current year income significantly higher than previous tax returns</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">💡 Common Situations</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Privacy Concerns:</strong> Want to keep personal tax information confidential</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Business Growth:</strong> Current performance exceeds historical tax returns</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Complex Tax Situations:</strong> Multiple entities making personal returns complicated</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Investment Property Purchase:</strong> Using business income for real estate investment</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Seasonal Businesses:</strong> Want to show full year performance vs partial year</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">P&L Statement Loan Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  Program Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Loan Amounts: $100K - $3M+</p>
                      <p className="text-sm text-slate-600">Primary residence, second home, and investment properties</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calculator className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Down Payment: 10-25%</p>
                      <p className="text-sm text-slate-600">Varies by property type and loan program</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">DTI Ratios: Up to 50%</p>
                      <p className="text-sm text-slate-600">Higher ratios with compensating factors</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Terms: 15-30 years</p>
                      <p className="text-sm text-slate-600">Fixed and adjustable rate options available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-2" />
                  Required Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">CPA-Prepared P&L Statement</p>
                      <p className="text-sm text-slate-600">Most recent 12-month profit & loss statement</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">CPA Certification Letter</p>
                      <p className="text-sm text-slate-600">Letter verifying accuracy and CPA credentials</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Business Bank Statements</p>
                      <p className="text-sm text-slate-600">2-3 months supporting business deposits</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Business License & Articles</p>
                      <p className="text-sm text-slate-600">Proof of business formation and operation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">P&L Statement Loan Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">✅ Qualification Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Credit Score: 680+ (varies by program)</p>
                    <p className="text-slate-600 text-sm">Higher scores unlock better rates and lower down payments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Business Operating: 2+ years</p>
                    <p className="text-slate-600 text-sm">Established business with operating history</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">CPA Relationship: 1+ years</p>
                    <p className="text-slate-600 text-sm">Established relationship with licensed CPA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Business Income Consistency</p>
                    <p className="text-slate-600 text-sm">Stable or growing business income trends</p>
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
                    <p className="text-slate-600 text-sm">Typically 0.75-1.5% above conventional loans</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">CPA Requirements</p>
                    <p className="text-slate-600 text-sm">Must use licensed CPA, not bookkeeper or tax preparer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Cash Reserves Required</p>
                    <p className="text-slate-600 text-sm">2-6 months of mortgage payments in reserves</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Longer Processing Time</p>
                    <p className="text-slate-600 text-sm">45-60 days typical due to manual underwriting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* P&L vs Other Non-QM */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">P&L Statement vs Other Non-QM Loans</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">P&L Statement</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Bank Statement</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Asset Depletion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Documentation Required</td>
                  <td className="px-6 py-4 text-center text-purple-600 font-bold">CPA P&L Statements</td>
                  <td className="px-6 py-4 text-center text-slate-600">12-24 Month Bank Statements</td>
                  <td className="px-6 py-4 text-center text-slate-600">Asset Statements</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Best For</td>
                  <td className="px-6 py-4 text-center text-purple-600 font-bold">Established Businesses</td>
                  <td className="px-6 py-4 text-center text-slate-600">Self-Employed</td>
                  <td className="px-6 py-4 text-center text-slate-600">High Net Worth</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Down Payment</td>
                  <td className="px-6 py-4 text-center text-purple-600">10-25%</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">10-20%</td>
                  <td className="px-6 py-4 text-center text-slate-600">20-30%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Privacy Level</td>
                  <td className="px-6 py-4 text-center text-purple-600 font-bold">Highest</td>
                  <td className="px-6 py-4 text-center text-slate-600">Medium</td>
                  <td className="px-6 py-4 text-center text-slate-600">High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Processing Time</td>
                  <td className="px-6 py-4 text-center text-purple-600">6-8 weeks</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">4-5 weeks</td>
                  <td className="px-6 py-4 text-center text-slate-600">6-8 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Orange County Business Market */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">P&L Statement Loans in Orange County</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Services Hub</h3>
                    <p className="text-slate-600">
                      Orange County is home to thousands of professional service firms - law practices, 
                      medical groups, consulting firms - perfect candidates for P&L statement financing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">High-Income Business Owners</h3>
                    <p className="text-slate-600">
                      Many OC business owners have significant business income but prefer to keep 
                      personal tax information private when financing real estate purchases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Growing Businesses</h3>
                    <p className="text-slate-600">
                      Many OC businesses are experiencing growth that exceeds their historical 
                      tax returns, making current P&L statements more representative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">OC P&L Loan Market</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Average Loan Amount:</span>
                  <span className="font-bold">$925K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Most Common Property:</span>
                  <span className="font-bold text-green-600">Primary Residence</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Typical Down Payment:</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Business Type:</span>
                  <span className="font-bold">Professional Services</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Top P&L Loan Professions:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                  <div>• Medical Practice Owners</div>
                  <div>• Law Firm Partners</div>
                  <div>• CPA Firm Owners</div>
                  <div>• Consulting Business Owners</div>
                  <div>• Franchise Owners</div>
                  <div>• Real Estate Brokers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Your Business P&L for Financing?
          </h2>
          <p className="text-xl mb-6 text-purple-100">
            Get specialized P&L statement loan financing while keeping your personal tax information private
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
                Get My P&L Loan Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • P&L Statement loan specialist
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