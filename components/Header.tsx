'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, FileText, Phone, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';

const navigationItems = [
  {
    title: 'Home',
    page: 'Home',
    url: createPageUrl('Home'),
    icon: Home,
  },
  {
    title: 'Rate Calculator',
    page: 'Calculator',
    url: createPageUrl('Calculator'),
    icon: Calculator,
  },
  {
    title: 'Loan Programs',
    page: 'Programs',
    url: createPageUrl('Programs'),
    icon: FileText,
  },
  {
    title: 'About',
    page: 'About',
    url: createPageUrl('About'),
    icon: User,
  },
  {
    title: 'Contact',
    page: 'Contact',
    url: createPageUrl('Contact'),
    icon: Phone,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-base44 border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/mo-logo-white.webp" 
              alt="Mo The Broker - NMLS#1426884"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === item.url
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:(949) 579-2057" className="text-blue-600 font-medium hover:text-blue-700">
              (949) 579-2057
            </a>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.url
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <a href="tel:(949) 579-2057" className="block px-3 py-2 text-blue-600 font-medium">
                (949) 579-2057
              </a>
              <Link href="/contact" className="block px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}