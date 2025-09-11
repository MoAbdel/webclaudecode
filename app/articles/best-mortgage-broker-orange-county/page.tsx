import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Best Mortgage Broker in Orange County | Mo Abdel';
  const description = 'Local mortgage expertise in Orange County, CA. Get started today.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/articles/best-mortgage-broker-orange-county' },
    openGraph: { title, description, url: BASE + '/articles/best-mortgage-broker-orange-county', siteName: 'Mo Abdel — Mortgage Broker' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function BestMortgageBrokerArticle() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Best Mortgage Broker in Orange County</h1>
      <p className="text-slate-700">Trusted, local guidance for home purchase and refinance.</p>
    </main>
  );
}

