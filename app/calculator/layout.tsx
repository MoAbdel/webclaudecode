import type { Metadata } from 'next';
import { seoData } from '@/lib/seo';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: seoData.Calculator.title,
  description: seoData.Calculator.description,
  keywords: 'mortgage calculator, Orange County, home loan calculator, mortgage payment, interest rate calculator, refinance calculator',
  path: '/calculator',
  type: 'website'
});

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

