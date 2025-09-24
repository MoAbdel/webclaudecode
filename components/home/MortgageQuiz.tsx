'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Home, RefreshCw, Briefcase, ArrowRight, ArrowLeft, MapPin, CreditCard, Building } from "lucide-react";

interface QuizData {
  intent: string;
  zipCode: string;
  creditRange: string;
  occupancy: string;
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
    if (step < 3) {
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

  const handleSubmit = () => {
    // Here you would integrate with your CRM/email service
    console.log('Quiz submitted:', formData);
    setIsComplete(true);

    // Track conversion event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quiz_complete', {
        event_category: 'engagement',
        event_label: formData.intent
      });
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.intent !== "";
      case 2:
        return formData.zipCode && formData.creditRange && formData.occupancy;
      case 3:
        return formData.firstName && formData.email && formData.phone && formData.consent;
      default:
        return false;
    }
  };

  const progressPercentage = (step / 3) * 100;

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
                We're matching your info with our 200+ lenders.
              </h2>

              <p className="text-xl text-slate-600 mb-8">
                A licensed advisor will reach out shortly with options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Schedule a Call
                </Button>
                <Button variant="outline" className="border-slate-300">
                  Download Guide
                </Button>
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
            <span className="text-sm text-slate-600">Step {step} of 3</span>
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
                {step === 3 ? 'Get My Options' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}