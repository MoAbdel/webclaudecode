'use client';

import { useEffect } from 'react';

interface GEOMetrics {
  statistics: number;
  dataPoints: number;
  expertQuotes: number;
  governmentSources: number;
  industryData: number;
  structuredData: number;
  dataTables: number;
  factualIndicators: number;
  credentials: number;
  licenses: number;
  pageType: string;
  wordCount: number;
  readabilityScore: number;
  citableElements: number;
  authoritySignals: number;
}


export default function GEOTracking() {
  useEffect(() => {
    // Wait for DOM to be fully loaded
    const timer = setTimeout(() => {
      const metrics = trackGEOPerformance();
      
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'geo_performance_scan', {
          custom_parameter_1: metrics.statistics,
          custom_parameter_2: metrics.structuredData,
          custom_parameter_3: metrics.dataTables,
          custom_parameter_4: metrics.factualIndicators,
          custom_parameter_5: metrics.authoritySignals,
          page_type: metrics.pageType,
          readability_score: metrics.readabilityScore
        });
      }
      
      // Store metrics for potential API reporting
      if (typeof window !== 'undefined') {
        (window as any).geoMetrics = metrics;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const trackGEOPerformance = (): GEOMetrics => {
    const geoMetrics: GEOMetrics = {
      // Content Citability Metrics
      statistics: document.querySelectorAll('[data-citable="statistic"]').length,
      dataPoints: document.querySelectorAll('[data-citable="data"]').length,
      expertQuotes: document.querySelectorAll('[data-authority="expert"]').length,
      governmentSources: document.querySelectorAll('[data-authority="government"]').length,
      industryData: document.querySelectorAll('[data-authority="industry"]').length,
      
      // Technical GEO Elements
      structuredData: document.querySelectorAll('script[type="application/ld+json"]').length,
      dataTables: document.querySelectorAll('table[data-geo="comparison"]').length,
      factualIndicators: document.querySelectorAll('[data-factual]').length,
      
      // Professional Credentials
      credentials: document.querySelectorAll('[data-credential]').length,
      licenses: document.querySelectorAll('[data-license]').length,
      
      // Page-specific metrics
      pageType: document.querySelector('meta[name="page-type"]')?.getAttribute('content') || 'unknown',
      wordCount: document.body.innerText.split(' ').length,
      readabilityScore: calculateReadabilityScore(),
      
      // Aggregate metrics
      citableElements: document.querySelectorAll('[data-citable]').length,
      authoritySignals: document.querySelectorAll('[data-authority]').length
    };
    
    // Calculate GEO Score
    const geoScore = calculateGEOScore(geoMetrics);
    
    console.log('🤖 GEO Performance Metrics:', {
      ...geoMetrics,
      geoScore: geoScore,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
    
    return geoMetrics;
  };

  const calculateReadabilityScore = (): number => {
    // Simple readability calculation optimized for AI systems
    const text = document.body.innerText;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const words = text.split(/\s+/).filter(w => w.length > 0).length;
    return sentences > 0 ? Math.round(words / sentences) : 0;
  };

  const calculateGEOScore = (metrics: GEOMetrics): number => {
    // Weighted scoring system for GEO optimization
    let score = 0;
    
    // Factual indicators (30% weight)
    score += Math.min(metrics.factualIndicators * 5, 30);
    
    // Authority signals (25% weight)
    score += Math.min(metrics.authoritySignals * 3, 25);
    
    // Structured data (20% weight)
    score += Math.min(metrics.structuredData * 4, 20);
    
    // Data tables (15% weight)
    score += Math.min(metrics.dataTables * 7.5, 15);
    
    // Readability optimization (10% weight)
    const readabilityPoints = metrics.readabilityScore <= 18 ? 10 : Math.max(0, 10 - (metrics.readabilityScore - 18));
    score += readabilityPoints;
    
    return Math.round(score);
  };

  return null; // This component only handles tracking, no UI
}

// Export for manual tracking calls
export const manualGEOTrack = () => {
  if (typeof window !== 'undefined') {
    return (window as any).geoMetrics;
  }
  return null;
};



