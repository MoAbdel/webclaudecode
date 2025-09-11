import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Newport Beach vs Laguna Beach — Home Buying Guide';
  const description = 'A quick comparison of two coastal OC markets.';
  return { title, description, alternates: { canonical: BASE + '/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide' } };
}

export default function NewportVsLagunaGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Newport Beach vs Laguna Beach</h1>
      <p className="text-slate-700">Consider beaches, hills, traffic, and property types.</p>
    </main>
  );
}

