import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import RateDisplay from '@/components/home/RateDisplay';
import QuickQuote from '@/components/home/QuickQuote';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import LocalMarketInsights from '@/components/home/LocalMarketInsights';
import Testimonials from '@/components/home/Testimonials';
import ReadyToGetStarted from '@/components/home/ReadyToGetStarted';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <WhyChooseUs />
      <RateDisplay />
      <QuickQuote />
      <LocalMarketInsights />
      <Testimonials />
      <ReadyToGetStarted />
    </div>
  );
}