import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrendingDown, TrendingUp, Home, Building, Users, Calculator } from "lucide-react";
import Link from "next/link";

const rateData = [
  {
    loanType: "30-Year Fixed Conventional",
    rate: "6.875%",
    apr: "6.920%",
    trend: "down",
    change: "-0.125%",
    icon: Home,
    description: "Perfect for stable payments over 30 years"
  },
  {
    loanType: "15-Year Fixed Conventional",
    rate: "6.250%",
    apr: "6.290%",
    trend: "down",
    change: "-0.100%",
    icon: TrendingDown,
    description: "Build equity faster with higher payments"
  },
  {
    loanType: "FHA 30-Year Fixed",
    rate: "6.500%",
    apr: "6.750%",
    trend: "stable",
    change: "0.000%",
    icon: Users,
    description: "Low down payment option for first-time buyers"
  },
  {
    loanType: "Jumbo 30-Year Fixed",
    rate: "7.125%",
    apr: "7.150%",
    trend: "up",
    change: "+0.050%",
    icon: Building,
    description: "For loan amounts above $766,550 in Orange County"
  }
];

export default function RateDisplay() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Current Orange County Mortgage Rates
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare today&apos;s rates across different loan programs. All rates updated daily and subject to qualification.
          </p>
          <Badge className="mt-4 bg-blue-100 text-blue-800 px-3 py-1">
            Last Updated: {new Date().toLocaleDateString()}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {rateData.map((loan, index) => (
            <Card key={index} className="card-hover shadow-base44 border-slate-200 transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
                      <loan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900">{loan.loanType}</CardTitle>
                      <p className="text-sm text-slate-600 mt-1">{loan.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text rate-pulse">{loan.rate}</div>
                    <div className="text-sm text-slate-600">APR {loan.apr}</div>
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
            Actual rates may vary based on credit score, loan-to-value ratio, and other factors.
          </p>
          
          <Link href="/calculator">
            <Button size="lg" className="gradient-bg hover:shadow-base44-lg text-white px-8 py-3 btn-base44 transform hover:scale-105 transition-all duration-300">
              <Calculator className="w-5 h-5 mr-2" />
              Get Your Personalized Rate Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}