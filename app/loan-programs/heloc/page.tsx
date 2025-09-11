import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Home Equity Line of Credit (HELOC) — Program';
  const description = 'Revolving line of credit secured by home equity.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/heloc' } };
}

export default function HELOCProgramPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Home Equity Line of Credit (HELOC)</h1>
      <p className="text-slate-700">Flexible access to equity with interest-only draw periods.</p>
    </main>
  );
}

