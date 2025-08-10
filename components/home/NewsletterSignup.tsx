'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !firstName.trim()) return;

    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API call to save to database
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          subscribedAt: new Date().toISOString(),
          source: 'homepage_newsletter'
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail('');
        setFirstName('');
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead of the Orange County Market
            </h3>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get Mo's exclusive weekly market insights, rate forecasts, and insider tips delivered to your inbox. 
              No spam, just valuable information to help you make smarter financing decisions.
            </p>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-green-800">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <p className="font-medium">
                    Welcome to Mo's Market Insights! Check your email for confirmation.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-lg text-red-800">
                <p className="text-sm">
                  Something went wrong. Please try again or call Mo directly at (949) 579-2057.
                </p>
              </div>
            )}

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 text-lg border-white/20 bg-white/10 text-white placeholder-blue-100 focus:ring-2 focus:ring-white focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-lg border-white/20 bg-white/10 text-white placeholder-blue-100 focus:ring-2 focus:ring-white focus:border-transparent"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !email.trim() || !firstName.trim()}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    'Subscribing...'
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Get Updates
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <TrendingUp className="w-8 h-8 text-blue-200 mb-2" />
                <h4 className="font-semibold text-white mb-1">Weekly Market Updates</h4>
                <p className="text-sm text-blue-100">Latest rates, trends, and forecasts</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-blue-200 mb-2" />
                <h4 className="font-semibold text-white mb-1">Insider Tips</h4>
                <p className="text-sm text-blue-100">Wholesale pricing insights you won't find elsewhere</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-blue-200 mb-2" />
                <h4 className="font-semibold text-white mb-1">No Spam Promise</h4>
                <p className="text-sm text-blue-100">Unsubscribe anytime, your info never shared</p>
              </div>
            </div>

            <p className="text-xs text-blue-200 mt-6">
              By subscribing, you agree to receive email updates from Mo The Broker. 
              Your information will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}