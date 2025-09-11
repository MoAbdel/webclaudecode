import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Cash-Out Refinance — Orange County | Program';
  const description = 'Access home equity for renovations, debt consolidation, or other goals.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/cash-out-refinance' } };
}

export default function CashOutRefinancePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Cash-Out Refinance</h1>
      <p className="text-slate-700">Compare LTV limits, pricing, and qualification.</p>
    </main>
  );
}

