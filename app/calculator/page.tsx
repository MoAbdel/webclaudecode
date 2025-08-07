'use client';

import React, { useState } from 'react';
import MortgageCalculator from '@/components/calculator/MortgageCalculator';
import AffordabilityCalculator from '@/components/calculator/AffordabilityCalculator';
import RefinanceCalculator from '@/components/calculator/RefinanceCalculator';

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState('refinance');

  const calculators = [
    { 
      id: 'refinance', 
      title: 'Refinance Calculator',
      component: <RefinanceCalculator />
    },
    { 
      id: 'mortgage', 
      title: 'Mortgage Calculator',
      component: <MortgageCalculator />
    },
    { 
      id: 'affordability', 
      title: 'Affordability Calculator',
      component: <AffordabilityCalculator />
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Rate Calculators
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get instant mortgage calculations with real-time rates. Choose the calculator that fits your needs.
          </p>
        </div>

        {/* Calculator Tabs - Mobile shows all tabs, Desktop has original design */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-slate-200">
            <nav className="flex">
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setActiveTab(calc.id)}
                  className={`flex-1 px-4 py-4 text-sm font-medium text-center border-b-2 transition-colors duration-200 ${
                    activeTab === calc.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="block sm:hidden">{calc.title.split(' ')[0]}</span>
                  <span className="hidden sm:block">{calc.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Calculator Content */}
          <div className="p-8">
            {calculators.find(calc => calc.id === activeTab)?.component}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Why Our Calculators Are Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real Market Rates</h3>
                <p className="text-slate-600">
                  Based on current wholesale rates from over 200 lenders, not inflated bank rates.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
                <p className="text-slate-600">
                  No waiting, no personal information required. Get your numbers immediately.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Orange County Focused</h3>
                <p className="text-slate-600">
                  Calculations include local tax rates, insurance estimates, and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-slate-900 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Real Rate?</h2>
          <p className="text-xl mb-6 text-slate-300">
            These calculators give you estimates. I can get you actual rates that are often better than what you see online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get My Actual Rate
            </a>
            <a 
              href="tel:(949) 579-2057" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Call (949) 579-2057
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}