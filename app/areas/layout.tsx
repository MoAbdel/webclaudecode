import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Broker in Orange County, CA | Local Expert | Mo Abdel — Mortgage Broker',
  description: 'Local mortgage help in Orange County, CA. Get options or call (949) 579-2057.',
  alternates: { canonical: 'https://mothebroker.com/areas' }
};

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="sr-only">Mortgage Broker in Orange County, CA</h1>
      {children}
      {/* Location footer: internal links and GEO mentions */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-3">Related Options</h2>
        <ul className="list-disc list-inside text-blue-700">
          <li><a href="/loan-programs/conventional-loans">Conventional Loans in Orange County, CA</a></li>
          <li><a href="/loan-programs/rate-term-refinance">Rate &amp; Term Refinance in Orange County, CA</a></li>
        </ul>
        <p className="text-slate-600 mt-4">Also serving Irvine and Newport Beach across Orange County, CA.</p>
      </section>

      {/* Generic FinancialService schema for location pages */}
      {(() => {
        const fs = {
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Mo Abdel — Mortgage Broker",
          "serviceType": "Mortgage Broker",
          "areaServed": "Orange County, CA",
          "url": "https://mothebroker.com/areas",
          "telephone": "(949) 579-2057"
        };
        const crumb = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mothebroker.com/" },
            { "@type": "ListItem", "position": 2, "name": "Areas", "item": "https://mothebroker.com/areas" }
          ]
        };
        return (
          <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fs) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }} />
          </>
        );
      })()}
    </div>
  );
}
