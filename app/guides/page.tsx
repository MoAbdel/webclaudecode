import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Guides — Orange County Mortgage | Resources';
  const description = 'Guides for buying, refinancing, and financing in Orange County.';
  return { title, description, alternates: { canonical: BASE + '/guides' } };
}

const guides = [
  { slug: 'orange-county-home-buyer-guide', title: 'Orange County Home Buyer Guide' },
  { slug: 'orange-county-investment-property', title: 'Orange County Investment Property' },
  { slug: 'orange-county-jumbo-loans', title: 'Orange County Jumbo Loans' },
  { slug: 'orange-county-market-forecast-2025-2026', title: 'OC Market Forecast 2025–2026' },
  { slug: 'orange-county-refinancing-guide', title: 'Orange County Refinancing Guide' },
  { slug: 'orange-county-school-districts', title: 'Orange County School Districts' },
  { slug: 'orange-county-va-loans', title: 'Orange County VA Loans' },
  { slug: 'spring-2025-home-buying-guide', title: 'Spring 2025 Home Buying Guide' },
  { slug: 'summer-2025-market-guide', title: 'Summer 2025 Market Guide' },
  { slug: 'why-choose-local-mortgage-broker', title: 'Why Choose a Local Mortgage Broker' },
];

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Guides</h1>
      <ul className="list-disc list-inside space-y-2">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="text-blue-600 hover:underline">{g.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

