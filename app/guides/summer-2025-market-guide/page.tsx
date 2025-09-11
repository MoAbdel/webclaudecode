import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Summer 2025 Market Guide | Orange County';
  const description = 'What to expect in Summer 2025 for OC buyers and sellers.';
  return { title, description, alternates: { canonical: BASE + '/guides/summer-2025-market-guide' } };
}

export default function Summer2025Guide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Summer 2025 Market Guide</h1>
      <p className="text-slate-700">Inventory, rates, and strategy for the summer season.</p>
    </main>
  );
}

