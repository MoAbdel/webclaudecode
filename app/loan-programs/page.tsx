import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Loan Programs — Orange County | Overview';
  const description = 'Explore loan programs available to Orange County buyers and owners.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs' } };
}

const programs = [
  'conventional-loans',
  'fha-loans',
  'va-loans',
  'jumbo-loans',
  'non-qm-loans',
  'bank-statement-loans',
  'asset-depletion-loans',
  'dscr-investment-loans',
  'rate-term-refinance',
  'cash-out-refinance',
  'heloc',
  'heloan',
];

export default function LoanProgramsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Loan Programs</h1>
      <ul className="list-disc list-inside space-y-2">
        {programs.map((slug) => (
          <li key={slug}>
            <Link href={`/loan-programs/${slug}`} className="text-blue-600 hover:underline">
              {slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

