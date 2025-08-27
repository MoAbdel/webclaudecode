'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calculator, ArrowRight, Shield, ChevronRight, ChevronLeft, MapPin, DollarSign, Home, Calendar, User, Phone, Mail, FileText } from "lucide-react";
import { fbTrack } from '@/components/FacebookPixel';

// Compliant 2025 Orange County Data (verified via web search)
const ORANGE_COUNTY_DATA = {
  conformingLimit: 1209750,
  lowBalanceLimit: 806500,
  fhaLimit: 1209750,
  averagePropertyTaxRate: 0.0067, // 0.67%
  homeownersExemption: 7000
};

const ORANGE_COUNTY_CITIES = [
  'Irvine', 'Newport Beach', 'Huntington Beach', 'Costa Mesa', 'Mission Viejo',
  'Anaheim', 'Santa Ana', 'Fullerton', 'Garden Grove', 'Orange',
  'Fountain Valley', 'Laguna Beach', 'Laguna Niguel', 'Dana Point',
  'Yorba Linda', 'Seal Beach', 'Westminster', 'Lake Forest'
];

const LOAN_PROGRAMS = {
  purchase: {
    title: 'Home Purchase',
    description: 'Buying your new Orange County home',
    programs: ['Conventional', 'FHA (3.5% down)', 'VA (0% down)', 'Jumbo', 'First-Time Buyer Programs']
  },
  refinance: {
    title: 'Rate & Term Refinance', 
    description: 'Lower your rate or change loan terms',
    programs: ['Conventional Refi', 'FHA Streamline', 'VA IRRRL', 'Cash-Out Options']
  },
  'cash-out': {
    title: 'Cash-Out Refinance',
    description: 'Access your home equity for improvements or investments',
    programs: ['Conventional Cash-Out', 'FHA Cash-Out', 'VA Cash-Out', 'HELOC Alternative']
  },
  heloc: {
    title: 'HELOC',
    description: 'Home Equity Line of Credit for flexible access to funds',
    programs: ['Traditional HELOC', 'Fixed-Rate HELOC', 'Interest-Only Options']
  },
  heloan: {
    title: 'HELOAN',
    description: 'Home Equity Loan with fixed rate and monthly payments',
    programs: ['Fixed-Rate HELOAN', 'Lump Sum Loan', 'Predictable Payments']
  },
  investment: {
    title: 'Investment Property',
    description: 'Financing for Orange County rental properties',
    programs: ['Conventional Investment', 'DSCR Loans', 'Bank Statement Programs', 'Asset-Based Lending']
  }
};

interface FormData {
  // Step 1: Location & Purpose
  city: string;
  loanPurpose: string;
  timeline: string;
  
  // Step 2: Loan Details
  loanAmount: string;
  homeValue: string;
  downPayment: string;
  // Refinance specific fields
  currentLoanAmount: string;
  currentRate: string;
  cashOutAmount: string;
  loanType: string;
  
