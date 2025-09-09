import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'DSCR Investment Loans | Debt Service Coverage Ratio Financing',
  description:
    'DSCR investment property loans qualify based on rental income, not personal income. Competitive rates for Orange County rental properties with flexible terms.',
  alternates: { canonical: 'https://www.mothebroker.com/programs/dscr-investment-loans' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'DSCR Investment Loans | Rental Property Financing',
    url: 'https://www.mothebroker.com/programs/dscr-investment-loans',
  },
};

export default function Page() {
  const faqs = [
    { q: 'What is a DSCR loan?', a: 'A DSCR (Debt Service Coverage Ratio) loan qualifies investment properties based on the rental income they generate rather than the borrower\'s personal income, making them ideal for real estate investors.' },
    { q: 'What DSCR ratio do I need to qualify?', a: 'Most lenders require a DSCR of 1.0 or higher, meaning the property\'s rental income covers the mortgage payment. Some programs accept ratios as low as 0.75 with higher rates or down payments.' },
    { q: 'Do I need to show personal income for DSCR loans?', a: 'No, DSCR loans don\'t require traditional income documentation like W-2s or tax returns. Qualification is based solely on the property\'s rental income potential and your assets.' },
    { q: 'What are typical DSCR loan rates?', a: 'DSCR rates are typically 0.5-1.5% higher than owner-occupied rates due to investment property risk, but remain competitive compared to portfolio lenders and hard money options.' },
    { q: 'Can I use projected rent for new purchases?', a: 'Yes, most DSCR programs use market rent analysis or appraisal rent estimates for new purchases. Existing properties can use current lease agreements or rent rolls.' },
    { q: 'Are there limits on the number of DSCR properties I can finance?', a: 'Many DSCR programs don\'t have strict property count limits like conventional loans, making them excellent for building larger rental portfolios.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'DSCR Investment Loans',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://www.mothebroker.com/programs/dscr-investment-loans',
    description: 'Investment property loans qualifying based on rental income rather than personal income.',
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
      heading: 'DSCR investment loan program',
      body: (
        <>
          <p>
            DSCR (Debt Service Coverage Ratio) loans revolutionize investment property financing by qualifying properties 
            based on their rental income rather than the borrower's personal income. This approach allows real estate investors 
            to expand their portfolios without being constrained by traditional debt-to-income limitations.
          </p>
          <p>
            Our wholesale DSCR program connects investors with specialized lenders offering competitive rates, 
            flexible terms, and streamlined approval processes. Whether you're purchasing your first rental property 
            or expanding an existing portfolio in Orange County's strong rental market, DSCR loans provide 
            an efficient path to real estate investment growth.
          </p>
        </>
      ),
    },
    {
      id: 'how-dscr-works',
      heading: 'How DSCR calculation works',
      body: (
        <>
          <p>
            The Debt Service Coverage Ratio is calculated by dividing the property's monthly rental income by the total monthly debt service (principal, interest, taxes, insurance, and HOA if applicable).
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg my-4">
            <h4 className="font-semibold mb-2">DSCR Formula:</h4>
            <p><strong>DSCR = Monthly Rental Income ÷ Total Monthly Debt Service</strong></p>
            
            <h4 className="font-semibold mt-3 mb-2">Example:</h4>
            <ul className="text-sm space-y-1">
              <li>Monthly Rent: $4,000</li>
              <li>Monthly PITI+HOA: $3,200</li>
              <li>DSCR = $4,000 ÷ $3,200 = 1.25</li>
            </ul>
            <p className="text-sm mt-2 opacity-80">A DSCR of 1.25 means the property generates 25% more income than needed to cover the mortgage payment.</p>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">DSCR Ratio Guidelines</h3>
          <ul className="space-y-1">
            <li><strong>1.25+:</strong> Excellent - Best rates and terms</li>
            <li><strong>1.0-1.24:</strong> Good - Competitive rates</li>
            <li><strong>0.75-0.99:</strong> Acceptable - Higher rates, may require larger down payment</li>
            <li><strong>Below 0.75:</strong> May require alternative programs or terms</li>
          </ul>
        </>
      ),
    },
    {
      id: 'program-benefits',
      heading: 'DSCR loan advantages',
      body: (
        <ul className="space-y-2">
          <li><strong>No Personal Income Requirements:</strong> Qualification based solely on property cash flow, not W-2s or tax returns</li>
          <li><strong>Portfolio Expansion:</strong> Build larger rental portfolios without conventional loan property limits</li>
          <li><strong>Self-Employed Friendly:</strong> Ideal for borrowers with complex tax situations or variable income</li>
          <li><strong>Fast Processing:</strong> Streamlined underwriting focuses on property analysis rather than extensive personal documentation</li>
          <li><strong>Competitive Rates:</strong> Better rates than hard money or portfolio lenders for qualified properties</li>
          <li><strong>Flexible Terms:</strong> Various loan programs including 30-year fixed, ARM, and interest-only options</li>
        </ul>
      ),
    },
    {
      id: 'qualification',
      heading: 'Qualification requirements',
      body: (
        <ul className="space-y-2">
          <li><strong>DSCR Ratio:</strong> Typically 1.0+ required, with best terms for ratios above 1.25</li>
          <li><strong>Down Payment:</strong> Usually 20-25% minimum for investment properties</li>
          <li><strong>Credit Score:</strong> Typically 620+ minimum, with better rates for scores above 700</li>
          <li><strong>Reserves:</strong> 2-6 months PITI in liquid assets, varies by loan amount and property count</li>
          <li><strong>Property Type:</strong> 1-4 unit residential properties, condos, townhomes, and some commercial residential</li>
          <li><strong>Rent Documentation:</strong> Current leases, rent rolls, or market rent analysis for income verification</li>
        </ul>
      ),
    },
    {
      id: 'orange-county-opportunities',
      heading: 'Orange County investment opportunities',
      body: (
        <>
          <p>
            Orange County offers excellent investment property opportunities that work well with DSCR financing:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Strong rental demand:</strong> Major employment centers create consistent tenant demand</li>
            <li>• <strong>Diverse markets:</strong> From luxury coastal rentals to workforce housing inland</li>
            <li>• <strong>Appreciation potential:</strong> Limited supply and strong demographics support long-term growth</li>
            <li>• <strong>Corporate relocations:</strong> Many tenants are well-qualified professionals and executives</li>
            <li>• <strong>University markets:</strong> UC Irvine and other institutions create student housing demand</li>
            <li>• <strong>Vacation rentals:</strong> Coastal areas offer short-term rental opportunities (subject to local regulations)</li>
          </ul>
          <p className="mt-3">
            DSCR loans work particularly well in Orange County's high-value market where strong rents can support 
            larger loan amounts and property appreciation provides excellent long-term returns for investors.
          </p>
        </>
      ),
    },
    {
      id: 'property-types',
      heading: 'Suitable property types',
      body: (
        <ul className="space-y-2">
          <li><strong>Single-Family Homes:</strong> Traditional rentals with strong tenant demand in good school districts</li>
          <li><strong>Condominiums:</strong> Lower maintenance investments with amenities attractive to renters</li>
          <li><strong>Townhomes:</strong> Balance of space and affordability appealing to families and professionals</li>
          <li><strong>Small Multi-Family:</strong> Duplexes, triplexes, and fourplexes for increased cash flow</li>
          <li><strong>ADU Properties:</strong> Homes with additional dwelling units for multiple income streams</li>
          <li><strong>Short-Term Rentals:</strong> Properties suitable for vacation or corporate rentals (where permitted)</li>
        </ul>
      ),
    },
    {
      id: 'investment-strategy',
      heading: 'DSCR loan strategy considerations',
      body: (
        <>
          <p>
            Maximize your DSCR loan success with these strategic considerations:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Market research:</strong> Understand local rental rates, vacancy rates, and tenant demographics</li>
            <li>• <strong>Property selection:</strong> Focus on areas with strong rental demand and appreciation potential</li>
            <li>• <strong>Cash flow analysis:</strong> Account for maintenance, vacancy, and management costs in projections</li>
            <li>• <strong>Portfolio diversification:</strong> Consider different property types and locations to spread risk</li>
            <li>• <strong>Professional team:</strong> Work with experienced property managers, contractors, and real estate professionals</li>
            <li>• <strong>Exit strategies:</strong> Plan for refinancing, sale, or portfolio expansion opportunities</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Real estate investment involves risks including market fluctuations, vacancy, maintenance costs, 
            and regulatory changes. Consult with qualified real estate and financial professionals before 
            making investment decisions.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'Fix and flip loans', href: '/programs/fix-flip-loans' },
    { label: 'Bank statement loans', href: '/programs/non-qm-bank-statement' },
    { label: 'Orange County investment opportunities', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Investment property articles', href: '/articles' },
    { label: 'Asset depletion programs', href: '/programs/non-qm-asset-depletion' },
  ];

  return (
    <>
      <SeoServicePage
        title="DSCR Investment Loans"
        subtitle="Qualify investment properties based on rental income, not personal income"
        slug="programs/dscr-investment-loans"
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
