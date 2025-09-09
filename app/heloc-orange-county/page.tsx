import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { TrendingUp, DollarSign, Home, Zap, Users, CheckCircle, Calculator, CreditCard, Clock, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HELOC Loans in Orange County, CA | Flexible Home Equity Access',
  description: 'Access your home\'s equity with a Home Equity Line of Credit in Orange County. Flexible withdrawals, competitive rates, expert guidance.',
  keywords: 'HELOC orange county, home equity line of credit, flexible home equity access, draw period, variable rates orange county, credit line',
  openGraph: {
    title: 'HELOC Loans in Orange County, CA | Flexible Home Equity Access',
    description: 'Access your home\'s equity with a Home Equity Line of Credit in Orange County. Flexible withdrawals, competitive rates, expert guidance.',
    url: 'https://mothebroker.com/heloc-orange-county',
  }
};

// JSON-LD Schema for LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo The Broker - Orange County Mortgage",
  "serviceType": "HELOC Home Equity Line of Credit",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA"
  },
  "telephone": "(949) 579-2057",
  "url": "https://mothebroker.com/heloc-orange-county",
  "description": "Expert HELOC services in Orange County, CA",
  "areaServed": "Orange County, CA",
  "additionalType": "https://schema.org/MortgageBroker"
};

const helocBenefits = [
  {
    title: 'Flexible Access',
    icon: Zap,
    description: 'Draw funds as needed, pay interest only on what you use',
    details: [
      'Access funds anytime during draw period',
      'Only pay interest on outstanding balance',
      'Revolving credit line like a credit card',
      'Perfect for ongoing projects or expenses'
    ]
  },
  {
    title: 'Competitive Rates',
    icon: TrendingUp,
    description: 'Variable rates typically lower than credit cards',
    details: [
      'Rates tied to prime rate',
      'Much lower than personal loans',
      'Potential tax benefits for improvements',
      'Rate caps available for protection'
    ]
  },
  {
    title: 'Large Credit Limits',
    icon: DollarSign,
    description: 'Access up to 80-90% of your home\'s value',
    details: [
      'Credit lines from $50K to $500K+',
      'Based on home value and equity',
      'Higher limits than other loan types',
      'Orange County\'s high values = more access'
    ]
  },
  {
    title: 'Interest-Only Payments',
    icon: Calculator,
    description: 'Lower payments during the draw period',
    details: [
      'Interest-only payments for 10 years',
      'Keep monthly costs manageable',
      'Optional principal payments anytime',
      'Full amortization begins after draw period'
    ]
  }
];

const faqs = [
  {
    question: "How does a HELOC work in Orange County?",
    answer: "A HELOC is a revolving credit line secured by your home's equity. You can draw funds as needed during the 10-year draw period, paying only interest on what you use. After the draw period, you enter a 20-year repayment phase with principal and interest payments. With Orange County's high home values, many homeowners can access substantial credit lines."
  },
  {
    question: "What are current HELOC rates in Orange County?",
    answer: "HELOC rates are variable and typically tied to the prime rate. As of 2025, rates generally range from 7-9%, but your actual rate depends on credit score, loan-to-value ratio, and lender. As a broker with access to multiple lenders, I can shop rates to find your best option."
  },
  {
    question: "How much can I borrow with a HELOC in Orange County?",
    answer: "Most lenders allow you to borrow up to 80-90% of your home's value, minus what you owe on your first mortgage. With Orange County's median home value around $1.2 million, many homeowners can access $200K-500K+ in available credit, depending on their current mortgage balance."
  },
  {
    question: "HELOC vs Cash-Out Refinance - which is better?",
    answer: "HELOCs offer more flexibility since you only pay interest on what you use and can access funds repeatedly. Cash-out refinancing gives you a lump sum at a fixed rate. HELOCs are better for ongoing expenses or uncertain amounts, while cash-out refinancing works better for one-time large expenses with predictable costs."
  },
  {
    question: "What are the requirements for a HELOC in Orange County?",
    answer: "Typically you'll need at least 15-20% equity, credit score of 680+, stable income, and debt-to-income ratio under 43%. Property type and occupancy also matter. Orange County's strong property values often help homeowners meet equity requirements easily."
  }
];

const comparisonData = [
  {
    feature: 'Access to Funds',
    heloc: 'Draw as needed during 10-year period',
    cashOut: 'Lump sum at closing',
    heloan: 'Lump sum at closing'
  },
  {
    feature: 'Interest Rate',
    heloc: 'Variable rate (tied to prime)',
    cashOut: 'Fixed rate',
    heloan: 'Fixed rate'
  },
  {
    feature: 'Payment Structure',
    heloc: 'Interest-only during draw period',
    cashOut: 'Principal + interest from start',
    heloan: 'Principal + interest from start'
  },
  {
    feature: 'Best For',
    heloc: 'Ongoing expenses, flexible needs',
    cashOut: 'One-time large expenses',
    heloan: 'Fixed amount, predictable costs'
  }
];

