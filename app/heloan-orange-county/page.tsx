import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'HELOC/HELoan — Orange County | Overview';
  const description = 'Home equity loan and line of credit basics for OC homeowners.';
  return { title, description, alternates: { canonical: BASE + '/heloan-orange-county' } };
}

export default function HELOCHeloanPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">HELOC and Home Equity Loans</h1>
      <p className="text-slate-700">Tap equity for improvements, debt consolidation, or other needs.</p>
    </main>
  );
}

