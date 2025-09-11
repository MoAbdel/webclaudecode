import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Profit & Loss Statement Loans — Program';
  const description = 'Qualify using CPA-prepared P&L statements in lieu of tax returns.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/profit-loss-statement-loans' } };
}

export default function PLStatementLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Profit &amp; Loss Statement Loans</h1>
      <p className="text-slate-700">Alternative income documentation for self-employed borrowers.</p>
    </main>
  );
}

