import type { Metadata } from "next";
import React from "react";
import { CANONICAL_BASE, SHORT_BRAND, TELEPHONE, AREA_SERVED, LOGO } from "@/lib/seo-constants";

const CITY = "Mission Viejo";
const ROUTE = "/areas/mission-viejo-mortgage-broker";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: `Mortgage Broker in ${CITY}, CA | ${SHORT_BRAND}`,
  description: `Local mortgage options for ${CITY}, Orange County, CA. Compare programs and get a fast pre-approval.`,
  alternates: { canonical: `${CANONICAL_BASE}${ROUTE}` }
});

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SHORT_BRAND,
    url: `${CANONICAL_BASE}${ROUTE}`,
    image: LOGO,
    telephone: TELEPHONE,
    areaServed: [
      { "@type": "AdministrativeArea", name: AREA_SERVED },
      { "@type": "City", name: `${CITY}, CA` },
    ],
  };

  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Mortgage Broker in {CITY}, CA</h1>
        <p className="text-slate-700">Conventional, FHA, VA, jumbo, and HELOC options with local guidance.</p>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

