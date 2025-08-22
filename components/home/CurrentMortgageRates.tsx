'use client';

import React from 'react';
import { TrendingUp, Calendar, Phone, ArrowRight } from 'lucide-react';

export default function CurrentMortgageRates() {
  // Current rates as of August 2025
  const currentRates = [
    {
      loanType: '30-Year Fixed',
      rate: '6.625%',
      apr: '6.741%',
      points: '0.5',
      trend: 'down',
      description: 'Most popular choice for homebuyers'
    },
    {
      loanType: '15-Year Fixed',
      rate: '6.125%',
      apr: '6.298%',
      points: '0.5',
      trend: 'down',
      description: 'Pay off faster, save on interest'
    },
    {
      loanType: 'FHA 30-Year',
      rate: '6.375%',
      apr: '7.234%',
      points: '0.5',
      trend: 'stable',
      description: 'Low down payment option'
    },
    {
      loanType: 'VA 30-Year',
      rate: '6.250%',
      apr: '6.421%',
      points: '0',
      trend: 'down',
      description: 'No down payment for veterans'
    },
    {
      loanType: 'Jumbo 30-Year',
      rate: '6.750%',
      apr: '6.834%',
      points: '0.5',
      trend: 'stable',
      description: 'Loans over $1,089,300'
    },
    {
      loanType: 'HELOC',
      rate: '8.25%',
      apr: '8.65%',
      points: '0',
      trend: 'stable',
      description: 'Variable rate line of credit'
    }
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'down') return <TrendingUp className="w-4 h-4 text-green-600 rotate-180" />;
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-red-600" />;
    return <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>;
  };

  const getTrendColor = (trend: string) => {
    if (trend === 'down') return 'text-green-600';
    if (trend === 'up') return 'text-red-600';
    return 'text-yellow-600';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Updated August 22, 2025
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Current Orange County Mortgage Rates
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Competitive wholesale rates available through our network of 200+ lenders. 
            Rates shown are sample rates and may vary based on credit score, loan amount, and property type.
          </p>
        </div>

        {/* Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentRates.map((loan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {loan.loanType}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {loan.description}
                  </p>
                </div>
                <div className="flex items-center">
                  {getTrendIcon(loan.trend)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">Interest Rate</span>
                  <span className="text-2xl font-bold text-blue-600">{loan.rate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">APR</span>
                  <span className="text-lg font-semibold text-slate-900">{loan.apr}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">Points</span>
                  <span className="text-sm font-medium text-slate-600">{loan.points}</span>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className={`text-xs font-medium uppercase tracking-wide ${getTrendColor(loan.trend)}`}>
                    {loan.trend === 'down' ? '↓ Trending Down' : 
                     loan.trend === 'up' ? '↑ Trending Up' : '→ Stable'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Get Your Personalized Rate Quote Today
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            These are sample rates. Your actual rate depends on credit score, loan amount, 
            property type, and current market conditions. Get your personalized quote in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get My Rate Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:949-579-2057"
              className="inline-flex items-center border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (949) 579-2057
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 max-w-4xl mx-auto leading-relaxed">
            <strong>Rate Disclaimer:</strong> Rates shown are estimates for illustration purposes only and may vary based on current market conditions, 
            loan amount, loan-to-value ratio, debt-to-income ratio, credit score, property type, occupancy, and other factors. 
            Actual rates may be higher or lower. All loans subject to credit approval. Contact Mo Abdel, NMLS #1426884, 
            for current rates and terms. Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act.
          </p>
        </div>
      </div>
    </section>
  );
}