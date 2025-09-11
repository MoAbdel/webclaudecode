import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'DSCR Investment Loans — Program';
  const description = 'Qualify based on property cash flow (Debt Service Coverage Ratio).';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/dscr-investment-loans' } };
}

export default function DSCRLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">DSCR Investment Loans</h1>
      <p className="text-slate-700">Use rental income to qualify for investment property financing.</p>
    </main>
  );
}