  // Step 3: Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

interface CalculatorResults {
  monthlyPayment: number;
  principalAndInterest: number;
  propertyTax: number;
  insurance: number;
  loanType: string;
  isJumbo: boolean;
  availablePrograms: string[];
  currentPayment?: number;
  monthlySavings?: number;
  newRate?: number;
  currentRate?: number;
}

export default function EnhancedQuickQuote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    city: '',
    loanPurpose: '',
    timeline: '',
    loanAmount: '',
    homeValue: '',
    downPayment: '',
    currentLoanAmount: '',
    currentRate: '',
    cashOutAmount: '',
    loanType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Google Ads conversion tracking
  const gtagSendEvent = (url?: string) => {
    const callback = function () {
      if (typeof url === 'string') {
        window.location.href = url;
      }
    };
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ads_conversion_Contact_Us_1', {
        'event_callback': callback,
        'event_timeout': 2000,
      });
    }
    return false;
  };

  // Calculate mortgage details
  const calculateMortgageDetails = () => {
    let loanAmount = 0;
    let homeValue = 0;
    let currentRate = 0;
    
    // Handle different loan purposes
    if (formData.loanPurpose === 'purchase') {
      loanAmount = parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0;
      homeValue = parseFloat(formData.homeValue.replace(/[^0-9.]/g, '')) || 0;
    } else if (formData.loanPurpose === 'refinance') {
      loanAmount = parseFloat(formData.currentLoanAmount.replace(/[^0-9.]/g, '')) || 0;
      homeValue = parseFloat(formData.homeValue.replace(/[^0-9.]/g, '')) || loanAmount * 1.25; // Estimate if not provided
      currentRate = parseFloat(formData.currentRate) / 100 || 0;
    } else if (formData.loanPurpose === 'cash-out') {
      const currentLoan = parseFloat(formData.currentLoanAmount.replace(/[^0-9.]/g, '')) || 0;
      const cashOut = parseFloat(formData.cashOutAmount.replace(/[^0-9.]/g, '')) || 0;
      loanAmount = currentLoan + cashOut;
      homeValue = parseFloat(formData.homeValue.replace(/[^0-9.]/g, '')) || loanAmount * 1.25; // Estimate if not provided
      currentRate = parseFloat(formData.currentRate) / 100 || 0;
    } else {
      // For HELOC, investment, etc.
      loanAmount = parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0;
      homeValue = parseFloat(formData.homeValue.replace(/[^0-9.]/g, '')) || 0;
    }
    
    if (loanAmount <= 0) return null;

    // Determine loan type based on user selection and amount
    let loanType = formData.loanType;
    
    // For HELOC and HELOAN, don't use traditional loan types
    if (['heloc', 'heloan'].includes(formData.loanPurpose)) {
      loanType = formData.loanPurpose === 'heloc' ? 'HELOC' : 'HELOAN';
    } else {
      loanType = loanType || 'Conventional';
      const isJumbo = loanAmount > ORANGE_COUNTY_DATA.conformingLimit;
      if (isJumbo && loanType === 'Conventional') {
        loanType = 'Jumbo';
      }
    }
    
    // Current market rates (2025)
    const getRateByLoanType = (type: string) => {
      switch (type.toLowerCase()) {
        case 'fha': return 0.061; // 6.1%
        case 'va': return 0.055; // 5.5%
        case 'jumbo': return 0.065; // 6.5%
        case 'heloc': return 0.0875; // 8.75% (Prime + margin)
        case 'heloan': return 0.085; // 8.5% (Fixed rate)
        case 'conventional':
        default: return 0.0625; // 6.25%
      }
    };
    
    const newInterestRate = getRateByLoanType(loanType);
    
    // Calculate monthly payment
    const monthlyRate = newInterestRate / 12;
    let principalAndInterest = 0;
    
    if (loanType === 'HELOC') {
      // HELOC: Interest-only during draw period (first 10 years)
      principalAndInterest = loanAmount * monthlyRate;
    } else {
      // Standard P&I calculation for loans
      const numberOfPayments = 30 * 12; // 30 years
      principalAndInterest = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
    
    // Calculate current payment for refinance comparison
    let currentPayment = 0;
    if ((formData.loanPurpose === 'refinance' || formData.loanPurpose === 'cash-out') && currentRate > 0) {
      const currentMonthlyRate = currentRate / 12;
      const currentLoanBalance = parseFloat(formData.currentLoanAmount.replace(/[^0-9.]/g, '')) || 0;
      const numberOfPayments = 30 * 12; // 30 years
      currentPayment = currentLoanBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, numberOfPayments)) / 
                      (Math.pow(1 + currentMonthlyRate, numberOfPayments) - 1);
    }
    
    // Calculate property tax (based on home value)
    const taxableValue = Math.max((homeValue || loanAmount * 1.25) - ORANGE_COUNTY_DATA.homeownersExemption, 0);
    const propertyTax = (taxableValue * ORANGE_COUNTY_DATA.averagePropertyTaxRate) / 12;
    
    // Estimate insurance ($3-4 per $1000 of home value annually)
    const insurance = ((homeValue || loanAmount * 1.25) * 0.0035) / 12;
    
    // Get available programs
    const selectedLoanPurpose = formData.loanPurpose;
    const availablePrograms = selectedLoanPurpose && LOAN_PROGRAMS[selectedLoanPurpose as keyof typeof LOAN_PROGRAMS] 
      ? LOAN_PROGRAMS[selectedLoanPurpose as keyof typeof LOAN_PROGRAMS].programs 
      : ['Conventional', 'FHA', 'VA', 'Jumbo'];

    const results: CalculatorResults = {
      monthlyPayment: principalAndInterest, // Only show P&I, not taxes/insurance
      principalAndInterest,
      propertyTax,
      insurance,
      loanType,
      isJumbo: loanAmount > ORANGE_COUNTY_DATA.conformingLimit,
      availablePrograms,
      currentPayment, // Add current payment for comparison
      monthlySavings: currentPayment > 0 ? Math.max(0, currentPayment - principalAndInterest) : 0,
      newRate: newInterestRate * 100,
      currentRate: currentRate * 100
    };

    setCalculatorResults(results);
    return results;
  };

  // Update calculator when relevant fields change
  useEffect(() => {
    const hasRequiredFields = 
      (formData.loanPurpose === 'purchase' && formData.loanAmount) ||
      (formData.loanPurpose === 'refinance' && formData.currentLoanAmount) ||
      (formData.loanPurpose === 'cash-out' && formData.currentLoanAmount) ||
      (formData.loanPurpose && !['purchase', 'refinance', 'cash-out'].includes(formData.loanPurpose) && formData.loanAmount);
    
    if (hasRequiredFields && (currentStep >= 2 || showSuccess === false)) {
      calculateMortgageDetails();
    }
  }, [formData.loanAmount, formData.homeValue, formData.loanPurpose, formData.currentLoanAmount, formData.currentRate, formData.cashOutAmount, formData.loanType, currentStep]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      
      // Track progression for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_step_complete', {
          step: currentStep,
          loan_purpose: formData.loanPurpose,
          city: formData.city
        });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          loan_type: formData.loanPurpose || 'purchase',
          loan_amount: parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0,
          notes: `Enhanced Quote - City: ${formData.city}, Loan Amount: ${formData.loanAmount}, Home Value: ${formData.homeValue}, Timeline: ${formData.timeline}, Purpose: ${formData.loanPurpose}${calculatorResults ? `, Estimated Payment: $${Math.round(calculatorResults.monthlyPayment)}` : ''}${formData.additionalInfo ? ', Additional Info: ' + formData.additionalInfo : ''}`,
          status: "new"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote');
      }
      
      // Track conversions
      gtagSendEvent();
      fbTrack('Lead', {
        content_name: 'Enhanced Quick Quote Submission',
        content_category: 'mortgage_quote',
        value: calculatorResults?.monthlyPayment || 0,
        currency: 'USD'
      });
      
      setShowSuccess(true);
      setFormData({
        city: '', loanPurpose: '', timeline: '', loanAmount: '', homeValue: '', 
        downPayment: '', currentLoanAmount: '', currentRate: '', cashOutAmount: '', loanType: '',
        firstName: '', lastName: '', email: '', phone: '', additionalInfo: ''
      });
      setCurrentStep(1);
      setCalculatorResults(null);
    } catch (error) {
      console.error("Error submitting quote request:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
    
    setIsSubmitting(false);
  };

  // Success state
  if (showSuccess) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You for Your Orange County Mortgage Inquiry!</h3>
              <p className="text-slate-600 mb-6">
                We received your information and will be reaching out within 1 business day with your personalized rate quote for {formData.city ? `${formData.city}, ` : ''}Orange County. 
                Mo will personally review your details to ensure you get the best possible terms from our 200+ lender network.
              </p>
              {calculatorResults && (
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-600">
                    <strong>Your Estimated Monthly Payment:</strong> ${Math.round(calculatorResults.monthlyPayment).toLocaleString()}*
                    <br />
                    <em className="text-xs">*Educational estimate only. Actual rates and payments determined after application and credit review.</em>
                  </p>
                </div>
              )}
              <Button 
                onClick={() => setShowSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Another Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const isStep1Complete = formData.city && formData.loanPurpose && formData.timeline;
  
  const isStep2Complete = () => {
    // Loan type not required for HELOC and HELOAN
    if (!['heloc', 'heloan'].includes(formData.loanPurpose) && !formData.loanType) return false;
    
    if (formData.loanPurpose === 'purchase') {
      return formData.loanAmount && formData.homeValue;
    } else if (formData.loanPurpose === 'refinance') {
      return formData.currentLoanAmount && formData.currentRate && formData.homeValue;
    } else if (formData.loanPurpose === 'cash-out') {
      return formData.currentLoanAmount && formData.currentRate && formData.cashOutAmount && formData.homeValue;
    } else {
      return formData.loanAmount && formData.homeValue;
    }
  };
  
  const isStep3Complete = formData.firstName && formData.lastName && formData.email && formData.phone;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with SEO-optimized content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Your Orange County Mortgage Rate Quote
          </h2>
          <p className="text-xl text-slate-600 mb-4">
            Personalized rates from 200+ lenders • 3-step process • NMLS #1426884
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 mb-6">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-green-600 mr-1" />
              No credit impact
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-blue-600 mr-1" />
              Orange County expert
            </div>
            <div className="flex items-center">
              <Calculator className="w-4 h-4 text-purple-600 mr-1" />
              Instant estimates
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <ChevronRight className={`w-4 h-4 mx-2 ${
                    currentStep > step ? 'text-blue-600' : 'text-slate-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Step headers */}
          <div className="bg-slate-50 px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-slate-900">
              {currentStep === 1 && (
                <>
                  <MapPin className="w-5 h-5 inline mr-2 text-blue-600" />
                  Step 1: Orange County Location & Loan Purpose
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Calculator className="w-5 h-5 inline mr-2 text-purple-600" />
                  Step 2: Loan Details & Payment Calculator
                </>
              )}
              {currentStep === 3 && (
                <>
                  <User className="w-5 h-5 inline mr-2 text-green-600" />
                  Step 3: Contact Information & Next Steps
                </>
              )}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {showError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">
                  There was an error submitting your request. Please try again or call us directly at (949) 579-2057.
                </p>
              </div>
            )}

            {/* Step 1: Location & Purpose */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
                    Orange County City or Area *
                  </label>
                  <select
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your city...</option>
                    {ORANGE_COUNTY_CITIES.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                    <option value="other">Other Orange County Area</option>
                  </select>
                  <p className="mt-1 text-xs text-slate-500">
                    Serving all Orange County cities with local market expertise
                  </p>
                </div>

                <div>
                  <label htmlFor="loan-purpose" className="block text-sm font-medium text-slate-700 mb-2">
                    What's your loan purpose? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(LOAN_PROGRAMS).map(([key, program]) => (
                      <div key={key}>
                        <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.loanPurpose === key 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}>
                          <input
                            type="radio"
                            name="loanPurpose"
                            value={key}
                            checked={formData.loanPurpose === key}
                            onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                            className="sr-only"
                          />
                          <div className="font-medium text-slate-900">{program.title}</div>
                          <div className="text-sm text-slate-600">{program.description}</div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    required
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP (Pre-approved buyers)</option>
                    <option value="30-days">Within 30 days</option>
                    <option value="60-days">Within 60 days</option>
                    <option value="90-days">Within 90 days</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                {/* Show selected program benefits */}
                {formData.loanPurpose && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 mb-2">
                      Available Programs for {LOAN_PROGRAMS[formData.loanPurpose as keyof typeof LOAN_PROGRAMS].title}:
                    </h4>
                    <div className="space-y-1">
                      {LOAN_PROGRAMS[formData.loanPurpose as keyof typeof LOAN_PROGRAMS].programs.map((program, index) => (
                        <div key={index} className="flex items-center text-sm text-slate-700">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Loan Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Loan Type Selection - Hide for HELOC and HELOAN */}
                {!['heloc', 'heloan'].includes(formData.loanPurpose) && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Loan Type *
                    </label>
                    <select
                      value={formData.loanType}
                      onChange={(e) => handleInputChange('loanType', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select loan type</option>
                      <option value="Conventional">Conventional</option>
                      <option value="FHA">FHA</option>
                      <option value="VA">VA</option>
                      <option value="Jumbo">Jumbo</option>
                      <option value="USDA">USDA</option>
                    </select>
                  </div>
                )}

                {/* Purchase Fields */}
                {formData.loanPurpose === 'purchase' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Home Purchase Price *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.homeValue}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('homeValue', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('homeValue', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="750,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Loan Amount *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.loanAmount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('loanAmount', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('loanAmount', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="600,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Down Payment (Optional)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.downPayment}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('downPayment', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('downPayment', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="150,000"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Refinance Fields */}
                {formData.loanPurpose === 'refinance' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Home Value *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.homeValue}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('homeValue', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('homeValue', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="950,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Loan Balance *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.currentLoanAmount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('currentLoanAmount', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('currentLoanAmount', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="650,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Interest Rate (%) *
                      </label>
                      <input
                        type="text"
                        value={formData.currentRate}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9.]/g, '');
                          handleInputChange('currentRate', value);
                        }}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="7.25"
                        required
                      />
                    </div>
                  </>
                )}

                {/* Cash-Out Refinance Fields */}
                {formData.loanPurpose === 'cash-out' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Home Value *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.homeValue}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('homeValue', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('homeValue', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="950,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Loan Balance *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.currentLoanAmount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('currentLoanAmount', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('currentLoanAmount', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="650,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Interest Rate (%) *
                      </label>
                      <input
                        type="text"
                        value={formData.currentRate}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9.]/g, '');
                          handleInputChange('currentRate', value);
                        }}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="7.25"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Desired Cash-Out Amount *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.cashOutAmount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('cashOutAmount', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('cashOutAmount', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="100,000"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Other Loan Types (HELOC, Investment, etc.) */}
                {!['purchase', 'refinance', 'cash-out'].includes(formData.loanPurpose) && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Property Value *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.homeValue}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('homeValue', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('homeValue', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="750,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Desired Loan Amount *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.loanAmount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              handleInputChange('loanAmount', parseInt(value).toLocaleString());
                            } else {
                              handleInputChange('loanAmount', '');
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="600,000"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Loan limits information */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">2025 Orange County Loan Limits:</h4>
                  <div className="text-sm text-slate-600 space-y-1">
                    <div>• Conventional/FHA: Up to ${ORANGE_COUNTY_DATA.conformingLimit.toLocaleString()}</div>
                    <div>• Jumbo Loans: Above ${ORANGE_COUNTY_DATA.conformingLimit.toLocaleString()}</div>
                  </div>
                </div>

                {/* Live calculator results */}
                {calculatorResults && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Calculator className="w-4 h-4 mr-2" />
                      {(formData.loanPurpose === 'refinance' || formData.loanPurpose === 'cash-out') ? 
                        'New Estimated Payment' : 'Estimated Monthly Payment'}
                    </h4>
                    
                    <div className="text-2xl font-bold text-green-700 mb-2">
                      ${Math.round(calculatorResults.monthlyPayment).toLocaleString()}
                      <span className="text-base font-normal text-slate-600 ml-2">
                        {calculatorResults.loanType === 'HELOC' ? 'Interest Only' : 'Principal & Interest'}
                      </span>
                    </div>

                    {/* Show current vs new comparison for refinances */}
                    {(calculatorResults.currentPayment && calculatorResults.currentPayment > 0) && (
                      <div className="mb-3 p-3 bg-blue-100 rounded-lg">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-600">Current Rate:</span>
                            <div className="font-semibold">{calculatorResults.currentRate?.toFixed(2)}%</div>
                          </div>
                          <div>
                            <span className="text-slate-600">New Rate:</span>
                            <div className="font-semibold text-green-700">{calculatorResults.newRate?.toFixed(2)}%</div>
                          </div>
                          <div>
                            <span className="text-slate-600">Current P&I:</span>
                            <div className="font-semibold">${Math.round(calculatorResults.currentPayment).toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-slate-600">New P&I:</span>
                            <div className="font-semibold text-green-700">${Math.round(calculatorResults.principalAndInterest).toLocaleString()}</div>
                          </div>
                        </div>
                        {calculatorResults.monthlySavings && calculatorResults.monthlySavings > 0 && (
                          <div className="mt-2 text-center">
                            <span className="text-green-700 font-bold">
                              Monthly Savings: ${Math.round(calculatorResults.monthlySavings).toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Loan Type:</span>
                      <Badge variant={calculatorResults.isJumbo ? "secondary" : "default"}>
                        {calculatorResults.loanType}
                      </Badge>
                    </div>

                    <div className="text-sm text-slate-600 text-center">
                      <div className="mt-2 text-xs text-slate-500">
                        *{calculatorResults.loanType === 'HELOC' ? 'Interest only payment during draw period (10 years)' : 'Principal & Interest only'}. 
                        Property tax and insurance not included. Rates shown are sample estimates for educational purposes. 
                        Your actual rate and payment will be determined after application, credit check, 
                        and income verification. NMLS #1426884.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        id="first-name"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        id="last-name"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      id="email-address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone-number" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(949) 555-0123"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="additional-info" className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Information
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <textarea
                      id="additional-info"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any questions or special circumstances we should know about?"
                    ></textarea>
                  </div>
                </div>

                {/* Summary of what they entered */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Your Orange County Mortgage Summary:</h4>
                  <div className="text-sm text-slate-600 space-y-1">
                    <div>• Location: {formData.city}, Orange County</div>
                    <div>• Purpose: {LOAN_PROGRAMS[formData.loanPurpose as keyof typeof LOAN_PROGRAMS]?.title}</div>
                    <div>• Timeline: {formData.timeline}</div>
                    {formData.loanAmount && <div>• Loan Amount: ${parseInt(formData.loanAmount.replace(/,/g, '')).toLocaleString()}</div>}
                    {calculatorResults && <div>• Estimated Payment: ${Math.round(calculatorResults.monthlyPayment).toLocaleString()}/month</div>}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="ghost"
                className="flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              {currentStep < 3 && (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !isStep1Complete) ||
                    (currentStep === 2 && !isStep2Complete())
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                >
                  Next Step
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}

              {currentStep === 3 && (
                <Button
                  type="submit"
                  disabled={isSubmitting || !isStep3Complete}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    "Getting Your Quote..."
                  ) : (
                    <>
                      Get My Orange County Rate Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>

          {/* Security notice */}
          <div className="px-6 pb-6">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Your information is secure and will never be shared. NMLS #1426884 • Equal Housing Opportunity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}