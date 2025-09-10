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
  const url = `${CANONICAL_BASE}/areas/irvine-mortgage-broker`;
  const title = "Mortgage Broker in Irvine, CA | Mo Abdel";
  const description =
    "Looking for a mortgage broker in Irvine, CA? Get expert, local guidance and compare loan options. Orange County, CA — Start today.";

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
    url: `${CANONICAL_BASE}/areas/irvine-mortgage-broker`,
    image: LOGO,
    telephone: TELEPHONE,
    areaServed: ["Irvine, CA", AREA_SERVED],
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
      <h1 className="text-3xl font-bold mb-4">Mortgage Broker in Irvine, CA</h1>
      <p className="mb-6">
        Work with a local mortgage broker serving Irvine and all of Orange County, CA.
        Explore purchase, refinance, jumbo, FHA, VA, HELOC, and more—get a personalized quote today.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Popular Nearby Areas</h2>
        <ul className="list-disc list-inside">
          <li><a href="/areas/newport-beach-mortgage-broker">Newport Beach</a></li>
          <li><a href="/areas/tustin-mortgage-broker">Tustin (if present)</a></li>
          <li><a href="/areas/lake-forest-mortgage-broker">Lake Forest (if present)</a></li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
