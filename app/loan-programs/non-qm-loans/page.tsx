import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Non-QM Loans — Program';
  const description = 'Alternative qualification programs beyond standard QM rules.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/non-qm-loans' } };
}

export default function NonQMLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Non-QM Loans</h1>
      <p className="text-slate-700">Flexible programs like bank statement, asset qualifier, and more.</p>
    </main>
  );
}

