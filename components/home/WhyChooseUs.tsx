import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GitCompareArrows, Zap, Shield, Star, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: GitCompareArrows,
    title: "Unbiased Access to 200+ Lenders",
    description: "I connect you to a massive network of lenders, forcing them to compete. The result? Better rates and more programs.",
    highlight: "More Options"
  },
  {
    icon: Zap,
    title: "Tech-Savvy & Transparent Process",
    description: "No confusing jargon or hidden fees. I use modern tech to make the entire process seamless and transparent.",
    highlight: "Transparent"
  },
  {
    icon: Shield,
    title: "Cut Through Red Tape & Fees",
    description: "As your mortgage hacker, I navigate the complex lending landscape to find efficiencies and eliminate junk fees.",
    highlight: "Lower Fees"
  },
  {
    icon: Star,
    title: "Personalized, Tailored Lending",
    description: "You're not a number in a queue. I provide one-on-one service to tailor the perfect loan for your financial situation.",
    highlight: "5-Star Service"
  },
  {
    icon: Award,
    title: "Faster Turnarounds, More Approvals",
    description: "My streamlined, tech-first approach cuts through delays, leading to faster closings and more approval options.",
    highlight: "Faster Closing"
  },
  {
    icon: TrendingUp,
    title: "Optimized for Your Success",
    description: "I work for you, not the banks, ensuring your financial well-being is the top priority throughout the lending process.",
    highlight: "Client Focused"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-4">The Mortgage Hacker Advantage</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose a Wholesale Mortgage Broker?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Unlike big banks with a one-size-fits-all approach, I leverage technology and a vast lender network
            to create better, faster, and more transparent mortgage solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover shadow-base44 border-slate-200 group flex flex-col transform hover:scale-105 transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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

      </div>
    </section>
  );
}