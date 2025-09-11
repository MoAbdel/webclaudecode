import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Market Forecast 2025–2026 | Guide';
  const description = 'Macro trends, inventory, and rate scenarios for OC buyers.';
  return { title, description, alternates: { canonical: BASE + '/guides/orange-county-market-forecast-2025-2026' } };
}

export default function OCForecastGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County Market Forecast 2025–2026</h1>
      <p className="text-slate-700">A high-level outlook for planning purchases and refinances.</p>
    </main>
  );
}

