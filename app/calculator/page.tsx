'use client';

import React, { useState } from 'react';
import MortgageCalculator from '@/components/calculator/MortgageCalculator';
import AffordabilityCalculator from '@/components/calculator/AffordabilityCalculator';
import RefinanceCalculator from '@/components/calculator/RefinanceCalculator';
import RateComparisonTable from '@/components/calculator/RateComparisonTable';

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

        {/* Rate Comparison Table */}
        <RateComparisonTable />

        {/* Advanced Calculator Links */}
        <div className="mt-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Advanced Calculator Suite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="/calculator/affordability"
              className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-200 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Home Affordability</h3>
                <p className="text-slate-600 text-sm">Calculate how much house you can afford based on income and debts</p>
              </div>
            </a>

            <a 
              href="/calculator/debt-to-income"
              className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-200 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Debt-to-Income</h3>
                <p className="text-slate-600 text-sm">Analyze your DTI ratios and approval chances for different loan types</p>
              </div>
            </a>

            <a 
              href="/calculator/closing-costs"
              className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-200 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Closing Costs</h3>
                <p className="text-slate-600 text-sm">Estimate all closing costs with detailed breakdown for Orange County</p>
              </div>
            </a>
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
    
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Mortgage Calculator","applicationCategory":"FinanceApplication","operatingSystem":"Web","publisher":{"@type":"Organization","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com"}})
}} />
</div>
  );
}



