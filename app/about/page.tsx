import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { seoData } from '@/lib/seo';

export const metadata: Metadata = {
  title: seoData.About.title,
  description: seoData.About.description,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
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
              As a wholesale mortgage broker serving Orange County, I specialize in helping homeowners unlock the power of their home's equity and secure better mortgage terms through strategic refinancing. With access to over 200 wholesale lenders, I can offer you rates and equity programs that traditional banks simply cannot match.
            </p>
            <p className="text-slate-700 mb-4">
              Your home is likely your largest asset—let's make it work harder for you.
            </p>
            <p className="text-slate-700 mb-4">
              Whether you're looking to lower your monthly payments, eliminate PMI, consolidate high-interest debt, or access cash for home improvements, investment opportunities, or major life expenses, I have the expertise and lender relationships to find the perfect solution.
            </p>
            <p className="text-slate-700 mb-4">
              What sets me apart is my commitment to maximizing your financial benefits. When you work with me, you're not just refinancing—you're optimizing your entire financial strategy. I take the time to analyze your current mortgage, assess your home's equity potential, and craft a refinancing or equity strategy that delivers real value to your bottom line.
            </p>
            <p className="text-slate-700">
              My clients appreciate my data-driven approach, lightning-fast processing times, and the fact that I'm available 24/7 to guide you through every step. I believe tapping into your home's equity should be profitable and stress-free, not complicated.
            </p>
          </div>

          {/* Credentials */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Credentials & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Licenses</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• NMLS #1426884</li>
                  <li>• California Licensed Mortgage Broker</li>
                  <li>• Washington Licensed Mortgage Broker</li>
                  <li>• Virginia Licensed Mortgage Broker</li>
                  <li>• Colorado Licensed Mortgage Broker</li>
                  <li>• Continuing Education Current</li>
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

          {/* Why Wholesale */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Wholesale Mortgage Brokerage?</h2>
            <p className="text-slate-700 mb-4">
              Unlike retail banks that can only offer their own loan products, I work with a network 
              of wholesale lenders. This means I can shop your loan to multiple sources and find the 
              best possible rate and terms for your specific situation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-sm text-slate-600">Wholesale Lenders</div>
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
                Get Free Consultation
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}