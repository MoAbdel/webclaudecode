import React from 'react';
import type { Metadata } from 'next';
import MortgageQuiz from '@/components/home/MortgageQuiz';

export const metadata: Metadata = {
  title: 'Get Your Mortgage Options | Free Quote | Mo Abdel NMLS #1426884',
  description: 'Get personalized mortgage options in minutes. Compare rates from 200+ lenders with licensed broker Mo Abdel (NMLS #1426884). Free, no obligation quote.',
  alternates: {
    canonical: 'https://www.mothebroker.com/quiz',
  },
};

export default function QuizPage() {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <div className="pt-8 pb-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Your Personalized Mortgage Options
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Answer a few quick questions to get matched with the best wholesale rates from our 200+ lenders.
          </p>
        </div>

        <MortgageQuiz />
      </div>
    </>
  );
}