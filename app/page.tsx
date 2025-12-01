import React from 'react';
import type { Metadata } from 'next';
import SimpleLandingPage from '@/components/SimpleLandingPage';

export const metadata: Metadata = {
  title: 'Mo Abdel - Branch Manager | West Capital Lending',
  description: 'Connect with Mo Abdel, Branch Manager at West Capital Lending. NMLS 1426884 | NMLS 1566096 | DRE 02022356. Schedule an appointment or apply for a loan today.',
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
};

export default function HomePage() {
  return <SimpleLandingPage />;
}