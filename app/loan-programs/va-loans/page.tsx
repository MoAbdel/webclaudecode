import React from 'react';

export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/loan-programs/va-loans" },
    openGraph: { title, description, url: BASE + "/loan-programs/va-loans", siteName: "Mo Abdel — Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Shield, Star, Users, CheckCircle, AlertCircle, Flag } from 'lucide-react';

};

export default function VALoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🇺🇸 Exclusive Military Benefits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-red-600">VA Loans</span> in Orange County, CA
          </h1>
          <p className="text-slate-600">Proudly serving veterans in Irvine, Anaheim, Huntington Beach, and Newport Beach.</p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Exclusive mortgage benefits for military veterans, active service members, and eligible 
            spouses in Orange County. Buy with $0 down payment, no PMI, and competitive rates - 
            thank you for your service with the best home financing available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                Get VA Loan Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">$0 Down Payment</h3>
            <p className="text-slate-600">Buy an Orange County home with no money down</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No PMI Ever</h3>
            <p className="text-slate-600">Never pay private mortgage insurance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Competitive Rates</h3>
            <p className="text-slate-600">Often lower than conventional loan rates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flag className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reusable Benefit</h3>
            <p className="text-slate-600">Use multiple times throughout your life</p>
          </div>
        </div>

        {/* VA Loan Limits 2025 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2025 VA Loan Limits in Orange County</h2>
          <div className="bg-red-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Orange County VA Limits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Basic Entitlement:</span>
                    <span className="font-bold">$36,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Additional Entitlement:</span>
                    <span className="font-bold">$155,162.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Available:</span>
                    <span className="font-bold text-red-600">$1,089,300+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">No Limit if 25% Down:</span>
                    <span className="font-bold text-green-600">Unlimited*</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Above $1,089,300, you'll need 25% of the difference as down payment</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">VA Loan Example</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Orange County Home Price:</span>
                    <span className="font-bold">$750,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Down Payment:</span>
                    <span className="font-bold text-red-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">VA Loan Amount:</span>
                    <span className="font-bold">$750,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">PMI Payment:</span>
                    <span className="font-bold text-green-600">$0/month</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Est. Monthly Payment:</span>
                      <span className="font-bold text-green-600">~$4,850*</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Includes principal, interest, taxes, insurance. No PMI!</p>
              </div>
            </div>
          </div>
        </div>

        {/* VA Loan Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Exclusive VA Loan Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💰 $0 Down Payment</h3>
                <p className="text-slate-600 mb-3">Buy a $750K Orange County home without any down payment. This saves $150K compared to a 20% down conventional loan.</p>
                <p className="text-sm font-semibold text-red-600">Massive upfront savings</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🛡️ No Private Mortgage Insurance</h3>
                <p className="text-slate-600 mb-3">Never pay PMI, even with $0 down. Save $400-800+ monthly compared to other $0 down programs.</p>
                <p className="text-sm font-semibold text-red-600">Lifetime PMI savings</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📊 Flexible Underwriting</h3>
                <p className="text-slate-600 mb-3">More forgiving credit requirements and debt-to-income ratios. Military experience counts toward stability.</p>
                <p className="text-sm font-semibold text-red-600">Military-friendly approvals</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🔄 Reusable Entitlement</h3>
                <p className="text-slate-600 mb-3">Use your VA benefit multiple times. Sell and buy again, or even have two VA loans simultaneously in some cases.</p>
                <p className="text-sm font-semibold text-red-600">Lifetime benefit</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 No Prepayment Penalties</h3>
                <p className="text-slate-600 mb-3">Pay off your loan early without penalties. Make extra payments or refinance anytime without fees.</p>
                <p className="text-sm font-semibold text-red-600">Flexible payoff options</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ VA IRRRL Refinancing</h3>
                <p className="text-slate-600 mb-3">Streamlined refinancing with reduced documentation and often no appraisal required for rate reductions.</p>
                <p className="text-sm font-semibold text-red-600">Easy future refinancing</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who Qualifies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Who Qualifies for VA Loans?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">✅ Eligible Service Members</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Veterans</p>
                    <p className="text-slate-600 text-sm">90+ days active duty during wartime or 181+ days during peacetime</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Active Duty Military</p>
                    <p className="text-slate-600 text-sm">Currently serving 90+ days (can buy before discharge)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">National Guard & Reserves</p>
                    <p className="text-slate-600 text-sm">6+ years of service or 90+ days active duty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Surviving Spouses</p>
                    <p className="text-slate-600 text-sm">Of service members who died in service or from service-related disability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Certain Spouses</p>
                    <p className="text-slate-600 text-sm">Of service members MIA or POW for 90+ days</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">📋 Additional Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Certificate of Eligibility (COE)</p>
                    <p className="text-slate-600 text-sm">Obtain from VA.gov or we can help get it for you</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Primary Residence</p>
                    <p className="text-slate-600 text-sm">Must be your primary home (can't be investment property)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Creditworthiness</p>
                    <p className="text-slate-600 text-sm">Typically 580+ credit score, stable income</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Property Requirements</p>
                    <p className="text-slate-600 text-sm">Home must meet VA minimum property requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Residual Income</p>
                    <p className="text-slate-600 text-sm">Must meet VA residual income guidelines for family size</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VA Loan Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Your Orange County VA Loan Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Your COE</h3>
              <p className="text-slate-600 text-sm">Obtain Certificate of Eligibility from VA or we'll help you get it quickly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pre-Approval</h3>
              <p className="text-slate-600 text-sm">Get pre-approved to know your buying power in Orange County market.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Home Shopping</h3>
              <p className="text-slate-600 text-sm">Search Orange County with confidence, knowing you're pre-approved.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Close & Move In</h3>
              <p className="text-slate-600 text-sm">VA appraisal, underwriting, and closing - then enjoy your new home!</p>
            </div>
          </div>
        </div>

        {/* Orange County Military Communities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Orange County Areas for Military Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏖️ Huntington Beach</h3>
                <p className="text-slate-600 mb-2">Close to military bases, beach lifestyle, family-friendly</p>
                <div className="text-sm text-slate-500">
                  • 15 min to Joint Forces Training Base
                  • Excellent schools and recreation
                  • Median home: $1.1M
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🌊 Costa Mesa</h3>
                <p className="text-slate-600 mb-2">Central location, diverse housing options</p>
                <div className="text-sm text-slate-500">
                  • Easy freeway access
                  • Shopping and dining
                  • Median home: $950K
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏡 Garden Grove</h3>
                <p className="text-slate-600 mb-2">Affordable options, diverse community</p>
                <div className="text-sm text-slate-500">
                  • Military-friendly pricing
                  • Strong community support
                  • Median home: $750K
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🎯 Mission Viejo</h3>
                <p className="text-slate-600 mb-2">Family-oriented, excellent schools</p>
                <div className="text-sm text-slate-500">
                  • Master-planned community
                  • Top-rated schools
                  • Median home: $950K
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🌅 San Clemente</h3>
                <p className="text-slate-600 mb-2">Beach town, close to Camp Pendleton</p>
                <div className="text-sm text-slate-500">
                  • 30 min to Camp Pendleton
                  • Beach community
                  • Median home: $1.3M
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏠 Orange</h3>
                <p className="text-slate-600 mb-2">Historic charm, family neighborhoods</p>
                <div className="text-sm text-slate-500">
                  • Classic neighborhoods
                  • Good value options
                  • Median home: $900K
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* VA vs Other Loans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">VA vs Other Loan Programs</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">VA Loans</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">FHA</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Conventional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Down Payment</td>
                  <td className="px-6 py-4 text-center text-red-600 font-bold">$0</td>
                  <td className="px-6 py-4 text-center text-slate-600">3.5%</td>
                  <td className="px-6 py-4 text-center text-slate-600">3-20%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Mortgage Insurance</td>
                  <td className="px-6 py-4 text-center text-red-600 font-bold">None</td>
                  <td className="px-6 py-4 text-center text-slate-600">MIP Required</td>
                  <td className="px-6 py-4 text-center text-slate-600">PMI if &lt;20% down</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Credit Score</td>
                  <td className="px-6 py-4 text-center text-red-600 font-bold">580+</td>
                  <td className="px-6 py-4 text-center text-slate-600">580+</td>
                  <td className="px-6 py-4 text-center text-slate-600">620+</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Funding Fee</td>
                  <td className="px-6 py-4 text-center text-orange-600">2.15-3.3%*</td>
                  <td className="px-6 py-4 text-center text-slate-600">1.75% upfront</td>
                  <td className="px-6 py-4 text-center text-green-600">None</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Loan Limits</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">No limit with 25% down</td>
                  <td className="px-6 py-4 text-center text-slate-600">$1,089,300</td>
                  <td className="px-6 py-4 text-center text-green-600">$766,550+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">*Funding fee can be financed. Disabled veterans exempt from funding fee.</p>
        </div>

        {/* Related Options (Internal Links) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Related Options</h2>
          <ul className="list-disc list-inside text-blue-700">
            <li><Link href="/loan-programs/conventional-loans">Conventional (Purchase) Loans</Link></li>
            <li><Link href="/loan-programs/fha-loans">FHA Loans</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">VA Loan FAQs (Orange County, CA)</h2>
          <div className="space-y-4 text-slate-700">
            <details><summary className="font-semibold">Do I need a down payment?</summary><p>Qualified VA borrowers can buy with 0% down and no PMI.</p></details>
            <details><summary className="font-semibold">Is there a funding fee?</summary><p>VA loans include a funding fee; we’ll explain exemptions and exact amounts for you.</p></details>
            <details><summary className="font-semibold">Can I buy a condo?</summary><p>Yes, subject to VA condo approval. We’ll check eligibility in your target area.</p></details>
          </div>
        </section>

        {/* Structured Data */}
        {(() => {
          const serviceSchema = {
            "@context":"https://schema.org",
            "@type":"FinancialService",
            "name":"Mo Abdel — Mortgage Broker",
            "areaServed":"Orange County, CA",
            "serviceType":"VA Loan",
            "url":"https://example.com/loan-programs/va-loans",
            "telephone":"(949) 579-2057",
            "brand": "Mo Abdel — Mortgage Broker, Orange County, CA."
          };
          const faqSchema = {
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"Do I need a down payment?","acceptedAnswer":{"@type":"Answer","text":"Qualified VA borrowers can buy with 0% down and no PMI."}},
              {"@type":"Question","name":"Is there a funding fee?","acceptedAnswer":{"@type":"Answer","text":"Yes; we’ll explain exemptions and exact amounts for your situation."}},
              {"@type":"Question","name":"Can I buy a condo?","acceptedAnswer":{"@type":"Answer","text":"Yes, subject to VA condo approval."}}
            ]
          };
          return (<>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          </>);
        })()}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Your VA Benefits in Orange County?
          </h2>
          <p className="text-xl mb-6 text-red-100">
            Get pre-approved with $0 down and no PMI - you've earned these exclusive benefits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold">
                Start My VA Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-red-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Proudly serving our veterans and military families
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





<section className="my-8 bg-slate-50 p-4 rounded-lg">
  <h3 className="text-xl font-semibold mb-2">Orange County 2025 Loan Limits</h3>
  <ul className="list-disc list-inside">
    <li>Conforming (1-unit): <strong>$1,209,750</strong></li>
    <li>FHA (1-unit): <strong>$1,089,300</strong></li>
    <li>Jumbo: <strong>above $1,209,750</strong></li>
  </ul>
</section>