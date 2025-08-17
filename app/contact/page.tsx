import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { seoData } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';

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
                  <p className="text-sm text-slate-600">I respond within 1 business day</p>
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
              
              {/* Social Media Links */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Connect on Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.facebook.com/profile.php?id=61573517340174" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">Facebook</a>
                    <a href="https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">Yelp Reviews</a>
                    <a href="https://www.linkedin.com/in/moabdel" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">LinkedIn</a>
                  </div>
                  <p className="text-sm text-slate-600">Follow for market updates and tips</p>
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
                  <span>Access to exclusive competitive rates</span>
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
          <ContactForm />
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