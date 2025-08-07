'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Calculator, DollarSign, Home, Percent } from 'lucide-react';

export default function CalculatorPage() {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [interestRate, setInterestRate] = useState('7.0');
  const [loanTerm, setLoanTerm] = useState('30');
  const [downPayment, setDownPayment] = useState('100000');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  
  const calculatePayment = () => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numPayments = parseFloat(loanTerm) * 12;
    
    if (principal > 0 && monthlyRate > 0 && numPayments > 0) {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                     (Math.pow(1 + monthlyRate, numPayments) - 1);
      const total = payment * numPayments;
      const interest = total - principal;
      
      setMonthlyPayment(payment);
      setTotalInterest(interest);
    }
  };
  
  useEffect(() => {
    calculatePayment();
  }, [loanAmount, interestRate, loanTerm, downPayment]);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get an estimate of your monthly mortgage payment, total interest, and more. 
            Remember, I can often secure better rates than these estimates!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-2 text-blue-600" />
              Loan Details
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Home Price
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Down Payment
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interest Rate (%)
                </label>
                <div className="relative">
                  <Percent className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="7.0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Term (Years)
                </label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="30">30 Years</option>
                  <option value="15">15 Years</option>
                  <option value="20">20 Years</option>
                  <option value="25">25 Years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Home className="w-6 h-6 mr-2 text-blue-600" />
              Your Results
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Monthly Payment</h3>
                <div className="text-3xl font-bold text-blue-600">
                  ${monthlyPayment.toLocaleString('en-US', {maximumFractionDigits: 0})}
                </div>
                <p className="text-sm text-slate-600 mt-2">Principal & Interest</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Loan Amount</h4>
                  <div className="text-lg font-bold text-slate-700">
                    ${(parseFloat(loanAmount) - parseFloat(downPayment)).toLocaleString('en-US')}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Total Interest</h4>
                  <div className="text-lg font-bold text-slate-700">
                    ${totalInterest.toLocaleString('en-US', {maximumFractionDigits: 0})}
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Additional Monthly Costs to Consider:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Property taxes</li>
                  <li>• Homeowners insurance</li>
                  <li>• HOA fees (if applicable)</li>
                  <li>• Private mortgage insurance (if down payment &lt; 20%)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Calculators */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Additional Calculators Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center opacity-75">
              <h3 className="text-xl font-semibold mb-3">Refinance Calculator</h3>
              <p className="text-slate-600 mb-4">Calculate potential savings from refinancing your current mortgage.</p>
              <Button variant="ghost" disabled>Coming Soon</Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center opacity-75">
              <h3 className="text-xl font-semibold mb-3">Affordability Calculator</h3>
              <p className="text-slate-600 mb-4">Determine how much house you can afford based on your income.</p>
              <Button variant="ghost" disabled>Coming Soon</Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center opacity-75">
              <h3 className="text-xl font-semibold mb-3">Extra Payment Calculator</h3>
              <p className="text-slate-600 mb-4">See how extra payments can save you money and time.</p>
              <Button variant="ghost" disabled>Coming Soon</Button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-slate-100 rounded-lg p-6">
          <p className="text-sm text-slate-600 text-center">
            <strong>Disclaimer:</strong> This calculator provides estimates only. Actual rates and payments may vary. 
            As a wholesale mortgage broker, I often secure rates better than market averages. Contact me for a personalized quote.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for a Real Quote?</h2>
          <p className="text-xl mb-6 text-blue-100">
            These are just estimates. Let me find you the actual best rates available today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Get Real Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}