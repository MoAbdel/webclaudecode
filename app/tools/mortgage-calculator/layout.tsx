import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Mortgage Calculator | Orange County, CA | Mo Abdel',
  description: 'Free mortgage calculator for Orange County, CA. Calculate payments, compare options, and plan your budget. Get started today.',
  keywords: 'mortgage calculator, Orange County CA',
  path: '/tools/mortgage-calculator',
  type: 'website'
});

export default function ToolsCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}

