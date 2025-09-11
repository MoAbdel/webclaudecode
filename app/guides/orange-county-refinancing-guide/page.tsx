import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Refinancing Guide';
  const description = 'When refinancing makes sense and common options in OC.';
  return { title, description, alternates: { canonical: BASE + '/guides/orange-county-refinancing-guide' } };
}

export default function OCRefiGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County Refinancing Guide</h1>
      <p className="text-slate-700">Explore rate-term vs cash-out and breakeven timing.</p>
    </main>
  );
}

