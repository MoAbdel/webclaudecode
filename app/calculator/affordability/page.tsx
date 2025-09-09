'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, Home, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AffordabilityCalculator() {
  const [income, setIncome] = useState('');
  const [monthlyDebts, setMonthlyDebts] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('6.5');
  const [results, setResults] = useState<any>(null);

  const calculateAffordability = () => {
    const monthlyIncome = parseFloat(income) / 12;
    const monthlyDebt = parseFloat(monthlyDebts) || 0;
    const downPaymentAmount = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) / 100 / 12;

    // 28% front-end ratio (housing costs)
    const maxHousingPayment = monthlyIncome * 0.28;
    
    // 36% back-end ratio (total debt)
    const maxTotalDebt = monthlyIncome * 0.36;
    const maxHousingWithDebt = maxTotalDebt - monthlyDebt;
    
    // Use the more conservative of the two
    const maxMonthlyPayment = Math.min(maxHousingPayment, maxHousingWithDebt);
    
    // Estimate insurance, taxes, PMI (roughly 0.5% monthly)
    const estimatedHOITaxesPMI = 0.005;
    const availableForPrincipalInterest = maxMonthlyPayment * 0.85; // 85% for P&I
    
    // Calculate max loan amount
    const numberOfPayments = 30 * 12;
    const maxLoanAmount = availableForPrincipalInterest * ((1 - Math.pow(1 + rate, -numberOfPayments)) / rate);
    
    // Max home price
    const maxHomePrice = maxLoanAmount + downPaymentAmount;

    setResults({
      maxHomePrice: Math.round(maxHomePrice),
      maxLoanAmount: Math.round(maxLoanAmount),
      monthlyPayment: Math.round(maxMonthlyPayment),
      principalInterest: Math.round(availableForPrincipalInterest),
      estimatedTaxesInsurance: Math.round(maxMonthlyPayment - availableForPrincipalInterest)
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Calculator className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Home Affordability Calculator
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Calculate how much house you can afford in Orange County based on your income, debts, and down payment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Financial Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Annual Household Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="100,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monthly Debt Payments
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    value={monthlyDebts}
                    onChange={(e) => setMonthlyDebts(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="500"
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">Car loans, credit cards, student loans, etc.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Down Payment Available
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="50,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interest Rate (%)
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="6.5"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateAffordability}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Calculate Affordability
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Results</h2>
            
            {results ? (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Home className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-green-800">Maximum Home Price</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(results.maxHomePrice)}</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Loan Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Max Loan Amount:</span>
                      <span className="font-semibold">{formatCurrency(results.maxLoanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monthly Payment:</span>
                      <span className="font-semibold">{formatCurrency(results.monthlyPayment)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Payment Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Principal & Interest:</span>
                      <span className="font-semibold">{formatCurrency(results.principalInterest)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Taxes, Insurance, PMI:</span>
                      <span className="font-semibold">{formatCurrency(results.estimatedTaxesInsurance)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-yellow-800 mb-2">Orange County Context</h3>
                  <p className="text-sm text-yellow-700">
                    With Orange County's median home price around $1.2M, consider FHA loans (down to $1,089,300) 
                    or jumbo loans for higher amounts. I can help you explore all available options.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calculator className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Enter your information to see how much home you can afford</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Understanding Your Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">How We Calculate</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• 28% front-end ratio for housing costs</li>
                <li>• 36% back-end ratio for total debt</li>
                <li>• Includes taxes, insurance, and PMI estimates</li>
                <li>• Based on 30-year fixed mortgage</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Orange County Tips</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Consider down payment assistance programs</li>
                <li>• FHA loans available up to $1,089,300</li>
                <li>• VA loans with no down payment for veterans</li>
                <li>• Jumbo loans for luxury markets</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">
              Ready to get pre-approved? Contact Mo Abdel for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Call (949) 579-2057
                </Button>
              </a>
              <a href="/contact">
                <Button variant="ghost" className="border border-slate-300 px-8 py-3">
                  Get Pre-Approved
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

