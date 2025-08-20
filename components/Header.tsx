'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, FileText, Phone, Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';
import { useFacebookTracking } from '@/hooks/useFacebookTracking';

interface DropdownItem {
  title: string;
  url: string;
  isHeader?: boolean;
}

interface NavigationItem {
  title: string;
  page: string;
  url: string;
  icon: any;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const loanProgramsDropdown: DropdownItem[] = [
  { title: 'All Programs', url: '/loan-programs' },
  
  // Home Purchase Loans
  { title: '🏠 PURCHASE', url: '#', isHeader: true },
  { title: 'FHA Loans', url: '/loan-programs/fha-loans' },
  { title: 'Orange County FHA Limits', url: '/loan-programs/orange-county-fha-loan-limits' },
  { title: 'VA Loans', url: '/loan-programs/va-loans' },
  { title: 'Orange County VA Loans', url: '/loan-programs/orange-county-va-loans' },
  { title: 'Conventional Loans', url: '/loan-programs/conventional-loans' },
  { title: 'Jumbo Loans', url: '/loan-programs/jumbo-loans' },
  { title: 'USDA Rural Loans', url: '/loan-programs/usda-rural-loans' },
  
  // Refinancing Options
  { title: '🔄 REFINANCING', url: '#', isHeader: true },
  { title: 'Rate & Term Refinance', url: '/loan-programs/rate-term-refinance' },
  { title: 'Cash-Out Refinance', url: '/loan-programs/cash-out-refinance' },
  
  // Home Equity Solutions
  { title: '💰 EQUITY', url: '#', isHeader: true },
  { title: 'HELOC', url: '/loan-programs/heloc' },
  { title: 'HELOAN', url: '/loan-programs/heloan' },
  
  // Self-Employed & Non-QM
  { title: '💼 SELF-EMPLOYED', url: '#', isHeader: true },
  { title: 'Non-QM Overview', url: '/loan-programs/non-qm-loans' },
  { title: 'Bank Statement Loans', url: '/loan-programs/bank-statement-loans' },
  { title: 'P&L Statement Loans', url: '/loan-programs/profit-loss-statement-loans' },
  { title: 'Asset Depletion Loans', url: '/loan-programs/asset-depletion-loans' },
  
  // Investment & Specialty
  { title: '🏢 INVESTMENT', url: '#', isHeader: true },
  { title: 'DSCR Investment Loans', url: '/loan-programs/dscr-investment-loans' },
  { title: 'Fix & Flip Loans', url: '/loan-programs/fix-flip-loans' },
  { title: 'Foreign National Loans', url: '/loan-programs/foreign-national-loans' },
  
  // City Specific Programs
  { title: '🏙️ CITY SPECIFIC', url: '#', isHeader: true },
  { title: 'FHA Loans Irvine', url: '/loan-programs/fha-loans-irvine' }
];

const serviceAreasDropdown: DropdownItem[] = [
  { title: 'All Service Areas', url: '/areas' },
  
  // Premium Coastal Communities
  { title: '🏖️ COASTAL', url: '#', isHeader: true },
  { title: 'Newport Beach', url: '/areas/newport-beach-mortgage-broker' },
  { title: 'Laguna Beach', url: '/areas/laguna-beach-mortgage-broker' },
  { title: 'Dana Point', url: '/areas/dana-point-mortgage-broker' },
  { title: 'Seal Beach', url: '/areas/seal-beach-mortgage-broker' },
  
  // Central Orange County
  { title: '🏢 CENTRAL', url: '#', isHeader: true },
  { title: 'Irvine', url: '/areas/irvine-mortgage-broker' },
  { title: 'Costa Mesa', url: '/areas/costa-mesa-mortgage-broker' },
  { title: 'Orange', url: '/areas/orange-mortgage-broker' },
  { title: 'Santa Ana', url: '/areas/santa-ana-mortgage-broker' },
  { title: 'Fountain Valley', url: '/areas/fountain-valley-mortgage-broker' },
  
  // Irvine Neighborhoods
  { title: '🏘️ IRVINE NEIGHBORHOODS', url: '#', isHeader: true },
  { title: 'University Park', url: '/areas/irvine-neighborhoods/university-park-mortgage-broker' },
  { title: 'Woodbridge', url: '/areas/irvine-neighborhoods/woodbridge-mortgage-broker' },
  { title: 'Northwood', url: '/areas/irvine-neighborhoods/northwood-mortgage-broker' },
  { title: 'Turtle Rock', url: '/areas/irvine-neighborhoods/turtle-rock-mortgage-broker' },
  { title: 'Quail Hill', url: '/areas/irvine-neighborhoods/quail-hill-mortgage-broker' },
  { title: 'Cypress Village', url: '/areas/irvine-neighborhoods/cypress-village-mortgage-broker' },
  
  // Newport Beach Neighborhoods
  { title: '🌊 NEWPORT NEIGHBORHOODS', url: '#', isHeader: true },
  { title: 'Lido Isle', url: '/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker' },
  { title: 'Corona del Mar', url: '/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker' },
  { title: 'Newport Coast', url: '/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker' },
  { title: 'Balboa Island', url: '/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker' },
  
  // ZIP Code Areas
  { title: '📍 ZIP CODE AREAS', url: '#', isHeader: true },
  { title: 'Irvine 92614', url: '/zip-codes/92614-irvine-mortgage-broker' },
  { title: 'Corona del Mar 92625', url: '/zip-codes/92625-corona-del-mar-mortgage-broker' },
  { title: 'Newport Beach 92660', url: '/zip-codes/92660-newport-beach-mortgage-broker' },
  { title: 'Irvine 92602', url: '/zip-codes/92602-irvine-mortgage-broker' },
  
  // North Orange County
  { title: '🏘️ NORTH', url: '#', isHeader: true },
  { title: 'Anaheim', url: '/areas/anaheim-mortgage-broker' },
  { title: 'Fullerton', url: '/areas/fullerton-mortgage-broker' },
  { title: 'Yorba Linda', url: '/areas/yorba-linda-mortgage-broker' },
  { title: 'Garden Grove', url: '/areas/garden-grove-mortgage-broker' },
  { title: 'Westminster', url: '/areas/westminster-mortgage-broker' },
  
  // South Orange County
  { title: '🏡 SOUTH', url: '#', isHeader: true },
  { title: 'Mission Viejo', url: '/areas/mission-viejo-mortgage-broker' },
  { title: 'Laguna Niguel', url: '/areas/laguna-niguel-mortgage-broker' },
  { title: 'Laguna Niguel Rates', url: '/areas/laguna-niguel-mortgage-rates' },
  { title: 'Laguna Woods', url: '/areas/laguna-woods-mortgage-broker' },
  
  // Beach Cities
  { title: '🌊 BEACH', url: '#', isHeader: true },
  { title: 'Huntington Beach', url: '/areas/huntington-beach-mortgage-broker' },
  
  // Luxury Markets
  { title: '💎 LUXURY MARKETS', url: '#', isHeader: true },
  { title: 'Waterfront Homes', url: '/luxury-markets/waterfront-homes-mortgage-broker' },
  { title: 'Golf Course Homes', url: '/luxury-markets/golf-course-homes-mortgage-broker' },
  { title: 'Ultra-Luxury Estates', url: '/luxury-markets/ultra-luxury-estates-mortgage-broker' },
  
  // School Districts  
  { title: '🎓 SCHOOL DISTRICTS', url: '#', isHeader: true },
  { title: 'Irvine Unified School District', url: '/areas/irvine-unified-school-district-mortgage-broker' }
];

const guidesAndBlogDropdown: DropdownItem[] = [
  { title: 'All Guides & Articles', url: '/guides' },
  
  // Complete Guides
  { title: '📚 COMPLETE GUIDES', url: '#', isHeader: true },
  { title: 'Orange County Home Buyer Guide', url: '/guides/orange-county-home-buyer-guide' },
  { title: 'Orange County Refinancing Guide', url: '/guides/orange-county-refinancing-guide' },
  
  // Seasonal Market Guides
  { title: '🌟 SEASONAL GUIDES', url: '#', isHeader: true },
  { title: 'Spring 2025 Home Buying Guide', url: '/guides/spring-2025-home-buying-guide' },
  { title: 'Summer 2025 Market Guide', url: '/guides/summer-2025-market-guide' },
  
  // Neighborhood Guides
  { title: '🏘️ NEIGHBORHOOD GUIDES', url: '#', isHeader: true },
  { title: 'All Neighborhood Guides', url: '/neighborhood-guide' },
  { title: 'Irvine vs Newport Beach', url: '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide' },
  { title: 'Mission Viejo vs Irvine', url: '/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide' },
  { title: 'Newport Beach vs Laguna Beach', url: '/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide' },
  { title: 'Huntington Beach vs Costa Mesa', url: '/neighborhood-guide/huntington-beach-vs-costa-mesa-home-buying-guide' },
  { title: 'OC Neighborhoods Comparison', url: '/neighborhood-guide/orange-county-neighborhoods-comparison-guide' },
  
  // Blog Articles
  { title: '📝 ARTICLES', url: '#', isHeader: true },
  { title: 'Why Choose Local Mortgage Broker', url: '/guides/why-choose-local-mortgage-broker' }
];

const resourcesDropdown: DropdownItem[] = [
  { title: 'All Resources', url: '/resources' },
  
  // Financial Resources
  { title: '💰 ASSISTANCE & TOOLS', url: '#', isHeader: true },
  { title: 'Down Payment Assistance', url: '/resources/down-payment-assistance' },
  { title: 'Credit Repair Resources', url: '/resources/credit-repair' },
  { title: 'Mortgage Calculators', url: '/calculator' },
  
  // Market & Reference  
  { title: '📊 DATA & REFERENCE', url: '#', isHeader: true },
  { title: 'Orange County Market Data', url: '/resources/market-data' },
  { title: 'Mortgage Glossary', url: '/resources/glossary' },
  
  // Process & Support
  { title: '📋 PROCESS & SUPPORT', url: '#', isHeader: true },
  { title: 'Document Checklist', url: '/resources/document-checklist' },
  { title: 'Service Providers Directory', url: '/resources/service-providers' }
];

const navigationItems: NavigationItem[] = [
  {
    title: 'Home',
    page: 'Home',
    url: createPageUrl('Home'),
    icon: Home,
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
    title: 'Guides',
    page: 'Guides', 
    url: '/guides',
    icon: Home,
    hasDropdown: true,
    dropdownItems: guidesAndBlogDropdown
  },
  {
    title: 'Resources',
    page: 'Resources',
    url: '/resources',
    icon: FileText,
    hasDropdown: true,
    dropdownItems: resourcesDropdown
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { trackPhoneCall } = useFacebookTracking();

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-base44 border-b border-slate-200 sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-40 py-2 md:py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/mo-logo-white.webp" 
              alt="Mo Abdel - Orange County Mortgage Broker NMLS 1426884"
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
                  <div className="relative group">
                    <Link
                      href={item.url}
                      className={`inline-flex items-center px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        (item.page === 'Programs' && pathname.startsWith('/loan-programs')) ||
                        (item.page === 'ServiceAreas' && pathname.startsWith('/areas')) ||
                        (item.page === 'Guides' && (pathname.startsWith('/neighborhood-guide') || pathname.startsWith('/guides'))) ||
                        (item.page === 'Resources' && pathname.startsWith('/resources'))
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    
                    {/* Simple hover dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-2xl border border-slate-200 py-3 z-[9999] max-h-[80vh] overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        dropdownItem.isHeader ? (
                          <div
                            key={index}
                            className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider border-t border-slate-100 mt-1 pt-3 whitespace-nowrap"
                          >
                            {dropdownItem.title}
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150 whitespace-nowrap"
                          >
                            {dropdownItem.title}
                          </Link>
                        )
                      ))}
                    </div>
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
            <a 
              href="tel:(949) 579-2057" 
              className="text-blue-600 font-medium hover:text-blue-700"
              onClick={trackPhoneCall}
            >
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
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
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
                        (item.page === 'Guides' && (pathname.startsWith('/neighborhood-guide') || pathname.startsWith('/guides'))) ||
                        (item.page === 'Resources' && pathname.startsWith('/resources'))
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
                        dropdownItem.isHeader ? (
                          <div
                            key={index}
                            className="px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider border-t border-slate-100 mt-2 pt-2 whitespace-nowrap"
                          >
                            {dropdownItem.title}
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        )
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
              <a 
                href="tel:(949) 579-2057" 
                className="block px-3 py-2 text-blue-600 font-medium"
                onClick={trackPhoneCall}
              >
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