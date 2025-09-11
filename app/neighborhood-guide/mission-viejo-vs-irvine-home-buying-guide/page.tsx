import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';
export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  const title = 'Mission Viejo vs Irvine — Home Buying Guide';
  const description = 'Compare amenities, schools, and value between Mission Viejo and Irvine.';
  return { title, description, alternates: { canonical: BASE + '/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide' } };
}

export default function MissionViejoVsIrvineGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Mission Viejo vs Irvine</h1>
      <p className="text-slate-700">Compare HOA amenities, pricing, and commute.</p>
    </main>
  );
}

