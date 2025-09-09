import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Irvine Mortgage Broker | Home Loans & HELOCs in Irvine, CA',
  description:
    'Local mortgage guidance for Irvine homeowners and buyers. Compare HELOCs, cash-out refinance, VA, FHA, jumbo and more with a wholesale mortgage broker.',
  alternates: { canonical: 'https://www.mothebroker.com/areas/irvine' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Irvine Mortgage Broker | HELOC, Cash-Out & Home Loans',
    url: 'https://www.mothebroker.com/areas/irvine',
  },
};

export default function Page() {
  const faqs = [
    { q: 'Do you work with multiple lenders in Irvine?', a: 'Yes. As a wholesale broker we shop across 200+ lenders to match your goals and documentation profile for Irvine properties.' },
    { q: 'Can I get a HELOC in Irvine?', a: 'Typically yes if you have sufficient equity and qualify on income/credit. Terms vary by lender; we outline options side-by-side for your Irvine home.' },
    { q: 'How fast can a cash-out refi close in Irvine?', a: 'Straightforward W-2 files may close in ~2–3 weeks; complex files may need more time. Timelines depend on appraisal and underwriting specific to Orange County.' },
    { q: 'Do you offer DSCR or bank-statement loans for Irvine investors?', a: 'Yes, for investors and self-employed borrowers in Irvine, subject to qualification and lender overlays.' },
    { q: 'What about jumbo loans in Irvine?', a: 'Absolutely. Given Irvine\'s higher property values, we regularly arrange jumbo financing with competitive terms through our wholesale network.' },
    { q: 'Are there local advantages to working with you in Irvine?', a: 'We understand Orange County market dynamics, local appraisal timelines, and have relationships with area professionals to streamline your transaction.' },
  ];

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MortgageBroker',
    name: 'Mo the Broker - Irvine',
    areaServed: 'Irvine, Orange County, CA',
    url: 'https://www.mothebroker.com/areas/irvine',
    telephone: '+1-949-735-4000',
    address: { '@type': 'PostalAddress', addressLocality: 'Irvine', addressRegion: 'CA', addressCountry: 'US' },
    sameAs: ['https://www.linkedin.com/in/mothebroker', 'https://www.instagram.com/mothebroker'],
    description: 'Wholesale mortgage broker serving Irvine with access to 200+ lenders for home loans, HELOCs, and refinancing.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const sections = [
    {
      id: 'overview',
      heading: 'Your Irvine mortgage partner',
      body: (
        <>
          <p>
            If you live in Irvine or you're relocating to this master-planned community, having a wholesale broker on your side makes financing simpler.
            We compare programs across 200+ lenders—conventional, jumbo, FHA, VA, DSCR, bank-statement, and second-lien options like HELOCs—so you see trade-offs clearly.
            Irvine's higher property values often require jumbo financing, and our wholesale network provides competitive options.
          </p>
          <p>
            Our goal is to align the loan structure with your timeline, down payment, cash-flow needs, and long-term plans in Irvine's dynamic real estate market, 
            while keeping fees transparent. Whether you're buying your first home in Woodbridge or refinancing a property in Turtle Rock, 
            we help navigate the options without the pressure of single-lender limitations.
          </p>
        </>
      ),
    },
    {
      id: 'irvine-market',
      heading: 'Understanding Irvine\'s real estate landscape',
      body: (
        <>
          <p>
            Irvine consistently ranks among Orange County's most desirable cities, with master-planned communities, top-rated schools, 
            and proximity to major employment centers. This desirability translates to higher property values, with median home prices 
            often exceeding conforming loan limits, making jumbo financing common.
          </p>
          <p>
            Popular neighborhoods include Woodbridge, Turtle Rock, University Park, and newer developments in Great Park. 
            Each area has unique characteristics that can influence financing options, from HOA considerations to property types 
            (condos, townhomes, single-family detached). We understand these nuances and how they impact loan qualification.
          </p>
          <p>
            The strong job market, anchored by major employers like UC Irvine, Broadcom, and numerous tech companies, 
            creates steady housing demand but also means competition. Having pre-approval from a responsive wholesale broker 
            can provide an edge in multiple-offer situations.
          </p>
        </>
      ),
    },
    {
      id: 'popular',
      heading: 'Popular financing options in Irvine',
      body: (
        <ul className="space-y-2">
          <li><strong>Jumbo loans:</strong> Essential for most Irvine purchases, with competitive rates through wholesale pricing.</li>
          <li><strong>HELOCs & Home Equity Loans:</strong> Popular for home improvements, given Irvine's appreciation and renovation potential.</li>
          <li><strong>Cash-out refinance:</strong> Allows homeowners to access equity while potentially improving their first mortgage terms.</li>
          <li><strong>Investment property loans:</strong> DSCR and bank-statement programs for real estate investors in Irvine's rental market.</li>
          <li><strong>First-time buyer programs:</strong> FHA and conventional options for qualifying buyers, though jumbo may be needed.</li>
          <li><strong>VA loans:</strong> For eligible veterans and service members, including jumbo VA loans for higher-priced Irvine homes.</li>
        </ul>
      ),
    },
    {
      id: 'how-it-works',
      heading: 'How we shop your Irvine loan',
      body: (
        <>
          <p>
            We start by understanding your situation: purchase vs. refinance, timeline, down payment, income documentation, 
            and specific needs in Irvine's market. Then we outline scenarios side-by-side—comparing rate, payment, closing costs, 
            and cash-to-close across multiple lenders.
          </p>
          <p>
            For Irvine properties, we pay special attention to appraisal considerations, given the variety of property types 
            and the importance of comparable sales in your specific neighborhood or village. We also coordinate with local 
            real estate professionals who understand Irvine's unique HOA structures and community amenities.
          </p>
          <p>
            No single lender fits every profile, especially in a diverse market like Irvine where borrowers range from 
            first-time buyers to high-net-worth individuals to real estate investors. Shopping wholesale helps you avoid 
            one-size-fits-all quotes and find the best match for your specific situation.
          </p>
          <p className="text-sm opacity-80 mt-4">
            All rate and cost examples are illustrative only and not a commitment to lend. 
            Final terms and approvals depend on complete underwriting and property appraisal.
          </p>
        </>
      ),
    },
    {
      id: 'local-expertise',
      heading: 'Local Irvine advantages',
      body: (
        <>
          <p>
            Working with a broker familiar with Orange County means understanding local market dynamics that can affect your financing:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Experience with Irvine Company properties and their unique characteristics</li>
            <li>• Knowledge of local HOA structures and how they impact loan qualification</li>
            <li>• Relationships with area appraisers familiar with Irvine's diverse neighborhoods</li>
            <li>• Understanding of local employment patterns and how they affect income documentation</li>
            <li>• Familiarity with new construction processes in Great Park and other developing areas</li>
            <li>• Connections with local real estate agents, escrow companies, and other transaction professionals</li>
          </ul>
          <p className="mt-3">
            This local knowledge, combined with wholesale lending access, helps ensure smoother transactions and competitive terms 
            for your Irvine home financing needs.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'HELOCs and home equity options', href: '/heloc' },
    { label: 'Cash-out refinancing', href: '/cash-out-refinance' },
    { label: 'Home equity loans', href: '/home-equity-loan' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Why choose a wholesale broker', href: '/mortgage-broker-orange-county' },
    { label: 'Irvine neighborhoods guide', href: '/areas/irvine-neighborhoods' },
    { label: 'Recent mortgage insights', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="Irvine Mortgage Broker"
        subtitle="HELOC • Cash-out • Jumbo • FHA • VA • DSCR"
        city="Irvine"
        slug="areas/irvine"
        lastUpdatedISO={new Date().toISOString()}
        sections={sections}
        faqs={faqs}
        internalLinks={links}
      />
      <JsonLd json={localBusiness} />
      <JsonLd json={faqSchema} />
    </>
  );
}
