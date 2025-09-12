import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { TrendingDown, DollarSign, Home, Clock, Calculator, CheckCircle, Zap, CreditCard, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refinance Loans in Orange County, CA | Lower Your Rate',
  description: 'Lower your monthly payments or shorten your term with a refinance. Get expert advice and wholesale rates in Orange County.',
  openGraph: {
    title: 'Refinance Loans in Orange County, CA | Lower Your Rate',
    description: 'Lower your monthly payments or shorten your term with a refinance. Get expert advice and wholesale rates in Orange County.',
    url: 'https://mothebroker.com/refinance-loans',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/refinance-loans',
  },
};

// JSON-LD Schema for LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo The Broker - Orange County Mortgage",
  "serviceType": "Mortgage Refinance Loans",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA"
  },
  "telephone": "(949) 579-2057",
  "url": "https://mothebroker.com/refinance-loans",
  "description": "Expert mortgage refinancing services in Orange County, CA",
  "areaServed": "Orange County, CA",
  "additionalType": "https://schema.org/MortgageBroker"
};

const refinanceOptions = [
  {
    title: 'Rate-and-Term Refinance',
    icon: TrendingDown,
    description: 'Lower your interest rate or change your loan term',
    benefits: [
      'Reduce monthly payments with lower rates',
      'Switch from ARM to fixed-rate for stability',
      'Eliminate PMI when you reach 20% equity',
      'Shorten loan term to save on total interest'
    ],
    bestFor: 'Homeowners with rates above current market rates',
    averageSavings: '$200-500/month',
    link: '/rate-term-refinance-orange-county'
  },
  {
    title: 'Cash-Out Refinance',
    icon: DollarSign,
    description: 'Access your home\'s equity while refinancing',
    benefits: [
      'Access up to 80% of your home\'s value in cash',
      'Consolidate high-interest debt',
      'Fund home improvements or investments',
      'Tax-deductible interest on home improvements'
    ],
    bestFor: 'Homeowners with significant equity',
    averageSavings: '$50K-500K+ cash out',
    link: '/cash-out-refinance'
  },
  {
    title: 'FHA Streamline Refinance',
    icon: Zap,
    description: 'Quick refinance for existing FHA borrowers',
    benefits: [
      'No appraisal required in most cases',
      'Minimal documentation needed',
      'Lower monthly payments guaranteed',
      'Faster processing (15-30 days typical)'
    ],
    bestFor: 'Current FHA loan holders',
    averageSavings: 'Up to $300/month',
    link: '/fha-loans-orange-county'
  },
  {
    title: 'VA Interest Rate Reduction Refinance Loan (IRRRL)',
    icon: Home,
    description: 'Streamlined refinance for VA loan holders',
    benefits: [
      'No appraisal typically required',
      'No income verification needed',
      'Lower interest rates and payments',
      'Can refinance up to 100% of home value'
    ],
    bestFor: 'Veterans with existing VA loans',
    averageSavings: '$150-400/month',
    link: '/va-loans-orange-county'
  }
];

const faqs = [
  {
    question: "When does refinancing make sense in Orange County?",
    answer: "Generally, refinancing makes sense when you can reduce your interest rate by 0.5-1% or more, eliminate PMI, switch from an ARM to fixed-rate, or access equity through cash-out refinancing. With Orange County's high home values, even small rate reductions can result in significant monthly savings."
  },
  {
    question: "How much equity do I need to refinance my Orange County home?",
    answer: "For a rate-and-term refinance, you typically need at least 20% equity to avoid PMI on the new loan. For cash-out refinancing, you can generally access up to 80% of your home's value, meaning you'd need at least 20% remaining equity after the cash-out."
  },
  {
    question: "What are current refinance rates in Orange County?",
    answer: "Rates change daily and vary based on your credit score, loan amount, and property type. As a broker with access to 200+ lenders, I can shop multiple rate options to find your best deal. Call for today's rates specific to your situation."
  },
  {
    question: "How long does the refinance process take?",
    answer: "Standard refinances typically take 30-45 days. Streamline refinances (FHA/VA) can close in 15-30 days. The timeline depends on appraisal scheduling, documentation completion, and lender processing times."
  },
  {
    question: "What costs are involved in refinancing?",
    answer: "Refinancing costs typically include appraisal ($500-700), title insurance, loan origination fees, and other closing costs. Total costs usually range from 1-2% of the loan amount. I'll provide a detailed cost breakdown and help you determine if the long-term savings justify the upfront costs."
  }
];

