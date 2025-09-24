import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Home, RefreshCw, Briefcase, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Home,
    title: "Buy a Home",
    description: "FHA, VA, Conventional, and Jumbo loans with competitive wholesale rates. Get pre-approved in 24 hours.",
    features: ["3% down payment options", "First-time buyer programs", "Fast 18-day closings"],
    intent: "purchase"
  },
  {
    icon: RefreshCw,
    title: "Refinance",
    description: "Lower your rate, access equity, or change loan terms. Rate-and-term, cash-out, and HELOC options available.",
    features: ["Rate & term refinancing", "Cash-out up to 80% LTV", "HELOC credit lines"],
    intent: "refinance"
  },
  {
    icon: Briefcase,
    title: "Specialty Loans",
    description: "Self-employed, investment property, and non-QM programs when traditional loans don't fit.",
    features: ["Bank statement loans", "DSCR investment loans", "Foreign national programs"],
    intent: "specialty"
  }
];

export default function ProgramSnapshot() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Path Forward
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every situation is unique. Select your goal to get matched with the right wholesale lenders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <program.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="text-sm text-slate-600 mb-8 space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href={`#quiz?intent=${program.intent}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                    Start Here
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}