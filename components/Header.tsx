'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, FileText, Phone, Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';

const loanProgramsDropdown = [
  { title: 'All Programs', url: '/loan-programs' },
  { title: 'HELOC', url: '/loan-programs/heloc' },
  { title: 'HELOAN', url: '/loan-programs/heloan' },
  { title: 'Cash-Out Refinance', url: '/loan-programs/cash-out-refinance' },
  { title: 'Rate & Term Refinance', url: '/loan-programs/rate-term-refinance' },
  { title: 'FHA Loans', url: '/loan-programs/fha-loans' },
  { title: 'VA Loans', url: '/loan-programs/va-loans' },
  { title: 'Conventional Loans', url: '/loan-programs/conventional-loans' },
  { title: 'Jumbo Loans', url: '/loan-programs/jumbo-loans' },
  { title: 'Non-QM Loans', url: '/loan-programs/non-qm-loans' }
];

const serviceAreasDropdown = [
  { title: 'All Service Areas', url: '/areas' },
  { title: 'Irvine', url: '/areas/irvine-mortgage-broker' },
  { title: 'Newport Beach', url: '/areas/newport-beach-mortgage-broker' },
  { title: 'Mission Viejo', url: '/areas/mission-viejo-mortgage-broker' },
  { title: 'Costa Mesa', url: '/areas/costa-mesa-mortgage-broker' },
  { title: 'Huntington Beach', url: '/areas/huntington-beach-mortgage-broker' },
  { title: 'Anaheim', url: '/areas/anaheim-mortgage-broker' },
  { title: 'Santa Ana', url: '/areas/santa-ana-mortgage-broker' }
];

const neighborhoodGuideDropdown = [
  { title: 'All Neighborhood Guides', url: '/neighborhood-guide' },
  { title: 'Irvine vs Newport Beach', url: '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide' },
  { title: 'Mission Viejo vs Irvine', url: '/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide' },
  { title: 'Newport Beach vs Laguna Beach', url: '/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide' },
  { title: 'Huntington Beach vs Costa Mesa', url: '/neighborhood-guide/huntington-beach-vs-costa-mesa-home-buying-guide' },
  { title: 'OC Neighborhoods Comparison', url: '/neighborhood-guide/orange-county-neighborhoods-comparison-guide' }
];

const navigationItems = [
  {
    title: 'Home',
    page: 'Home',
    url: createPageUrl('Home'),
    icon: Home,
  },
  {
    title: 'Calculator',
    page: 'Calculator',
    url: createPageUrl('Calculator'),
    icon: Calculator,
  },
  {
    title: 'Programs',
    page: 'Programs',
    url: createPageUrl('Programs'),
    icon: FileText,
    hasDropdown: true,
    dropdownItems: loanProgramsDropdown
  },
  {
    title: 'Areas',
    page: 'ServiceAreas',
    url: '/areas',
    icon: Home,
    hasDropdown: true,
    dropdownItems: serviceAreasDropdown
  },
  {
    title: 'Guide',
    page: 'NeighborhoodGuide', 
    url: '/neighborhood-guide',
    icon: Home,
    hasDropdown: true,
    dropdownItems: neighborhoodGuideDropdown
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
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [serviceAreasDropdownOpen, setServiceAreasDropdownOpen] = useState(false);
  const [neighborhoodDropdownOpen, setNeighborhoodDropdownOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-base44 border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-40 py-2 md:py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/mo-logo-white.webp" 
              alt="Mo Abdel - Orange County Wholesale Mortgage Broker NMLS 1426884"
              width={288}
              height={86}
              className="h-24 w-auto md:h-36 lg:h-36"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      if (item.page === 'Programs') {
                        setProgramsDropdownOpen(true);
                      } else if (item.page === 'ServiceAreas') {
                        setServiceAreasDropdownOpen(true);
                      } else if (item.page === 'NeighborhoodGuide') {
                        setNeighborhoodDropdownOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.page === 'Programs') {
                        setProgramsDropdownOpen(false);
                      } else if (item.page === 'ServiceAreas') {
                        setServiceAreasDropdownOpen(false);
                      } else if (item.page === 'NeighborhoodGuide') {
                        setNeighborhoodDropdownOpen(false);
                      }
                    }}
                  >
                    <button
                      className={`inline-flex items-center px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        (item.page === 'Programs' && pathname.startsWith('/loan-programs')) ||
                        (item.page === 'ServiceAreas' && pathname.startsWith('/areas')) ||
                        (item.page === 'NeighborhoodGuide' && pathname.startsWith('/neighborhood-guide'))
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.title}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        (item.page === 'Programs' && programsDropdownOpen) ||
                        (item.page === 'ServiceAreas' && serviceAreasDropdownOpen) ||
                        (item.page === 'NeighborhoodGuide' && neighborhoodDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {((item.page === 'Programs' && programsDropdownOpen) ||
                      (item.page === 'ServiceAreas' && serviceAreasDropdownOpen) ||
                      (item.page === 'NeighborhoodGuide' && neighborhoodDropdownOpen)) && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className={`inline-flex items-center px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      pathname === item.url
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
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
        <div className="md:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.hasDropdown ? (
                  <div>
                    <Link
                      href={item.url}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        (item.page === 'Programs' && pathname.startsWith('/loan-programs')) ||
                        (item.page === 'ServiceAreas' && pathname.startsWith('/areas')) ||
                        (item.page === 'NeighborhoodGuide' && pathname.startsWith('/neighborhood-guide'))
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {/* Mobile dropdown items */}
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          href={dropdownItem.url}
                          className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <a href="tel:(949) 579-2057" className="block px-3 py-2 text-blue-600 font-medium">
                (949) 579-2057
              </a>
              <Link href="/contact" className="block px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
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