import type { Metadata } from "next";
import React from "react";
import { CANONICAL_BASE, SHORT_BRAND, TELEPHONE, AREA_SERVED, LOGO } from "@/lib/seo-constants";

const CITY = "Irvine";
const ROUTE = "/areas/irvine-unified-school-district-mortgage-broker";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: `Irvine Unified School District Mortgage Broker | ${SHORT_BRAND}`,
  description: `Mortgage guidance for families buying within Irvine Unified School District. Compare options and get pre-approved.`,
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
        <h1 className="text-4xl font-bold mb-4">Irvine Unified School District Mortgage Broker</h1>
        <p className="text-slate-700">Local loan options with transparent guidance for IUSD neighborhoods.</p>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

