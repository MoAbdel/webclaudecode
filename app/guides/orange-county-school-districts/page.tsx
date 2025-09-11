import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Orange County School Districts | Guide';
  const description = 'An overview of OC school districts and home buying considerations.';
  return { title, description, alternates: { canonical: BASE + '/guides/orange-county-school-districts' } };
}

export default function OCSchoolDistrictsGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Orange County School Districts</h1>
      <p className="text-slate-700">Links to district resources and tips for families.</p>
    </main>
  );
}

