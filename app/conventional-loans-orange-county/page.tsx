import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Home, Calculator, FileText, Users, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conventional Loans in Orange County, CA | Traditional Home Financing',
  description: 'Get conventional loans in Orange County with competitive rates. Flexible down payments from 3% and loan amounts up to $1,089,300. Apply today with Mo Abdel.',
  openGraph: {
    title: 'Conventional Loans in Orange County, CA | Traditional Home Financing',
    description: 'Get conventional loans in Orange County with competitive rates. Flexible down payments from 3% and loan amounts up to $1,089,300. Apply today with Mo Abdel.',
    type: 'website',
  },
};

const benefits = [
  {
    icon: Home,
    title: 'Flexible Down Payments',
    description: 'Put down as little as 3% for first-time buyers or 5% for repeat buyers with conventional loans.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Interest Rates',
    description: 'Access competitive rates from 200+ lenders to secure the most competitive conventional loan rates.'
  },
  {
    icon: Shield,
    title: 'No Upfront Mortgage Insurance Premium',
    description: 'Unlike FHA loans, conventional loans don\'t require upfront mortgage insurance premiums.'
  },
  {
    icon: Calculator,
    title: 'Higher Loan Limits',
    description: 'Borrow up to $1,089,300 in Orange County with conventional conforming loans in 2025.'
  },
  {
    icon: FileText,
    title: 'Flexible Credit Requirements',
    description: 'Qualify with credit scores as low as 620, with better rates available for higher scores.'
  },
  {
    icon: Users,
    title: 'No Geographic Restrictions',
    description: 'Use conventional loans for primary residence, second homes, or investment properties.'
  }
];

const requirements = [
  'Credit score: 620+ (better rates with 740+)',
  'Down payment: 3-20% depending on loan type',
  'Debt-to-income ratio: Generally 43% or lower',
  'Employment history: 2 years preferred',
  'Reserve funds: 2-6 months recommended',
  'Property appraisal and inspection required'
];

const conventionalVsFHA = [
  {
    feature: 'Minimum Down Payment',
    conventional: '3-5%',
    fha: '3.5%'
  },
  {
    feature: 'Minimum Credit Score',
    conventional: '620',
    fha: '580'
  },
  {
    feature: 'Mortgage Insurance',
    conventional: 'PMI (removable)',
    fha: 'MIP (permanent)'
  },
  {
    feature: 'Loan Limits (2025)',
    conventional: '$1,089,300',
    fha: '$1,089,300'
  },
  {
    feature: 'Property Types',
    conventional: 'All types',
    fha: 'Primary residence only'
  }
];

const cities = [
  'Irvine', 'Newport Beach', 'Mission Viejo', 'Anaheim', 'Costa Mesa', 'Huntington Beach', 'Santa Ana'
];

export default function ConventionalLoansOrangeCounty() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Traditional Home Financing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Conventional Loans in Orange County – Flexible Home Financing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Get traditional home financing with down payments as low as 3%. Access competitive rates from 200+ lenders with flexible terms for your Orange County home purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Apply for Conventional Loan
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
              Orange County Conventional Mortgage Benefits & Advantages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Conventional loans offer the most flexibility and competitive rates for qualified borrowers in Orange County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Orange County Conventional Mortgage Qualification Requirements
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Conventional loans have flexible qualification requirements that can accommodate a wide range of borrowers in Orange County. 
                Compare with <Link href="/fha-loans-orange-county" className="text-blue-600 hover:text-blue-700 underline">FHA loan requirements</Link> or 
                explore <Link href="/va-loans-orange-county" className="text-blue-600 hover:text-blue-700 underline">VA loan options for veterans</Link>.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">2025 Conventional Loan Limits</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Orange County Conforming Limit</span>
                  <span className="text-xl font-bold text-green-600">$1,089,300</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Minimum Down Payment</span>
                  <span className="text-xl font-bold text-blue-600">3%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-slate-700">Maximum Loan-to-Value</span>
                  <span className="text-xl font-bold text-purple-600">97%</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3">
                    Get Pre-Approved Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Conventional vs FHA Mortgage Comparison
            </h2>
            <p className="text-xl text-slate-600">
              Understanding the key differences can help you choose the right loan program. Learn more about 
              <Link href="/fha-loans-orange-county" className="text-blue-600 hover:text-blue-700 underline">FHA loan details</Link> or 
              explore our <Link href="/guides/orange-county-home-buyer-guide" className="text-blue-600 hover:text-blue-700 underline">complete home buying guide</Link>.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold">Conventional Loan</th>
                    <th className="px-6 py-4 text-left font-semibold">FHA Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {conventionalVsFHA.map((comparison, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-slate-700">{comparison.feature}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{comparison.conventional}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{comparison.fha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Conventional Mortgage Application Process
            </h2>
            <p className="text-xl text-slate-600">
              Our streamlined process makes getting your conventional loan faster and easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Pre-Qualification', desc: 'Quick assessment of your borrowing capacity and rate options' },
              { step: 2, title: 'Document Submission', desc: 'Provide income, asset, and employment verification' },
              { step: 3, title: 'Underwriting Review', desc: 'Comprehensive evaluation of your loan application' },
              { step: 4, title: 'Closing & Funding', desc: 'Final loan approval and funding of your home purchase' }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Conventional Home Loans in Orange County Cities & Neighborhoods
            </h2>
            <p className="text-xl text-slate-600">
              Serving homebuyers across all major Orange County cities with competitive conventional loan rates.
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Conventional Mortgage Questions & Answers
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'What is the minimum down payment for a conventional loan in Orange County?',
                answer: 'First-time buyers can put down as little as 3%, while repeat buyers typically need 5-10%. The exact amount depends on your credit score, debt-to-income ratio, and loan program.'
              },
              {
                question: 'Can I remove private mortgage insurance (PMI) from a conventional loan?',
                answer: 'Yes! PMI can be removed when you reach 20% equity in your home, either through payments or appreciation. This is a key advantage over FHA loans where mortgage insurance is typically permanent.'
              },
              {
                question: 'What credit score do I need for a conventional loan?',
                answer: 'Most conventional loans require a minimum credit score of 620, though some programs accept scores as low as 580. Higher credit scores (740+) typically qualify for the best interest rates.'
              },
              {
                question: 'What is the 2025 conventional loan limit in Orange County?',
                answer: 'The conforming loan limit for Orange County in 2025 is $1,089,300, as set by the Federal Housing Finance Agency. Loans above this amount are considered jumbo loans and have different requirements and rates. Learn more about our <a href="/loan-programs/jumbo-loans" className="text-blue-600 hover:text-blue-700 underline">jumbo loan options</a>.'
              },
              {
                question: 'Can I use a conventional loan for investment property?',
                answer: 'Yes, conventional loans can be used for primary residences, second homes, and investment properties. Down payment requirements are typically higher for non-owner occupied properties.'
              },
              {
                question: 'How long does it take to close on a conventional loan?',
                answer: 'Most conventional loans close within 2-3 weeks from start to finish with our streamlined process and lender network.'
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
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Conventional Loan in Orange County?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Access competitive rates from 200+ lenders and get pre-approved in minutes. 
            Mo Abdel makes conventional loans simple and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Start Your Application
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

