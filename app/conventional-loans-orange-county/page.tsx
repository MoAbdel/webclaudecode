import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Conventional Loans — Orange County | Overview';
  const description = 'Conventional loan basics for Orange County buyers and homeowners.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/conventional-loans-orange-county' },
    openGraph: { title, description, url: BASE + '/conventional-loans-orange-county', siteName: 'Mo Abdel — Mortgage Broker' },
  };
}

export default function ConventionalLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Conventional Loans in Orange County</h1>
      <p className="text-slate-700">Down payments from 3%, flexible terms, and competitive pricing.</p>
    </main>
  );
}

