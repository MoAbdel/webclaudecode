'use client';

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";

export default function DynamicRates() {
  const [rates, setRates] = useState({
    thirtyYear: "6.00%",
    fifteenYear: "5.46%",
    fhaThirtyYear: "5.74%",
    vaThirtyYear: "5.76%",
    jumboThirtyYear: "6.00%",
    armRate: "5.39%"
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
            thirtyYear: thirty ? `${thirty.rate}%` : "6.00%",
            fifteenYear: fifteen ? `${fifteen.rate}%` : "5.46%",
            fhaThirtyYear: fha ? `${fha.rate}%` : "5.74%",
            vaThirtyYear: "5.76%",
            jumboThirtyYear: "6.00%",
            armRate: "5.39%"
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
    <div className="relative">
      {/* CLS Prevention: Fixed height container to prevent layout shift */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 min-h-[400px]">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Current Rates</h3>
            <Badge className="bg-blue-100 text-blue-600 px-3 py-1">Updated Weekly</Badge>
          </div>
          
          {/* CLS Prevention: Fixed grid height prevents content shifts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[280px]">
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg h-16">
              <span className="font-medium text-slate-700">30-Year Fixed</span>
              <span className="text-xl font-bold text-green-600">{rates.thirtyYear}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg h-16">
              <span className="font-medium text-slate-700">15-Year Fixed</span>
              <span className="text-xl font-bold text-green-600">{rates.fifteenYear}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg h-16">
              <span className="font-medium text-slate-700">30-Year FHA</span>
              <span className="text-xl font-bold text-blue-600">{rates.fhaThirtyYear}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg h-16">
              <span className="font-medium text-slate-700">30-Year VA</span>
              <span className="text-xl font-bold text-blue-600">{rates.vaThirtyYear}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg h-16">
              <span className="font-medium text-slate-700">30-Year Jumbo</span>
              <span className="text-xl font-bold text-purple-600">{rates.jumboThirtyYear}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg h-16">
              <span className="font-medium text-slate-700">7/6 SOFR ARM</span>
              <span className="text-xl font-bold text-orange-600">{rates.armRate}</span>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 text-center">
            *Rates vary based on credit score and loan program
          </p>
        </div>
      </div>
    </div>
  );
}