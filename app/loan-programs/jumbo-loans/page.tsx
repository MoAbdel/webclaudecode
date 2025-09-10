import React from 'react';

export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/loan-programs/jumbo-loans" },
    openGraph: { title, description, url: BASE + "/loan-programs/jumbo-loans", siteName: "Mo Abdel — Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Crown, TrendingUp, Shield, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';

};

export default function JumboLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            👑 Luxury Home Financing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-purple-600">Jumbo Loans</span> in Orange County, CA
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Finance luxury Orange County homes above $1,209,750 with competitive jumbo mortgage 
            rates. No loan amount limits, flexible terms, and personalized service for 
            high-value properties and sophisticated borrowers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Get Jumbo Loan Rates
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
              <Crown className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Loan Limits</h3>
            <p className="text-slate-600">Finance multi-million dollar Orange County properties</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Competitive Rates</h3>
            <p className="text-slate-600">Often similar to conventional loan rates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No PMI</h3>
            <p className="text-slate-600">No mortgage insurance required with 20% down</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Investment OK</h3>
            <p className="text-slate-600">Primary homes, second homes, and investment properties</p>
          </div>
        </div>

        {/* Jumbo Loan Thresholds */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2025 Jumbo Loan Thresholds</h2>
          <div className="bg-purple-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Orange County Jumbo Limits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Conforming Limit:</span>
                    <span className="font-bold text-slate-600">$1,089,300</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-slate-600">Jumbo Threshold:</span>
                    <span className="font-bold text-purple-600">$1,089,301+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Maximum Loan Amount:</span>
                    <span className="font-bold text-purple-600">No Limit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Typical OC Jumbo Range:</span>
                    <span className="font-bold">$800K - $3M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Ultra-Jumbo (&gt;$1.5M):</span>
                    <span className="font-bold">Specialized Pricing</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Any loan amount above the conforming limit requires jumbo financing in Orange County.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Jumbo Loan Example</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Orange County Luxury Home:</span>
                    <span className="font-bold">$1,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Down Payment (20%):</span>
                    <span className="font-bold text-purple-600">$300,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Jumbo Loan Amount:</span>
                    <span className="font-bold">$1,200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">PMI Payment:</span>
                    <span className="font-bold text-green-600">$0/month</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Est. Monthly Payment:</span>
                      <span className="font-bold text-purple-600">~$8,750*</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Includes principal, interest, taxes, insurance. No PMI required!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Jumbo Loan Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Jumbo Loans for Orange County Luxury?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏰 No Loan Amount Restrictions</h3>
                <p className="text-slate-600 mb-3">Finance any Orange County luxury property regardless of price. From $800K Newport Beach condos to $5M Laguna Beach estates.</p>
                <p className="text-sm font-semibold text-purple-600">True luxury home financing</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💎 Premium Service & Expertise</h3>
                <p className="text-slate-600 mb-3">Dedicated jumbo specialists who understand luxury real estate transactions and high-net-worth client needs.</p>
                <p className="text-sm font-semibold text-purple-600">White-glove service experience</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🛡️ No Mortgage Insurance</h3>
                <p className="text-slate-600 mb-3">With 20% down payment, no PMI required ever. On a $1.5M home, this saves $1,000+ monthly compared to high-balance loans.</p>
                <p className="text-sm font-semibold text-purple-600">Significant monthly savings</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 All Property Types Welcome</h3>
                <p className="text-slate-600 mb-3">Primary residences, vacation homes, investment properties, luxury condos, and unique properties all eligible.</p>
                <p className="text-sm font-semibold text-purple-600">Maximum property flexibility</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ Competitive Interest Rates</h3>
                <p className="text-slate-600 mb-3">Jumbo rates are often within 0.125-0.25% of conforming rates, sometimes even lower due to strong borrower profiles.</p>
                <p className="text-sm font-semibold text-purple-600">Better rates than expected</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📈 Portfolio & Investment Benefits</h3>
                <p className="text-slate-600 mb-3">Build your Orange County real estate portfolio with competitive financing on multiple properties and investment strategies.</p>
                <p className="text-sm font-semibold text-purple-600">Wealth building through real estate</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Jumbo Loan Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Jumbo Loan Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">✅ Enhanced Qualifying Standards</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Credit Score: 700+ (740+ for best rates)</p>
                    <p className="text-slate-600 text-sm">Higher standards reflect loan size and risk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Down Payment: 10-20% minimum</p>
                    <p className="text-slate-600 text-sm">20% for best rates and no PMI</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Debt-to-Income: Up to 43%</p>
                    <p className="text-slate-600 text-sm">Lower ratios preferred for larger loan amounts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Cash Reserves: 2-6 months PITI</p>
                    <p className="text-slate-600 text-sm">Higher reserves required for investment properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Income Documentation: Full documentation</p>
                    <p className="text-slate-600 text-sm">Bank statements, tax returns, asset verification</p>
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
                    <p className="font-semibold text-slate-900">Enhanced Underwriting</p>
                    <p className="text-slate-600 text-sm">More detailed review of income, assets, and creditworthiness</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Appraisal Requirements</p>
                    <p className="text-slate-600 text-sm">Often requires more detailed appraisal, sometimes two appraisals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Rate Lock Periods</p>
                    <p className="text-slate-600 text-sm">Longer processing may require extended rate locks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Investment Property Rules</p>
                    <p className="text-slate-600 text-sm">25-30% down, higher rates, 6+ months reserves</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Foreign National Programs</p>
                    <p className="text-slate-600 text-sm">Special programs available for international buyers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jumbo vs Conforming */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Jumbo vs Conforming Loans Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">Jumbo Loans</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Conforming Loans</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Loan Amount Limit</td>
                  <td className="px-6 py-4 text-center text-purple-600 font-bold">No Limit</td>
                  <td className="px-6 py-4 text-center text-slate-600">$1,089,300 max</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Down Payment</td>
                  <td className="px-6 py-4 text-center text-slate-600">10-20%</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">3-20%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Interest Rates</td>
                  <td className="px-6 py-4 text-center text-purple-600 font-bold">Competitive</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Competitive</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Credit Score Requirement</td>
                  <td className="px-6 py-4 text-center text-orange-600">700+</td>
                  <td className="px-6 py-4 text-center text-green-600">620+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Cash Reserves</td>
                  <td className="px-6 py-4 text-center text-orange-600">2-6 months</td>
                  <td className="px-6 py-4 text-center text-green-600">0-2 months</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Underwriting</td>
                  <td className="px-6 py-4 text-center text-orange-600">Enhanced Review</td>
                  <td className="px-6 py-4 text-center text-green-600">Standard</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Property Types</td>
                  <td className="px-6 py-4 text-center text-purple-600 font-bold">All Types</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">All Types</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Orange County Jumbo Market */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Orange County Jumbo Loan Market</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Crown className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">High Home Values Drive Jumbo Need</h3>
                    <p className="text-slate-600">
                      With median Orange County home prices around $1.2M, jumbo financing 
                      is essential for most luxury communities and coastal areas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Strong Investment Market</h3>
                    <p className="text-slate-600">
                      Orange County attracts investors nationwide. Jumbo loans enable 
                      portfolio building in one of California's most stable markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Sophisticated Borrowers</h3>
                    <p className="text-slate-600">
                      High-income professionals, business owners, and investors who 
                      understand and qualify for jumbo loan requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">OC Jumbo Loan Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Jumbo Market Share:</span>
                  <span className="font-bold">~45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Average Jumbo Amount:</span>
                  <span className="font-bold">$1.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Typical Down Payment:</span>
                  <span className="font-bold text-green-600">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Investment Property %:</span>
                  <span className="font-bold">~30%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Top Jumbo Areas:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div>• Newport Beach</div>
                  <div>• Laguna Beach</div>
                  <div>• Irvine</div>
                  <div>• Dana Point</div>
                  <div>• Manhattan Beach</div>
                  <div>• San Clemente</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Jumbo Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Jumbo Loan Program Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 Standard Jumbo</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>• 10-20% down payment</div>
                  <div>• 700+ credit score</div>
                  <div>• Primary & second homes</div>
                  <div>• Full documentation</div>
                  <div>• Best rates available</div>
                </div>
                <p className="text-sm font-semibold text-blue-600 mt-3">Most popular option</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💼 Investment Jumbo</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>• 25-30% down payment</div>
                  <div>• 720+ credit score</div>
                  <div>• 6+ months reserves</div>
                  <div>• Rental income considered</div>
                  <div>• Multiple properties OK</div>
                </div>
                <p className="text-sm font-semibold text-green-600 mt-3">Build your portfolio</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🌍 Foreign National</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>• 30-40% down payment</div>
                  <div>• No US credit history needed</div>
                  <div>• International income OK</div>
                  <div>• Asset-based programs</div>
                  <div>• Specialized underwriting</div>
                </div>
                <p className="text-sm font-semibold text-purple-600 mt-3">International buyers</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Options (Internal Links) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Related Options</h2>
          <ul className="list-disc list-inside text-blue-700">
            <li><Link href="/loan-programs/conventional-loans">Conventional Loans (Conforming up to $1,209,750)</Link></li>
            <li><Link href="/loan-programs/rate-term-refinance">Rate-Term Refinance</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Jumbo Loan FAQs (Orange County, CA)</h2>
          <div className="space-y-4 text-slate-700">
            <details><summary className="font-semibold">What’s considered a Jumbo loan in OC?</summary><p>Loans above $1,209,750 (2025) for a 1-unit home are Jumbo in Orange County, CA.</p></details>
            <details><summary className="font-semibold">Are jumbo rates higher?</summary><p>Not always; competitive profiles can be near conforming rates. We’ll shop aggressively.</p></details>
            <details><summary className="font-semibold">Do I need reserves?</summary><p>Many investors require 2–6 months of reserves. We’ll outline program-specific requirements.</p></details>
          </div>
        </section>

        {/* Structured Data */}
        {(() => {
          const serviceSchema = {
            "@context":"https://schema.org",
            "@type":"FinancialService",
            "name":"Mo Abdel — Mortgage Broker",
            "areaServed":"Orange County, CA",
            "serviceType":"Jumbo Mortgage",
            "url":"https://example.com/loan-programs/jumbo-loans",
            "telephone":"(949) 579-2057",
            "brand": "Mo Abdel — Mortgage Broker, Orange County, CA."
          };
          const faqSchema = {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What’s considered a Jumbo loan in OC?","acceptedAnswer":{"@type":"Answer","text":"Above $1,209,750 (1-unit) in Orange County, CA for 2025."}},
              {"@type":"Question","name":"Are jumbo rates higher?","acceptedAnswer":{"@type":"Answer","text":"Depends on profile; we’ll shop multiple investors for best terms."}},
              {"@type":"Question","name":"Do I need reserves?","acceptedAnswer":{"@type":"Answer","text":"Often 2–6 months PITI depending on program and property type."}}
            ]
          };
          return (<>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          </>);
        })()}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Finance Your Orange County Luxury Home?
          </h2>
          <p className="text-xl mb-6 text-purple-100">
            Get competitive jumbo loan rates with personalized service for your high-value property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
                Get My Jumbo Loan Quote
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Luxury home financing specialist
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





