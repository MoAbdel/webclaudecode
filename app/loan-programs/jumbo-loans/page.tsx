import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Jumbo Loans — Program Overview';
  const description = 'Non-conforming loan options for high-value properties in OC.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/jumbo-loans' } };
}

export default function JumboLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Jumbo Loans</h1>
      <p className="text-slate-700">Portfolio and investor programs above conforming limits.</p>
    </main>
  );
}

