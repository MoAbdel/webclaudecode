'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { fbTrack, fbTrackCustom } from '@/components/FacebookPixel';

export const useFacebookTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views with additional context
    if (pathname) {
      // Standard PageView is already tracked by FacebookPixel component
      // Add custom tracking for specific pages
      
      if (pathname === '/contact') {
        fbTrackCustom('ViewContent', {
          content_name: 'Contact Page',
          content_category: 'contact'
        });
      } else if (pathname === '/calculator') {
        fbTrackCustom('ViewContent', {
          content_name: 'Rate Calculator',
          content_category: 'calculator'
        });
      } else if (pathname.includes('loan') || pathname.includes('program')) {
        fbTrackCustom('ViewContent', {
          content_name: 'Loan Program Page',
          content_category: 'loan_programs'
        });
      } else if (pathname.includes('guide')) {
        fbTrackCustom('ViewContent', {
          content_name: 'Guide Page',
          content_category: 'guides'
        });
      }
    }
  }, [pathname]);

  // Function to track button clicks and interactions
  const trackInteraction = (action: string, category: string, value?: number) => {
    fbTrackCustom('CustomInteraction', {
      action,
      category,
      value: value || 0
    });
  };

  // Function to track phone calls
  const trackPhoneCall = () => {
    fbTrack('Contact', {
      content_name: 'Phone Call',
      content_category: 'contact'
    });
  };

  // Function to track calculator usage
  const trackCalculatorUse = (calculatorType: string) => {
    fbTrackCustom('CalculatorUse', {
      calculator_type: calculatorType,
      content_category: 'engagement'
    });
  };

  return {
    trackInteraction,
    trackPhoneCall,
    trackCalculatorUse
  };
};



