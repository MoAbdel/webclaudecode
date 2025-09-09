import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Foreign National Loans | Non-U.S. Citizen Mortgage Program',
  description:
    'Foreign national mortgage loans for non-U.S. citizens purchasing U.S. real estate. Specialized financing for international buyers in Orange County with competitive terms.',
  alternates: { canonical: 'https://www.mothebroker.com/programs/foreign-national-loans' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Foreign National Loans | International Buyer Mortgage Program',
    url: 'https://www.mothebroker.com/programs/foreign-national-loans',
  },
};

export default function Page() {
  const faqs = [
    { q: 'Can non-U.S. citizens get mortgages in the United States?', a: 'Yes, foreign nationals can obtain U.S. mortgages through specialized lenders, though documentation requirements and terms differ from traditional domestic loans.' },
    { q: 'Do I need a U.S. credit history for foreign national loans?', a: 'U.S. credit history is preferred but not always required. Some lenders accept foreign credit reports or alternative credit documentation, while others focus primarily on assets and income.' },
    { q: 'What down payment is required for foreign national loans?', a: 'Down payments typically range from 25-40% depending on the loan program, property type, and borrower profile. Investment properties may require higher down payments.' },
    { q: 'What documentation do foreign nationals need?', a: 'Requirements include passport, visa (if applicable), foreign income documentation, bank statements, proof of assets, and sometimes letters from foreign banks or employers.' },
    { q: 'Are foreign national loan rates higher?', a: 'Yes, rates are typically 0.5-2% higher than conventional loans due to increased risk and specialized underwriting, but remain competitive for international buyers.' },
    { q: 'Can I finance investment properties as a foreign national?', a: 'Many programs allow foreign nationals to purchase investment properties, though terms may require higher down payments and reserves compared to primary residences.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Foreign National Loans',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://www.mothebroker.com/programs/foreign-national-loans',
    description: 'Specialized mortgage financing for foreign nationals and non-U.S. citizens purchasing U.S. real estate.',
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
      heading: 'Foreign national loan program',
      body: (
        <>
          <p>
            Foreign national loans provide specialized mortgage financing for non-U.S. citizens and non-permanent 
            residents purchasing U.S. real estate. These programs recognize that international buyers have unique 
            documentation and qualification needs that differ from traditional domestic mortgage requirements.
          </p>
          <p>
            Our wholesale foreign national program serves Orange County's international community and global investors 
            attracted to the area's stability, appreciation potential, and lifestyle. Whether you're purchasing 
            a primary residence, vacation home, or investment property, we connect you with lenders experienced 
            in international transactions and cross-border financing.
          </p>
        </>
      ),
    },
    {
      id: 'program-benefits',
      heading: 'Foreign national loan advantages',
      body: (
        <ul className="space-y-2">
          <li><strong>No U.S. Credit Required:</strong> Many programs work with limited or no U.S. credit history</li>
          <li><strong>Foreign Income Accepted:</strong> Income from foreign sources can qualify for loan approval</li>
          <li><strong>Asset-Based Options:</strong> Some programs focus on assets rather than traditional income documentation</li>
          <li><strong>Multiple Property Types:</strong> Financing available for primary residences, second homes, and investment properties</li>
          <li><strong>Experienced Lenders:</strong> Work with lenders familiar with international documentation and compliance</li>
          <li><strong>Competitive Terms:</strong> Rates and terms competitive within the specialized foreign national market</li>
        </ul>
      ),
    },
    {
      id: 'qualification',
      heading: 'Qualification requirements',
      body: (
        <ul className="space-y-2">
          <li><strong>Legal Status:</strong> Valid passport; visa required if currently in the U.S.</li>
          <li><strong>Down Payment:</strong> Typically 25-40% depending on property type and program</li>
          <li><strong>Income Documentation:</strong> Foreign income verification through employer letters, tax documents, or bank statements</li>
          <li><strong>Asset Verification:</strong> Bank statements and proof of liquid assets for down payment and reserves</li>
          <li><strong>Credit History:</strong> U.S. credit preferred; foreign credit reports accepted by some lenders</li>
          <li><strong>Reserves:</strong> Typically 2-12 months of mortgage payments in liquid assets</li>
        </ul>
      ),
    },
    {
      id: 'documentation',
      heading: 'Required documentation',
      body: (
        <>
          <h3 className="text-lg font-semibold mb-2">Identity and Legal Status</h3>
          <ul className="space-y-1 mb-4">
            <li>• Valid passport</li>
            <li>• Current visa (if in the U.S.)</li>
            <li>• Proof of legal presence in home country</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-2">Income and Employment</h3>
          <ul className="space-y-1 mb-4">
            <li>• Employment verification letter from foreign employer</li>
            <li>• Foreign tax returns or income statements</li>
            <li>• Foreign bank statements showing income deposits</li>
            <li>• Professional licenses or business documentation (if applicable)</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-2">Assets and Financial Capacity</h3>
          <ul className="space-y-1">
            <li>• Bank statements from foreign and U.S. accounts</li>
            <li>• Investment account statements</li>
            <li>• Proof of source of funds for down payment</li>
            <li>• Property ownership documentation (if applicable)</li>
            <li>• Letter from foreign bank confirming relationship</li>
          </ul>
        </>
      ),
    },
    {
      id: 'orange-county-appeal',
      heading: 'Orange County appeal to international buyers',
      body: (
        <>
          <p>
            Orange County attracts foreign nationals for numerous reasons that make it an ideal international investment destination:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Political and economic stability:</strong> Safe haven for international capital</li>
            <li>• <strong>World-class education:</strong> UC Irvine and excellent K-12 school districts</li>
            <li>• <strong>Business opportunities:</strong> Proximity to major corporations and entrepreneurial ecosystem</li>
            <li>• <strong>Climate and lifestyle:</strong> Year-round pleasant weather and recreational opportunities</li>
            <li>• <strong>Cultural diversity:</strong> Welcoming communities with international populations</li>
            <li>• <strong>Real estate appreciation:</strong> Strong long-term property value growth</li>
            <li>• <strong>Investment potential:</strong> Excellent rental markets and appreciation trends</li>
          </ul>
          <p className="mt-3">
            Many foreign nationals purchase in Orange County for family education, business expansion, 
            investment diversification, or as a hedge against currency fluctuations in their home countries.
          </p>
        </>
      ),
    },
    {
      id: 'program-types',
      heading: 'Foreign national loan program types',
      body: (
        <ul className="space-y-2">
          <li><strong>Traditional Income Programs:</strong> Verify foreign employment and income through standard documentation</li>
          <li><strong>Asset Depletion Programs:</strong> Qualify based on liquid assets rather than income streams</li>
          <li><strong>Bank Statement Programs:</strong> Use foreign bank deposits to demonstrate income capacity</li>
          <li><strong>Investment Property Programs:</strong> Specialized financing for rental property purchases</li>
          <li><strong>Jumbo Foreign National:</strong> High-balance loans for Orange County's luxury market</li>
          <li><strong>Portfolio Programs:</strong> Lenders who retain loans in portfolio for more flexible terms</li>
        </ul>
      ),
    },
    {
      id: 'considerations',
      heading: 'Important considerations',
      body: (
        <>
          <p>
            Foreign national loans provide valuable opportunities but involve unique considerations:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Higher rates:</strong> Expect 0.5-2% premium over conventional loan rates</li>
            <li>• <strong>Limited lenders:</strong> Fewer lenders offer these specialized programs</li>
            <li>• <strong>Documentation complexity:</strong> Foreign document translation and verification requirements</li>
            <li>• <strong>Currency risk:</strong> Exchange rate fluctuations may affect payment capacity</li>
            <li>• <strong>Tax implications:</strong> U.S. property ownership may create tax obligations</li>
            <li>• <strong>Legal considerations:</strong> Property ownership structure and estate planning implications</li>
            <li>• <strong>Insurance requirements:</strong> Title insurance and property insurance considerations</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Consult with qualified international tax professionals, attorneys, and financial advisors 
            familiar with cross-border real estate transactions and U.S. property ownership requirements.
          </p>
        </>
      ),
    },
    {
      id: 'process',
      heading: 'Application process for foreign nationals',
      body: (
        <>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Initial Consultation:</strong> Discuss your situation, property goals, and documentation availability</li>
            <li><strong>Lender Matching:</strong> Connect with lenders experienced in foreign national programs</li>
            <li><strong>Document Collection:</strong> Gather required foreign and U.S. documentation</li>
            <li><strong>Translation Services:</strong> Arrange certified translation of foreign documents if required</li>
            <li><strong>Application Submission:</strong> Submit comprehensive application with all supporting documentation</li>
            <li><strong>Property Evaluation:</strong> Complete appraisal and property condition assessment</li>
            <li><strong>Underwriting Review:</strong> Specialized underwriters evaluate international factors</li>
            <li><strong>Closing Preparation:</strong> Coordinate international wire transfers and closing logistics</li>
          </ol>
          <p className="mt-3 text-sm opacity-80">
            Timeline typically extends beyond domestic loans due to documentation requirements and international verification processes.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'Asset depletion programs', href: '/programs/non-qm-asset-depletion' },
    { label: 'Bank statement loans', href: '/programs/non-qm-bank-statement' },
    { label: 'Orange County luxury properties', href: '/areas/newport-beach' },
    { label: 'Investment property financing', href: '/programs/dscr-investment-loans' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'International buyer resources', href: '/articles' },
    { label: 'Jumbo loan programs', href: '/programs/jumbo-loans' },
  ];

  return (
    <>
      <SeoServicePage
        title="Foreign National Loans"
        subtitle="Specialized mortgage financing for non-U.S. citizens and international buyers"
        slug="programs/foreign-national-loans"
        lastUpdatedISO={new Date().toISOString()}
        sections={sections}
        faqs={faqs}
        internalLinks={links}
      />
      <JsonLd json={serviceSchema} />
      <JsonLd json={faqSchema} />
    </>
  );
}
