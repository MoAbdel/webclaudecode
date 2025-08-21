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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <li>📧 <Link href="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
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
                    <path d="M12.271 16.718v1.417q-.011.742-.879 1.045l-6.063 2.104q-.771.26-1.184-.039-.413-.299-.413-1.084V3.839q0-.785.413-1.084.413-.299 1.184-.039l6.063 2.104q.868.303.879 1.045V7.22q0 .322.445.513.447.192.915-.162l4.631-3.495q.656-.494 1.234-.234.578.259.578.979q0 .473-.323.787l-3.715 2.977q-.468.376-.468.93 0 .554.468.93l3.715 2.977q.323.314.323.787 0 .72-.578.979-.578.26-1.234-.234l-4.631-3.495q-.468-.354-.915-.162-.445.191-.445.513z"/>
                  </svg>
                </a>
                <a 
                  href="https://share.google/wFT7ePRJSrCjZ6KAg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-500 transition-colors"
                  aria-label="Google Business Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/mo_thebroker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Official Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a 
                  href="https://www.consumerfinance.gov/owning-a-home/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  CFPB Home Buying Guide
                </a>
              </li>
              <li>
                <a 
                  href="https://www.fhfa.gov/homeownerspage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Federal Housing Finance Agency
                </a>
              </li>
              <li>
                <a 
                  href="https://www.va.gov/housing-assistance/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  VA Housing Assistance
                </a>
              </li>
              <li>
                <a 
                  href="https://www.hud.gov/findacounselor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  HUD Housing Counseling
                </a>
              </li>
              <li>
                <a 
                  href="https://www.mba.org/consumers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Mortgage Bankers Association
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8">
          {/* License Information and Disclaimers Side by Side */}
          <div className="max-w-6xl mx-auto mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Enhanced NMLS Disclosures */}
              <div className="text-center">
                <div className="bg-slate-800 p-4 rounded-lg inline-block">
                  <p className="text-white font-semibold mb-2">Mo Abdel - NMLS #1426884</p>
                  <p className="text-slate-300 text-sm mb-2">Licensed Mortgage Loan Originator</p>
                  <p className="text-slate-300 text-sm mb-3">NEXA Mortgage LLC • Equal Housing Lender</p>
                  
                  {/* Brokerage License Information */}
                  <div className="border-t border-slate-600 pt-3 mb-3">
                    <p className="text-slate-300 text-sm font-medium mb-1">NEXA Mortgage LLC</p>
                    <p className="text-slate-400 text-xs mb-1">Company State License# AZMB - 0944059 | NMLS# 1660690</p>
                    <p className="text-slate-400 text-xs">5559 S Sossaman Rd, Bldg 1 Ste 101, Mesa, AZ 85212</p>
                  </div>
                  
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
              <div className="flex items-center">
                <div className="bg-slate-800 p-4 rounded-lg w-full">
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