import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Home, Calculator, TrendingUp, Shield, DollarSign, Clock, CreditCard, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Equity Loans in Orange County, CA | Fixed-Rate Equity Access',
  description: 'Get a lump sum from your home\'s equity with a fixed-rate Home Equity Loan in Orange County. Transparent terms, quick approvals.',
  keywords: 'home equity loan orange county, HELOAN, fixed rate equity loan, home equity lump sum, second mortgage orange county',
  openGraph: {
    title: 'Home Equity Loans in Orange County, CA | Fixed-Rate Equity Access',
    description: 'Get a lump sum from your home\'s equity with a fixed-rate Home Equity Loan in Orange County. Transparent terms, quick approvals.',
    url: 'https://www.mothebroker.com/heloan-orange-county',
  }
};

// JSON-LD Schema for LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo The Broker - Orange County Mortgage",
  "serviceType": "Home Equity Loan HELOAN",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA"
  },
  "telephone": "(949) 579-2057",
  "url": "https://www.mothebroker.com/heloan-orange-county",
  "description": "Expert Home Equity Loan services in Orange County, CA",
  "areaServed": "Orange County, CA",
  "additionalType": "https://schema.org/MortgageBroker"
};

const heloanBenefits = [
  {
    title: 'Fixed Interest Rate',
    icon: Calculator,
    description: 'Predictable payments that never change',
    details: [
      'Lock in today\'s rates for the loan term',
      'No payment surprises or rate adjustments',
      'Budget with confidence for years to come',
      'Protection from rising interest rate environment'
    ]
  },
  {
    title: 'Lump Sum at Closing',
    icon: DollarSign,
    description: 'Get all your cash upfront',
    details: [
      'Receive full amount at closing',
      'Perfect for one-time large expenses',
      'Immediate access to substantial funds',
      'No waiting or multiple draws needed'
    ]
  },
  {
    title: 'Lower Rates Than Alternatives',
    icon: TrendingUp,
    description: 'Competitive rates secured by your home',
    details: [
      'Much lower than credit card rates',
      'Better terms than personal loans',
      'Secured by home equity for better rates',
      'Competitive with Orange County market rates'
    ]
  },
  {
    title: 'Predictable Payment Structure',
    icon: Clock,
    description: 'Fixed monthly payments from day one',
    details: [
      'Principal and interest payments start immediately',
      'Same payment amount every month',
      'Clear payoff timeline (typically 5-30 years)',
      'No interest-only period surprises'
    ]
  }
];

const faqs = [
  {
    question: "What is a HELOAN and how does it work in Orange County?",
    answer: "A Home Equity Loan (HELOAN) is a fixed-rate second mortgage that provides a lump sum of cash at closing. You make fixed monthly payments of principal and interest over the loan term. With Orange County's high home values, many homeowners can access substantial amounts, typically up to 80-90% of their home's value minus existing mortgage balances."
  },
  {
    question: "What are the 2025 loan limits for HELOANs in Orange County?",
    answer: "Fixed-rate home equity loans are typically structured within the conforming cap of $1,209,750, with FHA-backed options capped at $1,089,300. However, many HELOAN programs can go higher depending on your home's value and lender guidelines. Orange County's high property values often allow for substantial borrowing capacity."
  },
  {
    question: "HELOAN vs HELOC - which is better for Orange County homeowners?",
    answer: "HELOANs provide fixed rates and predictable payments, ideal for one-time expenses like major renovations or debt consolidation. HELOCs offer flexible access with variable rates, better for ongoing expenses. In Orange County's volatile rate environment, many homeowners prefer the predictability of a fixed-rate HELOAN."
  },
  {
    question: "What are current HELOAN rates in Orange County?",
    answer: "HELOAN rates are typically fixed and slightly higher than first mortgage rates but much lower than credit cards or personal loans. Rates depend on credit score, loan-to-value ratio, and loan amount. As a broker with access to multiple lenders, I can shop rates to find your best option in Orange County's competitive market."
  },
  {
    question: "How much can I borrow with a HELOAN in Orange County?",
    answer: "Most lenders allow you to borrow up to 80-90% of your home's value, minus what you owe on your first mortgage. With Orange County's median home value around $1.2 million, many homeowners can access $200K-500K+ through a HELOAN, depending on their current mortgage balance and lender requirements."
  }
];

const comparisonData = [
  {
    feature: 'Interest Rate Type',
    heloan: 'Fixed rate for entire term',
    heloc: 'Variable rate (tied to prime)',
    cashOut: 'Fixed rate for entire term'
  },
  {
    feature: 'Access to Funds',
    heloan: 'Lump sum at closing',
    heloc: 'Draw as needed during 10-year period',
    cashOut: 'Lump sum at closing'
  },
  {
    feature: 'Payment Structure',
    heloan: 'Fixed P&I from start',
    heloc: 'Interest-only during draw period',
    cashOut: 'Fixed P&I from start'
  },
  {
    feature: 'Rate Predictability',
    heloan: 'Completely predictable',
    heloc: 'Can fluctuate with market',
    cashOut: 'Completely predictable'
  },
  {
    feature: 'Best For',
    heloan: 'Fixed amount, one-time use',
    heloc: 'Ongoing expenses, flexible needs',
    cashOut: 'Large amounts, lower first mortgage rate'
  }
];

