import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'First-Time Homebuyer Mortgage — Orange County | Guide';
  const description = 'Practical guidance for first-time homebuyers in Orange County, CA.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/articles/first-time-homebuyer-mortgage-orange-county' },
    openGraph: { title, description, url: BASE + '/articles/first-time-homebuyer-mortgage-orange-county', siteName: 'Mo Abdel — Mortgage Broker' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function FirstTimeHomebuyerArticle() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">First-Time Homebuyer Mortgage in Orange County</h1>
      <p className="text-slate-700">Learn about down payments, programs, and pre-approval steps.</p>
    </main>
  );
}

