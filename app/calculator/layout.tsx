import type { Metadata } from 'next';
import { seoData } from '@/lib/seo';

export const metadata: Metadata = {
  title: seoData.Calculator.title,
  description: seoData.Calculator.description,
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}