const commonUses = [
  {
    category: 'Home Improvements',
    icon: Home,
    examples: [
      'Kitchen and bathroom remodels',
      'Home additions and expansions', 
      'Pool installation and landscaping',
      'Solar panel installations'
    ],
    benefit: 'May increase home value and qualify for tax deductions'
  },
  {
    category: 'Debt Consolidation',
    icon: CreditCard,
    examples: [
      'Pay off high-interest credit cards',
      'Consolidate multiple loans into one payment',
      'Eliminate personal loan debt',
      'Simplify monthly budget management'
    ],
    benefit: 'Lower interest rates and single monthly payment'
  },
  {
    category: 'Major Life Expenses',
    icon: PiggyBank,
    examples: [
      'College tuition and education costs',
      'Wedding or major family events',
      'Medical expenses not covered by insurance',
      'Business investment opportunities'
    ],
    benefit: 'Fixed monthly payments help with budgeting'
  },
  {
    category: 'Investment Opportunities',
    icon: TrendingUp,
    examples: [
      'Real estate investment down payments',
      'Stock market or retirement investments',
      'Starting or expanding a business',
      'Purchasing rental properties'
    ],
    benefit: 'Potential returns may exceed loan interest costs'
  }
];

export default function HELOANOrangeCountyPage() {
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
              Home Equity Loans in <span className="text-blue-600">Orange County, CA</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              A Home Equity Loan (HELOAN) provides a fixed-rate lump sum secured by your Orange County home's equity. 
              Get predictable monthly payments and immediate access to substantial funds for major expenses, home improvements, 
              or debt consolidation. With fixed rates and transparent terms, it's the stable alternative to variable HELOCs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057" className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get HELOAN Rates & Terms
                </a>
              </Button>
              <Link href="/contact">
                <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Free Equity Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* 2025 Loan Limits for Home Equity */}
          <section className="mb-16 bg-green-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              2025 Loan Limits for Home Equity in Orange County
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-700 mb-6 text-center">
                Fixed-rate home equity loans are typically structured within the conforming cap of <strong>$1,209,750</strong>, 
                with FHA-backed options capped at <strong>$1,089,300</strong>. With Orange County's high property values, 
                many homeowners can access substantial borrowing capacity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">$1,209,750</h3>
                  <p className="text-slate-700">2025 Conforming Loan Limit</p>
                  <p className="text-sm text-slate-600 mt-2">Maximum for conventional programs</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">$1,089,300</h3>
                  <p className="text-slate-700">2025 FHA Loan Limit</p>
                  <p className="text-sm text-slate-600 mt-2">FHA-backed equity options</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">Up to 90%</h3>
                  <p className="text-slate-700">Combined Loan-to-Value</p>
                  <p className="text-sm text-slate-600 mt-2">Total borrowing capacity</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of a Home Equity Loan */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Benefits of a Home Equity Loan in Orange County
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {heloanBenefits.map((benefit, index) => (
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

          {/* HELOAN vs HELOC vs Cash-Out Refinance */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              HELOAN vs HELOC vs Cash-Out Refinance
            </h2>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-bold text-slate-900">Feature</th>
                    <th className="px-6 py-4 text-center font-bold text-blue-600">Home Equity Loan</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">HELOC</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">Cash-Out Refinance</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-medium">{row.heloan}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.heloc}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.cashOut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-600 mb-4">
                Need help deciding which option is best for your situation? I can analyze your specific needs and Orange County property value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/heloc-orange-county">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                    Compare HELOC Options
                  </Button>
                </Link>
                <Link href="/cash-out-refinance">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                    Explore Cash-Out Refinance
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Common Uses for HELOANs */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Common Uses for Home Equity Loans in Orange County
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {commonUses.map((use, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
                  <div className="flex items-center mb-6">
                    <use.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900">{use.category}</h3>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {use.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-700 font-medium">
                      <strong>Benefit:</strong> {use.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who Qualifies */}
          <section className="mb-16 bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Who Qualifies for a Home Equity Loan in Orange County?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">✓ Qualification Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Credit Score:</strong> 680+ for best rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Equity:</strong> At least 15-20% remaining after loan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Income:</strong> Stable, documented income</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>DTI Ratio:</strong> Total debts under 43-50% of income</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span><strong>Property:</strong> Primary residence preferred</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">💡 Ideal Candidates</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Home className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Planning specific one-time expenses</span>
                    </li>
                    <li className="flex items-start">
                      <Calculator className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Prefer predictable fixed payments</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Want rate protection from market changes</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Need substantial lump sum amount</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span>Orange County homeowners with appreciated equity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              FAQs About Home Equity Loans in Orange County
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
              <Link href="/heloc-orange-county" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">HELOC Options</span>
              </Link>
              <Link href="/cash-out-refinance" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Cash-Out Refinance</span>
              </Link>
              <Link href="/refinance-loans" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Refinance Loans</span>
              </Link>
              <Link href="/areas/newport-beach" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Newport Beach Loans</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-green-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready for Fixed-Rate Home Equity Access?</h2>
            <p className="text-xl mb-6 text-green-100">
              Get your free equity consultation and discover your HELOAN options in Orange County's market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057">
                  Call (949) 579-2057
                </a>
              </Button>
              <Link href="/contact">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                  Free Equity Loan Consultation
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
