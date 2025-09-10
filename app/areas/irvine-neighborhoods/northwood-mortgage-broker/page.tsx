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
  const url = `${CANONICAL_BASE}/areas/irvine-neighborhoods/northwood-mortgage-broker`;
  const title = "Mortgage Broker — Northwood, Irvine, CA | Mo Abdel";
  const description =
    "Northwood (Irvine, CA) mortgage solutions: purchase, refi, jumbo, FHA/VA, HELOC. Orange County, CA — Start today.";

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
    url: `${CANONICAL_BASE}/areas/irvine-neighborhoods/northwood-mortgage-broker`,
    image: LOGO,
    telephone: TELEPHONE,
    areaServed: ["Irvine, CA", "Northwood", AREA_SERVED],
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
      <h1 className="text-3xl font-bold mb-4">Mortgage Broker in Northwood (Irvine, CA)</h1>
      <p className="mb-6">
        Get a local, competitive mortgage experience for Northwood—Orange County, CA purchase
        and refinance options with clear guidance.
      </p>

      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
