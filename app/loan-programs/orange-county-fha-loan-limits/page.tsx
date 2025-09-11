import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County FHA Loan Limits | 2025';
  const description = 'Current FHA loan limits for Orange County, CA.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/orange-county-fha-loan-limits' } };
}

export default function OCFHALimitsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County FHA Loan Limits</h1>
      <p className="text-slate-700">Check the latest county limits before you shop.</p>
    </main>
  );
}

