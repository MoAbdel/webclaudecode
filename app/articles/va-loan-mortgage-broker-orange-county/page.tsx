import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'VA Loan Mortgage Broker — Orange County | Guide';
  const description = 'Eligibility and benefits of VA loans for Orange County buyers.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/articles/va-loan-mortgage-broker-orange-county' },
    openGraph: { title, description, url: BASE + '/articles/va-loan-mortgage-broker-orange-county', siteName: 'Mo Abdel — Mortgage Broker' },
  };
}

export default function VALoanBrokerArticle() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">VA Loan Mortgage Broker — Orange County</h1>
      <p className="text-slate-700">Zero down options and favorable terms for veterans and service members.</p>
    </main>
  );
}

