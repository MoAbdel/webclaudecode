import React from 'react';
import Link from 'next/link';
import { Calculator, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Trusted Orange County Mortgage Expert
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Get competitive rates and personalized service from a wholesale mortgage broker 
                with access to over 200 lenders. NMLS #1426884
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:(949) 579-2057">
                  <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                    Call (949) 579-2057
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/mo-headshot.webp"
                  alt="Mo Abdel - Your Orange County Mortgage Broker"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How I Help You Secure the Best Mortgage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              As a wholesale mortgage broker, I have access to rates and programs that banks can't offer directly to consumers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Loan Programs</h3>
              <p className="text-slate-600 mb-6">
                FHA, VA, Conventional, Jumbo, and specialized programs tailored to your unique situation.
              </p>
              <Link href="/programs">
                <Button variant="ghost" className="text-blue-600">Learn More</Button>
              </Link>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rate Calculators</h3>
              <p className="text-slate-600 mb-6">
                Use our tools to estimate payments, affordability, and potential savings.
              </p>
              <Link href="/calculator">
                <Button variant="ghost" className="text-blue-600">Calculate Now</Button>
              </Link>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personal Service</h3>
              <p className="text-slate-600 mb-6">
                Direct access to me throughout the entire loan process. No call centers or runaround.
              </p>
              <Link href="/contact">
                <Button variant="ghost" className="text-blue-600">Get In Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mo Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Orange County Trusts Mo The Broker
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Access to 200+ wholesale lenders for the best rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Local Orange County expert with deep market knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Personalized service - you work directly with me</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Fast pre-approvals and streamlined process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Available 24/7 for your questions and updates</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 mb-6">
                  Get your free rate quote today and see how much you can save.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full">
                    Get Free Quote Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}