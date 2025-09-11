import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'USDA Rural Loans — Program';
  const description = 'Zero down options for eligible rural areas near Orange County.';
  return { title, description, alternates: { canonical: BASE + '/loan-programs/usda-rural-loans' } };
}

export default function USDARuralLoansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">USDA Rural Loans</h1>
      <p className="text-slate-700">Income and area eligibility apply; ideal for qualifying locations.</p>
    </main>
  );
}

