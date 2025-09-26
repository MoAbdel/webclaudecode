'use client';

import React from 'react';
import { CheckCircle, FileText, Search, HandHeart, Key, Clock } from 'lucide-react';

export default function MortgageProcess() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Initial Consultation",
      description: "Complete our 2-minute quiz or schedule a call to discuss your mortgage goals and financial situation.",
      timeline: "Day 1"
    },
    {
      number: "02",
      icon: Search,
      title: "Rate Shopping",
      description: "I shop 200+ lenders to find the best rates and terms for your specific loan needs.",
      timeline: "Day 1-2"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Loan Approval",
      description: "Get approved with competitive terms and transparent loan details.",
      timeline: "Day 2-3"
    },
    {
      number: "04",
      icon: FileText,
      title: "Application & Documentation",
      description: "Submit your full application with my guidance on required documentation.",
      timeline: "Day 3-5"
    },
    {
      number: "05",
      icon: HandHeart,
      title: "Processing & Underwriting",
      description: "I work directly with underwriters to ensure a smooth approval process.",
      timeline: "Day 5-15"
    },
    {
      number: "06",
      icon: Key,
      title: "Closing",
      description: "Sign your documents and finalize your loan with confidence.",
      timeline: "Day 18"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-blue-600 font-semibold text-lg">18-Day Average Process</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Your Mortgage Journey, Simplified
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From application to closing, I guide you through every step with transparency,
            expertise, and personalized service you won't find at big banks.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-slate-200 z-0"></div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                    {/* Step Number */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {step.timeline}
                        </span>
                      </div>

                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 rounded-xl p-6 space-y-2">
            <div className="text-3xl font-bold text-blue-600">18 Days</div>
            <div className="text-slate-600">Average Closing Time</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6 space-y-2">
            <div className="text-3xl font-bold text-green-600">200+</div>
            <div className="text-slate-600">Lender Network</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 space-y-2">
            <div className="text-3xl font-bold text-purple-600">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}