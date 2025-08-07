'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Calculator, Home, RefreshCw, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

export default function CalculatorPage() {
  const calculators = [
    {
      id: 'mortgage',
      title: 'Mortgage Calculator',
      description: 'Calculate your monthly mortgage payment based on home price, down payment, and interest rate',
      icon: Calculator,
      color: 'blue',
      link: '/calculator/mortgage',
      benefits: ['Estimate monthly payments', 'Compare loan terms', 'See total interest paid']
    },
    {
      id: 'affordability',
      title: 'Affordability Calculator',
      description: 'Find out how much home you can afford based on your income and monthly debts',
      icon: Home,
      color: 'green',
      link: '/calculator/affordability',
      benefits: ['Determine budget', 'Calculate max loan amount', 'Review debt ratios']
    },
    {
      id: 'refinance',
      title: 'Refinance Calculator',
      description: 'See if refinancing could save you money with lower rates or better terms',
      icon: RefreshCw,
      color: 'purple',
      link: '/calculator/refinance',
      benefits: ['Compare savings', 'Calculate new payment', 'See total interest savings']
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mortgage Calculators
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the calculator that best fits your needs. Get instant estimates and insights to make informed decisions about your mortgage.
          </p>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {calculators.map((calc) => (
            <div key={calc.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${
                calc.color === 'blue' ? 'from-blue-500 to-blue-600' :
                calc.color === 'green' ? 'from-green-500 to-green-600' :
                'from-purple-500 to-purple-600'
              } p-6 text-white`}>
                <calc.icon className="w-12 h-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">{calc.title}</h2>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 mb-6">{calc.description}</p>
                
                <div className="space-y-2 mb-6">
                  {calc.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className={`text-${calc.color}-600 mr-2 mt-1`}>✓</span>
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={calc.link}>
                  <Button className={`w-full bg-${calc.color}-600 hover:bg-${calc.color}-700 text-white py-3 text-base font-semibold flex items-center justify-center`}>
                    Use This Calculator
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Why Use Our Calculators?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Accurate Estimates</h3>
                <p className="text-sm text-slate-600">Based on current market rates and standard lending practices</p>
              </div>
              <div className="text-center">
                <Calculator className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Easy to Use</h3>
                <p className="text-sm text-slate-600">Simple inputs with instant results and clear explanations</p>
              </div>
              <div className="text-center">
                <Home className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Personalized</h3>
                <p className="text-sm text-slate-600">Tailored to your specific situation and local market conditions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Need a More Detailed Analysis?</h2>
          <p className="text-xl mb-6 text-slate-300">
            Get a personalized rate quote and expert guidance for your specific situation.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg font-semibold">
              Get Your Custom Quote
            </Button>
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-slate-100 rounded-lg p-6">
          <p className="text-sm text-slate-600 text-center">
            <strong>Disclaimer:</strong> These calculators provide estimates only. Actual rates and payments may vary. 
            As a wholesale mortgage broker, I often secure rates better than market averages. Contact me for a personalized quote.
          </p>
        </div>
      </div>
    </div>
  );
}