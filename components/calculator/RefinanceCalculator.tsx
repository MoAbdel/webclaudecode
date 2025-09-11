'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Calculator, RefreshCw, DollarSign, Percent, TrendingDown, Clock, CheckCircle } from "lucide-react";

export default function RefinanceCalculator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    currentLoanBalance: "500000",
    currentInterestRate: "8.25",
    currentMonthlyPayment: "3760",
    remainingYears: "27",
    newInterestRate: "7.00",
    newLoanTerm: "30",
    cashOutAmount: "0"
  });

  const [results, setResults] = useState({
    newMonthlyPayment: 0,
    monthlySavings: 0,
    totalInterestCurrentLoan: 0,
    totalInterestNewLoan: 0,
    totalInterestSavings: 0,
    newLoanAmount: 0
  });

  const calculateRefinance = () => {
    const currentBalance = parseFloat(formData.currentLoanBalance);
    const currentRate = parseFloat(formData.currentInterestRate) / 100 / 12;
    const currentPayment = parseFloat(formData.currentMonthlyPayment);
    const remainingPayments = parseFloat(formData.remainingYears) * 12;
    
    const newRate = parseFloat(formData.newInterestRate) / 100 / 12;
    const newTermMonths = parseInt(formData.newLoanTerm) * 12;
    const cashOut = parseFloat(formData.cashOutAmount);
    
    const newLoanAmount = currentBalance + cashOut;
    
    // Calculate new monthly payment
    const newPayment = newLoanAmount * (newRate * Math.pow(1 + newRate, newTermMonths)) / 
                      (Math.pow(1 + newRate, newTermMonths) - 1);
    
    // Calculate total interest for current loan (remaining payments)
    const totalCurrentInterest = (currentPayment * remainingPayments) - currentBalance;
    
    // Calculate total interest for new loan
    const totalNewInterest = (newPayment * newTermMonths) - newLoanAmount;
    
    // Calculate savings
    const monthlySavings = currentPayment - newPayment;
    const totalSavings = totalCurrentInterest - totalNewInterest;

    setResults({
      newMonthlyPayment: newPayment,
      monthlySavings: monthlySavings,
      totalInterestCurrentLoan: totalCurrentInterest,
      totalInterestNewLoan: totalNewInterest,
      totalInterestSavings: totalSavings,
      newLoanAmount: newLoanAmount
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    calculateRefinance();
  }, [formData]);

  const isGoodDeal = results.monthlySavings > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Refinance Calculator
        </h2>
        <p className="text-xl text-slate-600">
          See if refinancing your mortgage could save you money
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <Card className="lg:col-span-2 shadow-lg border-slate-200">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-2xl">
              <Calculator className="w-6 h-6 mr-3" />
              Current & New Loan Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            {/* Current Loan Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Current Loan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currentLoanBalance" className="text-slate-700 font-medium">Current Loan Balance</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="currentLoanBalance"
                      type="number"
                      value={formData.currentLoanBalance}
                      onChange={(e) => handleInputChange("currentLoanBalance", e.target.value)}
                      className="pl-9 border-slate-300"
                      placeholder="500000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentInterestRate" className="text-slate-700 font-medium">Current Interest Rate</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="currentInterestRate"
                      type="number"
                      step="0.125"
                      value={formData.currentInterestRate}
                      onChange={(e) => handleInputChange("currentInterestRate", e.target.value)}
                      className="pl-9 border-slate-300"
                      placeholder="8.25"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentMonthlyPayment" className="text-slate-700 font-medium">Current Monthly Payment</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="currentMonthlyPayment"
                      type="number"
                      value={formData.currentMonthlyPayment}
                      onChange={(e) => handleInputChange("currentMonthlyPayment", e.target.value)}
                      className="pl-9 border-slate-300"
                      placeholder="3760"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remainingYears" className="text-slate-700 font-medium">Years Remaining</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="remainingYears"
                      type="number"
                      value={formData.remainingYears}
                      onChange={(e) => handleInputChange("remainingYears", e.target.value)}
                      className="pl-9 border-slate-300"
                      placeholder="27"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* New Loan Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">New Loan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="newInterestRate" className="text-slate-700 font-medium">New Interest Rate</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="newInterestRate"
                      type="number"
                      step="0.125"
                      value={formData.newInterestRate}
                      onChange={(e) => handleInputChange("newInterestRate", e.target.value)}
                      className="pl-9 border-slate-300"
                      placeholder="7.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newLoanTerm" className="text-slate-700 font-medium">New Loan Term</Label>
                  <Select value={formData.newLoanTerm} onValueChange={(value) => handleInputChange("newLoanTerm", value)}>
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
                  <Label htmlFor="cashOutAmount" className="text-slate-700 font-medium">Cash-Out Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="cashOutAmount"
                      type="number"
                      value={formData.cashOutAmount}
                      onChange={(e) => handleInputChange("cashOutAmount", e.target.value)}
                      className="pl-9 border-slate-300"
                      placeholder="0"
                    />
                  </div>
                  <p className="text-sm text-slate-500">Optional: Additional cash you want to take out</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {/* Main Result Card */}
          <Card className={`shadow-lg border-slate-200 ${isGoodDeal ? 'ring-2 ring-green-500' : ''}`}>
            <CardHeader className={`${isGoodDeal ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-slate-600 to-slate-700'} text-white rounded-t-lg`}>
              <CardTitle className="flex items-center text-xl">
                <RefreshCw className="w-5 h-5 mr-2" />
                Refinance Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {isGoodDeal && (
                <div className="flex items-center mb-4 text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Good refinance opportunity!</span>
                </div>
              )}
              
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  ${results.newMonthlyPayment.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </div>
                <p className="text-slate-600">New Monthly Payment</p>
              </div>
            </CardContent>
          </Card>

          {/* Savings Breakdown */}
          <Card className="shadow-lg border-slate-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Monthly Savings:</span>
                <span className={`font-semibold text-lg ${results.monthlySavings >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {results.monthlySavings >= 0 ? '+' : ''}${Math.abs(results.monthlySavings).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">New Loan Amount:</span>
                <span className="font-semibold text-slate-900">
                  ${results.newLoanAmount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Interest Comparison */}
          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingDown className="w-5 h-5 mr-2 text-blue-600" />
                Interest Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Current Total Interest:</span>
                <span className="font-semibold text-slate-900">
                  ${results.totalInterestCurrentLoan.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">New Total Interest:</span>
                <span className="font-semibold text-slate-900">
                  ${results.totalInterestNewLoan.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center border-t pt-2">
                <span className="text-slate-600 font-medium">Interest Savings:</span>
                <span className={`font-bold text-lg ${results.totalInterestSavings >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {results.totalInterestSavings >= 0 ? '+' : ''}${Math.abs(results.totalInterestSavings).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={() => router.push('/contact')}
            className={`w-full ${isGoodDeal ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} text-white py-3 text-lg font-semibold`}>
            Get My Refinance Quote
          </Button>
        </div>
      </div>
    </div>
  );
}



