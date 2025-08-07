import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { seoData } from '@/lib/seo';

export const metadata: Metadata = {
  title: seoData.Contact.title,
  description: seoData.Contact.description,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your mortgage journey? I'm here to help every step of the way. 
            Reach out today for your free consultation and rate quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <a href="tel:(949) 579-2057" className="text-blue-600 hover:text-blue-700 text-lg">
                    (949) 579-2057
                  </a>
                  <p className="text-sm text-slate-600">Call or text anytime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a href="mailto:mabdelfattah@nexamortgage.com" className="text-blue-600 hover:text-blue-700">
                    mabdelfattah@nexamortgage.com
                  </a>
                  <p className="text-sm text-slate-600">I respond within hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Service Area</h3>
                  <p className="text-slate-700">Orange County, California</p>
                  <p className="text-sm text-slate-600">All cities and communities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Availability</h3>
                  <p className="text-slate-700">24/7 Availability</p>
                  <p className="text-sm text-slate-600">I'm here when you need me</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Why Call Me Directly?</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Get pre-approved in minutes, not days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Access to exclusive wholesale rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Personal attention throughout your loan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>No call centers or loan processing delays</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Quote</h2>
            <p className="text-slate-600 mb-6">
              Fill out the form below and I'll get back to you within 24 hours with a personalized rate quote.
            </p>
            
            <form className="space-y-4" action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(949) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Purpose
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your situation, goals, or any specific questions you have..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
              >
                Get My Free Quote
              </Button>
            </form>
            
            <p className="text-xs text-slate-500 mt-4 text-center">
              By submitting this form, you consent to be contacted by Mo The Broker regarding mortgage services. 
              Your information will never be shared with third parties.
            </p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Proudly Serving Orange County
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Anaheim', 'Irvine', 'Newport Beach', 'Huntington Beach', 'Orange', 'Santa Ana',
                'Costa Mesa', 'Fullerton', 'Mission Viejo', 'Laguna Beach', 'Yorba Linda', 'Tustin',
                'Aliso Viejo', 'Buena Park', 'Lake Forest', 'Rancho Santa Margarita', 'Fountain Valley', 'Garden Grove'
              ].map((city) => (
                <div key={city} className="text-slate-600 hover:text-blue-600 transition-colors">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 mt-6">
              ...and all other Orange County communities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}