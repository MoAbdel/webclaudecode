import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Non-QM Loans — Orange County | Overview';
  const description = 'Overview of non-QM loan options for OC homebuyers and investors.';
  return { title, description, alternates: { canonical: BASE + '/non-qm-loans-orange-county' } };
}

export default function NonQMOrangeCountyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Non-QM Loans in Orange County</h1>
      <p className="text-slate-700">Bank statement, asset qualifier, and other flexible programs.</p>
    </main>
  );
}

