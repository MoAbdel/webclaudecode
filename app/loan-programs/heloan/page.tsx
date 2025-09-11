import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Home Equity Loans (HELoan) — Program';
  const description = 'Fixed-rate home equity loans for defined projects and goals.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/heloan' } };
}

export default function HELoanProgramPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Home Equity Loans</h1>
      <p className="text-slate-700">Lump-sum equity access with fixed rates and terms.</p>
    </main>
  );
}

