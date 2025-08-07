'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrendingUp, Home, DollarSign, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MarketInsight } from "@/lib/entities";

export default function LocalMarketInsights() {
  const [marketData, setMarketData] = useState<any[]>([]);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const insights = await MarketInsight.list('display_order');
        setMarketData(insights);
      } catch (error) {
        console.error("Failed to fetch market insights:", error);
      }
    };
    fetchInsights();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            Orange County Market Update
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Local Housing Market Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed about Orange County housing trends. 
            Understanding the market helps you make better financing decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketData.map((data, index) => (
            <Card key={index} className="card-hover shadow-base44 border-slate-200 transform hover:scale-105 transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-1 animate-pulse">{data.value}</div>
                  <div className="text-sm font-medium text-slate-600">{data.metric}</div>
                </div>
                
                <div className={`flex items-center justify-center space-x-1 text-sm font-medium mb-2 ${
                  data.trend === 'up' ? 'text-green-600' : 
                  data.trend === 'down' ? 'text-red-500' : 'text-slate-600'
                }`}>
                  {data.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                  {data.trend === 'down' && <TrendingUp className="w-4 h-4 transform rotate-180" />} 
                  <span>{data.change}</span>
                </div>
                
                <p className="text-xs text-slate-500">{data.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Orange County Highlights */}
          <Card className="border-slate-200 shadow-base44-lg card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Home className="w-6 h-6 text-blue-600 mr-3" />
                Why Orange County is a Great Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Top-Rated Schools</h4>
                  <p className="text-slate-600 text-sm">Multiple highly-rated school districts throughout the county</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Prime Location</h4>
                  <p className="text-slate-600 text-sm">Easy access to beaches, mountains, and major employment centers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Strong Property Values</h4>
                  <p className="text-slate-600 text-sm">Consistent appreciation and desirable communities throughout OC</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financing Programs */}
          <Card className="border-slate-200 shadow-base44-lg card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                Special Programs Available
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Refinancing Specialists</h4>
                  <p className="text-slate-600 text-sm">Cash-out, rate & term, and streamline refinance programs with competitive rates</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Non-QM Loan Programs</h4>
                  <p className="text-slate-600 text-sm">Bank statement loans, asset-based financing, and alternative documentation options</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Jumbo Loan Specialists</h4>
                  <p className="text-slate-600 text-sm">Competitive rates for loans above conventional limits</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500 mb-6">
            Market data updated periodically. Sources may include: MLS, Orange County Association of Realtors, CoreLogic
          </p>
          
          <Link href="/programs">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Loan Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}