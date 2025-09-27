'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Calculator, TrendingDown } from 'lucide-react';

export default function SavingsCalculator() {
  const [loanAmount, setLoanAmount] = useState(640000);
  const [interestRate, setInterestRate] = useState(7.125);
  const [loanTerm, setLoanTerm] = useState(30);

  // Big Bank Rate (baseline)
  const bigBankRate = interestRate;

  // Wholesale Rate (0.125% lower based on research)
  const wholesaleRate = interestRate - 0.125;

  // Calculate monthly payments
  const calculateMonthlyPayment = (principal: number, rate: number, years: number) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment;
  };

  const bigBankPayment = calculateMonthlyPayment(loanAmount, bigBankRate, loanTerm);
  const wholesalePayment = calculateMonthlyPayment(loanAmount, wholesaleRate, loanTerm);

  // Calculate savings
  const monthlySavings = bigBankPayment - wholesalePayment;
  const annualSavings = monthlySavings * 12;
  const lifetimeSavings = monthlySavings * loanTerm * 12;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Calculate Your Savings</h2>
          <p className="text-xl text-slate-600">
            See how much you could save with our wholesale mortgage rates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900">Mortgage Calculator</h3>
            </div>

            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Interest Rate and Loan Term */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Term (years)
                  </label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Monthly Payment Display */}
              <div className="bg-slate-50 rounded-lg p-6 text-center">
                <p className="text-sm text-slate-600 mb-2">Our Wholesale Rate</p>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ${wholesalePayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <p className="text-sm text-slate-600">
                  {wholesaleRate.toFixed(3)}% APR • Principal & Interest
                </p>
              </div>

              <a href="/quiz">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Get Pre-Approved
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Rate Comparison */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <TrendingDown className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900">Rate Comparison</h3>
            </div>

            <div className="space-y-6">
              {/* Big Bank Rate */}
              <div className="p-4 border border-slate-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Big Bank Rate</span>
                  <span className="text-xl font-bold text-slate-900">
                    ${bigBankPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{bigBankRate.toFixed(3)}% APR</p>
              </div>

              {/* Our Wholesale Rate */}
              <div className="p-4 border-2 border-blue-200 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Our Wholesale Rate</span>
                  <span className="text-xl font-bold text-blue-600">
                    ${wholesalePayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{wholesaleRate.toFixed(3)}% APR</p>
              </div>

              {/* Potential Savings */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-green-600 font-medium">💰 Potential Savings</span>
                </div>
                <p className="text-sm text-green-700 mb-2">
                  Save up to ${lifetimeSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })} over the life of a 30-year loan with our wholesale rates
                </p>
                <p className="text-xs text-green-600 italic">
                  *Savings based on 0.125% rate difference. Actual savings may vary based on credit profile, loan program, and market conditions. This is an estimate for comparison purposes only.
                </p>
              </div>

              {/* Lower Closing Costs */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-blue-600 font-medium">📋 Competitive Closing Costs</span>
                </div>
                <p className="text-sm text-blue-700">
                  Potential savings on closing costs compared to traditional lenders*
                </p>
              </div>

              {/* Why Our Rates Are Lower */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Why Our Rates Are Lower</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Direct wholesale pricing without retail markup
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to 200+ lenders for competitive bidding
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Lower overhead costs passed to clients
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}