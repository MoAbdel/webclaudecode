import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'USDA Rural Loans | 100% Financing for Eligible Areas',
  description:
    'USDA rural development loans with no down payment required. Check eligible areas in Orange County and surrounding regions. Government-backed rural housing program.',
  alternates: { canonical: 'https://www.mothebroker.com/programs/usda-rural-loans' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'USDA Rural Loans | No Down Payment Government Financing',
    url: 'https://www.mothebroker.com/programs/usda-rural-loans',
  },
};

export default function Page() {
  const faqs = [
    { q: 'What are USDA rural loans?', a: 'USDA loans are government-backed mortgages for eligible rural and suburban areas, offering 100% financing with no down payment required for qualified borrowers.' },
    { q: 'Are there USDA eligible areas in Orange County?', a: 'While most of Orange County is not USDA eligible due to population density, some areas in eastern Orange County and surrounding regions may qualify. We can check specific property eligibility.' },
    { q: 'What are USDA income limits?', a: 'USDA loans have income limits based on area median income, typically 115% of the area median. Limits vary by county and household size.' },
    { q: 'Do USDA loans require mortgage insurance?', a: 'Yes, USDA loans require an upfront guarantee fee (typically 1% of loan amount) and an annual fee (typically 0.35% of loan balance) similar to other government programs.' },
    { q: 'What are USDA loan qualification requirements?', a: 'Requirements include stable employment, acceptable credit (typically 640+ for automated underwriting), eligible property location, and income within USDA limits.' },
    { q: 'Can I use a USDA loan to refinance?', a: 'USDA offers refinancing programs including streamline refinances for existing USDA borrowers and cash-out refinancing in some cases.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'USDA Rural Loans',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://www.mothebroker.com/programs/usda-rural-loans',
    description: 'USDA government-backed rural housing loans with no down payment required for eligible properties and borrowers.',
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
      heading: 'USDA rural loan program',
      body: (
        <>
          <p>
            USDA Rural Development loans provide government-backed financing for eligible rural and suburban properties, 
            offering the significant benefit of 100% financing with no down payment required. These loans support 
            homeownership in less densely populated areas as part of the USDA's mission to strengthen rural communities.
          </p>
          <p>
            While most of Orange County doesn't qualify as "rural" under USDA definitions due to population density, 
            some areas in eastern Orange County and surrounding regions may be eligible. Our team can quickly verify 
            property eligibility and connect you with USDA-approved lenders offering competitive rates and flexible qualification criteria.
          </p>
        </>
      ),
    },
    {
      id: 'program-benefits',
      heading: 'USDA loan advantages',
      body: (
        <ul className="space-y-2">
          <li><strong>No Down Payment:</strong> 100% financing available for qualified borrowers and eligible properties</li>
          <li><strong>Competitive Rates:</strong> Government backing provides access to attractive interest rates</li>
          <li><strong>Flexible Credit:</strong> More lenient credit requirements compared to conventional loans</li>
          <li><strong>No Prepayment Penalty:</strong> Pay off the loan early without additional fees</li>
          <li><strong>Assumable Loans:</strong> Qualified buyers may assume existing USDA loans, potentially valuable in rising rate environments</li>
          <li><strong>Rural Development Focus:</strong> Support for homeownership in less densely populated communities</li>
        </ul>
      ),
    },
    {
      id: 'qualification',
      heading: 'USDA loan qualification requirements',
      body: (
        <ul className="space-y-2">
          <li><strong>Property Location:</strong> Must be in USDA-designated rural or suburban area (use USDA eligibility map)</li>
          <li><strong>Income Limits:</strong> Household income typically cannot exceed 115% of area median income</li>
          <li><strong>Credit Score:</strong> Minimum 640 for automated underwriting; manual underwriting available for lower scores</li>
          <li><strong>Employment History:</strong> Stable employment for at least 2 years</li>
          <li><strong>Debt-to-Income Ratios:</strong> Total debt typically under 41%, though exceptions may apply</li>
          <li><strong>Primary Residence:</strong> Must be intended as primary residence, not investment or vacation property</li>
        </ul>
      ),
    },
    {
      id: 'eligible-areas',
      heading: 'USDA eligible areas near Orange County',
      body: (
        <>
          <p>
            While core Orange County cities are not USDA eligible, some surrounding areas may qualify:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Eastern Orange County:</strong> Some areas in eastern portions may qualify</li>
            <li>• <strong>Riverside County:</strong> Many areas including parts of Corona, Norco, and eastern communities</li>
            <li>• <strong>San Bernardino County:</strong> Various communities in western San Bernardino County</li>
            <li>• <strong>Imperial County:</strong> Most areas qualify as rural under USDA definitions</li>
            <li>• <strong>Kern County:</strong> Many areas including some near Bakersfield</li>
          </ul>
          <p className="mt-3">
            Property eligibility changes over time based on population data and development patterns. 
            We use the official USDA eligibility map to verify current status for specific addresses.
          </p>
        </>
      ),
    },
    {
      id: 'fees-costs',
      heading: 'USDA loan fees and costs',
      body: (
        <>
          <h3 className="text-lg font-semibold mb-2">USDA Guarantee Fee</h3>
          <ul className="space-y-1 mb-4">
            <li><strong>Upfront Fee:</strong> Typically 1% of loan amount (can be financed into loan)</li>
            <li><strong>Annual Fee:</strong> Typically 0.35% of outstanding loan balance, paid monthly</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-2">Other Costs</h3>
          <ul className="space-y-1">
            <li><strong>Standard Closing Costs:</strong> Appraisal, title insurance, recording fees, etc.</li>
            <li><strong>Homeowners Insurance:</strong> Required coverage for property protection</li>
            <li><strong>Property Taxes:</strong> Local property taxes (may be escrowed with loan payment)</li>
          </ul>
          <p className="text-sm opacity-80 mt-3">
            USDA fees are generally lower than FHA mortgage insurance and significantly less than private mortgage insurance 
            required for conventional loans with less than 20% down payment.
          </p>
        </>
      ),
    },
    {
      id: 'application-process',
      heading: 'USDA loan application process',
      body: (
        <>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Property Eligibility Check:</strong> Verify the property location qualifies as rural/suburban under USDA guidelines</li>
            <li><strong>Income Verification:</strong> Confirm household income falls within USDA limits for the area</li>
            <li><strong>Pre-qualification:</strong> Review credit, employment, and financial capacity for loan amount</li>
            <li><strong>Find USDA-Approved Lender:</strong> Work with lenders authorized for USDA loan origination</li>
            <li><strong>Submit Application:</strong> Complete mortgage application with required documentation</li>
            <li><strong>Property Appraisal:</strong> USDA-approved appraiser evaluates property value and condition</li>
            <li><strong>Underwriting:</strong> Lender reviews application; USDA provides final approval</li>
            <li><strong>Closing:</strong> Complete loan funding, typically 30-45 days from application</li>
          </ol>
        </>
      ),
    },
    {
      id: 'alternatives',
      heading: 'Alternative programs for Orange County buyers',
      body: (
        <>
          <p>
            Since most Orange County properties don't qualify for USDA loans, consider these alternative programs:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>FHA loans:</strong> Low down payment options with flexible qualification</li>
            <li>• <strong>VA loans:</strong> For eligible veterans and service members, often with no down payment</li>
            <li>• <strong>Conventional loans:</strong> Options with as little as 3% down payment</li>
            <li>• <strong>First-time buyer programs:</strong> Local and state programs offering down payment assistance</li>
            <li>• <strong>Cal Housing Finance Agency:</strong> California state programs for first-time and repeat buyers</li>
          </ul>
          <p className="mt-3">
            We help evaluate all available programs to find the best financing solution for your specific situation 
            and property location, whether USDA-eligible or in more urban Orange County areas.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'FHA loan programs', href: '/programs/fha-loans' },
    { label: 'VA loan programs', href: '/programs/va-loans' },
    { label: 'First-time buyer programs', href: '/programs/first-time-buyer' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Government loan programs', href: '/programs' },
    { label: 'Mortgage articles and guides', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="USDA Rural Loans"
        subtitle="No down payment government financing for eligible rural and suburban areas"
        slug="programs/usda-rural-loans"
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
