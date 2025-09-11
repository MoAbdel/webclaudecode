import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Asset Depletion Loans — Orange County | Program';
  const description = 'Use verified assets to qualify for mortgage financing in OC.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/asset-depletion-loans' } };
}

export default function AssetDepletionLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Asset Depletion Loans</h1>
      <p className="text-slate-700">Qualify using liquid assets instead of traditional income.</p>
    </main>
  );
}

