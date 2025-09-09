import SeoServicePage from '@/app/(marketing)/components/SeoServicePage';
import { JsonLd } from '@/app/(marketing)/components/Schema';

export const metadata = {
  title: 'Asset Depletion Loans | Asset-Based Mortgage Qualification',
  description:
    'Asset depletion loan program for borrowers with substantial assets but limited traditional income. Qualify based on liquid assets with competitive non-QM rates.',
  alternates: { canonical: 'https://www.mothebroker.com/programs/non-qm-asset-depletion' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Asset Depletion Loans | Asset-Based Mortgage Program',
    url: 'https://www.mothebroker.com/programs/non-qm-asset-depletion',
  },
};

export default function Page() {
  const faqs = [
    { q: 'What are asset depletion loans?', a: 'Asset depletion loans qualify borrowers by calculating monthly income from liquid assets divided by the loan term, ideal for retirees or high-net-worth individuals with substantial savings.' },
    { q: 'What assets qualify for asset depletion calculations?', a: 'Typically liquid assets like savings accounts, CDs, money market accounts, stocks, bonds, and retirement accounts. Some programs include real estate equity or business assets.' },
    { q: 'How is monthly income calculated from assets?', a: 'Monthly qualifying income is typically calculated by dividing total eligible assets by the loan term in months. For example, $1.2M in assets ÷ 360 months = $3,333 monthly income.' },
    { q: 'Do I need to actually deplete my assets?', a: 'No, you don\'t actually spend down your assets. The calculation is just a method to determine qualifying income based on your asset position.' },
    { q: 'What are typical asset depletion loan rates?', a: 'Asset depletion rates are typically 0.5-1.5% higher than conventional loans due to non-QM classification, but remain competitive for borrowers who can\'t qualify traditionally.' },
    { q: 'Are there minimum asset requirements?', a: 'Most programs require substantial liquid assets, typically $500K+ minimum, though some lenders accept lower amounts with other compensating factors.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Asset Depletion Loans',
    provider: {
      '@type': 'MortgageBroker',
      name: 'Mo the Broker',
      areaServed: 'Orange County, CA',
    },
    url: 'https://www.mothebroker.com/programs/non-qm-asset-depletion',
    description: 'Non-QM mortgage program qualifying borrowers based on liquid assets rather than traditional income documentation.',
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
      heading: 'Asset depletion loan program',
      body: (
        <>
          <p>
            Asset depletion loans provide mortgage financing for borrowers with substantial liquid assets but limited 
            traditional income documentation. This non-QM program calculates qualifying income by dividing eligible 
            assets by the loan term, creating a theoretical monthly income stream from your asset position.
          </p>
          <p>
            Our wholesale asset depletion program serves Orange County's affluent communities where many borrowers 
            have accumulated significant wealth but may not have traditional W-2 income. Whether you're recently retired, 
            living off investment returns, or have complex financial structures, asset depletion loans provide 
            a practical path to homeownership or refinancing.
          </p>
        </>
      ),
    },
    {
      id: 'how-it-works',
      heading: 'How asset depletion works',
      body: (
        <>
          <h3 className="text-lg font-semibold mb-2">Calculation Method</h3>
          <p className="mb-3">
            Asset depletion calculates theoretical monthly income by dividing eligible liquid assets by the loan term:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Example Calculation:</h4>
            <ul className="space-y-1 text-sm">
              <li>Total Eligible Assets: $1,800,000</li>
              <li>Loan Term: 360 months (30 years)</li>
              <li>Monthly Qualifying Income: $1,800,000 ÷ 360 = $5,000</li>
            </ul>
            <p className="text-sm mt-2 opacity-80">This $5,000 monthly income is used for debt-to-income qualification purposes.</p>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Eligible Assets</h3>
          <ul className="space-y-1">
            <li>• Savings and checking accounts</li>
            <li>• Certificates of deposit (CDs)</li>
            <li>• Money market accounts</li>
            <li>• Stocks, bonds, and mutual funds (typically at 70% value)</li>
            <li>• Retirement accounts (401k, IRA, etc.)</li>
            <li>• Some programs include business assets or real estate equity</li>
          </ul>
        </>
      ),
    },
    {
      id: 'ideal-candidates',
      heading: 'Ideal candidates for asset depletion',
      body: (
        <ul className="space-y-2">
          <li><strong>Retirees:</strong> Those with substantial retirement savings but limited current income</li>
          <li><strong>High-Net-Worth Individuals:</strong> Wealthy borrowers with complex financial situations</li>
          <li><strong>Investment Income Recipients:</strong> Those living primarily off investment returns</li>
          <li><strong>Business Owners:</strong> Entrepreneurs with significant personal assets but variable business income</li>
          <li><strong>International Buyers:</strong> Foreign nationals with substantial U.S. assets but limited U.S. income history</li>
          <li><strong>Trust Beneficiaries:</strong> Those receiving distributions from trusts or estates</li>
        </ul>
      ),
    },
    {
      id: 'qualification',
      heading: 'Qualification requirements',
      body: (
        <ul className="space-y-2">
          <li><strong>Asset Amount:</strong> Typically $500K+ in eligible liquid assets, though some programs accept lower amounts</li>
          <li><strong>Credit Score:</strong> Usually 640+ minimum, with better terms for scores above 700</li>
          <li><strong>Down Payment:</strong> Typically 20-30% minimum, depending on loan amount and risk factors</li>
          <li><strong>Debt-to-Income Ratio:</strong> Calculated using asset depletion income, typically under 43-50%</li>
          <li><strong>Asset Documentation:</strong> Recent statements for all eligible accounts and investments</li>
          <li><strong>Reserves:</strong> Additional liquid assets beyond those used for qualification may be required</li>
        </ul>
      ),
    },
    {
      id: 'orange-county-applications',
      heading: 'Orange County asset depletion scenarios',
      body: (
        <>
          <p>
            Orange County's affluent communities frequently present ideal asset depletion loan scenarios:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Newport Beach retirees:</strong> Former executives with substantial 401k/IRA balances</li>
            <li>• <strong>Tech industry veterans:</strong> Early retirees from successful IPOs or acquisitions</li>
            <li>• <strong>Real estate investors:</strong> Those with significant liquid assets from property sales</li>
            <li>• <strong>Trust fund recipients:</strong> Beneficiaries with substantial inherited assets</li>
            <li>• <strong>Foreign nationals:</strong> International buyers with U.S. bank and investment accounts</li>
            <li>• <strong>Business sale proceeds:</strong> Entrepreneurs who sold businesses and have substantial liquidity</li>
          </ul>
          <p className="mt-3">
            These borrowers often have excellent credit and substantial assets but struggle with traditional 
            income documentation requirements, making asset depletion programs an excellent fit.
          </p>
        </>
      ),
    },
    {
      id: 'program-variations',
      heading: 'Asset depletion program options',
      body: (
        <ul className="space-y-2">
          <li><strong>Traditional Asset Depletion:</strong> Standard calculation using liquid assets divided by loan term</li>
          <li><strong>Interest-Only Options:</strong> Lower initial payments with asset depletion qualification</li>
          <li><strong>Jumbo Asset Depletion:</strong> Higher loan amounts for Orange County's luxury market</li>
          <li><strong>Investment Property:</strong> Asset depletion for rental property purchases</li>
          <li><strong>Combined Programs:</strong> Asset depletion plus limited income documentation</li>
          <li><strong>Foreign National Asset:</strong> Specialized programs for international buyers with U.S. assets</li>
        </ul>
      ),
    },
    {
      id: 'considerations',
      heading: 'Important considerations',
      body: (
        <>
          <p>
            Asset depletion loans offer valuable flexibility but consider these factors:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Higher rates:</strong> Non-QM classification typically means higher rates than conventional loans</li>
            <li>• <strong>Asset verification:</strong> Extensive documentation required for all eligible accounts</li>
            <li>• <strong>Market risk:</strong> Investment account values may fluctuate during underwriting</li>
            <li>• <strong>Reserve requirements:</strong> May need substantial additional assets beyond qualification amounts</li>
            <li>• <strong>Limited lenders:</strong> Fewer lenders offer these specialized programs</li>
            <li>• <strong>Complex underwriting:</strong> Longer processing times due to asset evaluation complexity</li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Consult with qualified financial advisors regarding the impact of using assets for loan qualification 
            and consider tax implications of potential asset liquidation or portfolio restructuring.
          </p>
        </>
      ),
    },
  ];

  const links = [
    { label: 'Bank statement loans', href: '/programs/non-qm-bank-statement' },
    { label: 'Foreign national loans', href: '/programs/foreign-national-loans' },
    { label: 'DSCR investment loans', href: '/programs/dscr-investment-loans' },
    { label: 'Orange County luxury home financing', href: '/areas/newport-beach' },
    { label: 'Wholesale mortgage broker benefits', href: '/mortgage-broker-orange-county' },
    { label: 'Non-QM loan programs', href: '/programs' },
    { label: 'Mortgage insights and articles', href: '/articles' },
  ];

  return (
    <>
      <SeoServicePage
        title="Asset Depletion Loans"
        subtitle="Qualify based on liquid assets, not traditional income"
        slug="programs/non-qm-asset-depletion"
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
