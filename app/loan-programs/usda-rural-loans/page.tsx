import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'USDA Rural Loans Orange County | Zero Down Payment Home Loans | Rural Housing Program',
  description: 'USDA rural loans in eligible Orange County areas. 0% down payment, competitive rates, income limits apply. Perfect for first-time buyers in rural/suburban areas. Call (949) 579-2057.',
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs/usda-rural-loans',
  },
};

export default function USDARuggralLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-600 mb-4">USDA Zero Down Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-yellow-600">USDA Rural Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Qualified buyers can purchase homes in eligible rural and suburban Orange County areas 
            with 0% down payment through the USDA Rural Development loan program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg">
                Check USDA Eligibility
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            USDA Loan Benefits & Requirements
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Key Benefits</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• 0% down payment required</li>
                <li>• Competitive interest rates</li>
                <li>• No prepayment penalties</li>
                <li>• Flexible credit guidelines</li>
                <li>• Can finance closing costs</li>
                <li>• Government-backed program</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Requirements</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• Property in USDA eligible area</li>
                <li>• Primary residence only</li>
                <li>• Income limits apply by area</li>
                <li>• US citizenship required</li>
                <li>• 640+ credit score preferred</li>
                <li>• Stable employment history</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Orange County Areas</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• Limited eligible areas</li>
                <li>• Mainly outer suburban zones</li>
                <li>• Check USDA eligibility map</li>
                <li>• Income limits vary by household</li>
                <li>• Property type restrictions apply</li>
                <li>• Must meet rural definition</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Important Note About Orange County</h3>
          <p className="text-slate-700">
            Due to Orange County's dense population and high property values, very few areas qualify 
            for USDA rural loans. Most of Orange County is considered suburban/urban and doesn't meet 
            USDA rural requirements. We recommend checking eligibility maps or considering FHA loans 
            with 3.5% down as an alternative.
          </p>
        </div>

        <div className="bg-yellow-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Check Your USDA Eligibility</h2>
          <p className="text-xl mb-6 text-yellow-100">
            Find out if your desired Orange County area qualifies for USDA rural loans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-3 text-lg font-semibold">
                Check Eligibility Now
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-yellow-100 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • USDA Approved Lender
          </p>
        </div>

        {/* Required Disclaimers */}
        <div className="bg-slate-100 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Important Disclaimers</h3>
          <div className="text-sm text-slate-700 space-y-2">
            <p>
              <strong>This is not a commitment to lend.</strong> All information contained herein is subject to change without notice. 
              All loans are subject to credit approval, income verification, and property appraisal. Equal Housing Lender.
            </p>
            <p>
              This material is not from HUD or FHA and has not been approved by HUD or any government agency. 
              The information provided is for informational purposes only and is not an advertisement for products or services.
            </p>
            <p>
              Interest rates and loan terms are subject to change without notice. All information must be verified prior to loan approval. 
              Mo Abdel - NMLS #1426884, Licensed Mortgage Loan Originator with NEXA Mortgage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}