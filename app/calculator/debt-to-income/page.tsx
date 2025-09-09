'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DebtToIncomeCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [housingPayment, setHousingPayment] = useState('');
  const [carPayments, setCarPayments] = useState('');
  const [creditCards, setCreditCards] = useState('');
  const [studentLoans, setStudentLoans] = useState('');
  const [otherDebts, setOtherDebts] = useState('');
  const [results, setResults] = useState<any>(null);

  const calculateDTI = () => {
    const income = parseFloat(monthlyIncome) || 0;
    const housing = parseFloat(housingPayment) || 0;
    const car = parseFloat(carPayments) || 0;
    const credit = parseFloat(creditCards) || 0;
    const student = parseFloat(studentLoans) || 0;
    const other = parseFloat(otherDebts) || 0;

    const totalDebt = housing + car + credit + student + other;
    const frontEndRatio = (housing / income) * 100;
    const backEndRatio = (totalDebt / income) * 100;

    // Determine approval likelihood
    let approvalStatus = 'excellent';
    let approvalMessage = 'Excellent DTI ratios - you should qualify for the best rates!';
    let recommendations = ['You\'re in great shape for a mortgage approval'];

    if (frontEndRatio > 28 || backEndRatio > 36) {
      approvalStatus = 'challenging';
      approvalMessage = 'Your DTI ratios may make approval challenging with conventional loans';
      recommendations = [
        'Consider paying down some debts before applying',
        'Explore FHA loans (more flexible DTI requirements)',
        'Look into non-QM loan programs',
        'Consider increasing your income with a co-borrower'
      ];
    } else if (frontEndRatio > 25 || backEndRatio > 32) {
      approvalStatus = 'good';
      approvalMessage = 'Good DTI ratios - you should qualify for most loan programs';
      recommendations = [
        'You\'re in good shape for approval',
        'Consider the benefits of different loan programs'
      ];
    }

    setResults({
      frontEndRatio: frontEndRatio.toFixed(1),
      backEndRatio: backEndRatio.toFixed(1),
      totalMonthlyDebt: totalDebt,
      approvalStatus,
      approvalMessage,
      recommendations
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'green';
      case 'good': return 'blue';
      case 'challenging': return 'yellow';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <TrendingDown className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Debt-to-Income Ratio Calculator
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Calculate your DTI ratios to understand your mortgage approval chances in Orange County.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Monthly Income & Debts</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Gross Monthly Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="8,000"
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">Before taxes and deductions</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Monthly Debt Payments</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Proposed Housing Payment
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="number"
                        value={housingPayment}
                        onChange={(e) => setHousingPayment(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2,500"
                      />
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Principal, interest, taxes, insurance</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Car Payments
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="number"
                        value={carPayments}
                        onChange={(e) => setCarPayments(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Credit Card Minimum Payments
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="number"
                        value={creditCards}
                        onChange={(e) => setCreditCards(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="150"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Student Loan Payments
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="number"
                        value={studentLoans}
                        onChange={(e) => setStudentLoans(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Other Monthly Debts
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="number"
                        value={otherDebts}
                        onChange={(e) => setOtherDebts(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Personal loans, alimony, etc.</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={calculateDTI}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Calculate DTI Ratios
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your DTI Results</h2>
            
            {results ? (
              <div className="space-y-6">
                <div className={`bg-${getStatusColor(results.approvalStatus)}-50 border border-${getStatusColor(results.approvalStatus)}-200 rounded-lg p-4`}>
                  <div className="flex items-center mb-2">
                    <AlertCircle className={`w-5 h-5 text-${getStatusColor(results.approvalStatus)}-600 mr-2`} />
                    <h3 className={`text-lg font-semibold text-${getStatusColor(results.approvalStatus)}-800`}>Approval Outlook</h3>
                  </div>
                  <p className={`text-${getStatusColor(results.approvalStatus)}-700`}>{results.approvalMessage}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                    <h3 className="text-sm font-medium text-slate-600 mb-1">Front-End DTI</h3>
                    <p className="text-2xl font-bold text-slate-900">{results.frontEndRatio}%</p>
                    <p className="text-xs text-slate-500">Housing only</p>
                  </div>
                  
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                    <h3 className="text-sm font-medium text-slate-600 mb-1">Back-End DTI</h3>
                    <p className="text-2xl font-bold text-slate-900">{results.backEndRatio}%</p>
                    <p className="text-xs text-slate-500">All debts</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Total Monthly Debt</h3>
                  <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.totalMonthlyDebt)}</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="text-sm text-slate-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calculator className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Enter your income and debts to calculate your DTI ratios</p>
              </div>
            )}
          </div>
        </div>

        {/* DTI Guidelines */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">DTI Guidelines by Loan Type</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Conventional Loans</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Front-end: Up to 28%</li>
                <li>• Back-end: Up to 36%</li>
                <li>• Best rates with lower DTI</li>
              </ul>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">FHA Loans</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Front-end: Up to 31%</li>
                <li>• Back-end: Up to 43%</li>
                <li>• More flexible guidelines</li>
              </ul>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">VA Loans</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• No front-end limit</li>
                <li>• Back-end: Up to 41%</li>
                <li>• Residual income considered</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">
              Need help improving your DTI or finding the right loan program? Mo Abdel can help.
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



