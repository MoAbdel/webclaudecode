import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'VA Loans — Program Overview';
  const description = 'Zero down payment options and competitive terms for eligible veterans.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/va-loans' } };
}

export default function VALoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">VA Loans</h1>
      <p className="text-slate-700">Powerful benefits for veterans and active duty service members.</p>
    </main>
  );
}

