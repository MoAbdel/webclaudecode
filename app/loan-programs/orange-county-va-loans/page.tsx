import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County VA Loans | Program';
  const description = 'VA loan benefits and limits for OC buyers.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/orange-county-va-loans' } };
}

export default function OCVALoansProgramPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County VA Loans</h1>
      <p className="text-slate-700">Eligibility, funding fees, and strategies for VA buyers.</p>
    </main>
  );
}

