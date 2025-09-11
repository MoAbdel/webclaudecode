import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Neighborhoods — Comparison Guide';
  const description = 'Compare OC neighborhoods by price, schools, commute, and lifestyle.';
  return { title, description, alternates: { canonical: BASE + '/neighborhood-guide/orange-county-neighborhoods-comparison-guide' } };
}

export default function OCNeighborhoodsComparisonGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County Neighborhoods — Comparison</h1>
      <p className="text-slate-700">High-level comparisons to help narrow your search.</p>
    </main>
  );
}

