import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Why Choose a Local Mortgage Broker | OC';
  const description = 'Benefits of local expertise and lender access in Orange County.';
  return { title, description, alternates: { canonical: BASE + '/guides/why-choose-local-mortgage-broker' } };
}

export default function WhyLocalBrokerGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Why Choose a Local Mortgage Broker</h1>
      <p className="text-slate-700">Local knowledge and wide lender access can improve outcomes.</p>
    </main>
  );
}

