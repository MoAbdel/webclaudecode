import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { DollarSign, Home, TrendingUp, Calculator, CheckCircle, CreditCard, Hammer, GraduationCap, Building, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cash-Out Refinance Loans in Orange County, CA | Mo The Broker',
  description: 'Tap into your home\'s equity with a cash-out refinance in Orange County. Competitive rates, fast approvals, and expert guidance from Mo The Broker.',
  openGraph: {
    title: 'Cash-Out Refinance Loans in Orange County, CA | Mo The Broker',
    description: 'Tap into your home\'s equity with a cash-out refinance in Orange County. Competitive rates, fast approvals, and expert guidance from Mo The Broker.',
    url: 'https://mothebroker.com/cash-out-refinance',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/cash-out-refinance',
  },
};

// JSON-LD Schema for LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo The Broker - Orange County Mortgage",
  "serviceType": "Cash-Out Refinance Loans",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA"
  },
  "telephone": "(949) 579-2057",
  "url": "https://mothebroker.com/cash-out-refinance",
  "description": "Expert cash-out refinance services in Orange County, CA",
  "areaServed": "Orange County, CA",
  "additionalType": "https://schema.org/MortgageBroker"
};

const cashOutUses = [
  {
    title: 'Home Improvements',
    icon: Hammer,
    description: 'Increase your home\'s value with renovations',
    benefits: [
      'Tax-deductible interest on improvements',
      'Potentially increase home value more than cost',
      'Lower rates than personal loans',
      'Long-term financing (up to 30 years)'
    ],
    popularProjects: 'Kitchen remodels, bathroom updates, additions, pools'
  },
  {
    title: 'Debt Consolidation',
    icon: CreditCard,
    description: 'Pay off high-interest debts with lower mortgage rates',
    benefits: [
      'Reduce monthly payments significantly',
      'Simplify finances with one payment',
      'Potential tax advantages',
      'Improve credit utilization ratio'
    ],
    popularProjects: 'Credit cards, personal loans, auto loans, student loans'
  },
  {
    title: 'Investment Opportunities',
    icon: TrendingUp,
    description: 'Use equity to build wealth through investments',
    benefits: [
      'Access large amounts of capital',
      'Lower cost than other investment loans',
      'Potential for higher returns than mortgage rate',
      'Diversify your investment portfolio'
    ],
    popularProjects: 'Real estate investments, business opportunities, stocks'
  },
  {
    title: 'Education Expenses',
    icon: GraduationCap,
    description: 'Fund education for yourself or family members',
    benefits: [
      'Lower rates than student loans',
      'Flexible repayment terms',
      'No borrowing limits like federal loans',
      'Invest in your family\'s future'
    ],
    popularProjects: 'College tuition, graduate school, trade programs'
  }
];

const faqs = [
  {
    question: "How much cash can I get from a cash-out refinance in Orange County?",
    answer: "You can typically access up to 80% of your home's current value, minus what you owe on your existing mortgage. With Orange County's median home value around $1.2 million, many homeowners can access $200K-500K+ in cash, depending on their current loan balance and home appreciation."
  },
  {
    question: "What are the requirements for a cash-out refinance?",
    answer: "Generally, you'll need at least 20% equity remaining after the cash-out, a credit score of 620+, stable income, and debt-to-income ratio under 43-50%. Requirements vary by lender, and as a broker, I can find programs that fit your specific situation."
  },
  {
    question: "How do cash-out refinance rates compare to other loans?",
    answer: "Cash-out refinance rates are typically 0.125% to 0.25% higher than standard refinance rates, but significantly lower than personal loans, credit cards, or HELOCs. The rate difference is often worth it for the lower monthly payments and potential tax benefits."
  },
  {
    question: "Is the interest on a cash-out refinance tax-deductible?",
    answer: "Interest is generally tax-deductible if you use the cash for home improvements. For other uses, deductibility may be limited. Consult with a tax professional for your specific situation, but the home improvement deduction can result in significant tax savings."
  },
  {
    question: "How long does a cash-out refinance take in Orange County?",
    answer: "The process typically takes 2-3 weeks from application to closing. This includes appraisal scheduling, underwriting, and title work. I work closely with all parties to ensure a smooth, timely closing, which is especially important in Orange County's fast-moving market."
  }
];

