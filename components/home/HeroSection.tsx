import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TrendingDown, Calculator, Phone, ArrowRight, Zap, GitCompareArrows, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden hero-pattern">
      {/* Background decoration with Base44 gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-green-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-sm font-medium">
                <Zap className="w-4 h-4 mr-1" />
                NEXA Mortgage | NMLS #1426884
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight animate-fade-in-up">
                Orange County&apos;s Trusted Mortgage Broker
              </h1>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Your Guide to Better Rates & Faster Closings</h2>
              
              <p className="text-lg text-slate-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                As a Wholesale Mortgage Broker with NEXA Mortgage—the nation&apos;s largest wholesale brokerage—I provide Orange County residents with direct access to over 200 lenders. My mission is to &apos;hack&apos; the traditional mortgage process by forcing lenders to compete for your business. This strategy secures you better rates, faster approvals, and more flexible loan options than any big bank can offer. I am committed to a transparent, tech-savvy process that eliminates junk fees and empowers you to achieve your homeownership goals with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get My Rate Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <a href="tel:(949) 579-2057">
                <Button size="lg" variant="ghost" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 579-2057
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center justify-center"><GitCompareArrows className="w-7 h-7 mr-2 text-blue-600"/>200+</div>
                <div className="text-sm text-slate-600">Lenders Competing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center justify-center"><TrendingDown className="w-7 h-7 mr-2 text-green-600"/>Better</div>
                <div className="text-sm text-slate-600">Interest Rates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center justify-center"><ShieldCheck className="w-7 h-7 mr-2 text-blue-600"/>More</div>
                <div className="text-sm text-slate-600">Approval Options</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative fade-in-up-delay-3">
            <div className="bg-white rounded-2xl shadow-base44-lg p-8 border border-slate-200 card-hover">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Today&apos;s Sample Rates</h3>
                  <Badge className="bg-blue-100 text-blue-800">Updated Daily</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="font-medium text-slate-700">30-Year Fixed</span>
                    <span className="text-2xl font-bold text-green-600">6.875%</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="font-medium text-slate-700">15-Year Fixed</span>
                    <span className="text-2xl font-bold text-green-600">6.250%</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="font-medium text-slate-700">FHA 30-Year</span>
                    <span className="text-2xl font-bold text-green-600">6.500%</span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-500 text-center">
                  *Rates are for illustrative purposes and vary based on credit score and loan program. Contact me for a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}