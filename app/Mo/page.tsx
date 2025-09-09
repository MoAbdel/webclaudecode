import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';
import Image from 'next/image';

export const metadata = {
  title: 'Mo Abdel | Orange County Mortgage Broker & Founder',
  description: 'Meet Mo Abdel, NMLS #1426884, Orange County wholesale mortgage broker and founder of Mo the Broker. Experienced in jumbo loans, HELOCs, and refinancing.',
  alternates: { canonical: 'https://www.mothebroker.com/Mo' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Mo Abdel | Orange County Mortgage Broker & Founder',
    url: 'https://www.mothebroker.com/Mo',
  },
};

export default function MoProfilePage() {
  const faqs = [
    { q: 'What is Mo\'s experience as a mortgage broker?', a: 'Mo has years of experience as a wholesale mortgage broker specializing in Orange County real estate financing, with expertise in jumbo loans, HELOCs, cash-out refinancing, and complex loan scenarios.' },
    { q: 'What makes Mo different from other mortgage brokers?', a: 'Mo focuses on wholesale lending with access to 200+ lenders, providing competitive rates and personalized service. His Orange County market expertise helps clients navigate local real estate dynamics.' },
    { q: 'What types of loans does Mo specialize in?', a: 'Mo specializes in jumbo loans, HELOCs, cash-out refinancing, investment property loans, and non-QM programs including bank statement and asset depletion loans.' },
    { q: 'Is Mo licensed to originate loans?', a: 'Yes, Mo is a licensed mortgage loan originator with NMLS #1426884, licensed to originate loans in California and other approved states.' },
    { q: 'How can I contact Mo directly?', a: 'You can reach Mo directly at (949) 735-4000 or mo@mothebroker.com. He provides personalized consultations for all Orange County mortgage needs.' },
    { q: 'Does Mo work with first-time homebuyers?', a: 'Absolutely. Mo works with borrowers at all experience levels, from first-time buyers to seasoned investors, providing education and guidance throughout the loan process.' },
  ];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mo Abdel',
    jobTitle: 'Mortgage Broker',
    worksFor: {
      '@type': 'Organization',
      name: 'Mo the Broker',
    },
    url: 'https://www.mothebroker.com/Mo',
    telephone: '+1-949-735-4000',
    email: 'mo@mothebroker.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressLocality: 'Orange County',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Mortgage Lending',
      'Home Equity Lines of Credit',
      'Jumbo Loans',
      'Real Estate Finance',
      'Orange County Real Estate',
    ],
    alumniOf: 'Licensed Mortgage Professional',
    description: 'Orange County mortgage broker specializing in wholesale lending, jumbo loans, HELOCs, and complex financing solutions.',
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
      id: 'introduction',
      heading: 'Meet Mo Abdel',
      body: (
        <>
          <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/mo-headshot.webp"
                alt="Mo Abdel, Orange County Mortgage Broker"
                width={200}
                height={200}
                className="rounded-xl"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="text-lg mb-4">
                Mo Abdel is the founder of Mo the Broker and a licensed mortgage professional (NMLS #1426884) 
                specializing in wholesale lending throughout Orange County. With extensive experience in complex 
                financing scenarios, Mo has built a reputation for finding creative solutions and delivering 
                exceptional service to homebuyers, homeowners, and investors.
              </p>
              <p>
                Based in Orange County, Mo understands the local market dynamics that influence home financing, 
                from the luxury markets of Newport Beach to the family communities of Irvine and beyond. 
                His wholesale approach provides clients access to over 200 lenders, ensuring competitive rates 
                and flexible terms tailored to each borrower's unique situation.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'expertise',
      heading: 'Areas of expertise',
      body: (
        <>
          <p className="mb-4">
            Mo specializes in helping Orange County residents and investors navigate complex financing needs 
            through his wholesale lending platform. His areas of expertise include:
          </p>
          <ul className="space-y-2">
            <li><strong>Jumbo Loans:</strong> Essential financing for Orange County's high-value real estate market</li>
            <li><strong>HELOCs & Home Equity Loans:</strong> Flexible access to property equity for improvements, investments, or debt consolidation</li>
            <li><strong>Cash-Out Refinancing:</strong> Strategic refinancing to access equity while optimizing loan terms</li>
            <li><strong>Investment Property Loans:</strong> DSCR programs, bank statement loans, and portfolio lending for real estate investors</li>
            <li><strong>Non-QM Programs:</strong> Asset depletion, foreign national, and alternative documentation loans</li>
            <li><strong>First-Time Buyer Programs:</strong> FHA, VA, and conventional loans with down payment assistance options</li>
          </ul>
        </>
      ),
    },
    {
      id: 'approach',
      heading: 'Mo\'s approach to mortgage lending',
      body: (
        <>
          <p className="mb-4">
            Mo's wholesale lending approach focuses on three key principles:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Transparent Communication</h3>
              <p>
                Mo believes in clear, honest communication throughout the loan process. He explains options, 
                outlines costs, and sets realistic expectations, ensuring clients understand every aspect 
                of their financing decision.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Market Expertise</h3>
              <p>
                With deep knowledge of Orange County's diverse communities and market conditions, Mo provides 
                insights that help clients make informed decisions about timing, loan products, and long-term strategies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Wholesale Advantage</h3>
              <p>
                By working with over 200 wholesale lenders, Mo can compare rates, terms, and programs 
                to find the best fit for each client's situation, often providing better options than 
                single-lender retail banks or credit unions.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'orange-county-focus',
      heading: 'Orange County market knowledge',
      body: (
        <>
          <p className="mb-4">
            Mo's focus on Orange County provides clients with valuable local market insights:
          </p>
          <ul className="space-y-1">
            <li>• Understanding of neighborhood-specific market dynamics and property values</li>
            <li>• Knowledge of local real estate professionals, appraisers, and service providers</li>
            <li>• Experience with Orange County's diverse property types and community structures</li>
            <li>• Insight into local employment patterns and their impact on financing</li>
            <li>• Familiarity with area development patterns and future growth projections</li>
            <li>• Relationships with local real estate agents and industry professionals</li>
          </ul>
          <p className="mt-4">
            This local expertise helps ensure smooth transactions and appropriate loan structuring 
            for Orange County's unique real estate landscape.
          </p>
        </>
      ),
    },
    {
      id: 'client-commitment',
      heading: 'Commitment to clients',
      body: (
        <>
          <p className="mb-4">
            Mo's commitment extends beyond just closing loans. He focuses on building long-term relationships 
            and providing ongoing value to his clients:
          </p>
          <ul className="space-y-2">
            <li><strong>Personalized Service:</strong> Direct access to Mo throughout the loan process</li>
            <li><strong>Educational Approach:</strong> Helping clients understand their options and make informed decisions</li>
            <li><strong>Long-Term Perspective:</strong> Considering clients' future needs and financial goals</li>
            <li><strong>Responsive Communication:</strong> Prompt responses to questions and concerns</li>
            <li><strong>Professional Network:</strong> Connections to trusted real estate professionals and service providers</li>
            <li><strong>Ongoing Support:</strong> Available for future refinancing needs and market updates</li>
          </ul>
        </>
      ),
    },
    {
      id: 'getting-started',
      heading: 'Working with Mo',
      body: (
        <>
          <p className="mb-4">
            Ready to explore your Orange County financing options? Mo provides complimentary consultations 
            to discuss your needs and outline available programs. Whether you're:
          </p>
          <ul className="space-y-1 mb-4">
            <li>• Purchasing your first home in Orange County</li>
            <li>• Refinancing to access equity or improve terms</li>
            <li>• Expanding your real estate investment portfolio</li>
            <li>• Exploring HELOC options for home improvements</li>
            <li>• Navigating complex financing scenarios</li>
          </ul>
          <p>
            Mo can help you understand your options and find the right financing solution. 
            Contact him directly to get started with your mortgage needs.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'HELOCs and home equity options', href: '/heloc' },
    { label: 'Cash-out refinancing', href: '/cash-out-refinance' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Jumbo loan programs', href: '/programs/jumbo-loans' },
    { label: 'Investment property financing', href: '/programs/dscr-investment-loans' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Contact Mo directly', href: '/contact' },
    { label: 'Mortgage articles and insights', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="Mo Abdel"
        subtitle="Orange County Mortgage Broker & Founder | NMLS #1426884"
        slug="Mo"
        lastUpdatedISO={new Date().toISOString()}
        heroCTA={{ label: 'Contact Mo directly', href: '/contact' }}
        sections={sections}
        faqs={faqs}
        internalLinks={links}
      />
      <JsonLd json={personSchema} />
      <JsonLd json={faqSchema} />
    </>
  );
}
