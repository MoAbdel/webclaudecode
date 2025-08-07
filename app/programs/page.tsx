import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { seoData } from '@/lib/seo';
import { Home, Shield, Users, TrendingUp } from 'lucide-react';

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
            Mortgage Loan Programs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            With access to over 200 wholesale lenders, I can find the perfect loan program 
            for your unique situation and financial goals.
          </p>
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

        {/* Additional Programs */}
        <div className="bg-slate-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Additional Specialty Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold text-slate-900 mb-2">USDA Rural</h3>
              <p className="text-sm text-slate-600">Zero down payment for eligible rural areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Bank Statement</h3>
              <p className="text-sm text-slate-600">For self-employed borrowers</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Asset Depletion</h3>
              <p className="text-sm text-slate-600">Qualify using assets instead of income</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Fix & Flip</h3>
              <p className="text-sm text-slate-600">Short-term loans for investors</p>
            </div>
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
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Get Program Recommendations
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