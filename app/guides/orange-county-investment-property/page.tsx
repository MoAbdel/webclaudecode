import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Investment Property | Guide';
  const description = 'Basics of financing and evaluating OC investment properties.';
  return { title, description, alternates: { canonical: BASE + '/guides/orange-county-investment-property' } };
}

export default function OCInvestmentPropertyGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County Investment Property</h1>
      <p className="text-slate-700">Financing types, cash flow basics, and risk considerations.</p>
    </main>
  );
}

