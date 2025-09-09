'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Calculator, ArrowRight, Shield } from "lucide-react";
import { fbTrack } from '@/components/FacebookPixel';

// Google Ads conversion tracking

export default function QuickQuote() {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    loanPurpose: "",
    loanAmount: "",
    timeline: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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
          loan_amount: 0, // Will be determined during consultation
          notes: `Quick Quote - Loan Amount: ${formData.loanAmount || 'Not specified'}, Timeline: ${formData.timeline || 'Not specified'}, Purpose: ${formData.loanPurpose || 'General inquiry'}${formData.additionalInfo ? ', Additional Info: ' + formData.additionalInfo : ''}`,
          status: "new"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote');
      }
      
      // Track Google Ads conversion
      gtagSendEvent();
      
      // Track Facebook Pixel conversion
      fbTrack('Lead', {
        content_name: 'Quick Quote Submission',
        content_category: 'rate_quote',
        value: 0,
        currency: 'USD'
      });
      
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        loanPurpose: "",
        loanAmount: "",
        timeline: "",
        additionalInfo: ""
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000); // Hide error after 5 seconds
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (showSuccess) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You for Your Inquiry!</h3>
              <p className="text-slate-600 mb-6">
                We received your information and will be reaching out within 1 business day with your personalized rate quote. 
                Mo will personally review your details to ensure you get the best possible terms.
              </p>
              <Button 
                onClick={() => setShowSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Submit Another Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Your Personalized Rate Quote
          </h2>
          <p className="text-xl text-slate-600">
            Takes 60 seconds • No impact to your credit • 100% Free
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Quote</h2>
          <p className="text-slate-600 mb-6">
            Fill out the form below and I'll get back to you within 1 business day with a personalized rate quote.
          </p>
          
          {showError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">
                There was an error submitting your request. Please try again or call us directly at (949) 579-2057.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  id="first-name"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  id="last-name"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                id="email-address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone-number"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(949) 555-0123"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="loan-purpose" className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Purpose
                </label>
                <select
                  id="loan-purpose"
                  value={formData.loanPurpose}
                  onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select purpose</option>
                  <option value="purchase">Home Purchase</option>
                  <option value="refinance">Refinance</option>
                  <option value="cash-out">Cash-Out Refi</option>
                  <option value="heloc">HELOC</option>
                  <option value="investment">Investment Property</option>
                </select>
              </div>
              <div>
                <label htmlFor="loan-amount" className="block text-sm font-medium text-slate-700 mb-2">
                  Estimated Loan Amount
                </label>
                <input
                  id="loan-amount"
                  type="text"
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="$500,000"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="30-days">Within 30 days</option>
                <option value="60-days">Within 60 days</option>
                <option value="90-days">Within 90 days</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="additional-info" className="block text-sm font-medium text-slate-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additional-info"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any additional details about your mortgage needs..."
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  Get My Rate Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Your information is secure and will never be shared with third parties.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