const comparisonPoints = [
  {
    feature: 'Access to Cash',
    cashOut: 'Up to 80% of home value',
    heloc: 'Credit line, variable access',
    personalLoan: 'Fixed smaller amounts'
  },
  {
    feature: 'Interest Rates',
    cashOut: 'Low, fixed rates',
    heloc: 'Variable, often higher',
    personalLoan: 'Much higher rates'
  },
  {
    feature: 'Monthly Payment',
    cashOut: 'Lower, 30-year terms',
    heloc: 'Interest-only option',
    personalLoan: 'Higher, shorter terms'
  },
  {
    feature: 'Tax Benefits',
    cashOut: 'Yes, for improvements*',
    heloc: 'Yes, for improvements*',
    personalLoan: 'No tax benefits'
  }
];

export default function CashOutRefinancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Cash-Out Refinance in <span className="text-blue-600">Orange County, CA</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Turn your Orange County home's equity into cash while refinancing your mortgage. With rising home values 
              throughout the county, you may have more equity available than you realize. Access funds for home improvements, 
              debt consolidation, investments, or any major financial goal.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-green-800 font-semibold text-lg">
                🏠 Orange County homes have appreciated significantly - you may qualify for $100K+ in cash!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057" className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My Cash-Out Amount
                </a>
              </Button>
              <Link href="/contact">
                <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Get My Cash-Out Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* How Cash-Out Refinancing Works */}
          <section className="mb-16 bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              How Cash-Out Refinancing Works in Orange County
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Example Scenario</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Current Situation</h4>
                    <p className="text-slate-600">Home Value: <strong>$1,200,000</strong></p>
                    <p className="text-slate-600">Current Mortgage: <strong>$400,000</strong></p>
                    <p className="text-slate-600">Available Equity: <strong>$800,000</strong></p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Cash-Out Option</h4>
                    <p className="text-slate-600">New Loan Amount: <strong>$800,000</strong></p>
                    <p className="text-slate-600">Pay Off Current: <strong>$400,000</strong></p>
                    <p className="text-green-600 font-bold">Cash to You: <strong>$400,000</strong></p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">After Cash-Out</h4>
                    <p className="text-slate-600">Remaining Equity: <strong>$400,000</strong></p>
                    <p className="text-slate-600">Loan-to-Value: <strong>67%</strong></p>
                    <p className="text-slate-600">No PMI Required</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-slate-600 text-lg">
                  <em>This example shows the potential available with Orange County's appreciated home values.</em>
                </p>
              </div>
            </div>
          </section>

          {/* Benefits of Cash-Out Refinancing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Benefits of Cash-Out Refinancing in Orange County
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Access Large Amounts</h3>
                <p className="text-slate-600">
                  With Orange County's high home values, access $100K-500K+ in cash - 
                  much more than credit cards or personal loans allow.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Lower Interest Rates</h3>
                <p className="text-slate-600">
                  Mortgage rates are significantly lower than credit cards, personal loans, 
                  or other forms of borrowing.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Tax Benefits</h3>
                <p className="text-slate-600">
                  Interest may be tax-deductible when used for home improvements, 
                  providing additional savings.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Lower Monthly Payments</h3>
                <p className="text-slate-600">
                  Spread payments over 30 years for much lower monthly obligations 
                  compared to other loan types.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Debt Consolidation</h3>
                <p className="text-slate-600">
                  Pay off high-interest debts and simplify your finances with 
                  one low-rate mortgage payment.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fixed Rate Option</h3>
                <p className="text-slate-600">
                  Lock in today's rates with a fixed-rate mortgage, providing 
                  payment predictability for decades.
                </p>
              </div>
            </div>
          </section>

          {/* Popular Uses for Cash-Out Refinancing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Popular Uses for Cash-Out Refinancing in Orange County
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cashOutUses.map((use, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
                  <div className="flex items-center mb-6">
                    <use.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{use.title}</h3>
                      <p className="text-slate-600">{use.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {use.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-700">
                      <strong>Popular for:</strong> {use.popularProjects}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cash-Out Refinance vs Other Options */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Cash-Out Refinance vs Other Financing Options
            </h2>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-bold text-slate-900">Feature</th>
                    <th className="px-6 py-4 text-center font-bold text-blue-600">Cash-Out Refinance</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">HELOC</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">Personal Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="px-6 py-4 font-medium text-slate-900">{point.feature}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-medium">{point.cashOut}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{point.heloc}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{point.personalLoan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-center text-slate-600 mt-6">
              *Tax benefits depend on how funds are used. Consult with a tax professional.
            </p>
          </section>

          {/* Who Qualifies */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Who Qualifies for Cash-Out Refinancing in Orange County?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">✓ Typical Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Credit Score:</strong> 620+ (higher for best rates)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Equity:</strong> Keep at least 20% after cash-out</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Income:</strong> Stable, verifiable income</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>DTI Ratio:</strong> Total debts under 43-50% of income</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Occupancy:</strong> Primary residence preferred</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">💡 Ideal Candidates</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Building className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Homeowners with significant equity gains</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Those with high-interest debts to consolidate</span>
                    </li>
                    <li className="flex items-start">
                      <Hammer className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Planning major home improvements</span>
                    </li>
                    <li className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Need funding for education or investments</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Want access to large amounts of low-cost capital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16 bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              How the Cash-Out Refinance Process Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Consultation & Analysis</h3>
                <p className="text-slate-600">
                  We'll review your goals, current mortgage, and home value to determine 
                  your cash-out potential.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Application & Documentation</h3>
                <p className="text-slate-600">
                  Complete the application and gather required documents. I'll guide 
                  you through each step.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Appraisal & Underwriting</h3>
                <p className="text-slate-600">
                  Professional appraisal confirms your home's current value. Underwriter 
                  reviews and approves your loan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Closing & Cash-Out</h3>
                <p className="text-slate-600">
                  At closing, you'll sign documents and receive your cash. The process
                  typically takes 2-3 weeks total.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Orange County Cash-Out Refinance FAQs
            </h2>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Work With Mo The Broker */}
          <section className="mb-16 bg-blue-600 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Work With Mo The Broker for Your Cash-Out Refinance?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Orange County Expertise</h3>
                <p className="text-blue-100">
                  Deep knowledge of local market values and trends. I understand Orange County's 
                  unique neighborhoods and property values.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">200+ Lender Network</h3>
                <p className="text-blue-100">
                  Access to wholesale rates and multiple program options. I shop the market 
                  to find your best cash-out refinance terms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
                <p className="text-blue-100">
                  Direct access to me throughout the process. No call centers or 
                  account transfers - just personalized service from start to finish.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Explore Related Orange County Mortgage Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/loan-programs/heloc" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">HELOC vs Cash-Out</span>
              </Link>
              <Link href="/refinance-loans" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Rate-Term Refinance</span>
              </Link>
              <Link href="/purchase-loans" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Purchase Loans</span>
              </Link>
              <Link href="/areas/newport-beach" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Newport Beach Loans</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-green-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Access Your Home's Equity?</h2>
            <p className="text-xl mb-6 text-green-100">
              Discover how much cash you can access with a cash-out refinance in Orange County's current market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057">
                  Call (949) 579-2057
                </a>
              </Button>
              <Link href="/contact">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                  Get My Cash-Out Quote
                </Button>
              </Link>
            </div>
            <p className="text-sm text-green-200 mt-4">
              Mo Abdel - NMLS #1426884 | Licensed Orange County Mortgage Broker
            </p>
          </section>
        </div>
      </div>
    </>
  );
}