'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  url: string;
  description: string;
  category: 'city' | 'loan-program' | 'resource' | 'guide' | 'calculator';
  priority: 'high' | 'medium' | 'low';
}

interface InternalLinkEngineProps {
  currentPage: string;
  pageType: 'city' | 'loan-program' | 'resource' | 'guide' | 'home' | 'calculator';
  city?: string;
  loanType?: string;
  maxLinks?: number;
}

export default function InternalLinkEngine({
  currentPage,
  pageType,
  city,
  loanType,
  maxLinks = 6
}: InternalLinkEngineProps) {

  // Smart link generation based on current page context
  const generateRelatedLinks = (): RelatedLink[] => {
    const allLinks: RelatedLink[] = [];

    // City-based linking strategy
    if (pageType === 'city' && city) {
      // Related cities in Orange County
      const nearbyCities = [
        { name: 'Irvine', url: '/areas/irvine-mortgage-broker' },
        { name: 'Newport Beach', url: '/areas/newport-beach-mortgage-broker' },
        { name: 'Huntington Beach', url: '/areas/huntington-beach-mortgage-broker' },
        { name: 'Mission Viejo', url: '/areas/mission-viejo-mortgage-broker' },
        { name: 'Costa Mesa', url: '/areas/costa-mesa-mortgage-broker' },
        { name: 'Anaheim', url: '/areas/anaheim-mortgage-broker' }
      ].filter(c => c.name !== city);

      nearbyCities.slice(0, 2).forEach(nearbyCity => {
        allLinks.push({
          title: `${nearbyCity.name} Mortgage Broker`,
          url: nearbyCity.url,
          description: `Compare mortgage services in ${nearbyCity.name} vs ${city}`,
          category: 'city',
          priority: 'high'
        });
      });

      // Relevant loan programs for the city
      allLinks.push(
        {
          title: `${city} FHA Loans`,
          url: '/fha-loans-orange-county',
          description: `Low down payment FHA loans available in ${city}`,
          category: 'loan-program',
          priority: 'high'
        },
        {
          title: `${city} VA Loans`,
          url: '/va-loans-orange-county',
          description: `Zero down VA loans for veterans in ${city}`,
          category: 'loan-program',
          priority: 'high'
        },
        {
          title: `${city} Jumbo Loans`,
          url: '/loan-programs/jumbo-loans',
          description: `High-balance loans for luxury homes in ${city}`,
          category: 'loan-program',
          priority: 'medium'
        }
      );
    }

    // Loan program-based linking
    if (pageType === 'loan-program' && loanType) {
      // Related loan programs
      const relatedPrograms = [
        { name: 'FHA Loans', url: '/fha-loans-orange-county', type: 'fha' },
        { name: 'VA Loans', url: '/va-loans-orange-county', type: 'va' },
        { name: 'Conventional Loans', url: '/conventional-loans-orange-county', type: 'conventional' },
        { name: 'Jumbo Loans', url: '/loan-programs/jumbo-loans', type: 'jumbo' },
        { name: 'HELOC', url: '/heloc-orange-county', type: 'heloc' },
        { name: 'Refinancing', url: '/rate-term-refinance-orange-county', type: 'refinance' }
      ].filter(p => p.type !== loanType);

      relatedPrograms.slice(0, 3).forEach(program => {
        allLinks.push({
          title: program.name,
          url: program.url,
          description: `Compare ${program.name} vs ${loanType} loan options`,
          category: 'loan-program',
          priority: 'high'
        });
      });

      // Best cities for this loan type
      allLinks.push(
        {
          title: 'Irvine Home Buyers',
          url: '/areas/irvine-mortgage-broker',
          description: `${loanType} loans popular in Irvine's luxury market`,
          category: 'city',
          priority: 'medium'
        },
        {
          title: 'Newport Beach Financing',
          url: '/areas/newport-beach-mortgage-broker',
          description: `High-end ${loanType} options for Newport Beach`,
          category: 'city',
          priority: 'medium'
        }
      );
    }

    // Universal helpful links
    allLinks.push(
      {
        title: 'Mortgage Calculator',
        url: '/tools/mortgage-calculator',
        description: 'Calculate your monthly payment with Orange County taxes',
        category: 'calculator',
        priority: 'high'
      },
      {
        title: 'Down Payment Assistance',
        url: '/resources/down-payment-assistance',
        description: '25+ programs to help with down payment in Orange County',
        category: 'resource',
        priority: 'high'
      },
      {
        title: 'Credit Repair Guide',
        url: '/resources/credit-repair',
        description: 'Improve your credit score before applying for a mortgage',
        category: 'resource',
        priority: 'medium'
      },
      {
        title: 'Market Data',
        url: '/resources/market-data',
        description: 'Current Orange County housing market trends and data',
        category: 'resource',
        priority: 'medium'
      },
      {
        title: 'Home Buyer Guide',
        url: '/guides/orange-county-home-buyer-guide',
        description: 'Complete guide to buying a home in Orange County',
        category: 'guide',
        priority: 'medium'
      },
      {
        title: 'Refinancing Guide',
        url: '/guides/orange-county-refinancing-guide',
        description: 'When and how to refinance your Orange County home',
        category: 'guide',
        priority: 'low'
      }
    );

    // Remove current page from suggestions
    const filteredLinks = allLinks.filter(link => link.url !== currentPage);

    // Sort by priority and return top links
    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
    return filteredLinks
      .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
      .slice(0, maxLinks);
  };

  const relatedLinks = generateRelatedLinks();

  if (relatedLinks.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          Related Mortgage Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.url}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                {link.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  link.category === 'city' ? 'bg-blue-100 text-blue-800' :
                  link.category === 'loan-program' ? 'bg-green-100 text-green-800' :
                  link.category === 'resource' ? 'bg-purple-100 text-purple-800' :
                  link.category === 'guide' ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {link.category.replace('-', ' ')}
                </span>
                
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                  link.priority === 'high' ? 'bg-red-100 text-red-700' :
                  link.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {link.priority}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO-friendly text links for crawlers */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 mb-4">
            More Orange County mortgage resources:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {relatedLinks.slice(0, 4).map((link, index) => (
              <React.Fragment key={index}>
                <Link 
                  href={link.url} 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {link.title}
                </Link>
                {index < Math.min(3, relatedLinks.length - 1) && (
                  <span className="text-slate-400">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Topic clustering for SEO
export const topicClusters = {
  'orange-county-mortgages': [
    'Orange County mortgage rates',
    'Orange County home loans', 
    'Orange County refinancing',
    'Orange County mortgage broker'
  ],
  'fha-loans': [
    'FHA loan requirements',
    'FHA down payment',
    'FHA credit score',
    'FHA loan limits'
  ],
  'va-loans': [
    'VA loan benefits',
    'VA loan eligibility',
    'VA loan no down payment',
    'VA loan Orange County'
  ],
  'jumbo-loans': [
    'Jumbo loan rates',
    'Jumbo loan limits',
    'Luxury home financing',
    'High balance loans'
  ]
};

