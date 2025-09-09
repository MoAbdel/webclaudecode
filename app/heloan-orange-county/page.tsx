import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Home, Calculator, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HELOAN in Orange County, CA | Home Equity Loan with Fixed Rates',
  description: 'Get a Home Equity Loan (HELOAN) in Orange County with fixed rates and predictable payments. Access your home equity for renovations, debt consolidation, or major expenses.',
  openGraph: {
    title: 'HELOAN in Orange County, CA | Home Equity Loan with Fixed Rates',
    description: 'Get a Home Equity Loan (HELOAN) in Orange County with fixed rates and predictable payments. Access your home equity for renovations, debt consolidation, or major expenses.',
    type: 'website',
  },
};

const benefits = [
  {
    icon: Calculator,
    title: 'Fixed Interest Rate',
    description: 'Enjoy predictable monthly payments with a fixed interest rate that won\'t change over the life of the loan.'
  },
  {
    icon: Home,
    title: 'Large Lump Sum',
    description: 'Receive all funds upfront in one lump sum, perfect for major home improvements or debt consolidation.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Rates',
    description: 'Access competitive rates that are typically lower than credit cards or personal loans.'
  },
  {
    icon: Shield,
    title: 'Tax Benefits',
    description: 'Interest may be tax-deductible when used for home improvements (consult your tax advisor).'
  },
  {
    icon: Zap,
    title: 'Fast Access to Cash',
    description: 'Quick approval and funding process to access your home\'s equity when you need it most.'
  },
  {
    icon: Users,
    title: 'Flexible Use of Funds',
    description: 'Use funds for home renovations, education, debt consolidation, or other major expenses.'
  }
];

const helocVsHeloan = [
  {
    feature: 'Fund Access',
    heloc: 'Draw as needed (line of credit)',
    heloan: 'Lump sum upfront'
  },
  {
    feature: 'Interest Rate',
    heloc: 'Variable rate',
    heloan: 'Fixed rate'
  },
  {
    feature: 'Payment Structure',
    heloc: 'Interest-only option',
    heloan: 'Principal & interest'
  },
  {
    feature: 'Best For',
    heloc: 'Ongoing projects',
    heloan: 'One-time expenses'
  },
  {
    feature: 'Rate Predictability',
    heloc: 'Can fluctuate',
    heloan: 'Stays the same'
  }
];

const requirements = [
  'Home ownership with substantial equity (typically 20%+)',
  'Credit score: 680+ preferred',
  'Debt-to-income ratio: 43% or lower',
  'Stable employment and income verification',
  'Home appraisal to determine current value',
  'Loan amount: Up to 80-90% of home value minus existing mortgage'
];

const popularUses = [
  { use: 'Home Renovations & Improvements', percentage: 35 },
  { use: 'Debt Consolidation', percentage: 25 },
  { use: 'Education Expenses', percentage: 15 },
  { use: 'Investment Opportunities', percentage: 12 },
  { use: 'Emergency Fund', percentage: 8 },
  { use: 'Other Major Expenses', percentage: 5 }
];

const cities = [
  'Irvine', 'Newport Beach', 'Mission Viejo', 'Anaheim', 'Costa Mesa', 'Huntington Beach', 'Santa Ana'
];

export default function HELOANOrangeCounty() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Home Equity Loan
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HELOAN in Orange County – Fixed-Rate Home Equity Loans
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
              Access your home's equity with a fixed-rate loan. Get a lump sum with predictable payments perfect for major home improvements, debt consolidation, or large expenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                  Apply for HELOAN
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Calculate Payments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of a Home Equity Loan (HELOAN)
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              HELOANs provide a predictable way to access your home's equity with fixed rates and consistent monthly payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HELOC vs HELOAN Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              HELOAN vs HELOC: What's the Difference?
            </h2>
            <p className="text-xl text-slate-600">
              Understanding the key differences helps you choose the right home equity solution.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold">HELOC (Line of Credit)</th>
                    <th className="px-6 py-4 text-left font-semibold">HELOAN (Fixed Loan)</th>
                  </tr>
                </thead>
                <tbody>
                  {helocVsHeloan.map((comparison, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-slate-700">{comparison.feature}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{comparison.heloc}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{comparison.heloan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                HELOAN Requirements in Orange County
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Home Equity Loans require substantial equity in your home and strong creditworthiness.
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">HELOAN Features</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Loan Amount</span>
                  <span className="text-xl font-bold text-green-600">Up to $500K</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Loan-to-Value</span>
                  <span className="text-xl font-bold text-emerald-600">Up to 90%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Repayment Term</span>
                  <span className="text-xl font-bold text-blue-600">5-30 Years</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-slate-700">Rate Type</span>
                  <span className="text-xl font-bold text-purple-600">Fixed</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3">
                    Get Your HELOAN Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Uses */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Orange County Homeowners Use HELOANs
            </h2>
            <p className="text-xl text-slate-600">
              Home equity loans provide flexible funding for life's major expenses and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularUses.map((item, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{item.use}</h3>
                    <Badge className="bg-green-100 text-green-800">{item.percentage}%</Badge>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500 progress-bar"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How to Apply for a HELOAN
            </h2>
            <p className="text-xl text-slate-600">
              Our streamlined application process gets you access to your home's equity quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Application & Credit Check', desc: 'Submit application and authorize credit review' },
              { step: 2, title: 'Home Appraisal', desc: 'Professional appraisal determines current home value' },
              { step: 3, title: 'Underwriting Review', desc: 'Complete evaluation of income, assets, and creditworthiness' },
              { step: 4, title: 'Closing & Funding', desc: 'Sign loan documents and receive your lump sum' }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              HELOAN Services Throughout Orange County
            </h2>
            <p className="text-xl text-slate-600">
              Helping homeowners access their equity across all major Orange County cities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <span className="text-slate-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              HELOAN FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'What is the difference between a HELOAN and a HELOC?',
                answer: 'A HELOAN provides a fixed-rate lump sum loan, while a HELOC is a variable-rate line of credit you can draw from as needed. HELOANs offer predictable payments, while HELOCs offer more flexibility.'
              },
              {
                question: 'How much can I borrow with a HELOAN in Orange County?',
                answer: 'You can typically borrow up to 80-90% of your home\'s current value minus your existing mortgage balance, with a maximum of $500,000 in most cases.'
              },
              {
                question: 'What are the tax benefits of a HELOAN?',
                answer: 'Interest on HELOANs may be tax-deductible when the funds are used for home improvements. Consult with a tax advisor for your specific situation.'
              },
              {
                question: 'How long does it take to get approved for a HELOAN?',
                answer: 'Most home equity loans close within 2-3 weeks from start to finish, including the home appraisal and underwriting review.'
              },
              {
                question: 'What credit score do I need for a HELOAN?',
                answer: 'Most lenders prefer a credit score of 680 or higher for HELOANs, though some programs may accept lower scores with compensating factors.'
              },
              {
                question: 'Can I pay off my HELOAN early without penalties?',
                answer: 'Most HELOANs allow early repayment without prepayment penalties, but terms can vary by lender. We\'ll help you find the most flexible terms available.'
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access Your Home's Equity with a Fixed-Rate HELOAN?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get predictable payments and access to cash for your major expenses. 
            Mo Abdel makes HELOANs simple with competitive fixed rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                Apply for HELOAN Today
              </Button>
            </Link>
            <Link href="tel:+19495792057">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Call (949) 579-2057
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

