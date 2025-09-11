'use client';

import React, { useState, useEffect } from 'react';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

export default function RateComparisonTable() {
  const [rates, setRates] = useState({
    thirtyYear: 6.62,
    fifteenYear: 5.97,
    fhaThirtyYear: 6.22,
    vaThirtyYear: 6.23,
    jumboThirtyYear: 6.67,
    armFiveOne: 6.11
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('/api/rates', { cache: 'no-store' });
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          const thirty = result.data.find((r: any) => r.loan_type.includes('30-Year Fixed'));
          const fifteen = result.data.find((r: any) => r.loan_type.includes('15-Year Fixed'));
          const fha = result.data.find((r: any) => r.loan_type.includes('FHA'));
          const va = result.data.find((r: any) => r.loan_type.includes('VA'));
          const jumbo = result.data.find((r: any) => r.loan_type.includes('Jumbo'));
          const arm = result.data.find((r: any) => r.loan_type.includes('7/6 ARM'));
          
          setRates({
            thirtyYear: thirty ? parseFloat(thirty.rate) : 6.62,
            fifteenYear: fifteen ? parseFloat(fifteen.rate) : 5.97,
            fhaThirtyYear: fha ? parseFloat(fha.rate) : 6.22,
            vaThirtyYear: va ? parseFloat(va.rate) : 6.23,
            jumboThirtyYear: jumbo ? parseFloat(jumbo.rate) : 6.67,
            armFiveOne: arm ? parseFloat(arm.rate) : 5.95
          });
        }
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchRates();
  }, []);

  const calculateMonthlyPayment = (principal: number, rate: number, years: number) => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                   (Math.pow(1 + monthlyRate, numPayments) - 1);
    return payment;
  };

  const loanAmount = 800000; // Example loan amount for Orange County

  const loanPrograms = [
    {
      name: '30-Year Fixed',
      rate: rates.thirtyYear,
      apr: rates.thirtyYear + 0.15,
      payment: calculateMonthlyPayment(loanAmount, rates.thirtyYear, 30),
      points: 0,
      trend: 'down',
      bestFor: 'Long-term stability'
    },
    {
      name: '15-Year Fixed',
      rate: rates.fifteenYear,
      apr: rates.fifteenYear + 0.12,
      payment: calculateMonthlyPayment(loanAmount, rates.fifteenYear, 15),
      points: 0,
      trend: 'stable',
      bestFor: 'Fast equity build'
    },
    {
      name: 'FHA 30-Year',
      rate: rates.fhaThirtyYear,
      apr: rates.fhaThirtyYear + 0.85, // includes MIP
      payment: calculateMonthlyPayment(loanAmount, rates.fhaThirtyYear, 30),
      points: 0,
      trend: 'down',
      bestFor: '3.5% down payment'
    },
    {
      name: 'VA 30-Year',
      rate: rates.vaThirtyYear,
      apr: rates.vaThirtyYear + 0.10,
      payment: calculateMonthlyPayment(loanAmount, rates.vaThirtyYear, 30),
      points: 0,
      trend: 'down',
      bestFor: 'No down payment'
    },
    {
      name: 'Jumbo 30-Year',
      rate: rates.jumboThirtyYear,
      apr: rates.jumboThirtyYear + 0.18,
      payment: calculateMonthlyPayment(loanAmount, rates.jumboThirtyYear, 30),
      points: 0.5,
      trend: 'up',
      bestFor: 'High-value homes'
    },
    {
      name: '7/6 ARM',
      rate: rates.armFiveOne,
      apr: rates.armFiveOne + 0.25,
      payment: calculateMonthlyPayment(loanAmount, rates.armFiveOne, 30),
      points: 0,
      trend: 'stable',
      bestFor: 'Lower initial rate'
    }
  ];

  return (
    <div className="my-12 bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Current Orange County Mortgage Rates Comparison
        </h2>
        <p className="text-slate-600">
          Live rates for a $800,000 loan with 20% down payment and excellent credit (740+)
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Loan Program</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-700">Rate</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-700">APR</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-700">Monthly Payment</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-700">Points</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-700">Trend</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Best For</th>
            </tr>
          </thead>
          <tbody>
            {loanPrograms.map((program, index) => (
              <tr key={program.name} className={`border-b border-slate-100 hover:bg-slate-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <td className="py-4 px-4 font-medium text-slate-900">{program.name}</td>
                <td className="py-4 px-4 text-center">
                  <span className="text-lg font-bold text-green-600">{program.rate.toFixed(3)}%</span>
                </td>
                <td className="py-4 px-4 text-center text-slate-600">{program.apr.toFixed(3)}%</td>
                <td className="py-4 px-4 text-center font-semibold text-slate-900">
                  ${program.payment.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td className="py-4 px-4 text-center text-slate-600">{program.points}</td>
                <td className="py-4 px-4 text-center">
                  {program.trend === 'down' && <TrendingDown className="w-5 h-5 text-green-600 mx-auto" />}
                  {program.trend === 'up' && <TrendingUp className="w-5 h-5 text-red-600 mx-auto" />}
                  {program.trend === 'stable' && <Minus className="w-5 h-5 text-slate-400 mx-auto" />}
                </td>
                <td className="py-4 px-4 text-slate-600">{program.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {loanPrograms.map((program) => (
          <div key={program.name} className="border border-slate-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-slate-900">{program.name}</h3>
              {program.trend === 'down' && <TrendingDown className="w-5 h-5 text-green-600" />}
              {program.trend === 'up' && <TrendingUp className="w-5 h-5 text-red-600" />}
              {program.trend === 'stable' && <Minus className="w-5 h-5 text-slate-400" />}
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-slate-600">Rate:</span>
                <span className="ml-2 font-bold text-green-600">{program.rate.toFixed(3)}%</span>
              </div>
              <div>
                <span className="text-slate-600">APR:</span>
                <span className="ml-2 font-medium">{program.apr.toFixed(3)}%</span>
              </div>
              <div>
                <span className="text-slate-600">Payment:</span>
                <span className="ml-2 font-bold">${program.payment.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
              </div>
              <div>
                <span className="text-slate-600">Points:</span>
                <span className="ml-2">{program.points}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <span className="text-sm text-slate-600">Best for: {program.bestFor}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer and CTA */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-slate-600 mb-4">
          * Rates shown are for illustration purposes. Your actual rate will depend on credit score, down payment, loan amount, and other factors. 
          Rates updated weekly and subject to change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-block text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Your Personalized Rate
          </a>
          <a
            href="tel:(949) 579-2057"
            className="inline-block text-center border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Call (949) 579-2057
          </a>
        </div>
      </div>
    </div>
  );
}



