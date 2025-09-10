import React from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, Phone, ArrowRight, GitCompareArrows, TrendingDown, ShieldCheck } from "lucide-react";
import Link from "next/link";
import DynamicRates from "./DynamicRates";

export default function HeroSectionServer() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Mortgage Broker in Orange County – </span>
                <span className="text-blue-600">Better Wholesale Loan Rates, Faster Closing</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                I'm Mo, a Mortgage Broker with NEXA Mortgage—the nation's largest wholesale brokerage, and I'm proudly based in Lake Forest, serving all of Orange County. Unlike big banks that push their own products, I give you direct access to over 200 lenders with competitive pricing. That means better rates, faster approvals, and more flexible options tailored to you—not the other way around.
              </p>
              
              <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Serving Orange County from Lake Forest</span><br/>
                  Licensed NMLS #1426884 • Call (949) 579-2057
                </p>
              </div>
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

          {/* Right Column Content */}
          <div className="space-y-8">
            {/* Dynamic Rates Card - Client Component */}
            <DynamicRates />
          </div>
        </div>
      </div>
    </section>
  );
}