const marketInsights = [
  {
    stat: "6.8%",
    description: "Average Rate on Existing Mortgages"
  },
  {
    stat: "6.2%",
    description: "Current 30-Year Fixed Rates"
  },
  {
    stat: "$1.2M",
    description: "Orange County Median Home Value"
  }
];

export default function RefinanceLoansPage() {
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
              Mortgage Refinance in <span className="text-blue-600">Orange County, CA</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Whether you want to lower your monthly payments, shorten your loan term, or access your home's equity, 
              refinancing can help you achieve your financial goals. With Orange County's rising home values, 
              now may be the perfect time to optimize your mortgage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057" className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Check My Refinance Options
                </a>
              </Button>
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057">
                  Free Rate Review
                </a>
              </Button>
            </div>
          </div>

          {/* Market Insights */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Orange County Refinance Market Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{insight.stat}</h3>
                  <p className="text-slate-700">{insight.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 mt-6 text-sm">
              <em>*Rates as of January 2025. Many Orange County homeowners may benefit from refinancing.</em>
            </p>
          </section>

          {/* Types of Refinancing Options */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Types of Refinancing Options in Orange County
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Different refinancing strategies serve different financial goals. Let's find the right option for your situation.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {refinanceOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <option.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{option.title}</h3>
                      <p className="text-slate-600">{option.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-semibold text-center">
                      Potential Savings: {option.averageSavings}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-slate-700">
                      <strong>Best For:</strong> {option.bestFor}
                    </p>
                  </div>
                  
                  <Link href={option.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits of Refinancing */}
          <section className="mb-16 bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Benefits of Refinancing Your Orange County Home
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Lower Monthly Payments</h3>
                <p className="text-slate-600">
                  Reduce your monthly mortgage payment by securing a lower interest rate, 
                  freeing up cash for other financial goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Shorten Loan Term</h3>
                <p className="text-slate-600">
                  Switch to a 15-year mortgage to pay off your home faster and save 
                  tens of thousands in interest over the life of the loan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Access Home Equity</h3>
                <p className="text-slate-600">
                  With Orange County's rising home values, cash-out refinancing can 
                  provide significant funds for improvements, investments, or debt consolidation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Eliminate PMI</h3>
                <p className="text-slate-600">
                  If your home has appreciated or you've paid down your balance, 
                  you may be able to eliminate private mortgage insurance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Debt Consolidation</h3>
                <p className="text-slate-600">
                  Use cash-out refinancing to pay off high-interest credit cards, 
                  personal loans, or other debts at much lower mortgage rates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Rate Stability</h3>
                <p className="text-slate-600">
                  Switch from an adjustable-rate mortgage to a fixed-rate loan 
                  for predictable payments and protection from rising rates.
                </p>
              </div>
            </div>
          </section>

          {/* When Does Refinancing Make Sense */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              When Does Refinancing Make Sense in Orange County?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">✓ Good Times to Refinance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span>Interest rates have dropped 0.5% or more</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span>Your credit score has improved significantly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span>You want to eliminate PMI payments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span>You have significant equity to access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span>You want to switch from ARM to fixed-rate</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">⚠ Consider Carefully</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5">⚠</span>
                      <span>You plan to move within 2-3 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5">⚠</span>
                      <span>Your credit score has declined</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5">⚠</span>
                      <span>You're close to paying off your current loan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5">⚠</span>
                      <span>Closing costs exceed potential savings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-0.5">⚠</span>
                      <span>Your home value has declined significantly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              FAQs for Refinancing in Orange County
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
              <Link href="/loan-programs/heloc" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">HELOC Options</span>
              </Link>
              <Link href="/purchase-loans" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Purchase Loans</span>
              </Link>
              <Link href="/areas/irvine" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Irvine Refinancing</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Refinance Options?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Get your free rate review and discover how much you could save with a refinance in Orange County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057">
                  Call (949) 579-2057
                </a>
              </Button>
              <Link href="/contact">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  Request Free Rate Review
                </Button>
              </Link>
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