'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Download, Mail, CheckCircle } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically integrate with your email marketing service
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {!isSubmitted ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Free 2025 Orange County Homebuyer's Guide
              </h2>

              <p className="text-xl mb-8 text-blue-100">
                Get insider tips, market data, and step-by-step guidance for buying your Orange County home
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-white/50"
                  />
                  <Button
                    type="submit"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </div>
              </form>

              <p className="text-sm text-blue-200 mt-4">
                No spam, unsubscribe anytime. Your information is secure.
              </p>
            </>
          ) : (
            <div className="py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p className="text-blue-100">
                Your guide is being sent to {email}. Check your inbox in a few minutes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}