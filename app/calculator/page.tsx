'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Calculator, Home, RefreshCw } from 'lucide-react';
import MortgageCalculator from '@/components/calculator/MortgageCalculator';
import AffordabilityCalculator from '@/components/calculator/AffordabilityCalculator';
import RefinanceCalculator from '@/components/calculator/RefinanceCalculator';

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState('mortgage');

  const tabs = [
    {
      id: 'mortgage',
      label: 'Mortgage Calculator',
      icon: Calculator,
      component: MortgageCalculator
    },
    {
      id: 'affordability',
      label: 'Affordability Calculator', 
      icon: Home,
      component: AffordabilityCalculator
    },
    {
      id: 'refinance',
      label: 'Refinance Calculator',
      icon: RefreshCw,
      component: RefinanceCalculator
    }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || MortgageCalculator;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Active Calculator Component */}
        <ActiveComponent />

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