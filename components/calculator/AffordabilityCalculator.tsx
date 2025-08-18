'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Calculator, Home, DollarSign, Percent, Users, TrendingUp, CreditCard } from "lucide-react";

export default function AffordabilityCalculator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    grossIncome: "120000",
    monthlyDebts: "800",
    downPayment: "150000",
    interestRate: "7.25",
    loanTerm: "30",
    propertyTax: "1.25",
    homeInsurance: "0.32",
    pmi: "0.50",
    hoaDues: "0"
  });

  const [results, setResults] = useState({
    maxHomePrice: 0,
    maxLoanAmount: 0,
    monthlyPayment: 0,
    debtToIncomeRatio: 0,
    frontEndRatio: 0,
    backEndRatio: 0
  });

  const calculateAffordability = () => {
    const monthlyIncome = parseFloat(formData.grossIncome) / 12;
    const monthlyDebts = parseFloat(formData.monthlyDebts);
    const downPayment = parseFloat(formData.downPayment);
    const annualRate = parseFloat(formData.interestRate) / 100;
    const monthlyRate = annualRate / 12;
    const numberOfPayments = parseInt(formData.loanTerm) * 12;
    
    // Conservative DTI ratios (28% front-end, 36% back-end)
    const maxHousingPayment = monthlyIncome * 0.28;
    const maxTotalPayments = monthlyIncome * 0.36;
    const maxMortgagePayment = maxTotalPayments - monthlyDebts;
    
    // Use the lower of the two limits
    const affordablePayment = Math.min(maxHousingPayment, maxMortgagePayment);
    
    // Calculate property tax and insurance rates
    const propertyTaxRate = parseFloat(formData.propertyTax) / 100 / 12;
    const insuranceRate = parseFloat(formData.homeInsurance) / 100 / 12;
    const pmiRate = parseFloat(formData.pmi) / 100 / 12;
    const monthlyHOA = parseFloat(formData.hoaDues);
    
    // Calculate maximum loan amount using payment capacity
    // Formula: P = PMT * [(1 - (1 + r)^-n) / r] where PMT is payment, r is rate, n is payments
    const availableForPrincipalAndInterest = affordablePayment - monthlyHOA;
    
    // Iterative approach to find maximum home price
    let maxPrice = 0;
    let increment = 10000;
    let testPrice = increment;
    
    while (testPrice <= 2000000) { // Cap at $2M
      const loanAmount = testPrice - downPayment;
      if (loanAmount <= 0) {
        testPrice += increment;
        continue;
      }
      
      const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                       (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const monthlyTaxes = testPrice * propertyTaxRate;
      const monthlyInsurance = testPrice * insuranceRate;
      const monthlyPMI = loanAmount * pmiRate;
      
      const totalPayment = monthlyPI + monthlyTaxes + monthlyInsurance + monthlyPMI + monthlyHOA;
      
      if (totalPayment <= affordablePayment) {
        maxPrice = testPrice;
      } else {
        break;
      }
      
      testPrice += increment;
    }

    const maxLoan = maxPrice - downPayment;
    const finalMonthlyPayment = affordablePayment;
    const frontEnd = (finalMonthlyPayment / monthlyIncome) * 100;
    const backEnd = ((finalMonthlyPayment + monthlyDebts) / monthlyIncome) * 100;

    setResults({
      maxHomePrice: maxPrice,
      maxLoanAmount: maxLoan > 0 ? maxLoan : 0,
      monthlyPayment: finalMonthlyPayment,
      debtToIncomeRatio: backEnd,
      frontEndRatio: frontEnd,
      backEndRatio: backEnd
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    calculateAffordability();
  }, [formData]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Home Affordability Calculator
        </h2>
        <p className="text-xl text-slate-600">
          Discover how much home you can afford based on your income and expenses
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <Card className="lg:col-span-2 shadow-lg border-slate-200">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-2xl">
              <Calculator className="w-6 h-6 mr-3" />
              Financial Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="grossIncome" className="text-slate-700 font-medium">Annual Gross Income</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="grossIncome"
                    type="number"
                    value={formData.grossIncome}
                    onChange={(e) => handleInputChange("grossIncome", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="120000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyDebts" className="text-slate-700 font-medium">Monthly Debt Payments</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="monthlyDebts"
                    type="number"
                    value={formData.monthlyDebts}
                    onChange={(e) => handleInputChange("monthlyDebts", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="800"
                  />
                </div>
                <p className="text-sm text-slate-500">Car loans, credit cards, student loans, etc.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="downPayment" className="text-slate-700 font-medium">Available Down Payment</Label>
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
                <Label htmlFor="propertyTax" className="text-slate-700 font-medium">Property Tax Rate (%)</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="propertyTax"
                    type="number"
                    step="0.01"
                    value={formData.propertyTax}
                    onChange={(e) => handleInputChange("propertyTax", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="1.25"
                  />
                </div>
                <p className="text-sm text-slate-500">Annual rate as % of home value</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="homeInsurance" className="text-slate-700 font-medium">Home Insurance Rate (%)</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="homeInsurance"
                    type="number"
                    step="0.01"
                    value={formData.homeInsurance}
                    onChange={(e) => handleInputChange("homeInsurance", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="0.32"
                  />
                </div>
                <p className="text-sm text-slate-500">Annual rate as % of home value</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pmi" className="text-slate-700 font-medium">PMI Rate (%)</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="pmi"
                    type="number"
                    step="0.01"
                    value={formData.pmi}
                    onChange={(e) => handleInputChange("pmi", e.target.value)}
                    className="pl-9 border-slate-300"
                    placeholder="0.50"
                  />
                </div>
                <p className="text-sm text-slate-500">Annual rate as % of loan amount</p>
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
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <Home className="w-5 h-5 mr-2" />
                You Can Afford
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ${results.maxHomePrice.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
              </div>
              <p className="text-slate-600">Maximum Home Price</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Max Loan Amount:</span>
                <span className="font-semibold text-slate-900">
                  ${results.maxLoanAmount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Max Monthly Payment:</span>
                <span className="font-semibold text-slate-900">
                  ${results.monthlyPayment.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Monthly Income:</span>
                <span className="font-semibold text-slate-900">
                  ${(parseFloat(formData.grossIncome) / 12).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Debt-to-Income Ratios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Front-End Ratio:</span>
                  <span className={`font-semibold ${results.frontEndRatio <= 28 ? 'text-green-600' : results.frontEndRatio <= 31 ? 'text-yellow-600' : 'text-red-500'}`}>
                    {results.frontEndRatio.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${results.frontEndRatio <= 28 ? 'bg-green-500' : results.frontEndRatio <= 31 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(results.frontEndRatio / 40 * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500">Housing costs only (ideal: ≤28%)</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Back-End Ratio:</span>
                  <span className={`font-semibold ${results.backEndRatio <= 36 ? 'text-green-600' : results.backEndRatio <= 43 ? 'text-yellow-600' : 'text-red-500'}`}>
                    {results.backEndRatio.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${results.backEndRatio <= 36 ? 'bg-green-500' : results.backEndRatio <= 43 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(results.backEndRatio / 50 * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500">All debt payments (ideal: ≤36%)</p>
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={() => router.push('/contact')}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
            Get Pre-Approved Now
          </Button>
        </div>
      </div>
    </div>
  );
}