import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Foreign National Loans — Program';
  const description = 'Options for non-U.S. citizens purchasing property in Orange County.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/foreign-national-loans' } };
}

export default function ForeignNationalLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Foreign National Loans</h1>
      <p className="text-slate-700">Flexible documentation and financing structures for foreign nationals.</p>
    </main>
  );
}

