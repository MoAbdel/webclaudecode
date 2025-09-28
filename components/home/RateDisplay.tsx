'use client';

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrendingDown, TrendingUp, Home, Building, Users, Calculator, Shield, BarChart3 } from "lucide-react";
import Link from "next/link";

const defaultRateData = [
  {
    loanType: "30-Year Fixed Conventional",
    rate: "6.125%",
    apr: "APR may vary",
    trend: "down",
    change: "-0.04",
    icon: Home,
    description: "Perfect for stable payments over 30 years"
  },
  {
    loanType: "15-Year Fixed Conventional",
    rate: "5.50%",
    apr: "APR may vary",
    trend: "down",
    change: "-0.01",
    icon: TrendingDown,
    description: "Build equity faster with higher payments"
  },
  {
    loanType: "30-Year FHA",
    rate: "6.125%",
    apr: "APR may vary",
    trend: "down",
    change: "-0.01",
    icon: Users,
    description: "Low down payment option for first-time buyers"
  },
  {
    loanType: "30-Year Jumbo",
    rate: "6.625%",
    apr: "APR may vary",
    trend: "stable",
    change: "+0.00",
    icon: Building,
    description: "For loan amounts above conventional limits"
  },
  {
    loanType: "30-Year VA",
    rate: "5.99%",
    apr: "APR may vary",
    trend: "stable",
    change: "+0.00",
    icon: Shield,
    description: "Zero down payment for eligible veterans"
  },
  {
    loanType: "7/6 SOFR ARM",
    rate: "6.00%",
    apr: "APR may vary",
    trend: "down",
    change: "-0.01",
    icon: BarChart3,
    description: "Adjustable rate with lower initial payments"
  }
];

export default function RateDisplay() {
  const [rateData, setRateData] = useState(defaultRateData);
  const [loading, setLoading] = useState(true);

  // Use hardcoded rates only
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Current Orange County Mortgage Rates
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare today&apos;s rates across different loan programs. All rates updated weekly and subject to qualification.
          </p>
          <Badge className="mt-4 bg-blue-100 text-blue-800 px-3 py-1">
            Last Updated: {new Date().toLocaleDateString()}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rateData.map((loan, index) => (
            <Card key={index} className="card-hover shadow-base44 border-slate-200 transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                      <loan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900">{loan.loanType}</CardTitle>
                      <p className="text-sm text-slate-600 mt-1">{loan.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-pulse">{loan.rate}</div>
                    <div className="text-sm text-slate-600">APR may vary</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {loan.trend === "down" && (
                      <>
                        <TrendingDown className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">{loan.change} this week</span>
                      </>
                    )}
                    {loan.trend === "up" && (
                      <>
                        <TrendingUp className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-500 font-medium">{loan.change} this week</span>
                      </>
                    )}
                    {loan.trend === "stable" && (
                      <span className="text-sm text-slate-600 font-medium">Stable this week</span>
                    )}
                  </div>
                  
                  <Link href="/calculator">
                    <Button variant="ghost" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      Calculate Payment
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500 mb-6">
            *Rates shown are for qualified borrowers and subject to change without notice. 
            APR (Annual Percentage Rate) may vary based on loan amount, credit score, loan-to-value ratio, 
            property type, loan purpose, and other factors. Contact us for personalized rate quotes and APR calculations.
          </p>
          
          <Link href="/calculator">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Calculator className="w-5 h-5 mr-2" />
              Get Your Personalized Rate Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}