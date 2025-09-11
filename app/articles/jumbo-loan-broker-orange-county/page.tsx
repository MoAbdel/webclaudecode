import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Jumbo Loan Broker — Orange County | Guide';
  const description = 'Overview of jumbo loan options and qualifications in Orange County, CA.';
  return {
    title,
    description,
    alternates: { canonical: BASE + '/articles/jumbo-loan-broker-orange-county' },
    openGraph: { title, description, url: BASE + '/articles/jumbo-loan-broker-orange-county', siteName: 'Mo Abdel — Mortgage Broker' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function JumboLoanBrokerArticle() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Jumbo Loan Broker in Orange County</h1>
      <p className="text-slate-700">Compare jumbo and portfolio options for high-value homes.</p>
    </main>
  );
}

