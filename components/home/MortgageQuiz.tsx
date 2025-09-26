'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Home, RefreshCw, Briefcase, ArrowRight, ArrowLeft, MapPin, CreditCard, Building, DollarSign, Percent } from "lucide-react";

interface QuizData {
  intent: string;
  zipCode: string;
  creditRange: string;
  occupancy: string;
  homeValue: string;
  purchasePrice: string;
  downPaymentPercent: string;
  currentRate: string;
  specialtyLoanType: string;
  cashAmount: string;
  firstName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const Progress = ({ value }: { value: number }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
);

export default function MortgageQuiz() {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<QuizData>({
    intent: "",
    zipCode: "",
    creditRange: "",
    occupancy: "",
    homeValue: "",
    purchasePrice: "",
    downPaymentPercent: "",
    currentRate: "",
    specialtyLoanType: "",
    cashAmount: "",
    firstName: "",
    email: "",
    phone: "",
    consent: false,
  });

  // Check for URL intent parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlIntent = urlParams.get('intent');
    if (urlIntent && ['purchase', 'refinance', 'specialty'].includes(urlIntent)) {
      setFormData(prev => ({ ...prev, intent: urlIntent }));
      setStep(2);
    }
  }, []);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Submit quiz data to the same API endpoint as contact forms
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          loan_type: formData.intent || 'quiz_inquiry',
          loan_amount: parseFloat(formData.purchasePrice?.replace(/[^0-9.]/g, '') || formData.homeValue?.replace(/[^0-9.]/g, '') || '0'),
          property_value: parseFloat(formData.homeValue?.replace(/[^0-9.]/g, '') || formData.purchasePrice?.replace(/[^0-9.]/g, '') || '0'),
          credit_score: formData.creditScore || null,
          down_payment: parseFloat(formData.downPayment?.replace(/[^0-9.]/g, '') || '0'),
          annual_income: parseFloat(formData.annualIncome?.replace(/[^0-9.]/g, '') || '0'),
          status: 'new',
          notes: `Quiz Submission - Intent: ${formData.intent}, Location: ${formData.zipCode}, Timeline: ${formData.timeline}, Current Rate: ${formData.currentRate || 'N/A'}, Down Payment %: ${formData.downPaymentPercent || 'N/A'}, Employment: ${formData.employment || 'N/A'}`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quiz');
      }

      console.log('Quiz submitted successfully:', formData);
      setIsComplete(true);

      // Track conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quiz_complete', {
          event_category: 'engagement',
          event_label: formData.intent
        });
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
      // Still show completion even if API fails
      setIsComplete(true);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.intent !== "";
      case 2:
        return formData.zipCode && formData.creditRange && formData.occupancy;
      case 3:
        if (formData.intent === 'purchase') {
          // For purchase: require purchasePrice and downPaymentPercent
          return formData.purchasePrice !== "" && formData.downPaymentPercent !== "";
        }

        if (formData.intent === 'refinance') {
          // For refinance: require homeValue, currentRate, and cashAmount
          return formData.homeValue !== "" && formData.currentRate !== "" && formData.cashAmount !== "";
        }

        if (formData.intent === 'specialty') {
          // For specialty: require homeValue, specialtyLoanType, and conditional fields
          const baseValid = formData.homeValue !== "" && formData.specialtyLoanType !== "";
          const needsCurrentRate = ['heloc', 'heloan', 'cash-out-refi'].includes(formData.specialtyLoanType);
          const needsCash = ['heloc', 'heloan', 'cash-out-refi'].includes(formData.specialtyLoanType);

          return baseValid &&
                 (!needsCurrentRate || formData.currentRate !== "") &&
                 (!needsCash || formData.cashAmount !== "");
        }

        return false;
      case 4:
        return formData.firstName && formData.email && formData.phone && formData.consent;
      default:
        return false;
    }
  };

  const progressPercentage = (step / 4) * 100;

  if (isComplete) {
    return (
      <section id="quiz" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-slate-200">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Thank You for Your Submission!
              </h2>

              <p className="text-xl text-slate-600 mb-8">
                Mo will be reaching out to you shortly with your personalized options.
              </p>

              <div className="flex justify-center">
                <Button variant="ghost" onClick={() => window.location.href = '/'}>
                  Return Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">Get Your Options</h2>
            <span className="text-sm text-slate-600">Step {step} of 4</span>
          </div>
          <Progress value={progressPercentage} />
        </div>

        <Card className="shadow-lg border-slate-200">
          <CardContent className="p-8">
            {step === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  What's your goal?
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'purchase', label: 'Buy a Home', icon: Home, description: 'Purchase a new primary residence, second home, or investment property' },
                    { id: 'refinance', label: 'Refinance', icon: RefreshCw, description: 'Lower rate, cash out equity, or change loan terms' },
                    { id: 'specialty', label: 'HELOC / Other', icon: Briefcase, description: 'Access home equity or specialized loan programs' }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData(prev => ({ ...prev, intent: option.id }))}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.intent === option.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <option.icon className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">{option.label}</div>
                          <div className="text-sm text-slate-600">{option.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Property Basics
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 92614"
                      value={formData.zipCode}
                      onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      maxLength={5}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <CreditCard className="w-4 h-4 inline mr-1" />
                      Estimated Credit Score
                    </label>
                    <select
                      value={formData.creditRange}
                      onChange={(e) => setFormData(prev => ({ ...prev, creditRange: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select range</option>
                      <option value="740+">740+ (Excellent)</option>
                      <option value="700-739">700-739 (Very Good)</option>
                      <option value="670-699">670-699 (Good)</option>
                      <option value="620-669">620-669 (Fair)</option>
                      <option value="<620">Below 620 (Building Credit)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Building className="w-4 h-4 inline mr-1" />
                      Property Use
                    </label>
                    <select
                      value={formData.occupancy}
                      onChange={(e) => setFormData(prev => ({ ...prev, occupancy: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select occupancy</option>
                      <option value="primary">Primary Residence</option>
                      <option value="secondary">Secondary/Vacation Home</option>
                      <option value="investment">Investment Property</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Property & Financial Details
                </h3>

                <div className="space-y-6">
                  {formData.intent === 'purchase' ? (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          Estimated Purchase Price
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. $950,000"
                          value={formData.purchasePrice}
                          onChange={(e) => setFormData(prev => ({ ...prev, purchasePrice: e.target.value }))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Percent className="w-4 h-4 inline mr-1" />
                          Down Payment Percentage
                        </label>
                        <select
                          value={formData.downPaymentPercent}
                          onChange={(e) => setFormData(prev => ({ ...prev, downPaymentPercent: e.target.value }))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select down payment</option>
                          <option value="3%">3% (Conventional)</option>
                          <option value="3.5%">3.5% (FHA)</option>
                          <option value="0%">0% (VA)</option>
                          <option value="5%">5%</option>
                          <option value="10%">10%</option>
                          <option value="15%">15%</option>
                          <option value="20%">20%</option>
                          <option value="25%">25%+</option>
                        </select>
                        <p className="text-xs text-slate-500 mt-1">Higher down payments typically get better rates</p>
                      </div>
                    </>
                  ) : formData.intent === 'refinance' ? (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          Current Home Value (Estimated)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. $850,000"
                          value={formData.homeValue}
                          onChange={(e) => setFormData(prev => ({ ...prev, homeValue: e.target.value }))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Percent className="w-4 h-4 inline mr-1" />
                          Current Mortgage Rate
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 7.25%"
                          value={formData.currentRate}
                          onChange={(e) => setFormData(prev => ({ ...prev, currentRate: e.target.value }))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <p className="text-xs text-slate-500 mt-1">Your current interest rate</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          Cash Out Amount
                        </label>
                        <select
                          value={formData.cashAmount}
                          onChange={(e) => setFormData(prev => ({ ...prev, cashAmount: e.target.value }))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select cash out amount</option>
                          <option value="No cash out needed">No cash out needed (Rate & Term)</option>
                          <option value="Under $50,000">Under $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                          <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                          <option value="Over $300,000">Over $300,000</option>
                        </select>
                        <p className="text-xs text-slate-500 mt-1">Select if you want to take cash out or just lower your rate</p>
                      </div>
                    </>
                  ) : (
                    // Specialty loans
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          Current Home Value (Estimated)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. $850,000"
                          value={formData.homeValue}
                          onChange={(e) => setFormData(prev => ({ ...prev, homeValue: e.target.value }))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Briefcase className="w-4 h-4 inline mr-1" />
                          What type of specialty loan do you need?
                        </label>
                        <select
                          value={formData.specialtyLoanType}
                          onChange={(e) => setFormData(prev => ({ ...prev, specialtyLoanType: e.target.value }))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select loan type</option>
                          <option value="heloc">HELOC (Home Equity Line of Credit)</option>
                          <option value="heloan">HELOAN (Home Equity Loan)</option>
                          <option value="cash-out-refi">Cash-Out Refinance</option>
                          <option value="bank-statement">Bank Statement Loan (Self-Employed)</option>
                          <option value="asset-based">Asset-Based Loan</option>
                          <option value="dscr">DSCR Investment Loan</option>
                          <option value="foreign-national">Foreign National Loan</option>
                          <option value="jumbo-non-qm">Jumbo Non-QM Loan</option>
                          <option value="fix-flip">Fix & Flip Loan</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                        <p className="text-xs text-slate-500 mt-1">Select the loan type that best fits your situation</p>
                      </div>

                      {['heloc', 'heloan', 'cash-out-refi'].includes(formData.specialtyLoanType) && (
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            <Percent className="w-4 h-4 inline mr-1" />
                            Current Mortgage Rate
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 7.25%"
                            value={formData.currentRate}
                            onChange={(e) => setFormData(prev => ({ ...prev, currentRate: e.target.value }))}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                          <p className="text-xs text-slate-500 mt-1">Your current interest rate (if applicable)</p>
                        </div>
                      )}

                      {['heloc', 'heloan', 'cash-out-refi'].includes(formData.specialtyLoanType) && (
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            <DollarSign className="w-4 h-4 inline mr-1" />
                            How much cash do you need?
                          </label>
                          <select
                            value={formData.cashAmount}
                            onChange={(e) => setFormData(prev => ({ ...prev, cashAmount: e.target.value }))}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select amount</option>
                            <option value="Under $50,000">Under $50,000</option>
                            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                            <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                            <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                            <option value="Over $300,000">Over $300,000</option>
                          </select>
                          <p className="text-xs text-slate-500 mt-1">Amount of cash you need access to</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Get Your Results
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="(949) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                        className="mt-1 mr-3 rounded border-slate-300 focus:ring-blue-500"
                        required
                      />
                      <span className="text-sm text-slate-600">
                        I agree to be contacted by Mo Abdel regarding mortgage options. This is not a loan approval or commitment to lend.
                        Message and data rates may apply.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              >
                {step === 4 ? 'Get My Options' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}