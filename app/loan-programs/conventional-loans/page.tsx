import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Conventional Loans — Program Overview';
  const description = 'Standard fixed and ARM options with flexible down payments.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/conventional-loans' } };
}

export default function ConventionalLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Conventional Loans</h1>
      <p className="text-slate-700">Compare fixed-rate and ARM options with as little as 3% down.</p>
    </main>
  );
}

