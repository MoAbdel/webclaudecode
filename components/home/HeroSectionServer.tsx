import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import DynamicRates from "./DynamicRates";

export default function HeroSectionServer() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Unlock </span>
                <span className="text-blue-600">Wholesale Mortgage Options</span>
                <span className="text-slate-900"> in Minutes</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Licensed in CA, WA, VA & CO • 200+ Lenders • Wholesale Pricing Advantage
              </p>

              <p className="text-sm text-slate-500 italic">
                Sponsored by NEXA Mortgage, NMLS #1660690. Equal Housing Lender.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="/quiz">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6">
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-100 text-blue-800">
                  NMLS #1426884
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  200+ Lenders
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-purple-100 text-purple-800">
                  <Zap className="w-4 h-4 mr-1" />
                  Fast Closing
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-100 text-orange-800">
                  <Shield className="w-4 h-4 mr-1" />
                  Wholesale Rates
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column - Rates Card */}
          <div className="flex justify-center lg:justify-end">
            <DynamicRates />
          </div>
        </div>
      </div>
    </section>
  );
}