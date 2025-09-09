'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ClosingCostsCalculator() {
  const [homePrice, setHomePrice] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanType, setLoanType] = useState('conventional');
  const [propertyType, setPropertyType] = useState('primary');
  const [results, setResults] = useState<any>(null);

  const calculateClosingCosts = () => {
    const price = parseFloat(homePrice) || 0;
    const loan = parseFloat(loanAmount) || 0;
    
    // Lender fees (typically 0.5-1% of loan amount)
    const originationFee = loan * 0.008; // 0.8%
    const underwritingFee = 500;
    const processingFee = 400;
    const creditReportFee = 50;
    const floodCertification = 25;
    const lenderFees = originationFee + underwritingFee + processingFee + creditReportFee + floodCertification;

    // Third-party fees
    const appraisal = 600;
    const inspection = 500;
    const titleInsurance = price * 0.005; // 0.5% of home price
    const escrowFees = price * 0.002; // 0.2% of home price
    const attorneyFees = 800;
    const survey = 400;
    const thirdPartyFees = appraisal + inspection + titleInsurance + escrowFees + attorneyFees + survey;

    // Government fees
    const recordingFees = 150;
    const transferTax = price * 0.001; // varies by county
    const governmentFees = recordingFees + transferTax;

    // Prepaid expenses
    const homeInsurance = (price * 0.004) / 12; // Annual premium / 12
    const propertyTaxes = (price * 0.0075) / 12; // 0.75% annually / 12
    const prepaidInterest = (loan * 0.065) / 365 * 15; // 15 days interest
    const prepaidExpenses = homeInsurance + propertyTaxes + prepaidInterest;

    // Initial escrow deposit
    const escrowInsurance = homeInsurance * 2; // 2 months
    const escrowTaxes = propertyTaxes * 2; // 2 months
    const escrowDeposit = escrowInsurance + escrowTaxes;

    // PMI (if applicable)
    let pmiPremium = 0;
    if (loanType === 'conventional' && (loan / price) > 0.8) {
      pmiPremium = loan * 0.005 / 12; // 0.5% annually / 12
    }

    // FHA fees
    let fhaFees = 0;
    if (loanType === 'fha') {
      fhaFees = loan * 0.0175; // 1.75% upfront MIP
    }

    const totalClosingCosts = lenderFees + thirdPartyFees + governmentFees + prepaidExpenses + escrowDeposit + fhaFees;
    const totalCashNeeded = totalClosingCosts + (price - loan); // Closing costs + down payment

    setResults({
      lenderFees: Math.round(lenderFees),
      thirdPartyFees: Math.round(thirdPartyFees),
      governmentFees: Math.round(governmentFees),
      prepaidExpenses: Math.round(prepaidExpenses),
      escrowDeposit: Math.round(escrowDeposit),
      fhaFees: Math.round(fhaFees),
      totalClosingCosts: Math.round(totalClosingCosts),
      totalCashNeeded: Math.round(totalCashNeeded),
      downPayment: Math.round(price - loan),
      pmiPremium: Math.round(pmiPremium),
      breakdown: {
        originationFee: Math.round(originationFee),
        titleInsurance: Math.round(titleInsurance),
        appraisal,
        inspection,
        homeInsurance: Math.round(homeInsurance),
        propertyTaxes: Math.round(propertyTaxes)
      }
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
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Closing Costs Calculator
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estimate your closing costs for buying a home in Orange County, California.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Loan Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Home Purchase Price
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="800,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="640,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Type
                </label>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="conventional">Conventional</option>
                  <option value="fha">FHA</option>
                  <option value="va">VA</option>
                  <option value="jumbo">Jumbo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="primary">Primary Residence</option>
                  <option value="secondary">Second Home</option>
                  <option value="investment">Investment Property</option>
                </select>
              </div>

              <Button 
                onClick={calculateClosingCosts}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Calculate Closing Costs
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cost Breakdown</h2>
            
            {results ? (
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Total Cash Needed</h3>
                  <p className="text-3xl font-bold text-red-600">{formatCurrency(results.totalCashNeeded)}</p>
                  <div className="text-sm text-red-700 mt-2">
                    <div>Down Payment: {formatCurrency(results.downPayment)}</div>
                    <div>Closing Costs: {formatCurrency(results.totalClosingCosts)}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Lender Fees</span>
                    <span className="font-semibold">{formatCurrency(results.lenderFees)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Third-Party Fees</span>
                    <span className="font-semibold">{formatCurrency(results.thirdPartyFees)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Government Fees</span>
                    <span className="font-semibold">{formatCurrency(results.governmentFees)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Prepaid Expenses</span>
                    <span className="font-semibold">{formatCurrency(results.prepaidExpenses)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Escrow Deposit</span>
                    <span className="font-semibold">{formatCurrency(results.escrowDeposit)}</span>
                  </div>
                  
                  {results.fhaFees > 0 && (
                    <div className="flex justify-between py-2 border-b border-slate-200">
                      <span className="text-slate-600">FHA Upfront MIP</span>
                      <span className="font-semibold">{formatCurrency(results.fhaFees)}</span>
                    </div>
                  )}
                </div>

                {results.pmiPremium > 0 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="text-sm font-semibold text-yellow-800">PMI Required</h3>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Monthly PMI: {formatCurrency(results.pmiPremium)} (less than 20% down)
                    </p>
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-blue-800 mb-2">Orange County Tips</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Seller can contribute up to 3-6% toward closing costs</li>
                    <li>• Lender credits can reduce upfront costs</li>
                    <li>• Some programs offer closing cost assistance</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calculator className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Enter your loan details to estimate closing costs</p>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Breakdown */}
        {results && (
          <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Detailed Cost Breakdown</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Lender Fees</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-600">Origination Fee:</span>
                    <span>{formatCurrency(results.breakdown.originationFee)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Underwriting:</span>
                    <span>$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Processing:</span>
                    <span>$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Credit Report:</span>
                    <span>$50</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Third-Party</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-600">Title Insurance:</span>
                    <span>{formatCurrency(results.breakdown.titleInsurance)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Appraisal:</span>
                    <span>$600</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Inspection:</span>
                    <span>$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Attorney:</span>
                    <span>$800</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Prepaid/Escrow</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-600">Home Insurance:</span>
                    <span>{formatCurrency(results.breakdown.homeInsurance)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Property Taxes:</span>
                    <span>{formatCurrency(results.breakdown.propertyTaxes)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-600">Prepaid Interest:</span>
                    <span>Varies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-4">
                Get a personalized closing cost estimate and explore ways to reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:(949) 579-2057">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Call (949) 579-2057
                  </Button>
                </a>
                <a href="/contact">
                  <Button variant="ghost" className="border border-slate-300 px-8 py-3">
                    Get Detailed Estimate
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
