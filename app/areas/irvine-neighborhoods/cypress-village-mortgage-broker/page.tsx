import type { Metadata } from "next";
import {
  CANONICAL_BASE,
  BRAND,
  AREA_SERVED,
  TELEPHONE,
  LOGO,
  PROFILES,
} from "@/lib/seo-constants";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${CANONICAL_BASE}/areas/irvine-neighborhoods/cypress-village-mortgage-broker`;
  const title = "Mortgage Broker — Cypress Village, Irvine, CA | Mo Abdel";
  const description =
    "Home financing in Cypress Village, Irvine, CA. Compare options with a local mortgage broker in Orange County, CA. Get started today.";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      images: [{ url: LOGO }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [LOGO],
    },
  };
}

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url: `${CANONICAL_BASE}/areas/irvine-neighborhoods/cypress-village-mortgage-broker`,
    image: LOGO,
    telephone: TELEPHONE,
    areaServed: ["Irvine, CA", "Cypress Village", AREA_SERVED],
    sameAs: PROFILES,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Irvine",
      addressRegion: "CA",
      addressCountry: "US",
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">
        Mortgage Broker in Cypress Village (Irvine, CA)
      </h1>
      <p className="mb-6">
        Local loan guidance for Cypress Village home buyers and owners—purchase, refinance,
        and home equity options available in Orange County, CA.
      </p>

      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
