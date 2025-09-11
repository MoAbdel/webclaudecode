import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Bank Statement Loans — Irvine | Program';
  const description = 'Self-employed Irvine buyers can qualify using bank statements.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/bank-statement-loans-irvine' } };
}

export default function BankStatementLoansIrvinePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Bank Statement Loans (Irvine)</h1>
      <p className="text-slate-700">Alternative documentation options for self-employed borrowers.</p>
    </main>
  );
}

