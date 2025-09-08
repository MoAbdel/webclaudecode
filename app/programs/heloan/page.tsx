import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Home Equity Loan Program | Fixed-Rate Second Mortgage | Orange County',
  description:
    'Fixed-rate home equity loan program with competitive rates. Get a lump sum with predictable payments. Compare home equity loan vs HELOC options.',
  alternates: { canonical: 'https://mothebroker.com/programs/heloan' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Home Equity Loan Program | Fixed-Rate Second Mortgage',
    url: 'https://mothebroker.com/programs/heloan',
  },
};

export default function Page() {
  const faqs = [
    { q: 'What is a home equity loan?', a: 'A home equity loan is a fixed-rate second mortgage that provides a lump sum based on your home equity, with fixed monthly payments over a set term, typically 5-30 years.' },
    { q: 'Home equity loan vs HELOC - which should I choose?', a: 'Home equity loans offer fixed rates and predictable payments, ideal for one-time expenses. HELOCs provide flexible access with variable rates, better for ongoing needs or uncertain amounts.' },
    { q: 'What are current home equity loan rates?', a: 'Home equity loan rates are fixed and typically higher than first mortgage rates but lower than credit cards. Rates vary by credit score, loan amount, and loan-to-value ratio.' },
    { q: 'How much can I borrow with a home equity loan?', a: 'Most lenders allow up to 80-90% combined loan-to-value ratio. With good credit and sufficient equity, you might qualify for $50K-500K+ depending on your home value and existing mortgage balance.' },
    { q: 'What are the qualification requirements?', a: 'Typically requires 680+ credit score, sufficient home equity, stable income, and debt-to-income ratios under 43%. Documentation includes income verification, asset statements, and current appraisal.' },
    { q: 'Are home equity loan interest payments tax deductible?', a: 'Interest may be tax deductible if funds are used for home improvements. Consult a tax professional for guidance specific to your situation and current tax laws.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Home Equity Loan Program',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://mothebroker.com/programs/heloan',
    description: 'Fixed-rate home equity loan program offering predictable payments and competitive rates for lump-sum financing needs.',
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
      heading: 'Home equity loan program',
      body: (
        <>
          <p>
            A home equity loan provides a lump sum of cash secured by your home's equity, with fixed interest rates 
            and predictable monthly payments. Unlike a HELOC's variable rates and flexible access, home equity loans 
            offer the certainty of fixed payments over a predetermined term.
          </p>
          <p>
            Our wholesale home equity loan program connects you with competitive lenders offering attractive fixed rates, 
            flexible terms from 5-30 years, and streamlined approval processes. Whether funding major home improvements, 
            consolidating high-interest debt, or covering large one-time expenses, a home equity loan provides 
            cost-effective financing with tax-deductible interest potential.
          </p>
        </>
      ),
    },
    {
      id: 'benefits',
      heading: 'Home equity loan advantages',
      body: (
        <ul className="space-y-2">
          <li><strong>Fixed Interest Rate:</strong> Rate remains constant throughout the loan term, providing payment predictability</li>
          <li><strong>Lump Sum Access:</strong> Receive full loan amount at closing, ideal for large expenses or projects</li>
          <li><strong>Competitive Rates:</strong> Typically lower than credit cards or personal loans due to home collateral</li>
          <li><strong>Preserve First Mortgage:</strong> Keep your existing mortgage rate and terms unchanged</li>
          <li><strong>Potential Tax Benefits:</strong> Interest may be tax deductible when used for home improvements</li>
          <li><strong>Flexible Terms:</strong> Choose repayment terms from 5-30 years to fit your budget</li>
        </ul>
      ),
    },
    {
      id: 'qualification',
      heading: 'Qualification requirements',
      body: (
        <ul className="space-y-2">
          <li><strong>Credit Score:</strong> Typically 680+ for best rates, though some programs accept 620+</li>
          <li><strong>Home Equity:</strong> Usually require 15-20% equity remaining after loan, meaning 80-85% max combined LTV</li>
          <li><strong>Income Documentation:</strong> Two years of tax returns, pay stubs, and employment verification</li>
          <li><strong>Debt-to-Income Ratio:</strong> Total debt payments typically under 43% of gross monthly income</li>
          <li><strong>Property Appraisal:</strong> Current market value assessment required to determine available equity</li>
          <li><strong>Loan Amount:</strong> Minimums typically $10K-25K, maximums vary by lender and property value</li>
        </ul>
      ),
    },
    {
      id: 'common-uses',
      heading: 'Popular home equity loan uses',
      body: (
        <ul className="space-y-2">
          <li><strong>Major Home Improvements:</strong> Kitchen remodels, bathroom renovations, room additions, roof replacement</li>
          <li><strong>Debt Consolidation:</strong> Pay off high-interest credit cards, personal loans, or other debts</li>
          <li><strong>Education Expenses:</strong> College tuition, graduate school, or professional certification costs</li>
          <li><strong>Medical Bills:</strong> Unexpected healthcare costs or elective procedures not covered by insurance</li>
          <li><strong>Investment Opportunities:</strong> Real estate down payments, business investments, or other ventures</li>
          <li><strong>Major Purchases:</strong> Vehicles, boats, or other large expenses with fixed payment needs</li>
        </ul>
      ),
    },
    {
      id: 'comparison',
      heading: 'Home equity loan vs alternatives',
      body: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Feature</th>
                <th className="border border-gray-300 p-2 text-left">Home Equity Loan</th>
                <th className="border border-gray-300 p-2 text-left">HELOC</th>
                <th className="border border-gray-300 p-2 text-left">Personal Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Interest Rate</td>
                <td className="border border-gray-300 p-2">Fixed</td>
                <td className="border border-gray-300 p-2">Variable</td>
                <td className="border border-gray-300 p-2">Fixed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Fund Access</td>
                <td className="border border-gray-300 p-2">Lump sum</td>
                <td className="border border-gray-300 p-2">As needed</td>
                <td className="border border-gray-300 p-2">Lump sum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Collateral</td>
                <td className="border border-gray-300 p-2">Home</td>
                <td className="border border-gray-300 p-2">Home</td>
                <td className="border border-gray-300 p-2">None</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tax Benefits</td>
                <td className="border border-gray-300 p-2">Potential*</td>
                <td className="border border-gray-300 p-2">Potential*</td>
                <td className="border border-gray-300 p-2">No</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Best For</td>
                <td className="border border-gray-300 p-2">Fixed projects</td>
                <td className="border border-gray-300 p-2">Flexible needs</td>
                <td className="border border-gray-300 p-2">Small amounts</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm opacity-80 mt-2">*When used for home improvements. Consult tax professional.</p>
        </div>
      ),
    },
    {
      id: 'process',
      heading: 'Application process',
      body: (
        <>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Initial Consultation:</strong> Discuss your needs, review equity position, and explore loan options</li>
            <li><strong>Application Submission:</strong> Complete application with income, asset, and property documentation</li>
            <li><strong>Property Appraisal:</strong> Professional appraisal ordered to determine current market value</li>
            <li><strong>Underwriting Review:</strong> Lender evaluates credit, income, assets, and debt-to-income ratios</li>
            <li><strong>Loan Approval:</strong> Final approval with confirmed rate, terms, and closing date</li>
            <li><strong>Closing:</strong> Sign loan documents and receive funds, typically 30-45 days from application</li>
          </ol>
          <p className="mt-3 text-sm opacity-80">
            Timeline may vary based on documentation completeness, appraisal scheduling, and underwriting complexity.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'Main home equity loan page', href: '/home-equity-loan' },
    { label: 'HELOC program comparison', href: '/programs/heloc' },
    { label: 'Cash-out refinancing option', href: '/cash-out-refinance' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Debt consolidation strategies', href: '/articles/debt-consolidation' },
    { label: 'Mortgage articles and insights', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="Home Equity Loan Program"
        subtitle="Fixed-rate second mortgage with predictable payments"
        slug="programs/heloan"
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