import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Mortgage Articles — Orange County | Guides';
  const description = 'Guides on mortgages, refinancing, and loan programs in Orange County.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/articles' },
    openGraph: { title, description, url: BASE + '/articles', siteName: 'Mo Abdel — Mortgage Broker' },
  };
}

const items = [
  { slug: 'best-mortgage-broker-orange-county', title: 'Best Mortgage Broker in Orange County' },
  { slug: 'orange-county-mortgage-refinance-specialist', title: 'Orange County Mortgage Refinance Specialist' },
  { slug: 'jumbo-loan-broker-orange-county', title: 'Jumbo Loan Broker — Orange County' },
  { slug: 'first-time-homebuyer-mortgage-orange-county', title: 'First-Time Homebuyer Mortgage — Orange County' },
  { slug: 'va-loan-mortgage-broker-orange-county', title: 'VA Loan Mortgage Broker — Orange County' },
];

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Mortgage Articles</h1>
      <ul className="list-disc list-inside space-y-2">
        {items.map((it) => (
          <li key={it.slug}>
            <Link href={`/articles/${it.slug}`} className="text-blue-600 hover:underline">
              {it.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

