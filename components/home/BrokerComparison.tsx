'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function BrokerComparison() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Mortgage Broker vs Big Banks: See the Difference
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Why Orange County homebuyers choose mortgage brokers for better rates and service
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-center font-semibold">Mortgage Broker (Mo)</th>
                <th className="px-6 py-4 text-center font-semibold">Big Banks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Number of Lenders</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold">200+ Lenders</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-600">1 (Their Own)</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Interest Rates</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold">Wholesale Rates (Lower)</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-600">Retail Rates (Higher)</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Average Closing Time</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold">18 Days</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-600">30-45 Days</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Works for You</td>
                <td className="px-6 py-4 text-center">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Personal Service</td>
                <td className="px-6 py-4 text-center">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Flexible Credit Requirements</td>
                <td className="px-6 py-4 text-center">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Weekend/Evening Availability</td>
                <td className="px-6 py-4 text-center">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50">
                <td className="px-6 py-4 font-medium text-slate-700">Typical Savings</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold">$10,000+ Total Savings</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-slate-500">Base Rate</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
              <h3 className="text-lg font-bold text-center">Mortgage Broker (Mo) vs Big Banks</h3>
            </div>
            
            <div className="space-y-1">
              <div className="p-4 border-b border-gray-100">
                <div className="font-medium text-slate-700 mb-2">Number of Lenders</div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">200+ Lenders</span>
                  <span className="text-red-600">1 (Their Own)</span>
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="font-medium text-slate-700 mb-2">Interest Rates</div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Wholesale (Lower)</span>
                  <span className="text-red-600">Retail (Higher)</span>
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-100">
                <div className="font-medium text-slate-700 mb-2">Average Closing Time</div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">18 Days</span>
                  <span className="text-red-600">30-45 Days</span>
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="font-medium text-slate-700 mb-2">Works for You</div>
                <div className="flex justify-between items-center">
                  <Check className="w-6 h-6 text-green-600" />
                  <X className="w-6 h-6 text-red-600" />
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-100">
                <div className="font-medium text-slate-700 mb-2">Personal Service</div>
                <div className="flex justify-between items-center">
                  <Check className="w-6 h-6 text-green-600" />
                  <X className="w-6 h-6 text-red-600" />
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="font-medium text-slate-700 mb-2">Flexible Credit Requirements</div>
                <div className="flex justify-between items-center">
                  <Check className="w-6 h-6 text-green-600" />
                  <X className="w-6 h-6 text-red-600" />
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-100">
                <div className="font-medium text-slate-700 mb-2">Weekend/Evening Availability</div>
                <div className="flex justify-between items-center">
                  <Check className="w-6 h-6 text-green-600" />
                  <X className="w-6 h-6 text-red-600" />
                </div>
              </div>
              
              <div className="p-4 bg-gray-50">
                <div className="font-medium text-slate-700 mb-2">Typical Savings</div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">$10,000+ Total</span>
                  <span className="text-slate-500">Base Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose a Mortgage Broker?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Shop 200+ lenders with one application</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Get wholesale rates not available to the public</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Personal advocate throughout the entire process</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Faster closings with dedicated processing</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Common Bank Limitations</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Limited to their own loan products</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Higher rates due to retail markups</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Strict credit and income requirements</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">Call center service, not personal attention</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            See How Much You Can Save
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Research shows mortgage broker clients save over $10,000 through competitive rates and lower upfront costs
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Your Free Rate Quote
          </a>
        </div>
      </div>
    </section>
  );
}