import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Mortgage Glossary | Complete Guide to Home Loan Terms & Definitions',
  description:
    'Comprehensive mortgage glossary with clear definitions of home loan terms. Learn about APR, HELOC, DTI, jumbo loans, and 100+ essential mortgage and real estate terms.',
  alternates: { canonical: 'https://mothebroker.com/resources/mortgage-glossary' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Mortgage Glossary | Essential Home Loan Terms Explained',
    url: 'https://mothebroker.com/resources/mortgage-glossary',
  },
};

export default function Page() {
  const faqs = [
    { q: 'How should I use this mortgage glossary?', a: 'Use this glossary to understand terms you encounter during your home buying or refinancing process. Terms are organized alphabetically for easy reference, and definitions include practical context for Orange County markets.' },
    { q: 'Where do mortgage term definitions vary by lender?', a: 'While basic definitions are standard, specific qualification criteria, documentation requirements, and program features can vary between lenders. We help compare these differences across our 200+ lender network.' },
    { q: 'Are these definitions current for 2024-2025?', a: 'Yes, all definitions reflect current mortgage industry standards and regulations. However, specific program details and qualification criteria may change, so we recommend consulting with us for the most current information.' },
    { q: 'What if I don\'t see a term I\'m looking for?', a: 'Contact us directly if you encounter mortgage terms not covered here. The lending industry frequently evolves, and we can explain any new or specialized terms relevant to your situation.' },
    { q: 'How do these terms apply to Orange County real estate?', a: 'Many terms have specific implications for Orange County\'s high-value market, such as jumbo loan limits and luxury property considerations. We provide local context where relevant.' },
    { q: 'Should I memorize all these terms?', a: 'Focus on terms relevant to your specific loan type and situation. As your mortgage broker, we explain applicable terms during your loan process and ensure you understand all aspects of your financing.' },
  ];

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mortgage Glossary',
    url: 'https://mothebroker.com/resources/mortgage-glossary',
    description: 'Comprehensive mortgage glossary with definitions of home loan terms and real estate financing concepts.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mothebroker.com' },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://mothebroker.com/resources' },
        { '@type': 'ListItem', position: 3, name: 'Mortgage Glossary', item: 'https://mothebroker.com/resources/mortgage-glossary' },
      ]
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
      id: 'introduction',
      heading: 'Understanding mortgage terminology',
      body: (
        <>
          <p>
            Navigating the mortgage process involves understanding numerous terms and concepts. This comprehensive glossary 
            provides clear, practical definitions to help Orange County homebuyers and homeowners understand their financing options. 
            Whether you're exploring HELOCs, comparing jumbo loan programs, or evaluating refinancing options, 
            these definitions provide the foundation for informed decisions.
          </p>
          <p>
            As a wholesale mortgage broker, we encounter these terms daily and can provide additional context specific to 
            your situation and the Orange County market. Use this glossary as a reference, but don't hesitate to ask 
            for clarification on any terms relevant to your loan process.
          </p>
        </>
      ),
    },
    {
      id: 'glossary-a-e',
      heading: 'A - E',
      body: (
        <div className="space-y-3">
          <div><strong>Adjustable-Rate Mortgage (ARM):</strong> A loan with an interest rate that can change periodically based on market conditions, typically offering lower initial rates than fixed-rate mortgages.</div>
          <div><strong>Amortization:</strong> The process of paying off a loan through regular payments that cover both principal and interest over the loan term.</div>
          <div><strong>Annual Percentage Rate (APR):</strong> The yearly cost of credit including interest rate and fees, expressed as a percentage, allowing comparison between different loan offers.</div>
          <div><strong>Appraisal:</strong> A professional assessment of a property's market value, required by lenders to ensure the loan amount doesn't exceed the property's worth.</div>
          <div><strong>Asset Depletion:</strong> A loan program that qualifies borrowers based on assets rather than traditional income, useful for retirees or high-net-worth individuals.</div>
          <div><strong>Bank Statement Loan:</strong> A non-QM loan program that uses bank statements rather than tax returns to verify income, popular with self-employed borrowers.</div>
          <div><strong>Basis Point:</strong> One-hundredth of a percentage point (0.01%), commonly used to describe small changes in interest rates.</div>
          <div><strong>Cash-Out Refinance:</strong> Refinancing for more than you owe on your current mortgage, taking the difference in cash to use for other purposes.</div>
          <div><strong>Closing Costs:</strong> Fees and expenses paid at the closing of a real estate transaction, typically 2-3% of the loan amount.</div>
          <div><strong>Conforming Loan:</strong> A mortgage that meets the standards set by government-sponsored enterprises like Fannie Mae and Freddie Mac, with loan limits that vary by county.</div>
          <div><strong>Conventional Loan:</strong> A mortgage not insured or guaranteed by the federal government, typically requiring higher credit scores and down payments than government-backed loans.</div>
          <div><strong>Credit Score:</strong> A numerical representation of creditworthiness, typically ranging from 300-850, used by lenders to assess loan risk.</div>
          <div><strong>Debt-to-Income Ratio (DTI):</strong> The percentage of monthly gross income that goes toward paying debts, including the proposed mortgage payment.</div>
          <div><strong>Down Payment:</strong> The upfront cash payment made when purchasing a home, typically expressed as a percentage of the purchase price.</div>
          <div><strong>DSCR Loan:</strong> Debt Service Coverage Ratio loan that qualifies investment properties based on rental income rather than borrower's personal income.</div>
          <div><strong>Earnest Money:</strong> A deposit made by homebuyers to demonstrate serious intent to purchase, typically held in escrow.</div>
          <div><strong>Equity:</strong> The difference between your home's current market value and the amount you owe on your mortgage.</div>
          <div><strong>Escrow:</strong> An account where funds are held by a third party during a real estate transaction, or ongoing accounts for property taxes and insurance.</div>
        </div>
      ),
    },
    {
      id: 'glossary-f-j',
      heading: 'F - J',
      body: (
        <div className="space-y-3">
          <div><strong>FHA Loan:</strong> Federal Housing Administration-insured loan with lower down payment requirements and more flexible credit standards.</div>
          <div><strong>Fixed-Rate Mortgage:</strong> A loan with an interest rate that remains constant throughout the entire loan term.</div>
          <div><strong>Foreign National Loan:</strong> Specialized financing for non-U.S. citizens purchasing U.S. real estate, with unique documentation requirements.</div>
          <div><strong>Gift Letter:</strong> Documentation proving that down payment funds received from family members are gifts, not loans that must be repaid.</div>
          <div><strong>Good Faith Estimate:</strong> Now replaced by the Loan Estimate, this document outlined expected loan costs and terms.</div>
          <div><strong>Hard Money Loan:</strong> Short-term, asset-based financing typically used for investment properties or quick transactions, with higher rates than traditional mortgages.</div>
          <div><strong>HELOC (Home Equity Line of Credit):</strong> A revolving credit line secured by home equity, allowing borrowers to draw funds as needed up to a predetermined limit.</div>
          <div><strong>Home Equity Loan:</strong> A fixed-amount second mortgage that uses home equity as collateral, providing a lump sum with fixed payments.</div>
          <div><strong>Homeowners Insurance:</strong> Required insurance coverage protecting the property and lender's interest against damage and liability.</div>
          <div><strong>Interest Rate:</strong> The cost of borrowing money, expressed as an annual percentage of the loan amount.</div>
          <div><strong>Interest-Only Loan:</strong> A loan where initial payments cover only interest, with principal payments beginning later in the term.</div>
          <div><strong>Investment Property:</strong> Real estate purchased to generate rental income or profit through appreciation, typically requiring larger down payments.</div>
          <div><strong>Jumbo Loan:</strong> A mortgage that exceeds conforming loan limits, common in high-cost areas like Orange County, requiring specialized underwriting.</div>
        </div>
      ),
    },
    {
      id: 'glossary-k-o',
      heading: 'K - O',
      body: (
        <div className="space-y-3">
          <div><strong>Loan Estimate:</strong> A standardized form provided within three days of application, outlining loan terms, projected payments, and closing costs.</div>
          <div><strong>Loan-to-Value Ratio (LTV):</strong> The percentage of a property's value that is financed, calculated by dividing the loan amount by the property value.</div>
          <div><strong>Lock Period:</strong> The timeframe during which a lender guarantees a specific interest rate, typically 30-60 days.</div>
          <div><strong>Margin:</strong> The fixed percentage added to an ARM's index rate to determine the fully indexed rate.</div>
          <div><strong>Mello-Roos:</strong> Special assessment districts in California that fund infrastructure and services in new developments, common in newer Orange County communities.</div>
          <div><strong>Mortgage Insurance:</strong> Protection for lenders against borrower default, required on conventional loans with less than 20% down payment.</div>
          <div><strong>NMLS (Nationwide Multistate Licensing System):</strong> The licensing system for mortgage loan originators, ensuring proper credentials and compliance.</div>
          <div><strong>No-Doc Loan:</strong> Historical loan type requiring minimal documentation, largely eliminated after 2008 but replaced by various non-QM programs.</div>
          <div><strong>Non-QM (Non-Qualified Mortgage):</strong> Loans that don't meet QM standards but serve borrowers with unique situations like self-employment or non-traditional income.</div>
          <div><strong>Origination Fee:</strong> A fee charged by lenders for processing a new loan application, typically expressed as a percentage of the loan amount.</div>
        </div>
      ),
    },
    {
      id: 'glossary-p-t',
      heading: 'P - T',
      body: (
        <div className="space-y-3">
          <div><strong>PITI:</strong> Principal, Interest, Taxes, and Insurance - the four main components of most monthly mortgage payments.</div>
          <div><strong>Points:</strong> Prepaid interest paid at closing to reduce the ongoing interest rate, with each point typically equaling 1% of the loan amount.</div>
          <div><strong>Pre-Approval:</strong> A lender's conditional commitment to loan money based on preliminary review of finances and credit.</div>
          <div><strong>Pre-Qualification:</strong> An informal estimate of loan eligibility based on self-reported financial information.</div>
          <div><strong>Principal:</strong> The original loan amount or the remaining balance owed on a mortgage, excluding interest.</div>
          <div><strong>Private Mortgage Insurance (PMI):</strong> Insurance protecting conventional lenders when borrowers put down less than 20%.</div>
          <div><strong>QM (Qualified Mortgage):</strong> Loans meeting Consumer Financial Protection Bureau standards for safer lending practices.</div>
          <div><strong>Rate Lock:</strong> An agreement guaranteeing a specific interest rate for a specified period during the loan process.</div>
          <div><strong>Refinance:</strong> Replacing an existing mortgage with a new loan, typically to achieve better terms or access equity.</div>
          <div><strong>Second Mortgage:</strong> An additional loan secured by the same property, subordinate to the first mortgage in case of default.</div>
          <div><strong>Self-Employed Verification:</strong> Documentation process for borrowers who work for themselves, often requiring additional income verification.</div>
          <div><strong>Title Insurance:</strong> Protection against defects in property ownership or liens that could affect the buyer's legal ownership.</div>
          <div><strong>Truth in Lending Act (TILA):</strong> Federal law requiring lenders to disclose credit terms and costs in a standardized format.</div>
        </div>
      ),
    },
    {
      id: 'glossary-u-z',
      heading: 'U - Z',
      body: (
        <div className="space-y-3">
          <div><strong>Underwriting:</strong> The process of evaluating a loan application to determine approval and terms based on credit, income, assets, and property value.</div>
          <div><strong>USDA Loan:</strong> Government-backed loans for eligible rural and suburban areas, offering 100% financing to qualified borrowers.</div>
          <div><strong>VA Loan:</strong> Department of Veterans Affairs-guaranteed loans for eligible service members, veterans, and spouses, often with no down payment requirement.</div>
          <div><strong>Variable Rate:</strong> An interest rate that can change over time based on market conditions, common in HELOCs and adjustable-rate mortgages.</div>
          <div><strong>Verification of Assets:</strong> Documentation proving sufficient funds for down payment and closing costs, typically requiring bank statements.</div>
          <div><strong>Verification of Employment:</strong> Confirmation of borrower's job status and income, usually obtained directly from employers.</div>
          <div><strong>Wholesale Lender:</strong> Lenders who work exclusively through mortgage brokers rather than directly with consumers, often providing competitive pricing.</div>
        </div>
      ),
    },
    {
      id: 'orange-county-terms',
      heading: 'Orange County-specific considerations',
      body: (
        <>
          <p>
            Several mortgage terms have particular relevance in Orange County's high-value real estate market:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Jumbo loan limits:</strong> Orange County's high conforming loan limit is $766,550 for 2024, with jumbo loans required above this amount</li>
            <li>• <strong>Luxury property appraisals:</strong> High-value properties require specialized appraisers familiar with luxury markets and unique features</li>
            <li>• <strong>Mello-Roos assessments:</strong> Common in newer developments, these special assessments affect total housing costs and debt-to-income calculations</li>
            <li>• <strong>HOA considerations:</strong> Many Orange County communities have substantial HOA fees that impact loan qualification</li>
            <li>• <strong>Coastal property factors:</strong> Waterfront properties may require flood insurance and specialized underwriting</li>
          </ul>
          <p className="mt-3">
            Understanding these local factors helps ensure appropriate loan structuring and realistic qualification expectations 
            for Orange County real estate transactions.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'HELOC information and rates', href: '/heloc' },
    { label: 'Cash-out refinancing guide', href: '/cash-out-refinance' },
    { label: 'Home equity loan options', href: '/home-equity-loan' },
    { label: 'Orange County mortgage services', href: '/orange-county' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Jumbo loan programs', href: '/programs/jumbo-loans' },
    { label: 'Investment property financing', href: '/programs/dscr-investment-loans' },
    { label: 'Mortgage articles and insights', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="Mortgage Glossary"
        subtitle="Essential terms for home loans, refinancing & real estate finance"
        slug="resources/mortgage-glossary"
        lastUpdatedISO={new Date().toISOString()}
        sections={sections}
        faqs={faqs}
        internalLinks={links}
      />
      <JsonLd json={websiteSchema} />
      <JsonLd json={faqSchema} />
    </>
  );
}