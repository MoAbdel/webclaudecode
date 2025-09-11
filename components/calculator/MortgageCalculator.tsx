'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Calculator, Home, DollarSign, Percent, Calendar, TrendingUp } from "lucide-react";

export default function MortgageCalculator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    homePrice: "750000",
    downPayment: "150000",
    loanAmount: "600000",
    interestRate: "7.25",
    loanTerm: "30",
    propertyTax: "9375",
    homeInsurance: "2400",
    pmi: "300",
    hoaDues: "0"
  });

  const [results, setResults] = useState({
    monthlyPayment: 0,
    principalAndInterest: 0,
    totalMonthlyPayment: 0,
    totalInterestPaid: 0,
    totalLoanCost: 0
  });

  const calculateMortgage = () => {
    const principal = parseFloat(formData.loanAmount);
    const monthlyRate = parseFloat(formData.interestRate) / 100 / 12;
    const numberOfPayments = parseInt(formData.loanTerm) * 12;
    
    // Calculate monthly principal and interest
    const monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    // Calculate other monthly costs
    const monthlyPropertyTax = parseFloat(formData.propertyTax) / 12;
    const monthlyInsurance = parseFloat(formData.homeInsurance) / 12;
    const monthlyPMI = parseFloat(formData.pmi);
    const monthlyHOA = parseFloat(formData.hoaDues);
    
    // Calculate totals
    const totalMonthly = monthlyPI + monthlyPropertyTax + monthlyInsurance + monthlyPMI + monthlyHOA;
    const totalInterest = (monthlyPI * numberOfPayments) - principal;
    const totalCost = principal + totalInterest;

    setResults({
      monthlyPayment: monthlyPI,
      principalAndInterest: monthlyPI,
      totalMonthlyPayment: totalMonthly,
      totalInterestPaid: totalInterest,
      totalLoanCost: totalCost
    });
  };

  const handleInputChange = (field: string, value: string) => {
    const updatedData = { ...formData, [field]: value };
    
    // Auto-calculate loan amount when home price or down payment changes
    if (field === 'homePrice' || field === 'downPayment') {
      const homePrice = parseFloat(field === 'homePrice' ? value : formData.homePrice) || 0;
      const downPayment = parseFloat(field === 'downPayment' ? value : formData.downPayment) || 0;
      updatedData.loanAmount = (homePrice - downPayment).toString();
    }
    
    // Auto-calculate PMI based on LTV ratio
    const homePrice = parseFloat(field === 'homePrice' ? value : updatedData.homePrice) || 0;
    const loanAmount = parseFloat(field === 'loanAmount' ? value : updatedData.loanAmount) || 0;
    
    if (homePrice > 0 && loanAmount > 0) {
      const ltv = (loanAmount / homePrice) * 100;
      // If LTV is less than 80%, set PMI to 0
      if (ltv < 80) {
        updatedData.pmi = "0";
      } else if (field !== 'pmi' && parseFloat(updatedData.pmi) === 0) {
        // If LTV >= 80% and PMI is currently 0, set it to a default value
        // Only do this if the user isn't manually changing the PMI field
        updatedData.pmi = "300";
      }
    }
    
    setFormData(updatedData);
  };

  useEffect(() => {
    calculateMortgage();
  }, [formData]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Mortgage Payment Calculator
        </h2>
        <p className="text-xl text-slate-600">
          Calculate your monthly mortgage payment including taxes, insurance, and PMI
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <Card className="lg:col-span-2 shadow-lg border-slate-200">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-2xl">
              <Calculator className="w-6 h-6 mr-3" />
              Loan Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="homePrice" className="text-slate-700 font-medium">Home Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="homePrice"
                    type="number"
                    value={formData.homePrice}
                    onChange={(e) => handleInputChange("homePrice", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="750000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="downPayment" className="text-slate-700 font-medium">Down Payment</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="downPayment"
                    type="number"
                    value={formData.downPayment}
                    onChange={(e) => handleInputChange("downPayment", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="150000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanAmount" className="text-slate-700 font-medium">Loan Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="loanAmount"
                    type="number"
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="600000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate" className="text-slate-700 font-medium">Interest Rate</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.125"
                    value={formData.interestRate}
                    onChange={(e) => handleInputChange("interestRate", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="7.25"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm" className="text-slate-700 font-medium">Loan Term</Label>
                <Select value={formData.loanTerm} onValueChange={(value) => handleInputChange("loanTerm", value)}>
                  <SelectTrigger className="border-slate-300">
                    <SelectValue placeholder="Select loan term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 Years</SelectItem>
                    <SelectItem value="20">20 Years</SelectItem>
                    <SelectItem value="25">25 Years</SelectItem>
                    <SelectItem value="30">30 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyTax" className="text-slate-700 font-medium">Annual Property Tax</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="propertyTax"
                    type="number"
                    value={formData.propertyTax}
                    onChange={(e) => handleInputChange("propertyTax", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="9375"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="homeInsurance" className="text-slate-700 font-medium">Annual Home Insurance</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="homeInsurance"
                    type="number"
                    value={formData.homeInsurance}
                    onChange={(e) => handleInputChange("homeInsurance", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="2400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pmi" className="text-slate-700 font-medium">
                  Monthly PMI
                  {(() => {
                    const homePrice = parseFloat(formData.homePrice) || 0;
                    const loanAmount = parseFloat(formData.loanAmount) || 0;
                    const ltv = homePrice > 0 ? (loanAmount / homePrice) * 100 : 0;
                    return ltv < 80 && ltv > 0 ? (
                      <span className="ml-2 text-xs text-green-600 font-semibold">
                        (Auto $0 - LTV {ltv.toFixed(1)}% &lt; 80%)
                      </span>
                    ) : ltv >= 80 ? (
                      <span className="ml-2 text-xs text-orange-600 font-semibold">
                        (LTV {ltv.toFixed(1)}% ≥ 80%)
                      </span>
                    ) : null;
                  })()}
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="pmi"
                    type="number"
                    value={formData.pmi}
                    onChange={(e) => handleInputChange("pmi", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hoaDues" className="text-slate-700 font-medium">Monthly HOA Dues</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="hoaDues"
                    type="number"
                    value={formData.hoaDues}
                    onChange={(e) => handleInputChange("hoaDues", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          <Card className="shadow-lg border-slate-200">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <Home className="w-5 h-5 mr-2" />
                Monthly Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ${results.totalMonthlyPayment.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
              </div>
              <p className="text-slate-600">Total Monthly Payment</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Principal & Interest:</span>
                <span className="font-semibold text-slate-900">
                  ${results.principalAndInterest.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Property Tax:</span>
                <span className="font-semibold text-slate-900">
                  ${(parseFloat(formData.propertyTax) / 12).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Home Insurance:</span>
                <span className="font-semibold text-slate-900">
                  ${(parseFloat(formData.homeInsurance) / 12).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">PMI:</span>
                <span className={`font-semibold ${parseFloat(formData.pmi) === 0 ? 'text-green-600' : 'text-slate-900'}`}>
                  ${parseFloat(formData.pmi).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                  {parseFloat(formData.pmi) === 0 && (
                    <span className="ml-2 text-xs text-green-600 font-normal">
                      (LTV &lt; 80%)
                    </span>
                  )}
                </span>
              </div>
              
              {parseFloat(formData.hoaDues) > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">HOA Dues:</span>
                  <span className="font-semibold text-slate-900">
                    ${parseFloat(formData.hoaDues).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Loan Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Total Interest:</span>
                <span className="font-semibold text-slate-900">
                  ${results.totalInterestPaid.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Total Loan Cost:</span>
                <span className="font-semibold text-slate-900">
                  ${results.totalLoanCost.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={() => router.push('/contact')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
            Get My Personalized Rate Quote
          </Button>
        </div>
      </div>
    </div>
  );
}



