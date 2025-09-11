import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Huntington Beach vs Costa Mesa — Home Buying Guide';
  const description = 'High-level comparison of HB and Costa Mesa for buyers.';
  return { title, description, alternates: { canonical: BASE + '/neighborhood-guide/huntington-beach-vs-costa-mesa-home-buying-guide' } };
}

export default function HBvsCMGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Huntington Beach vs Costa Mesa</h1>
      <p className="text-slate-700">Compare lifestyle, pricing, and commute factors.</p>
    </main>
  );
}

