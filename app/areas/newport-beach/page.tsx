import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Newport Beach Mortgage Broker | Luxury Home Loans & Jumbo Financing',
  description:
    'Newport Beach mortgage broker specializing in jumbo loans, luxury home financing, HELOCs, and cash-out refinancing. Wholesale pricing with 200+ lenders for Newport Beach properties.',
  alternates: { canonical: 'https://mothebroker.com/areas/newport-beach' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Newport Beach Mortgage Broker | Jumbo Loans & Luxury Home Financing',
    url: 'https://mothebroker.com/areas/newport-beach',
  },
};

export default function Page() {
  const faqs = [
    { q: 'Do you specialize in Newport Beach jumbo loans?', a: 'Yes, given Newport Beach\'s luxury market, jumbo loans are our specialty. We work with 200+ wholesale lenders to secure competitive rates for high-value properties.' },
    { q: 'What about unique Newport Beach properties like waterfront homes?', a: 'We specialize in unique Newport Beach properties including waterfront, luxury condos, and custom homes. Our lenders understand these specialized property types.' },
    { q: 'How do HELOCs work for Newport Beach homes?', a: 'Given the significant equity in most Newport Beach properties, HELOCs are very popular. We can often secure higher credit lines due to strong property values and help structure optimal terms.' },
    { q: 'What\'s the timeline for Newport Beach luxury home loans?', a: 'Luxury properties often require more detailed appraisals and documentation. Typical timelines are 3-4 weeks, though complex properties or unique situations may take longer.' },
    { q: 'Do you work with Newport Beach investment properties?', a: 'Absolutely. We offer specialized investment property loans including DSCR programs, bank-statement loans, and portfolio products for Newport Beach rental properties.' },
    { q: 'Are there benefits to working locally in Newport Beach?', a: 'Yes, we understand Newport Beach\'s diverse neighborhoods, work with local appraisers familiar with luxury properties, and have relationships with area real estate professionals.' },
  ];

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MortgageBroker',
    name: 'Mo the Broker - Newport Beach',
    areaServed: 'Newport Beach, Orange County, CA',
    url: 'https://mothebroker.com/areas/newport-beach',
    telephone: '+1-949-735-4000',
    address: { '@type': 'PostalAddress', addressLocality: 'Newport Beach', addressRegion: 'CA', addressCountry: 'US' },
    sameAs: ['https://www.linkedin.com/in/mothebroker', 'https://www.instagram.com/mothebroker'],
    description: 'Wholesale mortgage broker specializing in Newport Beach luxury home financing, jumbo loans, and high-value property lending with access to 200+ lenders.',
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
      heading: 'Newport Beach luxury home financing',
      body: (
        <>
          <p>
            Newport Beach represents the pinnacle of Orange County luxury living, with waterfront properties, exclusive neighborhoods, 
            and some of the highest property values in the region. Financing these premium properties requires specialized expertise 
            and access to lenders who understand luxury real estate markets.
          </p>
          <p>
            As a wholesale mortgage broker, we work with 200+ lenders to provide competitive jumbo loan options, sophisticated 
            financing structures, and personalized service for Newport Beach's discerning homeowners and buyers. Whether you're 
            purchasing a waterfront estate, refinancing a luxury condo, or accessing equity for investment opportunities, 
            we navigate the complexities of high-end real estate financing.
          </p>
        </>
      ),
    },
    {
      id: 'newport-market',
      heading: 'Understanding Newport Beach\'s luxury market',
      body: (
        <>
          <p>
            Newport Beach encompasses diverse luxury markets, from the prestigious waterfront communities of Balboa Island 
            and Lido Isle to the hillside estates of Newport Coast and the sophisticated condominiums of Fashion Island area. 
            Each neighborhood has unique characteristics that influence financing options and property valuations.
          </p>
          <p>
            The city's robust economy, anchored by high-net-worth residents, successful businesses, and proximity to major 
            employment centers, creates sustained demand for luxury properties. Many buyers are relocating executives, 
            successful entrepreneurs, or investors seeking premium real estate in one of California's most desirable coastal markets.
          </p>
          <p>
            Property values in Newport Beach typically require jumbo financing, often significantly above standard conforming 
            loan limits. This necessitates lenders experienced in luxury markets, thorough appraisal processes, 
            and sophisticated underwriting approaches that consider unique property features and local market dynamics.
          </p>
        </>
      ),
    },
    {
      id: 'financing-options',
      heading: 'Newport Beach financing solutions',
      body: (
        <ul className="space-y-2">
          <li><strong>Jumbo loans:</strong> Essential for most Newport Beach purchases, with competitive rates through wholesale relationships and flexible terms for unique properties.</li>
          <li><strong>Super jumbo financing:</strong> For the highest-value properties exceeding standard jumbo limits, requiring specialized lenders and programs.</li>
          <li><strong>Portfolio loans:</strong> Bank portfolio products for unique properties or situations that don't fit conventional guidelines.</li>
          <li><strong>HELOCs and home equity loans:</strong> Popular for accessing significant equity in appreciated Newport Beach properties for investments or improvements.</li>
          <li><strong>Cash-out refinancing:</strong> Allows homeowners to access substantial equity while potentially improving loan terms or structure.</li>
          <li><strong>Investment property loans:</strong> Specialized financing for Newport Beach rental properties, including luxury condos and vacation rentals.</li>
          <li><strong>Bridge loans:</strong> For buyers needing temporary financing while coordinating purchase and sale transactions.</li>
          <li><strong>Foreign national programs:</strong> For international buyers purchasing Newport Beach luxury properties.</li>
        </ul>
      ),
    },
    {
      id: 'luxury-process',
      heading: 'Our luxury home loan process',
      body: (
        <>
          <p>
            Financing luxury Newport Beach properties requires a sophisticated approach that goes beyond standard residential lending. 
            We begin with a comprehensive consultation to understand not just your financing needs, but your broader financial goals, 
            timeline, and specific requirements related to your Newport Beach property purchase or refinance.
          </p>
          <p>
            Our team coordinates with specialized professionals familiar with Newport Beach's luxury market: appraisers experienced 
            with high-value coastal properties, title companies adept at complex transactions, and real estate professionals 
            who understand the nuances of luxury home sales in different Newport Beach neighborhoods.
          </p>
          <p>
            We present multiple financing scenarios, often including different loan structures, terms, and lenders to optimize 
            for your specific situation. This might involve comparing fixed vs. adjustable rates, different down payment options, 
            or structuring loans to complement your broader investment strategy.
          </p>
          <p className="text-sm opacity-80 mt-4">
            All rate and cost examples are illustrative only. Final terms for luxury properties depend on comprehensive 
            underwriting, detailed appraisal, and individual qualification factors.
          </p>
        </>
      ),
    },
    {
      id: 'local-expertise',
      heading: 'Newport Beach market expertise',
      body: (
        <>
          <p>
            Successfully financing Newport Beach properties requires deep understanding of local market dynamics and specialized lending requirements:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Experience with waterfront properties, including seawall, dock, and flood insurance considerations</li>
            <li>• Knowledge of Newport Beach's diverse property types, from luxury condos to custom estates</li>
            <li>• Understanding of local HOA structures, especially in exclusive communities and waterfront developments</li>
            <li>• Relationships with appraisers specializing in Newport Beach luxury properties</li>
            <li>• Familiarity with local real estate professionals, escrow companies, and transaction coordinators</li>
            <li>• Experience with unique Newport Beach property features that may impact lending (boat slips, guest houses, etc.)</li>
            <li>• Understanding of seasonal market patterns and luxury buyer preferences</li>
          </ul>
          <p className="mt-3">
            This specialized knowledge, combined with our wholesale lending platform, ensures you receive both expert guidance 
            and competitive terms for your Newport Beach luxury home financing.
          </p>
        </>
      ),
    },
    {
      id: 'investment-focus',
      heading: 'Newport Beach investment properties',
      body: (
        <>
          <p>
            Newport Beach offers exceptional investment opportunities, from luxury vacation rentals to long-term rental properties 
            in one of Orange County's most stable and appreciating markets. We specialize in investment property financing 
            that recognizes the unique characteristics of Newport Beach's rental market.
          </p>
          <p>
            Our investment lending programs include DSCR (Debt Service Coverage Ratio) loans that qualify based on property 
            cash flow rather than personal income, bank-statement programs for self-employed investors, and portfolio products 
            for multiple property portfolios. We understand the rental dynamics of different Newport Beach neighborhoods 
            and can help structure financing that aligns with your investment strategy.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'HELOC options for luxury homes', href: '/heloc' },
    { label: 'Cash-out refinancing guide', href: '/cash-out-refinance' },
    { label: 'Home equity loan comparison', href: '/home-equity-loan' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Wholesale mortgage advantages', href: '/mortgage-broker-orange-county' },
    { label: 'Newport Beach neighborhoods', href: '/areas/newport-beach-neighborhoods' },
    { label: 'Jumbo loan programs', href: '/programs/jumbo-loans' },
    { label: 'Investment property financing', href: '/programs/dscr-investment-loans' },
  ];

  return (
    <>
      <SeoServicePage
        title="Newport Beach Mortgage Broker"
        subtitle="Jumbo • Luxury • Waterfront • Investment • HELOC"
        city="Newport Beach"
        slug="areas/newport-beach"
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