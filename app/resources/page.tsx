import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Mortgage Resources — Orange County | Tools & Guides';
  const description = 'Useful tools, calculators, and guides for OC homebuyers and owners.';
  return { title, description, alternates: { canonical: BASE + '/resources' } };
}

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Mortgage Resources</h1>
      <ul className="list-disc list-inside space-y-2">
        <li><Link href="/tools/mortgage-calculator" className="text-blue-600 hover:underline">Mortgage Calculator</Link></li>
        <li><Link href="/resources/market-data" className="text-blue-600 hover:underline">Local Market Data</Link></li>
        <li><Link href="/resources/glossary" className="text-blue-600 hover:underline">Mortgage Glossary</Link></li>
      </ul>
    </main>
  );
}

