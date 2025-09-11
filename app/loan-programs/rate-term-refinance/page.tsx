import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Rate-Term Refinance — Program';
  const description = 'Lower your rate or change your term without taking cash out.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/rate-term-refinance' } };
}

export default function RateTermRefiPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Rate-Term Refinance</h1>
      <p className="text-slate-700">Reduce monthly payments or shorten loan duration.</p>
    </main>
  );
}

