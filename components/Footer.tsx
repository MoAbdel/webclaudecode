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
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Mo Abdel. All rights reserved.</p>
          <p>NMLS# 1426884</p>
        </div>
      </div>
    </footer>
  );
}