import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import RateDisplay from '@/components/home/RateDisplay';
import QuickQuote from '@/components/home/QuickQuote';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import LocalMarketInsights from '@/components/home/LocalMarketInsights';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f1f5f9, #ffffff)' }}>
      {/* Test div to verify Tailwind is working */}
      <div className="bg-red-500 text-white p-4 text-center mb-4 force-red" style={{ backgroundColor: '#ef4444', color: 'white', padding: '1rem', textAlign: 'center', marginBottom: '1rem' }}>
        🔴 TAILWIND TEST: If this is red, Tailwind works. If not styled, CSS not loading.
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 text-center mb-8 force-gradient test-gradient" style={{ background: 'linear-gradient(to right, #3b82f6, #10b981)', color: 'white', padding: '1rem', textAlign: 'center', marginBottom: '2rem' }}>
        🌈 GRADIENT TEST: This should be blue-to-green gradient
      </div>
      
      <HeroSection />
      <RateDisplay />
      <QuickQuote />
      <WhyChooseUs />
      <LocalMarketInsights />
    </div>
  );
}