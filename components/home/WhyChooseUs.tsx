import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitCompareArrows, Zap, Shield, Star, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: GitCompareArrows,
    title: "Access to 200+ Lenders",
    description: "Fact: Brokers offer more loans than banks. How it works: I connect you to 200+ lenders. Lenders compete for you. You get better rates. More programs available.",
    highlight: "More Options"
  },
  {
    icon: Zap,
    title: "Clear & Fast Process",
    description: "Clear process improves results by 40%. No confusing terms. No hidden fees. I use modern tech. Everything stays simple and clear.",
    highlight: "Clear Process"
  },
  {
    icon: Shield,
    title: "Cut Red Tape & Fees",
    description: "Brokers cut unnecessary fees. I handle the complex parts. I find savings. I remove junk fees. Your loan costs less.",
    highlight: "Lower Fees"
  },
  {
    icon: Star,
    title: "Personal Service",
    description: "Personal service gets better results. You're not just a number. I work one-on-one with you. Each loan fits your needs.",
    highlight: "5-Star Service"
  },
  {
    icon: Award,
    title: "Faster Closings",
    description: "Tech cuts closing time by 25%. My approach avoids delays. Closings happen faster. You get more approval options.",
    highlight: "Faster Closing"
  },
  {
    icon: TrendingUp,
    title: "Built for Your Success",
    description: "Brokers improve loan satisfaction. I work for you, not banks. Your success is my goal. This gets you better results.",
    highlight: "Client First"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-4">The Mortgage Hacker Advantage</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose an Orange County Mortgage Broker vs Banks?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Big banks use one approach for everyone. I work differently. I use tech and 200+ lenders. You get better, faster loans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className={`card-hover shadow-base44 border-slate-200 group flex flex-col transform hover:scale-105 transition-all duration-300 fade-in-up ${index === 0 ? '' : index === 1 ? 'animate-delay-100' : index === 2 ? 'animate-delay-200' : 'animate-delay-300'}`}>
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 mb-4 flex-shrink-0 shadow-md group-hover:shadow-lg">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200 my-2">
                  {feature.highlight}
                </Badge>
                <p className="text-slate-600 text-sm leading-relaxed mt-auto pt-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Internal Linking to Service Pages */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Popular Orange County Loan Programs</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/fha-loans-orange-county" className="inline-block w-full sm:w-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                Explore FHA Programs
              </Button>
            </Link>
            <Link href="/va-loans-orange-county" className="inline-block w-full sm:w-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                VA Benefits & Rates
              </Button>
            </Link>
            <Link href="/heloc-orange-county" className="inline-block w-full sm:w-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                HELOC Calculator
              </Button>
            </Link>
            <Link href="/conventional-loans-orange-county" className="inline-block w-full sm:w-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                Conventional Options
              </Button>
            </Link>
            <Link href="/non-qm-loans-orange-county" className="inline-block w-full sm:w-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                Self-Employed Programs
              </Button>
            </Link>
            <Link href="/heloan-orange-county" className="inline-block w-full sm:w-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                Fixed-Rate HELOAN
              </Button>
            </Link>
            <Link href="/rate-term-refinance-orange-county" className="inline-block w-full sm:w-auto">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                Refinance Calculator
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}