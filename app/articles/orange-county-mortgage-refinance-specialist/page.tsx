import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County Mortgage Refinance Specialist | Guide';
  const description = 'Refinance strategies and options for Orange County homeowners.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/articles/orange-county-mortgage-refinance-specialist' },
    openGraph: { title, description, url: BASE + '/articles/orange-county-mortgage-refinance-specialist', siteName: 'Mo Abdel — Mortgage Broker' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function RefinanceSpecialistArticle() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County Mortgage Refinance Specialist</h1>
      <p className="text-slate-700">Lower payments, tap equity, or change terms with confidence.</p>
    </main>
  );
}

