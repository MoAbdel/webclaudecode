import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Home Buyer Guide | Overview';
  const description = 'Key steps, loan options, and timelines for OC homebuyers.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/guides/orange-county-home-buyer-guide' },
    openGraph: { title, description, url: BASE + '/guides/orange-county-home-buyer-guide', siteName: 'Mo Abdel — Mortgage Broker' },
  };
}

export default function OCHomeBuyerGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County Home Buyer Guide</h1>
      <p className="text-slate-700">A concise overview of the process, programs, and timelines.</p>
    </main>
  );
}

