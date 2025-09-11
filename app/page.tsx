import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Mortgage Broker | Mo Abdel';
  const description = 'Local mortgage solutions for purchase and refinance in Orange County.';
  return { title, description, alternates: { canonical: BASE + '/' } };
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-5xl font-bold mb-4">Orange County Mortgage Broker</h1>
      <p className="text-slate-700">Clear guidance, competitive rates, and local expertise.</p>
    </main>
  );
}

