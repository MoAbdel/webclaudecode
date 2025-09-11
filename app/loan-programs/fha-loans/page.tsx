import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'FHA Loans — Program Overview';
  const description = 'Low down payment loans with flexible credit requirements.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/fha-loans' } };
}

export default function FHALoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">FHA Loans</h1>
      <p className="text-slate-700">Popular option for first-time buyers with 3.5% down.</p>
    </main>
  );
}

