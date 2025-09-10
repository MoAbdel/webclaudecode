import type { Metadata } from 'next';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Loan Programs | Orange County, CA',
  description: 'Explore mortgage options in Orange County, CA. Compare FHA, VA, Conventional, Jumbo, HELOC. Get started today.',
  path: '/loan-programs',
  type: 'website'
});

export default function LoanProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceSchema />
    </>
  );
}

