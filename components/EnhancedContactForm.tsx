'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calculator, ArrowRight, Shield, ChevronRight, ChevronLeft, MapPin, DollarSign, Home, Calendar, User, Phone, Mail, FileText } from "lucide-react";
import { fbTrack } from '@/components/FacebookPixel';

// Compliant 2025 Orange County Data
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
  monthlyDifference?: number; // Can be positive (savings) or negative (cost increase)
  newRate?: number;
  currentRate?: number;
}

export default function EnhancedContactForm() {
  // Google Ads conversion tracking function
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
      if (currentLoanBalance > 0) {
        const numberOfPayments = 30 * 12; // 30 years
        currentPayment = currentLoanBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, numberOfPayments)) / 
                        (Math.pow(1 + currentMonthlyRate, numberOfPayments) - 1);
        // Ensure the result is valid
        if (isNaN(currentPayment) || currentPayment <= 0) {
          currentPayment = 0;
        }
      }
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

    const isJumbo = loanAmount > ORANGE_COUNTY_DATA.conformingLimit;

    const results: CalculatorResults = {
      monthlyPayment: principalAndInterest, // Only show P&I, not taxes/insurance
      principalAndInterest,
      propertyTax,
      insurance,
      loanType,
      isJumbo,
      availablePrograms,
      currentPayment, // Add current payment for comparison
      monthlySavings: currentPayment > 0 ? Math.max(0, currentPayment - principalAndInterest) : 0, // Legacy field for positive savings only
      monthlyDifference: currentPayment > 0 ? (currentPayment - principalAndInterest) : 0, // Actual difference (can be negative)
      newRate: (currentPayment > 0 && currentRate > 0) ? newInterestRate * 100 : undefined,
      currentRate: (currentPayment > 0 && currentRate > 0) ? currentRate * 100 : undefined
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
  }, [formData.loanAmount, formData.homeValue, formData.loanPurpose, formData.currentLoanAmount, formData.currentRate, formData.cashOutAmount, formData.loanType]);

  const handleInputChange = (field: string, value: string) => {
    // Redirect to non-QM loan page when investment is selected
    if (field === 'loanPurpose' && value === 'investment') {
      window.location.href = '/loan-programs/non-qm-loans';
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Auto-calculate loan amount for purchases
    if (field === 'homeValue' && formData.loanPurpose === 'purchase') {
      const homeValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
      const downPaymentPercent = 0.20; // Default 20% down
      const calculatedLoanAmount = homeValue * (1 - downPaymentPercent);
      if (calculatedLoanAmount > 0) {
        setFormData(prev => ({
          ...prev,
          loanAmount: calculatedLoanAmount.toString()
        }));
      }
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedToStep2 = () => {
    return formData.city && formData.loanPurpose && formData.timeline;
  };

  const canProceedToStep3 = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const results = calculateMortgageDetails();
      
      // Submit to Supabase via API
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          loan_type: formData.loanPurpose || 'inquiry',
          loan_amount: parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0,
          notes: `Enhanced Contact Form - City: ${formData.city}, Timeline: ${formData.timeline}, Home Value: ${formData.homeValue || 'N/A'}, Down Payment: ${formData.downPayment || 'N/A'}${formData.additionalInfo ? ', Additional Info: ' + formData.additionalInfo : ''}${results ? `, Est. Monthly Payment: $${Math.round(results.monthlyPayment)}, Loan Type: ${results.loanType}` : ''}`,
          status: 'new'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }
      
      // Track Google Ads conversion
      gtagSendEvent();
      
      // Track Facebook Pixel conversion
      fbTrack('Lead', {
        content_name: 'Enhanced Contact Form Submission',
        content_category: 'mortgage_inquiry',
        value: parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0,
        currency: 'USD'
      });
      
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting enhanced contact form:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
    
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
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
    setCurrentStep(1);
    setCalculatorResults(null);
    setShowSuccess(false);
    setShowError(false);
  };

  if (showSuccess) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You for Your Detailed Information!</h3>
          
          {calculatorResults && (
            <div className="bg-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Your Estimated Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Est. Monthly Payment:</span>
                  <span className="font-semibold">${Math.round(calculatorResults.monthlyPayment).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Type:</span>
                  <span className="font-semibold">{calculatorResults.loanType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">City:</span>
                  <span className="font-semibold">{formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Timeline:</span>
                  <span className="font-semibold">{formData.timeline}</span>
                </div>
              </div>
            </div>
          )}
          
          <p className="text-slate-600 mb-6">
            Mo will personally review your information and contact you within 1 business day with:
          </p>
          <ul className="text-left text-slate-700 mb-6 space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">•</span>
              <span>Personalized rate quotes for your situation</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">•</span>
              <span>Multiple program options and comparisons</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">•</span>
              <span>Pre-approval process and next steps</span>
            </li>
          </ul>
          
          <Button 
            onClick={resetForm}
            className="bg-blue-600 hover:bg-blue-700 mb-4"
          >
            Submit Another Quote Request
          </Button>
          
          <p className="text-sm text-slate-500">
            Need immediate assistance? Call Mo directly at{' '}
            <a href="tel:(949) 579-2057" className="text-blue-600 hover:text-blue-700 font-semibold">
              (949) 579-2057
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Calculator className="w-6 h-6 mr-3" />
            <span>Get Your Personalized Quote</span>
          </div>
          <Badge variant="secondary" className="bg-blue-800 text-blue-100">
            Step {currentStep} of 3
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {showError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">
              There was an error submitting your request. Please try again or call us directly at (949) 579-2057.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Location & Purpose</h3>
                <p className="text-slate-600">Tell us about your Orange County mortgage needs</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Orange County City *
                </label>
                <select 
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your city</option>
                  {ORANGE_COUNTY_CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                  <option value="other">Other Orange County City</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Purpose *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(LOAN_PROGRAMS).map(([key, program]) => (
                    <label 
                      key={key}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.loanPurpose === key 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="loanPurpose"
                        value={key}
                        checked={formData.loanPurpose === key}
                        onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">{program.title}</div>
                        <div className="text-sm text-slate-600">{program.description}</div>
                      </div>
                      {formData.loanPurpose === key && (
                        <ChevronRight className="w-5 h-5 text-blue-600" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Timeline *
                </label>
                <select 
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">When do you need this?</option>
                  <option value="asap">ASAP (within 2 weeks)</option>
                  <option value="30-days">Within 30 days</option>
                  <option value="60-days">Within 60 days</option>
                  <option value="90-days">Within 90 days</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Loan Details</h3>
                <p className="text-slate-600">Help us calculate your estimated payments</p>
              </div>

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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="750,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Loan Amount *
                    </label>
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="600,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Down Payment (Optional)
                    </label>
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="150,000"
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="950,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Loan Balance *
                    </label>
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="650,000"
                      required
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="950,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Loan Balance *
                    </label>
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="650,000"
                      required
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="100,000"
                      required
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="750,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Desired Loan Amount *
                    </label>
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="600,000"
                      required
                    />
                  </div>
                </>
              )}

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
                      {calculatorResults.loanType === 'HELOC' ? '' : 'Principal & Interest'}
                    </span>
                  </div>

                  {/* Show current vs new comparison for refinances */}
                  {(calculatorResults.currentPayment && calculatorResults.currentPayment > 0 && calculatorResults.currentRate && calculatorResults.currentRate > 0 && calculatorResults.newRate && calculatorResults.newRate > 0) && (
                    <div className="mb-3 p-3 bg-blue-100 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Current Rate:</span>
                          <div className="font-semibold">{calculatorResults.currentRate.toFixed(2)}%</div>
                        </div>
                        <div>
                          <span className="text-slate-600">New Rate:</span>
                          <div className="font-semibold text-green-700">{calculatorResults.newRate.toFixed(2)}%</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Current P&I:</span>
                          <div className="font-semibold">${Math.round(calculatorResults.currentPayment).toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-slate-600">New P&I:</span>
                          <div className={`font-semibold ${calculatorResults.monthlyDifference && calculatorResults.monthlyDifference < 0 ? 'text-red-600' : 'text-green-700'}`}>
                            ${Math.round(calculatorResults.principalAndInterest).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      {calculatorResults.monthlyDifference && Math.abs(calculatorResults.monthlyDifference) > 5 && (
                        <div className="mt-2 text-center">
                          {calculatorResults.monthlyDifference > 0 ? (
                            <span className="text-green-700 font-bold">
                              Monthly Savings: ${Math.round(calculatorResults.monthlyDifference).toLocaleString()}
                            </span>
                          ) : (
                            <div className="space-y-1">
                              <span className="text-red-600 font-bold">
                                Monthly Increase: ${Math.round(Math.abs(calculatorResults.monthlyDifference)).toLocaleString()}
                              </span>
                              <div className="text-xs text-red-600">
                                ⚠️ Your current rate is better - refinancing not recommended
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-sm text-slate-600 text-center">
                    <div className="mt-2 text-xs text-slate-500">
                      *{calculatorResults.loanType === 'HELOC' ? 'Monthly payment estimate' : 'Principal & Interest only'}. 
                      Estimate based on {calculatorResults.loanType || 'current'} loan at {calculatorResults.newRate?.toFixed(2)}%. 
                      {calculatorResults.loanType !== 'HELOC' && 'Does not include taxes, insurance, or HOA. '}
                      Actual rates and terms may vary.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <User className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
                <p className="text-slate-600">Almost done! How can Mo reach you?</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(949) 123-4567"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific questions, credit concerns, or special circumstances..."
                />
              </div>

              {calculatorResults && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Your Quote Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">City:</span>
                      <div className="font-semibold">{formData.city}</div>
                    </div>
                    <div>
                      <span className="text-slate-600">Loan Type:</span>
                      <div className="font-semibold">{LOAN_PROGRAMS[formData.loanPurpose as keyof typeof LOAN_PROGRAMS]?.title}</div>
                    </div>
                    <div>
                      <span className="text-slate-600">Loan Amount:</span>
                      <div className="font-semibold">
                        {(() => {
                          let amount = 0;
                          if (formData.loanPurpose === 'purchase') {
                            amount = parseFloat(formData.loanAmount?.replace(/[^0-9.]/g, '') || '0');
                          } else if (formData.loanPurpose === 'refinance') {
                            amount = parseFloat(formData.currentLoanAmount?.replace(/[^0-9.]/g, '') || '0');
                          } else if (formData.loanPurpose === 'cash-out') {
                            const currentLoan = parseFloat(formData.currentLoanAmount?.replace(/[^0-9.]/g, '') || '0');
                            const cashOut = parseFloat(formData.cashOutAmount?.replace(/[^0-9.]/g, '') || '0');
                            amount = currentLoan + cashOut;
                          } else {
                            amount = parseFloat(formData.loanAmount?.replace(/[^0-9.]/g, '') || '0');
                          }
                          return amount > 0 ? `$${amount.toLocaleString()}` : 'N/A';
                        })()}
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-600">Est. Payment:</span>
                      <div className="font-semibold text-green-700">${Math.round(calculatorResults.monthlyPayment).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                className="flex items-center text-slate-600 hover:text-slate-900"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
            )}

            {currentStep === 1 && <div></div>}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !canProceedToStep2()) ||
                  (currentStep === 2 && !canProceedToStep3())
                }
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Get My Personalized Quote
                  </>
                )}
              </Button>
            )}
          </div>
        </form>

        <p className="text-xs text-slate-500 mt-4 text-center">
          By submitting this form, you consent to be contacted by Mo Abdel regarding mortgage services. 
          Your information will never be shared with third parties. NMLS #1426884
        </p>
      </CardContent>
    </Card>
  );
}