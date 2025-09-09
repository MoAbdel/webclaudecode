import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Mission Viejo Mortgage Broker | Home Loans & HELOCs in Mission Viejo, CA',
  description:
    'Local mortgage broker serving Mission Viejo homeowners and buyers. Compare HELOCs, cash-out refinance, jumbo, FHA, VA loans with wholesale pricing and 200+ lenders.',
  alternates: { canonical: 'https://www.mothebroker.com/areas/mission-viejo' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Mission Viejo Mortgage Broker | HELOC, Cash-Out & Home Loans',
    url: 'https://www.mothebroker.com/areas/mission-viejo',
  },
};

export default function Page() {
  const faqs = [
    { q: 'Do you serve Mission Viejo with multiple lender options?', a: 'Yes. As a wholesale broker we shop across 200+ lenders to find the best fit for Mission Viejo homeowners and buyers, whether for purchase or refinance.' },
    { q: 'What loan types are common in Mission Viejo?', a: 'We see strong demand for jumbo loans due to higher property values, HELOCs for home improvements, and conventional loans for first-time buyers in established neighborhoods.' },
    { q: 'How long does a Mission Viejo home loan take to close?', a: 'Typical timelines are 2-3 weeks for straightforward files, though complex documentation or unique property features may extend the process. We coordinate with local professionals to minimize delays.' },
    { q: 'Are there advantages to working locally in Mission Viejo?', a: 'Absolutely. We understand the local market, work with area appraisers familiar with Mission Viejo communities, and have relationships with realtors and escrow companies in South Orange County.' },
    { q: 'What about investment property loans in Mission Viejo?', a: 'Yes, we offer DSCR loans, bank-statement programs, and other investor-friendly products for Mission Viejo rental properties, subject to qualification.' },
    { q: 'Do you handle HELOCs for established Mission Viejo homes?', a: 'Definitely. Many Mission Viejo homes have substantial equity built up over time, making them ideal candidates for HELOCs or home equity loans for renovations or other financial goals.' },
  ];

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MortgageBroker',
    name: 'Mo the Broker - Mission Viejo',
    areaServed: 'Mission Viejo, Orange County, CA',
    url: 'https://www.mothebroker.com/areas/mission-viejo',
    telephone: '+1-949-735-4000',
    address: { '@type': 'PostalAddress', addressLocality: 'Mission Viejo', addressRegion: 'CA', addressCountry: 'US' },
    sameAs: ['https://www.linkedin.com/in/mothebroker', 'https://www.instagram.com/mothebroker'],
    description: 'Wholesale mortgage broker serving Mission Viejo with access to 200+ lenders for home loans, HELOCs, and refinancing in South Orange County.',
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
      heading: 'Your Mission Viejo mortgage partner',
      body: (
        <>
          <p>
            Mission Viejo represents one of Orange County's most established master-planned communities, with mature neighborhoods, 
            excellent schools, and strong property values. Whether you're moving to Mission Viejo for the family-friendly environment 
            or looking to refinance your existing home, having a wholesale mortgage broker provides access to the full lending market.
          </p>
          <p>
            We compare programs across 200+ lenders—including jumbo loans common in Mission Viejo, conventional financing, 
            FHA and VA options, plus specialized products like HELOCs and investment property loans. Our wholesale approach 
            means you're not limited to one lender's products or pricing, allowing us to match the right loan structure 
            to your specific situation and timeline.
          </p>
        </>
      ),
    },
    {
      id: 'mission-viejo-market',
      heading: 'Mission Viejo real estate landscape',
      body: (
        <>
          <p>
            As one of the original master-planned communities in Orange County, Mission Viejo offers established neighborhoods 
            with mature landscaping, community amenities, and a strong sense of community. The city is known for its low crime rates, 
            excellent schools in the Saddleback Valley Unified School District, and well-maintained infrastructure.
          </p>
          <p>
            Popular areas include neighborhoods around Mission Viejo Lake, the hillside communities with views, 
            and family-friendly developments throughout the city. Many homes were built in the 1970s-1990s and have 
            appreciated significantly, creating substantial equity for homeowners considering cash-out refinancing or HELOCs.
          </p>
          <p>
            The local economy benefits from proximity to major employment centers in Irvine, Newport Beach, and throughout 
            Orange County. This stability, combined with desirable amenities like the Mission Viejo Country Club and 
            extensive parks and recreation facilities, maintains steady housing demand and supports property values.
          </p>
        </>
      ),
    },
    {
      id: 'popular',
      heading: 'Common financing solutions in Mission Viejo',
      body: (
        <ul className="space-y-2">
          <li><strong>Jumbo loans:</strong> Necessary for many Mission Viejo purchases due to higher property values, with competitive wholesale rates.</li>
          <li><strong>HELOCs and home equity loans:</strong> Popular for home improvements, given the equity built up in established properties.</li>
          <li><strong>Cash-out refinancing:</strong> Allows homeowners to access significant equity while potentially improving mortgage terms.</li>
          <li><strong>Conventional loans:</strong> Standard financing for qualifying buyers, often with strong down payments in this established market.</li>
          <li><strong>FHA loans:</strong> For first-time buyers or those with smaller down payments, though jumbo limits may apply.</li>
          <li><strong>VA loans:</strong> For eligible veterans, including jumbo VA loans for higher-priced Mission Viejo homes.</li>
          <li><strong>Investment property financing:</strong> DSCR and bank-statement loans for rental property investors in Mission Viejo's stable rental market.</li>
        </ul>
      ),
    },
    {
      id: 'process',
      heading: 'Our Mission Viejo loan process',
      body: (
        <>
          <p>
            We begin by understanding your specific needs: are you purchasing in Mission Viejo, refinancing an existing property, 
            or accessing equity for improvements or other goals? We review your financial profile, timeline, and preferences 
            to identify the most suitable loan programs from our network of 200+ lenders.
          </p>
          <p>
            For Mission Viejo properties, we consider factors like community amenities, HOA structures, and local market conditions 
            that might influence appraisal or underwriting. We coordinate with local professionals—appraisers familiar with 
            Mission Viejo neighborhoods, title companies experienced in the area, and real estate agents who understand the local market dynamics.
          </p>
          <p>
            Our wholesale model means we can present multiple scenarios side-by-side, showing you trade-offs between rate, 
            closing costs, and loan terms. This transparency helps you make informed decisions rather than accepting 
            a single lender's limited options.
          </p>
          <p className="text-sm opacity-80 mt-4">
            All examples are illustrative and not commitments to lend. Final terms depend on complete application, 
            underwriting, and property appraisal.
          </p>
        </>
      ),
    },
    {
      id: 'local-benefits',
      heading: 'Mission Viejo market expertise',
      body: (
        <>
          <p>
            Working with a broker familiar with South Orange County and Mission Viejo specifically provides several advantages:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Understanding of local property types, from single-family homes to townhomes and condominiums</li>
            <li>• Experience with Mission Viejo's various HOA structures and community amenities</li>
            <li>• Knowledge of local appraisal considerations and comparable sales patterns</li>
            <li>• Relationships with area professionals to coordinate smooth transactions</li>
            <li>• Familiarity with local employment patterns and income documentation requirements</li>
            <li>• Understanding of seasonal market patterns in South Orange County</li>
          </ul>
          <p className="mt-3">
            This local expertise, combined with wholesale lending access, helps ensure you get competitive terms 
            and a smooth experience for your Mission Viejo home financing needs.
          </p>
        </>
      ),
    },
    {
      id: 'next-steps',
      heading: 'Getting started in Mission Viejo',
      body: (
        <>
          <p>
            Whether you're looking to purchase in Mission Viejo, refinance your current home, or access your property's equity, 
            the first step is understanding your options. We provide no-obligation consultations to review your situation 
            and outline potential loan programs that might fit your needs.
          </p>
          <p>
            If you're purchasing, we can provide pre-approval letters that demonstrate your financing capacity to sellers and agents. 
            For refinancing, we analyze your current loan terms against available market options to determine potential benefits. 
            And for equity access, we compare HELOCs, home equity loans, and cash-out refinancing to find the most cost-effective approach.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'HELOC options and rates', href: '/heloc' },
    { label: 'Cash-out refinancing guide', href: '/cash-out-refinance' },
    { label: 'Home equity loan comparison', href: '/home-equity-loan' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Newport Beach area services', href: '/areas/newport-beach' },
    { label: 'Mortgage articles and insights', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="Mission Viejo Mortgage Broker"
        subtitle="HELOC • Cash-out • Jumbo • Conventional • FHA • VA"
        city="Mission Viejo"
        slug="areas/mission-viejo"
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
