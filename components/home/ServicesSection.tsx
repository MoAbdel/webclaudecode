'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Home, RefreshCw, Building, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Purchase Loans",
      description: "Whether you're a first-time buyer or moving up, I'll help you secure the best rates for your dream home.",
      features: [
        "FHA Loans (3.5% down)",
        "VA Loans (0% down)",
        "Conventional Loans",
        "Jumbo Loans"
      ],
      link: "/loan-programs"
    },
    {
      icon: RefreshCw,
      title: "Refinancing",
      description: "Lower your rate, reduce payments, or access your home's equity with our refinancing solutions.",
      features: [
        "Rate & Term Refinance",
        "Cash-Out Refinance",
        "HELOC Lines of Credit",
        "HELOAN Fixed Loans"
      ],
      link: "/refinance-loans"
    },
    {
      icon: Building,
      title: "Specialty Programs",
      description: "Non-traditional lending solutions for self-employed borrowers and unique financial situations.",
      features: [
        "Bank Statement Loans",
        "Asset Depletion Loans",
        "Investment Property",
        "Non-QM Programs"
      ],
      link: "/loan-programs/non-qm-loans"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Mortgage Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From first-time homebuyers to seasoned investors, I offer tailored mortgage solutions
            with access to 200+ lenders for competitive wholesale rates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                      onClick={() => window.location.href = service.link}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
            onClick={() => window.location.href = '/quiz'}
          >
            Find Your Perfect Loan Program
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}