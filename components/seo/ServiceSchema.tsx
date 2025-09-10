'use client';

import { usePathname } from 'next/navigation';
import { AREA_SERVED, BRAND, CANONICAL_BASE } from '@/lib/seo-constants';

function toTitle(input: string) {
  return input
    .replace(/-/g, ' ')
    .replace(/\b([a-z])/g, (m) => m.toUpperCase())
    .replace(/Fha/gi, 'FHA')
    .replace(/Va/gi, 'VA')
    .replace(/Heloc/gi, 'HELOC')
    .replace(/Heloan/gi, 'HELOAN')
    .trim();
}

export default function ServiceSchema() {
  const pathname = usePathname();
  if (!pathname?.startsWith('/loan-programs')) return null;

  const parts = pathname.split('/').filter(Boolean);
  const program = parts[1] || 'mortgage-loans';
  const serviceType = toTitle(program);
  const canonical = `${CANONICAL_BASE}${pathname}`;

  const financialService = {
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'MortgageBroker'],
    name: `${serviceType} — ${BRAND}`,
    serviceType: serviceType,
    areaServed: AREA_SERVED,
    url: canonical,
    provider: {
      '@type': 'Organization',
      name: BRAND,
    },
  } as const;

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Who qualifies for ${serviceType} in ${AREA_SERVED}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${serviceType} eligibility depends on income, credit, and property. Get a quick check and pre‑approval.`,
        },
      },
      {
        '@type': 'Question',
        name: `What are current ${serviceType} rates in ${AREA_SERVED}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Rates vary by profile and program. Compare offers from 200+ lenders for ${AREA_SERVED}.`,
        },
      },
      {
        '@type': 'Question',
        name: `How fast can I close ${serviceType}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Typical closings are 18–30 days depending on documentation and appraisal timing.`,
        },
      },
    ],
  } as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

