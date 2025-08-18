'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Shield } from 'lucide-react';
import { fbTrack } from '@/components/FacebookPixel';

// Google Ads conversion tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function ContactForm() {
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanPurpose: '',
    loanAmount: '',
    timeline: '',
    additionalInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
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
          loan_amount: 0, // Will be determined during consultation
          notes: `Contact Form Inquiry - Loan Amount: ${formData.loanAmount || 'Not specified'}, Timeline: ${formData.timeline || 'Not specified'}, Purpose: ${formData.loanPurpose || 'General inquiry'}${formData.additionalInfo ? ', Additional Info: ' + formData.additionalInfo : ''}`,
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
        content_name: 'Contact Form Submission',
        content_category: 'mortgage_inquiry',
        value: 0,
        currency: 'USD'
      });
      
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        loanPurpose: '',
        loanAmount: '',
        timeline: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
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
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
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
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
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
            <label className="block text-sm font-medium text-slate-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Last Name *
            </label>
            <input
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
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john.doe@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(949) 123-4567"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Loan Purpose
          </label>
          <select 
            value={formData.loanPurpose}
            onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select loan purpose</option>
            <option value="purchase">Home Purchase</option>
            <option value="refinance">Refinance</option>
            <option value="cashout">Cash-Out Refinance</option>
            <option value="investment">Investment Property</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Approximate Loan Amount
          </label>
          <select 
            value={formData.loanAmount}
            onChange={(e) => handleInputChange('loanAmount', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select amount range</option>
            <option value="under-500k">Under $500,000</option>
            <option value="500k-750k">$500,000 - $750,000</option>
            <option value="750k-1m">$750,000 - $1,000,000</option>
            <option value="1m-1.5m">$1,000,000 - $1,500,000</option>
            <option value="over-1.5m">Over $1,500,000</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Timeline
          </label>
          <select 
            value={formData.timeline}
            onChange={(e) => handleInputChange('timeline', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">When do you need this loan?</option>
            <option value="asap">ASAP</option>
            <option value="30-days">Within 30 days</option>
            <option value="60-days">Within 60 days</option>
            <option value="90-days">Within 90 days</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Additional Information
          </label>
          <textarea
            rows={4}
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell me about your situation, goals, or any specific questions you have..."
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
        </Button>
      </form>
      
      <p className="text-xs text-slate-500 mt-4 text-center">
        By submitting this form, you consent to be contacted by Mo Abdel regarding mortgage services. 
        Your information will never be shared with third parties.
      </p>
    </div>
  );
}