export default function HELOCOrangeCountyPage() {
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
              Home Equity Line of Credit (HELOC) in <span className="text-blue-600">Orange County, CA</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              A HELOC provides flexible access to your Orange County home's equity with a revolving credit line. 
              Draw funds as needed for home improvements, education, debt consolidation, or other major expenses. 
              With Orange County's strong property values, many homeowners have substantial equity available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://axenmortgageheloc.com/account/heloc/register?referrer=0501bc94-1ee9-4764-9d93-e81183e82331"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  5-Min Pre-Approval
                </Button>
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057">Call (949) 579-2057</a>
              </Button>
            </div>
          </div>

          {/* How a HELOC Works */}
          <section className="mb-16 bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              How a HELOC Works in Orange County
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">HELOC Example</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Your Orange County Home</h4>
                    <p className="text-slate-600">Current Value: <strong>$1,200,000</strong></p>
                    <p className="text-slate-600">Mortgage Balance: <strong>$300,000</strong></p>
                    <p className="text-slate-600">Available Equity: <strong>$900,000</strong></p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">HELOC Credit Line</h4>
                    <p className="text-slate-600">80% of Home Value: <strong>$960,000</strong></p>
                    <p className="text-slate-600">Minus Mortgage: <strong>$300,000</strong></p>
                    <p className="text-blue-600 font-bold">Available HELOC: <strong>$660,000</strong></p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Flexible Access</h4>
                    <p className="text-slate-600">Draw Period: <strong>10 years</strong></p>
                    <p className="text-slate-600">Repayment: <strong>20 years</strong></p>
                    <p className="text-green-600 font-bold">Use as Needed</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-slate-600 text-lg">
                  <em>This example demonstrates the substantial HELOC potential available to Orange County homeowners.</em>
                </p>
              </div>
            </div>
          </section>

          {/* Benefits of a HELOC */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Benefits of a HELOC in Orange County
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {helocBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
                  <div className="flex items-center mb-6">
                    <benefit.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* HELOC vs Cash-Out Refinance vs HELOAN */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              HELOC vs Cash-Out Refinance vs Home Equity Loan
            </h2>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-bold text-slate-900">Feature</th>
                    <th className="px-6 py-4 text-center font-bold text-blue-600">HELOC</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">Cash-Out Refinance</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">HELOAN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-medium">{row.heloc}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.cashOut}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.heloan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-600 mb-4">
                Not sure which option is best for you? I can help you compare all three based on your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cash-out-refinance">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                    Learn About Cash-Out Refinance
                  </Button>
                </Link>
                <Link href="/heloan-orange-county">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                    Compare HELOAN Options
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Fast HELOC Option */}
          <section className="mb-16">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
                  <Zap className="w-6 h-6 mr-2" />
                  NEW: 5-Minute HELOC Pre-Approval
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Your Orange County HELOC Pre-Approved in Just 5 Minutes</h2>
                <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                  Revolutionary fast-track HELOC program with instant pre-approval decisions and funds available in 5-7 business days.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">5-Minute Application</h3>
                  <p className="text-slate-700">Quick online application with instant decision technology</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Streamlined Process</h3>
                  <p className="text-slate-700">Simplified documentation and faster underwriting</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Funding</h3>
                  <p className="text-slate-700">Access your funds in 5-7 business days after approval</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://axenmortgageheloc.com/account/heloc/register?referrer=0501bc94-1ee9-4764-9d93-e81183e82331"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Start 5-Min Pre-Approval
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Who Qualifies */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Who Qualifies for a HELOC in Orange County?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">✓ Typical Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Credit Score:</strong> 680+ for best rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Equity:</strong> At least 15-20% in your home</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Income:</strong> Stable, verifiable income</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>DTI Ratio:</strong> Total debts under 43% of income</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Property Type:</strong> Primary residence preferred</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">💡 Ideal for Orange County Homeowners</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Home className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Planning home renovations or improvements</span>
                    </li>
                    <li className="flex items-start">
                      <Building className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Need flexible access to funds over time</span>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Want to consolidate high-interest debts</span>
                    </li>
                    <li className="flex items-start">
                      <Calculator className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Prefer interest-only payments initially</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Have benefited from Orange County appreciation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              FAQs About HELOCs in Orange County
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

          {/* Internal Links Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Explore Related Orange County Mortgage Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/cash-out-refinance" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Cash-Out Refinance</span>
              </Link>
              <Link href="/heloan-orange-county" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">HELOAN Options</span>
              </Link>
              <Link href="/refinance-loans" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Refinance Loans</span>
              </Link>
              <Link href="/areas/irvine" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Irvine HELOCs</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Access Your Home's Equity?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Discover how much you can access with a HELOC and get started with our 5-minute pre-approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://axenmortgageheloc.com/account/heloc/register?referrer=0501bc94-1ee9-4764-9d93-e81183e82331"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  Start 5-Min HELOC Application
                </Button>
              </a>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057">Call (949) 579-2057</a>
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Mo Abdel - NMLS #1426884 | Licensed Orange County Mortgage Broker
            </p>
          </section>
        </div>
      </div>
    </>
  );
}