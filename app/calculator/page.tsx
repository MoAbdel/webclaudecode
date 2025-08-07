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