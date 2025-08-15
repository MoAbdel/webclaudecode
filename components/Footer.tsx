import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';

const navigationItems = [
  { title: 'Home', url: createPageUrl('Home') },
  { title: 'About', url: createPageUrl('About') },
  { title: 'Loan Programs', url: createPageUrl('Programs') },
  { title: 'Rate Calculator', url: createPageUrl('Calculator') },
  { title: 'Contact', url: createPageUrl('Contact') },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative h-32 w-auto">
                <Image 
                  src="/images/mo-logo-white.webp"
                  alt="Mo Abdel - Orange County Wholesale Mortgage Broker NMLS 1426884" 
                  width={128}
                  height={128}
                  className="filter invert"
                />
              </div>
              <div className="relative h-20 w-auto">
                <Image 
                  src="/images/equal-housing.webp"
                  alt="Equal Housing Opportunity" 
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Your trusted local wholesale mortgage broker serving all of Orange County. 
              I'm committed to finding you the best rates and loan programs available. NMLS #1426884.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              {navigationItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.url} className="hover:text-white transition-colors duration-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-400">
              <li>📞 (949) 579-2057</li>
              <li>📧 mabdelfattah@nexamortgage.com</li>
              <li>📍 Orange County, CA</li>
              <li>🕒 Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8">
          {/* Enhanced NMLS Disclosures */}
          <div className="text-center mb-6">
            <div className="bg-slate-800 p-4 rounded-lg inline-block">
              <p className="text-white font-semibold mb-2">Mo Abdel - NMLS #1426884</p>
              <p className="text-slate-300 text-sm mb-2">Licensed Mortgage Loan Originator</p>
              <p className="text-slate-300 text-sm mb-2">NEXA Mortgage • Equal Housing Lender</p>
              <p className="text-slate-400 text-xs">
                Verify license at{' '}
                <a 
                  href="https://www.nmlsconsumeraccess.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  www.nmlsconsumeraccess.org
                </a>
              </p>
            </div>
          </div>

          {/* Required Disclaimers */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-300 text-xs mb-2">
                <strong>Important:</strong> This is not a commitment to lend. All information contained herein is subject to change without notice. 
                All loans are subject to credit approval. Equal Housing Lender.
              </p>
              <p className="text-slate-400 text-xs">
                This material is not from HUD or FHA and has not been approved by HUD or any government agency. 
                The information provided is for informational purposes only and is not an advertisement for products or services.
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/areas" className="text-slate-400 hover:text-white transition-colors">
                Service Areas
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Mo Abdel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}