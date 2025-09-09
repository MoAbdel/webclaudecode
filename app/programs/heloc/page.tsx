import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'HELOC Program | Home Equity Line of Credit | Orange County',
  description:
    'Flexible HELOC program with competitive rates. Access your home equity with a revolving credit line. Compare HELOC vs cash-out refinance options with wholesale pricing.',
  alternates: { canonical: 'https://www.mothebroker.com/programs/heloc' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'HELOC Program | Home Equity Line of Credit',
    url: 'https://www.mothebroker.com/programs/heloc',
  },
};

export default function Page() {
  const faqs = [
    { q: 'What is a HELOC and how does it work?', a: 'A HELOC is a revolving credit line secured by your home equity. You can draw funds as needed during a draw period, typically 10 years, then repay over a repayment period, usually 20 years.' },
    { q: 'HELOC vs cash-out refinance - which is better?', a: 'HELOCs offer flexibility and preserve your first mortgage rate, while cash-out refinance provides fixed rates and single payment. The best choice depends on your first mortgage rate, equity amount, and usage plans.' },
    { q: 'What are current HELOC rates?', a: 'HELOC rates are variable and typically tied to prime rate. Current rates vary by credit score, loan-to-value ratio, and lender. We compare rates across 200+ lenders to find competitive options.' },
    { q: 'How much can I borrow with a HELOC?', a: 'Most lenders allow up to 80-90% combined loan-to-value ratio. For example, with a $1M home and $500K first mortgage, you might qualify for a $300K-400K HELOC, subject to income verification.' },
    { q: 'What are HELOC qualification requirements?', a: 'Typically requires 680+ credit score, sufficient equity, stable income, and debt-to-income ratios under 43%. Self-employed borrowers may need additional documentation.' },
    { q: 'Can I use a HELOC for investment properties?', a: 'Some lenders offer HELOCs on investment properties, though terms may differ from primary residence HELOCs. We can help identify appropriate programs based on your situation.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'HELOC Program',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://www.mothebroker.com/programs/heloc',
    description: 'Home Equity Line of Credit program offering flexible access to home equity with competitive variable rates.',
    offers: {
      '@type': 'Offer',
      description: 'HELOC with competitive rates and flexible terms',
      areaServed: 'Orange County, California'
    }
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
      heading: 'HELOC program overview',
      body: (
        <>
          <p>
            A Home Equity Line of Credit (HELOC) provides flexible access to your home's equity through a revolving credit line. 
            Unlike a traditional loan, you can draw funds as needed up to your credit limit, pay interest only on what you use, 
            and access funds multiple times during the draw period.
          </p>
          <p>
            Our wholesale HELOC program connects you with competitive lenders offering flexible terms, competitive variable rates, 
            and streamlined approval processes. Whether you're funding home improvements, consolidating debt, or need flexible 
            access to capital, a HELOC can provide the financial flexibility you need while leveraging your home's appreciation.
          </p>
        </>
      ),
    },
    {
      id: 'how-it-works',
      heading: 'How HELOCs work',
      body: (
        <>
          <p>
            HELOCs operate in two phases: the draw period and the repayment period.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Draw Period (typically 10 years)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access funds as needed up to your credit limit</li>
            <li>Make interest-only payments on the amount used</li>
            <li>Variable interest rate, typically tied to prime rate</li>
            <li>Flexibility to repay and re-borrow during this period</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-3 mb-2">Repayment Period (typically 20 years)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>No additional draws allowed</li>
            <li>Principal and interest payments required</li>
            <li>Fixed payment schedule to pay off remaining balance</li>
            <li>Option to pay off early without penalties</li>
          </ul>
        </>
      ),
    },
    {
      id: 'heloc-vs-alternatives',
      heading: 'HELOC vs other equity options',
      body: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Feature</th>
                <th className="border border-gray-300 p-2 text-left">HELOC</th>
                <th className="border border-gray-300 p-2 text-left">Cash-out Refi</th>
                <th className="border border-gray-300 p-2 text-left">Home Equity Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Access to funds</td>
                <td className="border border-gray-300 p-2">As needed</td>
                <td className="border border-gray-300 p-2">Lump sum</td>
                <td className="border border-gray-300 p-2">Lump sum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Interest rate</td>
                <td className="border border-gray-300 p-2">Variable</td>
                <td className="border border-gray-300 p-2">Fixed</td>
                <td className="border border-gray-300 p-2">Fixed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">First mortgage</td>
                <td className="border border-gray-300 p-2">Unchanged</td>
                <td className="border border-gray-300 p-2">Replaced</td>
                <td className="border border-gray-300 p-2">Unchanged</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Closing costs</td>
                <td className="border border-gray-300 p-2">Lower</td>
                <td className="border border-gray-300 p-2">Higher</td>
                <td className="border border-gray-300 p-2">Moderate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Best for</td>
                <td className="border border-gray-300 p-2">Ongoing access</td>
                <td className="border border-gray-300 p-2">Large amounts, rate improvement</td>
                <td className="border border-gray-300 p-2">Fixed projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 'qualification',
      heading: 'HELOC qualification requirements',
      body: (
        <ul className="space-y-2">
          <li><strong>Credit Score:</strong> Typically 680+ for competitive rates, though some programs accept lower scores</li>
          <li><strong>Equity Requirements:</strong> Usually 15-20% equity remaining after HELOC, meaning 80-85% max combined LTV</li>
          <li><strong>Income Verification:</strong> Stable employment and income documentation, with debt-to-income ratios typically under 43%</li>
          <li><strong>Property Requirements:</strong> Primary residences, second homes, and some investment properties eligible</li>
          <li><strong>Appraisal:</strong> Most lenders require current appraisal to determine available equity</li>
          <li><strong>Financial Reserves:</strong> Some lenders require 2-6 months of payments in reserves</li>
        </ul>
      ),
    },
    {
      id: 'common-uses',
      heading: 'Popular HELOC uses',
      body: (
        <ul className="space-y-2">
          <li><strong>Home Improvements:</strong> Kitchen remodels, additions, landscaping, and other upgrades that add value</li>
          <li><strong>Debt Consolidation:</strong> Pay off high-interest credit cards and personal loans with lower HELOC rates</li>
          <li><strong>Education Expenses:</strong> College tuition, graduate school, or professional development costs</li>
          <li><strong>Investment Opportunities:</strong> Real estate investments, business ventures, or stock market investments</li>
          <li><strong>Emergency Fund:</strong> Maintain access to capital for unexpected expenses or opportunities</li>
          <li><strong>Bridge Financing:</strong> Short-term funding while selling another property or awaiting other financing</li>
        </ul>
      ),
    },
    {
      id: 'risks-considerations',
      heading: 'Important considerations',
      body: (
        <>
          <p>
            While HELOCs offer flexibility and competitive rates, consider these important factors:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Variable rates:</strong> Interest rates can increase, affecting your payments</li>
            <li>• <strong>Home as collateral:</strong> Your property secures the debt; default could result in foreclosure</li>
            <li>• <strong>Payment shock:</strong> Monthly payments increase significantly when repayment period begins</li>
            <li>• <strong>Interest-only trap:</strong> Minimum payments during draw period don't reduce principal balance</li>
            <li>• <strong>Closing costs:</strong> While lower than refinancing, there are still fees and costs involved</li>
            <li>• <strong>Credit limit reduction:</strong> Lenders may reduce credit lines if property values decline</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Consult with qualified financial advisors and tax professionals regarding the best use of home equity 
            and potential tax implications of interest payments.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'Main HELOC page', href: '/heloc' },
    { label: 'Cash-out refinancing comparison', href: '/cash-out-refinance' },
    { label: 'Home equity loan program', href: '/programs/heloan' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Investment property HELOCs', href: '/programs/dscr-investment-loans' },
    { label: 'Mortgage articles and insights', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="HELOC Program"
        subtitle="Flexible home equity line of credit with competitive variable rates"
        slug="programs/heloc"
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
