import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface TopicClusterLinksProps {
  currentPage: string;
  clusterType: 'loan-programs' | 'areas' | 'guides' | 'resources' | 'calculators';
}

export default function TopicClusterLinks({ currentPage, clusterType }: TopicClusterLinksProps) {
  const clusters = {
    'loan-programs': {
      pillar: {
        title: 'All Loan Programs',
        href: '/loan-programs',
        description: 'Complete overview of all mortgage loan types'
      },
      related: [
        { title: 'FHA Loans', href: '/loan-programs/fha-loans', description: '3.5% down payment options' },
        { title: 'VA Loans', href: '/loan-programs/va-loans', description: '0% down for veterans' },
        { title: 'Conventional Loans', href: '/loan-programs/conventional-loans', description: 'Traditional mortgage options' },
        { title: 'Jumbo Loans', href: '/loan-programs/jumbo-loans', description: 'High-value property financing' },
        { title: 'HELOC', href: '/loan-programs/heloc', description: 'Home equity credit lines' },
        { title: 'Refinancing', href: '/loan-programs/rate-term-refinance', description: 'Lower your current rate' }
      ]
    },
    'areas': {
      pillar: {
        title: 'All Orange County Areas',
        href: '/areas',
        description: 'Complete service area coverage'
      },
      related: [
        { title: 'Irvine', href: '/areas/irvine-mortgage-broker', description: 'Master-planned community loans' },
        { title: 'Newport Beach', href: '/areas/newport-beach-mortgage-broker', description: 'Luxury coastal property financing' },
        { title: 'Mission Viejo', href: '/areas/mission-viejo-mortgage-broker', description: 'Family-friendly community loans' },
        { title: 'Anaheim', href: '/areas/anaheim-mortgage-broker', description: 'Diverse housing market options' },
        { title: 'Costa Mesa', href: '/areas/costa-mesa-mortgage-broker', description: 'Urban living mortgage solutions' },
        { title: 'Huntington Beach', href: '/areas/huntington-beach-mortgage-broker', description: 'Beach community financing' }
      ]
    },
    'guides': {
      pillar: {
        title: 'Complete Guide Library',
        href: '/guides',
        description: 'Comprehensive mortgage and real estate guides'
      },
      related: [
        { title: 'Home Buyer Guide', href: '/guides/orange-county-home-buyer-guide', description: 'Complete first-time buyer guide' },
        { title: 'Refinancing Guide', href: '/guides/orange-county-refinancing-guide', description: 'When and how to refinance' },
        { title: 'Market Forecast 2025-2026', href: '/guides/orange-county-market-forecast-2025-2026', description: 'Local market predictions' },
        { title: 'School Districts', href: '/guides/orange-county-school-districts', description: 'Best schools for families' },
        { title: 'Investment Property', href: '/guides/orange-county-investment-property', description: 'Investor financing strategies' },
        { title: 'VA Loans Guide', href: '/guides/orange-county-va-loans', description: 'Military benefits and programs' }
      ]
    },
    'resources': {
      pillar: {
        title: 'Complete Resource Center',
        href: '/resources',
        description: 'Tools, data, and assistance programs'
      },
      related: [
        { title: 'Down Payment Assistance', href: '/resources/down-payment-assistance', description: '25+ assistance programs' },
        { title: 'Market Data Hub', href: '/resources/market-data', description: 'Current Orange County statistics' },
        { title: 'Credit Repair Resources', href: '/resources/credit-repair', description: 'Improve your credit score' },
        { title: 'Mortgage Glossary', href: '/resources/glossary', description: '30+ mortgage terms explained' },
        { title: 'Document Checklist', href: '/resources/document-checklist', description: 'Complete application requirements' },
        { title: 'Service Providers', href: '/resources/service-providers', description: 'Vetted real estate professionals' }
      ]
    },
    'calculators': {
      pillar: {
        title: 'Complete Calculator Suite',
        href: '/calculator',
        description: 'All mortgage calculation tools'
      },
      related: [
        { title: 'Mortgage Calculator', href: '/calculator', description: 'Monthly payment calculations' },
        { title: 'Affordability Calculator', href: '/calculator/affordability', description: 'How much house can you afford' },
        { title: 'Debt-to-Income Calculator', href: '/calculator/debt-to-income', description: 'DTI ratios and approval odds' },
        { title: 'Closing Costs Calculator', href: '/calculator/closing-costs', description: 'Estimate total closing costs' },
        { title: 'Advanced Rate Calculator', href: '/tools/mortgage-calculator', description: 'Detailed rate comparisons' }
      ]
    }
  };

  const cluster = clusters[clusterType];
  const relatedPages = cluster.related.filter(page => page.href !== currentPage);

  if (relatedPages.length === 0) return null;

  return (
    <div className="bg-slate-50 rounded-lg p-6 my-8">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Related {cluster.pillar.title.replace('Complete ', '').replace('All ', '')}
        </h3>
        {currentPage !== cluster.pillar.href && (
          <Link 
            href={cluster.pillar.href}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-3"
          >
            <ArrowRight className="w-4 h-4 mr-1" />
            View {cluster.pillar.title}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPages.slice(0, 6).map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow group"
          >
            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              {page.title}
            </h4>
            <p className="text-sm text-slate-600">
              {page.description}
            </p>
            <div className="flex items-center text-blue-600 text-sm mt-3 group-hover:text-blue-700">
              Learn more
              <ExternalLink className="w-3 h-3 ml-1" />
            </div>
          </Link>
        ))}
      </div>

      {relatedPages.length > 6 && (
        <div className="mt-4 text-center">
          <Link
            href={cluster.pillar.href}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all {cluster.pillar.title.toLowerCase()}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
}

