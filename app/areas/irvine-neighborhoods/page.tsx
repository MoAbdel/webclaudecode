import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Irvine Neighborhoods Mortgage Guide | Woodbridge, Turtle Rock, Great Park',
  description:
    'Complete Irvine neighborhoods financing guide. Mortgage options for Woodbridge, Turtle Rock, University Park, Great Park, and all Irvine villages with competitive wholesale rates.',
  alternates: { canonical: 'https://www.mothebroker.com/areas/irvine-neighborhoods' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Irvine Neighborhoods Mortgage Guide | Village-Specific Home Financing',
    url: 'https://www.mothebroker.com/areas/irvine-neighborhoods',
  },
};

export default function Page() {
  const faqs = [
    { q: 'Do different Irvine neighborhoods require different loan types?', a: 'While most Irvine neighborhoods require jumbo financing due to high property values, specific villages may have different property types (condos vs. single-family) affecting loan programs and qualification.' },
    { q: 'How do Mello-Roos taxes affect financing in newer Irvine developments?', a: 'Mello-Roos taxes in areas like Great Park are factored into debt-to-income calculations. We work with lenders familiar with these assessments and their impact on qualification.' },
    { q: 'Are there differences between older and newer Irvine neighborhoods for financing?', a: 'Newer developments may have different appraisal considerations, while established areas like Woodbridge have extensive comparable sales. Both scenarios require neighborhood-specific expertise.' },
    { q: 'What about condos vs. single-family homes in different Irvine villages?', a: 'Condo financing requirements vary by village. For example, high-rise condos near UC Irvine have different guidelines than townhomes in Woodbridge. We understand these distinctions.' },
    { q: 'Do you work with all Irvine neighborhoods and villages?', a: 'Yes, from established communities like Turtle Rock to newer developments in Great Park, we have experience financing properties throughout all of Irvine.' },
    { q: 'How do HOA fees in different villages affect financing?', a: 'HOA fees vary significantly between Irvine villages and affect debt-to-income ratios. We factor these into qualification and work with lenders who understand Irvine\'s community structures.' },
  ];

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MortgageBroker',
    name: 'Mo the Broker - Irvine Neighborhoods',
    areaServed: 'Irvine, Orange County, CA',
    url: 'https://www.mothebroker.com/areas/irvine-neighborhoods',
    telephone: '+1-949-735-4000',
    address: { '@type': 'PostalAddress', addressLocality: 'Irvine', addressRegion: 'CA', addressCountry: 'US' },
    sameAs: ['https://www.linkedin.com/in/mothebroker', 'https://www.instagram.com/mothebroker'],
    description: 'Neighborhood-specific mortgage expertise for all Irvine villages and communities, from established areas to new developments.',
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
      heading: 'Irvine neighborhoods financing guide',
      body: (
        <>
          <p>
            Irvine's master-planned communities offer diverse neighborhoods, each with unique characteristics that influence 
            home financing. From established villages like Woodbridge and Turtle Rock to newer developments in Great Park, 
            understanding neighborhood-specific factors helps optimize your mortgage approach.
          </p>
          <p>
            As a wholesale mortgage broker specializing in Irvine, we understand the nuances of financing in different villages—
            from Mello-Roos considerations in newer areas to HOA structures in established communities, property type variations, 
            and neighborhood-specific market dynamics. This expertise ensures we match the right financing solution to your specific Irvine location.
          </p>
        </>
      ),
    },
    {
      id: 'established-villages',
      heading: 'Established Irvine villages',
      body: (
        <>
          <h3 className="text-lg font-semibold mb-2">Woodbridge</h3>
          <p className="mb-3">
            One of Irvine's most desirable established communities, Woodbridge features mature landscaping, two private lakes, 
            and a strong sense of community. Properties range from condos and townhomes to single-family detached homes. 
            The extensive sales history provides solid comparable data for appraisals, and established HOA structures are well-understood by lenders.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Turtle Rock</h3>
          <p className="mb-3">
            Known for its hillside location and stunning views, Turtle Rock offers luxury homes with resort-style amenities. 
            Properties often require jumbo financing, and the unique topography and custom features require appraisers 
            familiar with hillside valuations and luxury amenities like pools and view premiums.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">University Park</h3>
          <p className="mb-3">
            Located near UC Irvine, University Park offers a mix of condos, townhomes, and single-family homes. 
            The proximity to the university creates unique market dynamics, including potential rental income opportunities 
            and appeal to faculty and staff. Investment property financing considerations may apply for rental properties.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Northwood</h3>
          <p>
            Northwood encompasses multiple phases with diverse housing options from starter homes to luxury properties. 
            The established infrastructure and strong schools make it popular with families, while varied property types 
            require different financing approaches depending on specific location and home features.
          </p>
        </>
      ),
    },
    {
      id: 'newer-developments',
      heading: 'Newer Irvine developments',
      body: (
        <>
          <h3 className="text-lg font-semibold mb-2">Great Park</h3>
          <p className="mb-3">
            Irvine's newest major development offers modern homes with contemporary designs and amenities. 
            Properties typically include Mello-Roos taxes that must be factored into debt-to-income calculations. 
            New construction considerations may apply, and lenders must understand the developing community infrastructure and future build-out plans.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Cypress Village</h3>
          <p className="mb-3">
            A newer community offering diverse housing types from apartments to single-family homes. 
            The mixed-use development includes retail and recreational amenities. Financing considerations include 
            newer community infrastructure, HOA structures, and potential Mello-Roos assessments.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Portola Springs</h3>
          <p>
            Located in north Irvine, Portola Springs offers newer homes with modern amenities and community facilities. 
            Properties may include additional assessments for community amenities, and the newer development status 
            requires lenders familiar with emerging communities and infrastructure development timelines.
          </p>
        </>
      ),
    },
    {
      id: 'financing-considerations',
      heading: 'Village-specific financing factors',
      body: (
        <ul className="space-y-2">
          <li><strong>Mello-Roos taxes:</strong> Newer developments like Great Park include special assessments that affect total monthly housing costs and qualification ratios.</li>
          <li><strong>HOA fee variations:</strong> Different villages have varying HOA structures and fees, from basic maintenance to resort-style amenities, impacting debt-to-income calculations.</li>
          <li><strong>Property type diversity:</strong> From high-rise condos near UCI to detached homes in Turtle Rock, each requires specific lending approaches and appraisal methods.</li>
          <li><strong>School district premiums:</strong> Properties in highly-rated school attendance areas command premiums that appraisers and lenders must understand and validate.</li>
          <li><strong>New construction considerations:</strong> Newer areas may require construction-to-permanent loans or consideration of incomplete community amenities.</li>
          <li><strong>Investment property potential:</strong> Areas near UC Irvine have rental income potential, affecting financing options and qualification approaches.</li>
        </ul>
      ),
    },
    {
      id: 'our-approach',
      heading: 'Our village-focused mortgage approach',
      body: (
        <>
          <p>
            Understanding Irvine's diverse villages allows us to provide targeted financing solutions. We work with lenders 
            and appraisers who understand specific community characteristics, from established areas with extensive comparable sales 
            to newer developments with unique assessment structures.
          </p>
          <p>
            Our wholesale relationships include lenders familiar with Irvine's master-planned community structure, 
            comfortable with Mello-Roos assessments, and experienced with the various property types throughout the city. 
            This specialization often results in smoother transactions and better terms compared to generic lending approaches.
          </p>
          <p>
            We also maintain relationships with local professionals who understand Irvine's market dynamics—real estate agents 
            specializing in specific villages, escrow companies familiar with community assessments, and service providers 
            who understand the unique characteristics of each neighborhood.
          </p>
        </>
      ),
    },
    {
      id: 'investment-considerations',
      heading: 'Investment opportunities by neighborhood',
      body: (
        <>
          <p>
            Different Irvine neighborhoods offer varying investment potential based on location, property type, and market dynamics:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>University area:</strong> Strong rental demand from students, faculty, and staff, but consider occupancy restrictions</li>
            <li>• <strong>Established villages:</strong> Stable long-term appreciation with strong rental markets for families</li>
            <li>• <strong>New developments:</strong> Potential for appreciation as communities mature, but consider additional assessments</li>
            <li>• <strong>Luxury areas:</strong> Higher-end properties with executive rental potential but requiring larger investments</li>
            <li>• <strong>Condo communities:</strong> Lower maintenance investment options with amenities attractive to renters</li>
          </ul>
          <p className="mt-3">
            We structure investment property financing to align with neighborhood-specific rental patterns, assessment structures, 
            and long-term development plans, helping you maximize the investment potential of Irvine real estate while managing associated costs and risks.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'Irvine mortgage services', href: '/areas/irvine' },
    { label: 'Jumbo loan programs', href: '/programs/jumbo-loans' },
    { label: 'HELOC options', href: '/heloc' },
    { label: 'Investment property financing', href: '/programs/dscr-investment-loans' },
    { label: 'Cash-out refinancing', href: '/cash-out-refinance' },
    { label: 'Orange County mortgage broker', href: '/mortgage-broker-orange-county' },
    { label: 'New construction loans', href: '/programs/construction-loans' },
    { label: 'Mortgage insights', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="Irvine Neighborhoods"
        subtitle="Village-specific financing for Woodbridge, Turtle Rock, Great Park & more"
        city="Irvine"
        slug="areas/irvine-neighborhoods"
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
