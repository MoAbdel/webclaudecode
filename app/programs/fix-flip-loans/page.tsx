import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Fix & Flip Loans | Short-Term Real Estate Investment Financing',
  description:
    'Specialized fix and flip loans for real estate investors. Fast funding, flexible terms, and experience-based underwriting for Orange County property rehabilitation projects.',
  alternates: { canonical: 'https://www.mothebroker.com/programs/fix-flip-loans' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fix & Flip Loans | Real Estate Investment Financing',
    url: 'https://www.mothebroker.com/programs/fix-flip-loans',
  },
};

export default function Page() {
  const faqs = [
    { q: 'What are fix and flip loans?', a: 'Fix and flip loans are short-term financing designed for investors who purchase distressed properties, renovate them, and resell for profit. Terms typically range from 6-18 months with interest-only payments.' },
    { q: 'How much can I borrow for a fix and flip project?', a: 'Most lenders offer 70-90% of the after-repair value (ARV), covering both purchase price and renovation costs. Loan amounts typically range from $50K to $5M+ depending on the project and investor experience.' },
    { q: 'What are typical fix and flip loan rates?', a: 'Rates are higher than traditional mortgages, typically 8-15% due to the short-term nature and higher risk. Rates vary based on experience, project details, and loan-to-value ratios.' },
    { q: 'Do I need real estate investment experience?', a: 'While experience helps with better terms, some lenders work with newer investors who demonstrate financial capacity and have solid project plans with realistic timelines and budgets.' },
    { q: 'How quickly can fix and flip loans close?', a: 'These loans prioritize speed, often closing in 7-21 days depending on project complexity, documentation, and property evaluation. Fast closing is crucial for competitive real estate markets.' },
    { q: 'What happens if my project takes longer than expected?', a: 'Most lenders offer extension options for additional fees. However, carrying costs increase, so realistic project timelines and contingency planning are essential for profitability.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Fix & Flip Loans',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://www.mothebroker.com/programs/fix-flip-loans',
    description: 'Short-term real estate investment loans for property rehabilitation and resale projects.',
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
      heading: 'Fix and flip loan program',
      body: (
        <>
          <p>
            Fix and flip loans provide short-term financing for real estate investors who purchase distressed properties, 
            renovate them, and resell for profit. These specialized loans offer quick funding, flexible terms, 
            and underwriting based on the property's after-repair value (ARV) rather than traditional income documentation.
          </p>
          <p>
            Our wholesale network includes lenders experienced with Orange County's competitive real estate investment market, 
            offering competitive rates, fast closings, and flexible terms tailored to experienced flippers and newer investors alike. 
            Whether you're rehabilitating a single-family home in Irvine or a multi-unit property in Santa Ana, 
            we connect you with appropriate financing solutions.
          </p>
          <p className="text-sm opacity-80 mt-3">
            <strong>Important:</strong> Fix and flip investments carry significant risks including market fluctuations, 
            construction delays, cost overruns, and holding period extensions. Consult with qualified professionals 
            and conduct thorough due diligence before proceeding.
          </p>
        </>
      ),
    },
    {
      id: 'loan-features',
      heading: 'Program features',
      body: (
        <ul className="space-y-2">
          <li><strong>Loan Amount:</strong> Typically 70-90% of ARV, covering purchase price and renovation costs</li>
          <li><strong>Loan Terms:</strong> 6-18 months with possible extensions, designed for quick turnaround projects</li>
          <li><strong>Interest Structure:</strong> Interest-only payments during renovation period, with balloon payment at maturity</li>
          <li><strong>Fast Funding:</strong> Closing in 7-21 days to compete in fast-moving markets</li>
          <li><strong>ARV-Based Lending:</strong> Qualification based on project potential rather than personal income</li>
          <li><strong>Flexible Documentation:</strong> Reduced paperwork compared to traditional mortgages</li>
        </ul>
      ),
    },
    {
      id: 'qualification',
      heading: 'Qualification criteria',
      body: (
        <ul className="space-y-2">
          <li><strong>Experience Level:</strong> Programs for both experienced flippers and newer investors with strong financial profiles</li>
          <li><strong>Down Payment:</strong> Typically 10-30% of purchase price, depending on experience and project</li>
          <li><strong>Financial Capacity:</strong> Sufficient liquid assets to cover holding costs and potential overruns</li>
          <li><strong>Property Requirements:</strong> Single-family homes, condos, or small multi-family properties in good neighborhoods</li>
          <li><strong>Renovation Plan:</strong> Detailed scope of work with realistic timelines and budget estimates</li>
          <li><strong>Exit Strategy:</strong> Clear plan for property sale or refinancing within the loan term</li>
        </ul>
      ),
    },
    {
      id: 'project-types',
      heading: 'Suitable project types',
      body: (
        <ul className="space-y-2">
          <li><strong>Cosmetic Renovations:</strong> Paint, flooring, fixtures, and minor updates to dated but structurally sound properties</li>
          <li><strong>Kitchen and Bath Remodels:</strong> High-impact improvements that significantly increase property value</li>
          <li><strong>System Updates:</strong> HVAC, electrical, plumbing upgrades that improve functionality and value</li>
          <li><strong>Layout Modifications:</strong> Wall removal, room additions, or reconfiguration to improve flow and appeal</li>
          <li><strong>Exterior Improvements:</strong> Landscaping, roofing, siding, and curb appeal enhancements</li>
          <li><strong>Partial Rebuilds:</strong> Significant structural work while maintaining the foundation and basic structure</li>
        </ul>
      ),
    },
    {
      id: 'orange-county-considerations',
      heading: 'Orange County market factors',
      body: (
        <>
          <p>
            Orange County's competitive real estate market presents unique opportunities and challenges for fix and flip investors:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>High property values:</strong> Require larger investment amounts but offer substantial profit potential</li>
            <li>• <strong>Permit requirements:</strong> Many cities have strict renovation guidelines requiring proper permits</li>
            <li>• <strong>Competitive buying:</strong> Fast funding essential to compete against cash offers</li>
            <li>• <strong>Strong resale market:</strong> High demand from homebuyers provides good exit opportunities</li>
            <li>• <strong>Neighborhood variations:</strong> Different areas have varying renovation standards and buyer expectations</li>
            <li>• <strong>Contractor availability:</strong> High demand for skilled contractors may affect timelines and costs</li>
          </ul>
          <p className="mt-3">
            Working with experienced local contractors, real estate agents, and lenders familiar with Orange County regulations 
            and market dynamics is essential for successful fix and flip projects.
          </p>
        </>
      ),
    },
    {
      id: 'risks-management',
      heading: 'Risk considerations and mitigation',
      body: (
        <>
          <p>
            Fix and flip investing involves significant risks that must be carefully managed:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Market risk:</strong> Property values may decline during the renovation period</li>
            <li>• <strong>Construction delays:</strong> Permit issues, contractor problems, or unexpected repairs can extend timelines</li>
            <li>• <strong>Cost overruns:</strong> Hidden problems or scope creep can significantly impact profitability</li>
            <li>• <strong>Financing risk:</strong> Interest costs accumulate during delays, reducing profit margins</li>
            <li>• <strong>Resale challenges:</strong> Properties may take longer to sell than anticipated</li>
            <li>• <strong>Regulatory risk:</strong> Code violations or permit issues can delay or prevent sales</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Successful fix and flip investors maintain substantial reserves, work with experienced professionals, 
            and have contingency plans for common problems. Consider consulting with real estate attorneys, 
            accountants, and experienced contractors before undertaking projects.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'DSCR investment loans', href: '/programs/dscr-investment-loans' },
    { label: 'Orange County investment properties', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Real estate investment articles', href: '/articles' },
    { label: 'Asset-based lending programs', href: '/programs/non-qm-asset-depletion' },
    { label: 'Bridge loan options', href: '/programs/bridge-loans' },
  ];

  return (
    <>
      <SeoServicePage
        title="Fix & Flip Loans"
        subtitle="Short-term investment property financing for rehabilitation projects"
        slug="programs/fix-flip-loans"
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
