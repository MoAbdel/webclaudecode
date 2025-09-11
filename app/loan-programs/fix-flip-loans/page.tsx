import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Fix and Flip Loans — Program';
  const description = 'Short-term financing for purchase and renovation projects.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/fix-flip-loans' } };
}

export default function FixFlipLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Fix and Flip Loans</h1>
      <p className="text-slate-700">Funding for investors renovating and reselling properties.</p>
    </main>
  );
}

