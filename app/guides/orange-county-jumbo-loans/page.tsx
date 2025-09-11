import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Jumbo Loans | Guide';
  const description = 'Jumbo thresholds, documentation, and lender options in OC.';
  return { title, description, alternates: { canonical: BASE + '/guides/orange-county-jumbo-loans' } };
}

export default function OCJumboLoansGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County Jumbo Loans</h1>
      <p className="text-slate-700">Understand limits, pricing, and portfolio options.</p>
    </main>
  );
}

