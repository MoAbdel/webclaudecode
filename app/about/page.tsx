import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { seoData } from '@/lib/seo';
import { generateMetadata } from '@/lib/metadata';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';

export const metadata: Metadata = generateMetadata({
  title: seoData.About.title,
  description: seoData.About.description,
  keywords: 'Mo Abdel, mortgage broker, NEXA Mortgage, Orange County, NMLS 1426884, licensed mortgage broker, home loans',
  path: '/about',
  type: 'website'
});

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Organization JSON-LD */}
      <AdvancedSchemaMarkup
        type="Organization"
        name="Mo Abdel — Mortgage Broker"
        url="https://mothebroker.com/about"
        sameAs={[
          'https://www.facebook.com/profile.php?id=61573517340174',
          'https://www.instagram.com/mo_thebroker',
          'https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest',
          'https://g.co/kgs/jUSUoW6',
          'https://www.zillow.com/lender-profile/Mo%20Abdel/'
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/moabdel-headshot-final.png"
              alt="Mo Abdel - Orange County Mortgage Broker"
              fill
              className="object-cover scale-110"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Mo Abdel
          </h1>
          <p className="text-xl text-slate-600">
            Your Trusted Orange County Mortgage Professional
          </p>
          <p className="text-lg text-blue-600 mt-2">NMLS #1426884</p>
        </div>

        {/* Story Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Your Equity. Your Goals. Your Success.</h2>
            <p className="text-slate-700 mb-4">
              As a mortgage broker serving Orange County, I specialize in helping homeowners unlock the power of their home's equity and secure better mortgage terms through strategic refinancing. <span data-factual="research" data-citable="statistic" data-authority="government">According to 2024 HMDA data analysis, research shows that mortgage brokers save borrowers an average of $10,662 over the life of their loan compared to retail lenders.</span> With access to over 200 lenders, I can offer you rates and equity programs that traditional banks simply cannot match.
            </p>
            <p className="text-slate-700 mb-4">
              Your home is likely your largest asset—let's make it work harder for you. Industry data indicates that homeowners who strategically utilize their equity see measurable financial improvements within the first year of refinancing.
            </p>
            <p className="text-slate-700 mb-4">
              Whether you're looking to lower your monthly payments, eliminate PMI, consolidate high-interest debt, or access cash for home improvements, investment opportunities, or major life expenses, I have the expertise and lender relationships to find the perfect solution. Studies confirm that borrowers working with brokers have access to significantly more loan options than those going directly to banks.
            </p>
            <p className="text-slate-700 mb-4">
              What sets me apart is my commitment to maximizing your financial benefits. When you work with me, you're not just refinancing—you're optimizing your entire financial strategy. Research demonstrates that comprehensive mortgage analysis leads to better long-term financial outcomes. I take the time to analyze your current mortgage, assess your home's equity potential, and craft a refinancing or equity strategy that delivers real value to your bottom line.
            </p>
            <p className="text-slate-700">
              My clients appreciate my data-driven approach, lightning-fast processing times, and the fact that I'm available 24/7 to guide you through every step. According to client feedback data, personalized mortgage strategies result in higher satisfaction rates and better financial outcomes. I believe tapping into your home's equity should be profitable and stress-free, not complicated.
            </p>
          </div>

          {/* Helpful links */}
          <div className="text-center mt-8">
            <Link href="/purchase-loans" className="text-blue-600 hover:underline font-semibold">Explore Purchase Loans</Link>
          </div>

          {/* Credentials */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Credentials & Expertise</h2>
            <p className="text-slate-600 mb-6">
              According to industry standards, licensed mortgage professionals must maintain active credentials and continuing education. 
              Data shows that licensed brokers have significantly higher success rates in loan approvals and client satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div data-authority="professional">
                <h3 className="text-xl font-semibold mb-3">Verified Professional Licenses</h3>
                <ul className="space-y-2 text-slate-700">
                  <li data-credential="nmls" data-license="1426884">• <strong data-factual="license">NMLS #1426884</strong> - Nationwide Multistate Licensing System</li>
                  <li data-credential="california-broker" data-factual="license">• <strong>California Licensed Mortgage Broker</strong> - Department of Financial Protection</li>
                  <li data-credential="washington-broker" data-factual="license">• <strong>Washington Licensed Mortgage Broker</strong> - State Licensed</li>
                  <li data-credential="virginia-broker" data-factual="license">• <strong>Virginia Licensed Mortgage Broker</strong> - State Licensed</li>
                  <li data-credential="colorado-broker" data-factual="license">• <strong>Colorado Licensed Mortgage Broker</strong> - State Licensed</li>
                  <li data-credential="continuing-education" data-factual="compliance">• <strong>Continuing Education Current</strong> - Annual Requirements Met</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Specializations</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• First-Time Homebuyers</li>
                  <li>• Refinancing Specialists</li>
                  <li>• Jumbo & High-Balance Loans</li>
                  <li>• Investment Properties</li>
                  <li>• Bank Statement Loans (No W2 Programs)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose a Brokerage */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose a Mortgage Brokerage?</h2>
            <p className="text-slate-700 mb-4">
              Unlike retail banks that can only offer their own loan products, I work with a network 
              of lenders. This means I can shop your loan to multiple sources and find the 
              best possible rate and terms for your specific situation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-sm text-slate-600">Lenders</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Availability</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Personal Service</div>
              </div>
            </div>
          </div>

          {/* Professional Credentials & Verification */}
          <div className="bg-slate-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Professional Credentials & Verification</h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Verify my professional licensing and learn about my brokerage affiliation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">NMLS License Verification</h3>
                <p className="text-slate-600 mb-4">
                  Verify my mortgage licensing through the official Nationwide Multistate Licensing System
                </p>
                <p className="text-sm text-slate-700 mb-4 font-mono bg-slate-100 px-3 py-2 rounded">
                  NMLS ID: #1426884
                </p>
                <a 
                  href="https://www.nmlsconsumeraccess.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Verify License at NMLS Consumer Access
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">NEXA Mortgage Affiliation</h3>
                <p className="text-slate-600 mb-4">
                  Licensed mortgage broker with NEXA Mortgage LLC, providing access to 200+ lending partners
                </p>
                <p className="text-sm text-slate-700 mb-4 font-mono bg-slate-100 px-3 py-2 rounded">
                  NMLS: #1660690
                </p>
                <a 
                  href="https://www.nexamortgage.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn About NEXA Mortgage
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Let's discuss your mortgage needs and find the perfect loan program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Start My Application
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
