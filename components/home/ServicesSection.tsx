'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Home, RefreshCw, Building, ArrowRight, DollarSign, CreditCard } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Helping you secure financing for your dream home with ease.",
      link: "/purchase-loans"
    },
    {
      icon: RefreshCw,
      title: "Loan Refinancing",
      description: "Lower your rate and payments with tailored refinancing.",
      link: "/refinance-loans"
    },
    {
      icon: Building,
      title: "First-Time Buyers",
      description: "Expert guidance and tailored loans for first-time buyers.",
      link: "/loan-programs/fha-loans"
    },
    {
      icon: Building,
      title: "Investment Loans",
      description: "Financing solutions tailored for property investors.",
      link: "/loan-programs/dscr-investment-loans"
    },
    {
      icon: CreditCard,
      title: "HELOC/HELOAN",
      description: "Access your home's equity with flexible credit lines and fixed-rate loans.",
      link: "/loan-programs/heloc-loans"
    },
    {
      icon: Home,
      title: "FHA Loans",
      description: "Flexible government-backed loans for eligible borrowers.",
      link: "/loan-programs/fha-loans"
    },
    {
      icon: RefreshCw,
      title: "VA Loans",
      description: "Special loans for veterans and active-duty military.",
      link: "/loan-programs/va-loans"
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

        {/* Services Grid - Top 3 Featured */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer text-center"
                onClick={() => window.location.href = service.link}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Grid - 4 cards in 2x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index + 3}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer text-center"
                onClick={() => window.location.href = service.link}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
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