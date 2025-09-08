import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Bank Statement Loans | Non-QM Self-Employed Mortgage Program',
  description:
    'Bank statement loan program for self-employed borrowers. Qualify using bank deposits instead of tax returns. Competitive non-QM rates for Orange County self-employed professionals.',
  alternates: { canonical: 'https://mothebroker.com/programs/non-qm-bank-statement' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Bank Statement Loans | Self-Employed Mortgage Program',
    url: 'https://mothebroker.com/programs/non-qm-bank-statement',
  },
};

export default function Page() {
  const faqs = [
    { q: 'What are bank statement loans?', a: 'Bank statement loans are non-QM mortgages that qualify self-employed borrowers using bank deposits to verify income instead of traditional tax returns, ideal for business owners with complex tax situations.' },
    { q: 'How many months of bank statements do I need?', a: 'Most lenders require 12-24 months of business and/or personal bank statements. Some programs accept as few as 12 months with higher down payments or stronger credit profiles.' },
    { q: 'What rates can I expect on bank statement loans?', a: 'Bank statement loan rates are typically 0.5-2% higher than conventional loans due to the non-QM classification, but remain competitive compared to other self-employed financing options.' },
    { q: 'Do I need to provide tax returns?', a: 'Bank statement programs typically don\'t require tax returns for income verification, though lenders may request them for other underwriting purposes. This is ideal for borrowers whose tax returns don\'t reflect true cash flow.' },
    { q: 'What types of businesses qualify?', a: 'Most business types qualify including contractors, real estate agents, consultants, restaurant owners, and other self-employed professionals. Some lenders have restrictions on certain industries.' },
    { q: 'Can I use both personal and business bank statements?', a: 'Yes, many programs allow combining personal and business deposits to maximize qualifying income, especially helpful for business owners who mix personal and business expenses.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Bank Statement Loans',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://mothebroker.com/programs/non-qm-bank-statement',
    description: 'Non-QM mortgage program for self-employed borrowers using bank statement income verification.',
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
      heading: 'Bank statement loan program',
      body: (
        <>
          <p>
            Bank statement loans provide mortgage financing for self-employed borrowers who have difficulty qualifying 
            through traditional income documentation. Instead of tax returns, these non-QM loans use bank deposits 
            to verify income, making them ideal for business owners whose tax returns don't reflect their true cash flow capacity.
          </p>
          <p>
            Our wholesale network includes specialized non-QM lenders experienced with self-employed borrowers in Orange County's 
            diverse business landscape. Whether you're a contractor, real estate agent, consultant, restaurant owner, 
            or other self-employed professional, we can connect you with appropriate bank statement loan programs 
            offering competitive rates and flexible qualification criteria.
          </p>
        </>
      ),
    },
    {
      id: 'how-it-works',
      heading: 'How bank statement loans work',
      body: (
        <>
          <h3 className="text-lg font-semibold mb-2">Income Calculation Process</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>Lender reviews 12-24 months of bank statements</li>
            <li>Calculates average monthly deposits</li>
            <li>Applies expense factor (typically 25-50% depending on business type)</li>
            <li>Resulting net income used for debt-to-income qualification</li>
          </ol>
          
          <h3 className="text-lg font-semibold mb-2">Documentation Requirements</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>12-24 months business and/or personal bank statements</li>
            <li>Profit & Loss statement (some programs)</li>
            <li>Business license or professional credentials</li>
            <li>Letter from CPA explaining business structure (sometimes required)</li>
            <li>Standard mortgage documents (credit, assets, property information)</li>
          </ul>
        </>
      ),
    },
    {
      id: 'qualification',
      heading: 'Qualification requirements',
      body: (
        <ul className="space-y-2">
          <li><strong>Credit Score:</strong> Typically 620-640 minimum, with better rates for scores above 700</li>
          <li><strong>Down Payment:</strong> Usually 10-25% minimum, with better terms for larger down payments</li>
          <li><strong>Business History:</strong> Typically 2+ years self-employment, demonstrated through bank statements</li>
          <li><strong>Cash Flow Stability:</strong> Consistent deposits showing stable or growing income trends</li>
          <li><strong>Debt-to-Income Ratio:</strong> Typically up to 43-50% depending on compensating factors</li>
          <li><strong>Reserves:</strong> 2-6 months mortgage payments in liquid assets, varies by loan amount and risk factors</li>
        </ul>
      ),
    },
    {
      id: 'ideal-candidates',
      heading: 'Ideal candidates for bank statement loans',
      body: (
        <ul className="space-y-2">
          <li><strong>Business Owners:</strong> Those with significant business expenses that reduce taxable income</li>
          <li><strong>Cash-Heavy Businesses:</strong> Restaurants, retail stores, service providers with cash transactions</li>
          <li><strong>1099 Contractors:</strong> Independent contractors, consultants, and freelancers</li>
          <li><strong>Real Estate Professionals:</strong> Agents and brokers with variable commission income</li>
          <li><strong>Recent Business Growth:</strong> Businesses experiencing rapid growth not yet reflected in tax returns</li>
          <li><strong>Complex Tax Situations:</strong> Multiple entities, significant depreciation, or other tax strategies</li>
        </ul>
      ),
    },
    {
      id: 'orange-county-businesses',
      heading: 'Orange County self-employed landscape',
      body: (
        <>
          <p>
            Orange County's diverse economy supports numerous self-employed professionals and business owners 
            who benefit from bank statement loan programs:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Technology consultants:</strong> High-earning professionals with variable contract income</li>
            <li>• <strong>Construction contractors:</strong> Builders and trades with project-based cash flow</li>
            <li>• <strong>Real estate professionals:</strong> Agents and brokers in Orange County's active market</li>
            <li>• <strong>Restaurant owners:</strong> Food service businesses with significant cash transactions</li>
            <li>• <strong>Medical professionals:</strong> Doctors, dentists, and specialists in private practice</li>
            <li>• <strong>Legal professionals:</strong> Attorneys and law firm partners with complex compensation structures</li>
          </ul>
          <p className="mt-3">
            These professionals often have strong cash flow but complex tax situations that make traditional 
            mortgage qualification challenging. Bank statement loans provide a practical alternative for accessing 
            Orange County's competitive real estate market.
          </p>
        </>
      ),
    },
    {
      id: 'program-variations',
      heading: 'Program variations and options',
      body: (
        <ul className="space-y-2">
          <li><strong>12-Month Programs:</strong> Faster qualification with higher down payments or stronger credit</li>
          <li><strong>24-Month Programs:</strong> More comprehensive income analysis for better rates and terms</li>
          <li><strong>Personal + Business:</strong> Combine personal and business account deposits for maximum income</li>
          <li><strong>Business Only:</strong> Use solely business account deposits for income verification</li>
          <li><strong>Jumbo Bank Statement:</strong> High-balance loans for Orange County's luxury market</li>
          <li><strong>Investment Property:</strong> Bank statement loans for rental property purchases or refinancing</li>
        </ul>
      ),
    },
    {
      id: 'tips-approval',
      heading: 'Tips for stronger applications',
      body: (
        <>
          <p>
            Improve your bank statement loan approval odds and terms with these strategies:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Maintain clean bank statements:</strong> Avoid overdrafts and maintain consistent deposit patterns</li>
            <li>• <strong>Separate business and personal:</strong> Clear business bank statements strengthen income documentation</li>
            <li>• <strong>Document income sources:</strong> Maintain records showing deposit sources and business relationships</li>
            <li>• <strong>Build strong credit:</strong> Higher credit scores offset non-QM program risk and improve rates</li>
            <li>• <strong>Increase down payment:</strong> Larger equity positions improve loan terms and approval odds</li>
            <li>• <strong>Maintain reserves:</strong> Liquid assets demonstrate financial stability and reduce lender risk</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Work with experienced non-QM lenders and mortgage professionals who understand self-employed 
            borrower challenges and can structure loans appropriately for your business situation.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'Asset depletion loan program', href: '/programs/non-qm-asset-depletion' },
    { label: 'DSCR investment loans', href: '/programs/dscr-investment-loans' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Self-employed mortgage tips', href: '/articles' },
    { label: 'Non-QM loan programs', href: '/programs' },
  ];

  return (
    <>
      <SeoServicePage
        title="Bank Statement Loans"
        subtitle="Non-QM mortgage program for self-employed borrowers"
        slug="programs/non-qm-bank-statement"
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