import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, DollarSign, Calendar, Shield, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HELOC in Orange County, CA | HELOC | Mo Abdel — Mortgage Broker',
  description: 'HELOC in Orange County, CA. Flexible home-equity access. Get rates or call (949) 579-2057.',
  keywords: 'HELOC Orange County CA, home equity line, HELOC rates',
  alternates: { canonical: 'https://mothebroker.com/loan-programs/heloc' }
};

export default function HELOCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 #1 Most Popular Program in Orange County
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            HELOC: <span className="text-blue-600">HELOC</span> in Orange County, CA
          </h1>
          <p className="text-slate-600">Serving Irvine, Anaheim, Huntington Beach, and Newport Beach.</p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Unlock your Orange County home's equity with a flexible credit line. 
            Access $50K to $500K for any purpose with competitive, market-based rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get HELOC Rates & Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call for HELOC Info
              </Button>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Rate Options</h3>
            <p className="text-slate-600">HELOC rates may be variable or fixed depending on the program. We’ll compare current options and outline how rate adjustments, caps, or fixed-rate features (if available) could affect your payment.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Up to $500K</h3>
            <p className="text-slate-600">Access substantial credit lines for major projects</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Interest Only</h3>
            <p className="text-slate-600">Pay only interest for first 10 years</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Transparent Costs</h3>
            <p className="text-slate-600">Closing costs vary by lender and program. We’ll provide a transparent estimate of fees before you proceed.</p>
          </div>
        </div>

        {/* How HELOC Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How a HELOC Works in Orange County</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Apply & Get Approved</h3>
                    <p className="text-slate-600">We evaluate your Orange County home's value and your financial situation to determine your credit line limit.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Access Your Funds</h3>
                    <p className="text-slate-600">Use online banking, checks, or a debit card to access funds as needed - only pay interest on what you use.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Repay at Your Pace</h3>
                    <p className="text-slate-600">Make interest-only payments during the 10-year draw period, then enter a 20-year repayment phase.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">HELOC Example</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Orange County Home Value:</span>
                  <span className="font-bold">$1,200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Current Mortgage Balance:</span>
                  <span className="font-bold">$400,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Available Equity (80% LTV):</span>
                  <span className="font-bold">$560,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Payment on $200K:</span>
                    <span className="font-bold text-green-600">~$1,625/mo*</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">*Interest-only payment at 9.75% rate. Rates subject to change.</p>
            </div>
          </div>
        </div>

        {/* Benefits vs Other Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose a HELOC Over Other Options?</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">HELOC</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Personal Loan</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Credit Card</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Cash-Out Refi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Interest Rate</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Variable (index + margin)</td>
                  <td className="px-6 py-4 text-center text-slate-600">8-18%</td>
                  <td className="px-6 py-4 text-center text-slate-600">18-29%</td>
                  <td className="px-6 py-4 text-center text-slate-600">Current Mortgage Rates</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Access to Funds</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">As Needed</td>
                  <td className="px-6 py-4 text-center text-slate-600">Lump Sum</td>
                  <td className="px-6 py-4 text-center text-slate-600">As Needed</td>
                  <td className="px-6 py-4 text-center text-slate-600">Lump Sum</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Tax Deductible*</td>
                  <td className="px-6 py-4 text-center text-green-600"><CheckCircle className="w-5 h-5 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-red-600">✗</td>
                  <td className="px-6 py-4 text-center text-green-600"><CheckCircle className="w-5 h-5 mx-auto" /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Maximum Amount</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Up to $500K</td>
                  <td className="px-6 py-4 text-center text-slate-600">$100K max</td>
                  <td className="px-6 py-4 text-center text-slate-600">$50K max</td>
                  <td className="px-6 py-4 text-center text-slate-600">Based on equity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">*For home improvements. Consult your tax advisor.</p>
        </div>

        {/* Common Uses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular HELOC Uses in Orange County</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 Home Renovations</h3>
                <p className="text-slate-600 mb-3">Kitchen remodels, bathroom upgrades, ADU construction, and other home improvements that add value.</p>
                <p className="text-sm font-semibold text-green-600">Tax-deductible interest*</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💳 Debt Consolidation</h3>
                <p className="text-slate-600 mb-3">Pay off high-interest credit cards, personal loans, and other debts with one low payment.</p>
                <p className="text-sm font-semibold text-green-600">Save thousands in interest</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏘️ Real Estate Investment</h3>
                <p className="text-slate-600 mb-3">Down payment for investment properties, fix-and-flip projects, or other real estate opportunities.</p>
                <p className="text-sm font-semibold text-green-600">Leverage your equity</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🎓 Education Expenses</h3>
                <p className="text-slate-600 mb-3">College tuition, private school, or educational expenses with lower rates than student loans.</p>
                <p className="text-sm font-semibold text-green-600">Lower than student loans</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🚨 Emergency Fund</h3>
                <p className="text-slate-600 mb-3">Peace of mind with access to funds for unexpected expenses or opportunities.</p>
                <p className="text-sm font-semibold text-green-600">Only pay when you use it</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💼 Business Investment</h3>
                <p className="text-slate-600 mb-3">Fund business expansion, equipment purchases, or working capital needs.</p>
                <p className="text-sm font-semibold text-green-600">Flexible business funding</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">HELOC Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Credit Score: 640+</p>
                    <p className="text-slate-600 text-sm">Higher scores qualify for better rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Combined LTV: Up to 80%</p>
                    <p className="text-slate-600 text-sm">Some programs allow up to 90%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Debt-to-Income: 43% or lower</p>
                    <p className="text-slate-600 text-sm">Including the new HELOC payment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Income Documentation</p>
                    <p className="text-slate-600 text-sm">W-2s, pay stubs, tax returns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Property Type</p>
                    <p className="text-slate-600 text-sm">Primary residence, second home, or investment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Important Considerations</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Variable Interest Rate</p>
                    <p className="text-slate-600 text-sm">Rates may adjust periodically based on program terms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Home as Collateral</p>
                    <p className="text-slate-600 text-sm">Your Orange County home secures the credit line</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Payment Changes</p>
                    <p className="text-slate-600 text-sm">Payments increase after 10-year draw period</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Market Risk</p>
                    <p className="text-slate-600 text-sm">Orange County property values can fluctuate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Options (Internal Links) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Related Options</h2>
          <ul className="list-disc list-inside text-blue-700">
            <li><Link href="/loan-programs/cash-out-refinance">Cash-Out Refi</Link></li>
            <li><Link href="/loan-programs/heloan">HELOAN (Fixed-Rate Home Equity Loan)</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">HELOC FAQs (Orange County, CA)</h2>
          <div className="space-y-4 text-slate-700">
            <details><summary className="font-semibold">Are HELOC rates variable?</summary><p>Many HELOCs are variable; some programs may offer fixed-rate features. We’ll review current options and caps.</p></details>
            <details><summary className="font-semibold">How much can I draw?</summary><p>Typical ranges depend on equity, credit, and lender guidelines. We’ll calculate a safe maximum for your scenario.</p></details>
            <details><summary className="font-semibold">How does repayment work?</summary><p>Draw periods allow access to funds, followed by a repayment period. We’ll outline examples based on your terms.</p></details>
          </div>
        </section>

        {/* Structured Data */}
        {(() => {
          const serviceSchema = {
            "@context":"https://schema.org",
            "@type":"FinancialService",
            "name":"Mo Abdel — Mortgage Broker",
            "areaServed":"Orange County, CA",
            "serviceType":"Home Equity Line of Credit (HELOC)",
            "url":"https://example.com/loan-programs/heloc",
            "telephone":"(949) 579-2057",
            "brand": "Mo Abdel — Mortgage Broker, Orange County, CA."
          };
          const faqSchema = {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"Are HELOC rates variable?","acceptedAnswer":{"@type":"Answer","text":"Many HELOCs are variable; some programs may offer fixed-rate features. We’ll review current options and caps."}},
              {"@type":"Question","name":"How much can I draw?","acceptedAnswer":{"@type":"Answer","text":"Typical ranges depend on equity, credit, and lender guidelines. We’ll calculate a safe maximum for your scenario."}},
              {"@type":"Question","name":"How does repayment work?","acceptedAnswer":{"@type":"Answer","text":"Draw periods allow access to funds, followed by a repayment period. We’ll outline examples based on your terms."}}
            ]
          };
          return (<>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          </>);
        })()}

        {/* Compliance Disclosure */}
        <div className="bg-slate-100 rounded-lg p-4 mt-8">
          <p className="text-xs text-slate-600">
            Program availability, terms, and costs are subject to change and eligibility. We’ll present written loan estimates for comparison.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Unlock Your Orange County Home's Equity?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized HELOC rates and terms from multiple lenders in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My HELOC Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Speak with Mo Today
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all of Orange County
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




