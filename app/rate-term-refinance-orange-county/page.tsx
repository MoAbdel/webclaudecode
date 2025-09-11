import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Rate-Term Refinance — Orange County | Overview';
  const description = 'Lower rate or adjust loan term without cash out in Orange County.';
  return { title, description, alternates: { canonical: BASE + '/rate-term-refinance-orange-county' } };
}

export default function RateTermRefiOrangeCountyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Rate-Term Refinance — Orange County</h1>
      <p className="text-slate-700">Explore options to reduce payment or shorten your term.</p>
    </main>
  );
}

