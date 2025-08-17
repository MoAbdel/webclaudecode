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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Mo Abdel</h3>
            <p className="text-slate-400 mb-4">
              Your trusted local mortgage broker serving all of Orange County. 
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
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61573517340174" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                  aria-label="Facebook Business Page"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-500 transition-colors"
                  aria-label="Yelp Business Page"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.271 16.718v1.417q-.011.742-.879 1.045l-6.063 2.104q-.771.26-1.184-.039-.413-.299-.413-1.084V3.839q0-.785.413-1.084.413-.299 1.184-.039l6.063 2.104q.868.303.879 1.045V7.22q0 .322.445.513.447.192.915-.162l4.631-3.495q.656-.494 1.234-.234.578.259.578.979 0 .473-.323.787l-3.715 2.977q-.468.376-.468.93 0 .554.468.93l3.715 2.977q.323.314.323.787 0 .72-.578.979-.578.26-1.234-.234l-4.631-3.495q-.468-.354-.915-.162-.445.191-.445.513z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/moabdel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* Google Business - Placeholder until we get the URL */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-500 transition-colors"
                  aria-label="Google Business Profile"
                  title="Google Business Profile - Coming Soon"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </a>
              </div>
            </div>
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