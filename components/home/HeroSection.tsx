'use client';

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TrendingDown, Calculator, Phone, ArrowRight, Zap, GitCompareArrows, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [rates, setRates] = useState({
    thirtyYear: "6.59%",
    fifteenYear: "5.97%",
    fhaThirtyYear: "6.17%"
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('/api/rates', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Find specific loan types
          const thirty = result.data.find((r: any) => r.loan_type.includes('30-Year Fixed'));
          const fifteen = result.data.find((r: any) => r.loan_type.includes('15-Year Fixed'));
          const fha = result.data.find((r: any) => r.loan_type.includes('FHA'));
          
          setRates({
            thirtyYear: thirty ? `${thirty.rate}%` : "6.59%",
            fifteenYear: fifteen ? `${fifteen.rate}%` : "5.97%",
            fhaThirtyYear: fha ? `${fha.rate}%` : "6.17%"
          });
        }
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchRates();
    // Refresh rates every 30 seconds
    const interval = setInterval(fetchRates, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Mortgage Broker in Orange County – </span>
                <span className="text-blue-600">Better Loan Rates, Faster Closing</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                I'm Mo, a Mortgage Broker with NEXA Mortgage—the nation's largest wholesale brokerage, and I'm proudly based in Orange County. Unlike big banks that push their own products, I give you direct access to over 200 lenders with competitive pricing. That means better rates, faster approvals, and more flexible options tailored to you—not the other way around.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get My Rate Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <a href="tel:(949) 579-2057">
                <Button size="lg" variant="ghost" className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 579-2057
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-12 pt-4 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <GitCompareArrows className="w-8 h-8 mr-2 text-blue-600"/>
                  200+
                </div>
                <div className="text-sm text-slate-600">Lenders Competing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <TrendingDown className="w-8 h-8 mr-2 text-green-600"/>
                  Better
                </div>
                <div className="text-sm text-slate-600">Interest Rates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <ShieldCheck className="w-8 h-8 mr-2 text-blue-600"/>
                  More
                </div>
                <div className="text-sm text-slate-600">Approval Options</div>
              </div>
            </div>
          </div>

          {/* Current Rates Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Current Rates</h3>
                  <Badge className="bg-blue-100 text-blue-600 px-3 py-1">Updated Weekly</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-slate-700">30-Year Fixed</span>
                    <span className="text-2xl font-bold text-green-600">{rates.thirtyYear}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-slate-700">15-Year Fixed</span>
                    <span className="text-2xl font-bold text-green-600">{rates.fifteenYear}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-slate-700">FHA 30-Year</span>
                    <span className="text-2xl font-bold text-green-600">{rates.fhaThirtyYear}</span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-500 text-center">
                  *Rates vary based on credit score and loan program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}