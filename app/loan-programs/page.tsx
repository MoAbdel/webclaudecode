import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { seoData } from '@/lib/seo';
import { Home, Shield, Users, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: seoData.Programs.title,
  description: seoData.Programs.description,
};

const loanPrograms = [
  {
    title: 'FHA Loans',
    icon: Home,
    description: 'Perfect for first-time buyers with as little as 3.5% down',
    features: [
      'Down payment as low as 3.5%',
      'Flexible credit requirements',
      'Gift funds allowed for down payment',
      'Competitive interest rates'
    ],
    bestFor: 'First-time homebuyers, buyers with limited down payment'
  },
  {
    title: 'VA Loans',
    icon: Shield,
    description: 'Exclusive benefits for military veterans and service members',
    features: [
      'No down payment required',
      'No private mortgage insurance',
      'Competitive interest rates',
      'Flexible underwriting'
    ],
    bestFor: 'Military veterans, active service members, eligible spouses'
  },
  {
    title: 'Conventional Loans',
    icon: Users,
    description: 'Traditional financing with flexible terms and options',
    features: [
      'Down payments from 3% to 20%',
      'Excellent rate options',
      'Various term lengths available',
      'PMI removal options'
    ],
    bestFor: 'Buyers with good credit and stable income'
  },
  {
    title: 'Jumbo Loans',
    icon: TrendingUp,
    description: 'Financing for high-value properties in Orange County',
    features: [
      'Loan amounts above conforming limits',
      'Competitive jumbo rates',
      'Flexible down payment options',
      'Various ARM and fixed-rate options'
    ],
    bestFor: 'Luxury home purchases, high-value Orange County properties'
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mortgage <span className="text-blue-600">Loan Programs</span> – FHA, VA, Jumbo & More
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            As a licensed broker with NEXA Mortgage - the nation's largest wholesale brokerage - 
            I have access to over 200 lenders offering competitive rates and flexible programs 
            for every Orange County homeowner and buyer.
          </p>
        </div>

        {/* HELOC/HELOAN - Top Priority */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-blue-600">HELOC & Cash-Out Refinance Options</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlock your Orange County home's equity with flexible credit lines and loans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* HELOC */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-300 relative">
              <div className="absolute -top-4 left-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  #1 MOST POPULAR
                </span>
              </div>
              
              <div className="flex items-center mb-6 mt-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">HELOC (Home Equity Line of Credit)</h3>
                  <p className="text-slate-700">Flexible credit line up to $2M+</p>
                </div>
              </div>

              <div className="bg-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-900 font-bold text-center text-lg">
                  Access $50K - $2M+ • Prime + 0% intro rates available
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Draw as needed</strong> - only pay interest on what you use</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Interest-only payments</strong> for first 10 years</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Tax-deductible interest</strong> on home improvements*</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>No closing costs</strong> on most programs</span>
                </div>
              </div>
              
              <Link href="/programs/heloc">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                  Get HELOC Details & Rates
                </Button>
              </Link>
            </div>

            {/* HELOAN */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-300 relative">
              <div className="absolute -top-4 left-6">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  FIXED PAYMENT
                </span>
              </div>
              
              <div className="flex items-center mb-6 mt-4">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">HELOAN (Home Equity Loan)</h3>
                  <p className="text-slate-700">Fixed rate lump sum loan</p>
                </div>
              </div>

              <div className="bg-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-900 font-bold text-center text-lg">
                  Lump sum up to $500K • Fixed rates from 7.25%*
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Fixed interest rate</strong> - payment never changes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Lump sum at closing</strong> - get all cash upfront</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Predictable payments</strong> - budget with confidence</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Lower rates</strong> than personal loans or credit cards</span>
                </div>
              </div>
              
              <Link href="/programs/heloan">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
                  Get HELOAN Rates & Terms
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Refinancing Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Refinancing Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Already have a mortgage? Optimize it with our specialized refinancing programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cash-Out Refinancing */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-orange-200 relative">
              <div className="absolute -top-4 left-6">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                  🔥 MOST POPULAR
                </span>
              </div>
              
              <div className="flex items-center mb-6 mt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Cash-Out Refinancing</h3>
                  <p className="text-slate-600">Unlock your home's equity for major financial goals</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 mb-6">
                <p className="text-orange-800 font-semibold text-center">
                  Unlock $50K - $500K+ from your home
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Access up to 80% of your home's value in cash</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Rates often lower than personal loans or credit cards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Tax-deductible interest on home improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Consolidate high-interest debt into one low payment</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Best For:</h4>
                <p className="text-slate-600">Home improvements, debt consolidation, investment opportunities, education expenses, major purchases</p>
              </div>
            </div>

            {/* Rate & Term Refinancing */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-4 left-6">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                  💰 MONEY SAVER
                </span>
              </div>
              
              <div className="flex items-center mb-6 mt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📉</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Rate & Term Refinancing</h3>
                  <p className="text-slate-600">Lower your payments or pay off your mortgage faster</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-semibold text-center">
                  Save $200-500/month on payments
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Reduce monthly payments with today's rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Eliminate PMI when you reach 20% equity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Switch from ARM to fixed-rate for stability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">Shorten loan term to save thousands in interest</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Best For:</h4>
                <p className="text-slate-600">Homeowners with rates above 6%, those paying PMI, ARM loan holders wanting stability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Loan Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Purchase & Other Loan Programs
            </h2>
          </div>
        </div>

        {/* Loan Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {loanPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <div className="flex items-center mb-6">
                <program.icon className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{program.title}</h2>
                  <p className="text-slate-600">{program.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Best For:</h3>
                <p className="text-slate-600">{program.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-QM & Specialty Programs */}
        <div className="bg-slate-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            Non-QM & Specialty Programs
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Alternative financing solutions for unique situations and non-traditional borrowers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Bank Statement Loans</h3>
              <p className="text-sm text-slate-600 mb-3">Perfect for self-employed borrowers who can't document traditional income</p>
              <div className="text-xs text-slate-500">
                • 12-24 month bank statements<br/>
                • Up to $3M loan amounts<br/>
                • Investment properties OK
              </div>
              <Link href="/programs/non-qm-bank-statement" className="text-blue-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Asset Depletion</h3>
              <p className="text-sm text-slate-600 mb-3">Qualify using your assets instead of traditional income</p>
              <div className="text-xs text-slate-500">
                • Retirement accounts<br/>
                • Investment portfolios<br/>
                • High net worth borrowers
              </div>
              <Link href="/programs/non-qm-asset-depletion" className="text-blue-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Fix & Flip Loans</h3>
              <p className="text-sm text-slate-600 mb-3">Short-term financing for real estate investors and flippers</p>
              <div className="text-xs text-slate-500">
                • 6-24 month terms<br/>
                • Quick closings (7-10 days)<br/>
                • Up to 90% ARV
              </div>
              <Link href="/programs/fix-flip-loans" className="text-blue-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">DSCR Investment Loans</h3>
              <p className="text-sm text-slate-600 mb-3">Qualify based on rental income, not personal income</p>
              <div className="text-xs text-slate-500">
                • No income documentation<br/>
                • Portfolio lenders<br/>
                • 1.0+ DSCR required
              </div>
              <Link href="/programs/dscr-investment-loans" className="text-blue-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Foreign National Loans</h3>
              <p className="text-sm text-slate-600 mb-3">Mortgages for non-US citizens investing in US real estate</p>
              <div className="text-xs text-slate-500">
                • No US credit required<br/>
                • 25-40% down payment<br/>
                • Purchase or refinance
              </div>
              <Link href="/programs/foreign-national-loans" className="text-blue-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">USDA Rural Loans</h3>
              <p className="text-sm text-slate-600 mb-3">Zero down payment for eligible rural and suburban areas</p>
              <div className="text-xs text-slate-500">
                • 0% down payment<br/>
                • Income limits apply<br/>
                • Rural area requirement
              </div>
              <Link href="/programs/usda-rural-loans" className="text-blue-600 text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Don't See What You Need?</h3>
            <p className="text-slate-600 mb-4">
              With access to 200+ wholesale lenders, we have solutions for almost every situation.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                Discuss Your Unique Situation
              </Button>
            </Link>
          </div>
        </div>

        {/* Rate Factors */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Factors That Affect Your Rate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Credit Score</h3>
              <p className="text-slate-600">
                Higher credit scores typically qualify for better interest rates. 
                I can help improve your score before applying.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Down Payment</h3>
              <p className="text-slate-600">
                Larger down payments often result in better rates and eliminate 
                the need for mortgage insurance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Type</h3>
              <p className="text-slate-600">
                Primary residences typically get the best rates, followed by 
                second homes and investment properties.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Loan?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Let me analyze your situation and recommend the best loan program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-base sm:text-lg">
                <span className="sm:hidden">Get Recommendations</span>
                <span className="hidden sm:inline">Get Program Recommendations</span>
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Calculate Payments
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}