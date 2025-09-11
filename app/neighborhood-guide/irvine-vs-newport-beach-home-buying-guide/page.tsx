import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Irvine vs Newport Beach — Home Buying Guide';
  const description = 'Quick comparison of schools, housing, and lifestyle.';
  return { title, description, alternates: { canonical: BASE + '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide' } };
}

export default function IrvineVsNewportGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Irvine vs Newport Beach</h1>
      <p className="text-slate-700">Consider commute, schools, pricing, and coastal access.</p>
    </main>
  );
}

