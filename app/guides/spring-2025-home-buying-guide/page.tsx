import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Spring 2025 Home Buying Guide | Orange County';
  const description = 'Seasonal considerations and strategies for buying in Spring 2025.';
  return { title, description, alternates: { canonical: BASE + '/guides/spring-2025-home-buying-guide' } };
}

export default function Spring2025Guide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Spring 2025 Home Buying Guide</h1>
      <p className="text-slate-700">Timing, inventory, and financing prep for the Spring market.</p>
    </main>
  );
}

