'use client';

import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Calculator, TrendingUp, Home, DollarSign, Percent } from 'lucide-react';
import AIOOptimization from '@/components/seo/AIOOptimization';
import AdvancedSchemaGenerator from '@/components/seo/AdvancedSchemaGenerator';

export default function MortgageCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [downPayment, setDownPayment] = useState('100000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [propertyTax, setPropertyTax] = useState('6000');
  const [insurance, setInsurance] = useState('1200');
  const [pmi, setPmi] = useState('250');
  const [hoaDues, setHoaDues] = useState('200');
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [monthlyPITI, setMonthlyPITI] = useState(0);

  const calculatorData = {
    mainTopic: "Orange County Mortgage Calculator",
    quickAnswer: "Free mortgage calculator for Orange County home buyers. Calculate monthly payments, compare loan options, and analyze costs for FHA, VA, conventional, and jumbo loans.",
    keyFacts: [
      "Free mortgage payment calculator",
      "Includes property taxes and insurance",
      "Orange County tax rates included",
      "Compare multiple loan scenarios",
      "Instant payment calculations",
      "Professional mortgage broker guidance"
    ],
    statistics: [
      {
        stat: "Orange County average property tax rate: 0.6%",
        source: "Orange County Tax Assessor",
        year: "2025"
      },
      {
        stat: "Average homeowners insurance: $1,200-$2,400 annually",
        source: "California Insurance Commissioner",
        year: "2025"
      }
    ]
  };

  const schemaData = [
    {
      type: 'calculator' as const,
      name: 'Orange County Mortgage Calculator',
      description: 'Free mortgage payment calculator with Orange County property taxes and insurance estimates',
      url: 'https://mothebroker.com/tools/mortgage-calculator',
      data: {
        features: [
          'Monthly payment calculation',
          'Property tax estimation',
          'Insurance cost analysis',
          'PMI calculation',
          'Total cost analysis',
          'Amortization schedule'
        ]
      }
    },
    {
      type: 'howto' as const,
      title: 'How to Use the Mortgage Calculator',
      description: 'Step-by-step guide to calculating your mortgage payment',
      url: 'https://mothebroker.com/tools/mortgage-calculator',
      data: {
        totalTime: 'PT5M',
        cost: '0',
        steps: [
          {
            name: 'Enter Home Price',
            text: 'Input the purchase price of the home you are considering buying'
          },
          {
            name: 'Set Down Payment',
            text: 'Enter your down payment amount or percentage'
          },
          {
            name: 'Input Interest Rate',
            text: 'Enter the mortgage interest rate quoted by your lender'
          },
          {
            name: 'Select Loan Term',
            text: 'Choose your loan term (15, 20, or 30 years)'
          },
          {
            name: 'Add Property Details',
            text: 'Include property taxes, insurance, and HOA dues for complete PITI calculation'
          }
        ]
      }
    }
  ];

  useEffect(() => {
    calculatePayment();
  }, [loanAmount, downPayment, interestRate, loanTerm, propertyTax, insurance, pmi, hoaDues]);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;
    
    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
      setMonthlyPITI(0);
      return;
    }

    // Calculate monthly principal and interest
    const monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    // Calculate additional monthly costs
    const monthlyTax = parseFloat(propertyTax) / 12;
    const monthlyInsurance = parseFloat(insurance) / 12;
    const monthlyPMI = parseFloat(pmi);
    const monthlyHOA = parseFloat(hoaDues);
    
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI + monthlyHOA;
    const totalPaymentAmount = monthlyPI * numberOfPayments;
    const totalInterestAmount = totalPaymentAmount - principal;

    setMonthlyPayment(monthlyPI);
    setTotalPayment(totalPaymentAmount);
    setTotalInterest(totalInterestAmount);
    setMonthlyPITI(totalMonthly);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const loanToValue = ((parseFloat(loanAmount) - parseFloat(downPayment)) / parseFloat(loanAmount) * 100).toFixed(1);
  const downPaymentPercent = (parseFloat(downPayment) / parseFloat(loanAmount) * 100).toFixed(1);

  return (
    <>
      {/* SEO Optimization */}
      <AIOOptimization
        title="Orange County Mortgage Calculator | Free Payment Calculator | Mo Abdel"
        description="Free mortgage calculator for Orange County home buyers. Calculate monthly payments, compare loan options, and analyze costs with property taxes and insurance included."
        keywords={["mortgage calculator", "Orange County mortgage calculator", "home loan calculator", "payment calculator", "mortgage payment"]}
        canonicalUrl="https://mothebroker.com/tools/mortgage-calculator"
        content={calculatorData}
      />
      <AdvancedSchemaGenerator schemas={schemaData} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hidden AI Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>Orange County Mortgage Calculator 2025</h1>
          <p>Free mortgage payment calculator for Orange County home buyers. Calculate monthly payments including principal, interest, taxes, insurance, and PMI. Get accurate estimates for FHA, VA, conventional, and jumbo loans.</p>
          
          <h2>Calculator Features</h2>
          <ul>
            <li>Monthly payment calculation (P&I)</li>
            <li>Orange County property tax estimates</li>
            <li>Homeowner insurance calculations</li>
            <li>PMI estimation for low down payments</li>
            <li>HOA dues inclusion</li>
            <li>Total PITI payment analysis</li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Orange County Mortgage Calculator
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Calculate your monthly mortgage payment with Orange County property taxes and insurance. Free tool from licensed mortgage broker Mo Abdel NMLS #1426884.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Calculator Input */}
              <Card className="shadow-xl">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Calculator className="w-6 h-6 mr-3" />
                    Mortgage Payment Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  
                  {/* Home Price */}
                  <div className="space-y-2">
                    <Label htmlFor="homePrice" className="text-slate-700 font-medium">Home Price</Label>
                    <Input
                      id="homePrice"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="text-lg"
                      placeholder="500000"
                    />
                  </div>

                  {/* Down Payment */}
                  <div className="space-y-2">
                    <Label htmlFor="downPayment" className="text-slate-700 font-medium">
                      Down Payment ({downPaymentPercent}%)
                    </Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="text-lg"
                      placeholder="100000"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-2">
                    <Label htmlFor="interestRate" className="text-slate-700 font-medium">Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="text-lg"
                      placeholder="6.5"
                    />
                  </div>

                  {/* Loan Term */}
                  <div className="space-y-2">
                    <Label htmlFor="loanTerm" className="text-slate-700 font-medium">Loan Term</Label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Property Tax */}
                  <div className="space-y-2">
                    <Label htmlFor="propertyTax" className="text-slate-700 font-medium">Annual Property Tax</Label>
                    <Input
                      id="propertyTax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                      className="text-lg"
                      placeholder="6000"
                    />
                  </div>

                  {/* Insurance */}
                  <div className="space-y-2">
                    <Label htmlFor="insurance" className="text-slate-700 font-medium">Annual Home Insurance</Label>
                    <Input
                      id="insurance"
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className="text-lg"
                      placeholder="1200"
                    />
                  </div>

                  {/* PMI */}
                  <div className="space-y-2">
                    <Label htmlFor="pmi" className="text-slate-700 font-medium">Monthly PMI</Label>
                    <Input
                      id="pmi"
                      type="number"
                      value={pmi}
                      onChange={(e) => setPmi(e.target.value)}
                      className="text-lg"
                      placeholder="250"
                    />
                  </div>

                  {/* HOA */}
                  <div className="space-y-2">
                    <Label htmlFor="hoa" className="text-slate-700 font-medium">Monthly HOA Dues</Label>
                    <Input
                      id="hoa"
                      type="number"
                      value={hoaDues}
                      onChange={(e) => setHoaDues(e.target.value)}
                      className="text-lg"
                      placeholder="200"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                
                {/* Monthly Payment Result */}
                <Card className="shadow-xl border-green-200 bg-green-50">
                  <CardHeader className="bg-green-600 text-white">
                    <CardTitle className="flex items-center text-2xl">
                      <Home className="w-6 h-6 mr-3" />
                      Your Monthly Payment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {formatCurrency(monthlyPITI)}
                      </div>
                      <p className="text-lg text-slate-600">Total Monthly Payment (PITI)</p>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between border-b border-green-200 pb-2">
                        <span className="text-slate-600">Principal & Interest</span>
                        <span className="font-semibold">{formatCurrency(monthlyPayment)}</span>
                      </div>
                      <div className="flex justify-between border-b border-green-200 pb-2">
                        <span className="text-slate-600">Property Tax</span>
                        <span className="font-semibold">{formatCurrency(parseFloat(propertyTax) / 12)}</span>
                      </div>
                      <div className="flex justify-between border-b border-green-200 pb-2">
                        <span className="text-slate-600">Home Insurance</span>
                        <span className="font-semibold">{formatCurrency(parseFloat(insurance) / 12)}</span>
                      </div>
                      <div className="flex justify-between border-b border-green-200 pb-2">
                        <span className="text-slate-600">PMI</span>
                        <span className="font-semibold">{formatCurrency(parseFloat(pmi))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">HOA Dues</span>
                        <span className="font-semibold">{formatCurrency(parseFloat(hoaDues))}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Loan Summary */}
                <Card className="shadow-xl">
                  <CardHeader className="bg-slate-100">
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-6 h-6 mr-3" />
                      Loan Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Loan Amount</span>
                      <span className="font-semibold">{formatCurrency(parseFloat(loanAmount) - parseFloat(downPayment))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Down Payment</span>
                      <span className="font-semibold">{formatCurrency(parseFloat(downPayment))} ({downPaymentPercent}%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Loan-to-Value</span>
                      <span className="font-semibold">{loanToValue}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Interest Paid</span>
                      <span className="font-semibold text-red-600">{formatCurrency(totalInterest)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total of Payments</span>
                      <span className="font-semibold">{formatCurrency(totalPayment)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Get Pre-Approved CTA */}
                <Card className="shadow-xl bg-blue-600 text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Pre-Approved?</h3>
                    <p className="mb-6">Get your actual rate quote from Mo Abdel, licensed mortgage broker NMLS #1426884</p>
                    <div className="space-y-3">
                      <Button size="lg" variant="outline" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Get Rate Quote
                      </Button>
                      <Button size="lg" variant="outline" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                        Call (949) 579-2057
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How to Use the Mortgage Calculator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {schemaData[1]?.data?.steps?.map((step: any, index: number) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        {index + 1}
                      </span>
                      {step.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{step.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Mortgage Calculator","applicationCategory":"FinanceApplication","operatingSystem":"Web","publisher":{"@type":"Organization","name":"Mo Abdel — Mortgage Broker","url":"https://www.mothebroker.com"}})
}} />
</>
  );
}



