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
  const url = `${CANONICAL_BASE}/areas/irvine-neighborhoods/turtle-rock-mortgage-broker`;
  const title = "Mortgage Broker — Turtle Rock, Irvine, CA | Mo Abdel";
  const description =
    "Turtle Rock (Irvine, CA) mortgage options with a local broker. Orange County, CA — Get a clear, competitive path to close.";

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
    url: `${CANONICAL_BASE}/areas/irvine-neighborhoods/turtle-rock-mortgage-broker`,
    image: LOGO,
    telephone: TELEPHONE,
    areaServed: ["Irvine, CA", "Turtle Rock", AREA_SERVED],
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
      <h1 className="text-3xl font-bold mb-4">Mortgage Broker in Turtle Rock (Irvine, CA)</h1>
      <p className="mb-6">
        Local guidance for purchase and refinancing in Turtle Rock and greater Orange County, CA.
      </p>

      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
