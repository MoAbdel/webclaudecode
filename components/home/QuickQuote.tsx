'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Calculator, ArrowRight, Shield } from "lucide-react";
import { RateQuote } from "@/lib/entities";

export default function QuickQuote() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    loan_amount: "",
    credit_score: "",
    loan_type: "conventional"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await RateQuote.create({
        ...formData,
        loan_amount: parseFloat(formData.loan_amount),
        property_value: parseFloat(formData.loan_amount) * 1.25, // Estimate
        status: "new"
      });
      setShowSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        loan_amount: "",
        credit_score: "",
        loan_type: "conventional"
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (showSuccess) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for your interest! We&apos;ll review your information and contact you within 1 business hour with your personalized rate quote.
              </p>
              <Button 
                onClick={() => setShowSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Submit Another Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Your Personalized Rate Quote
          </h2>
          <p className="text-xl text-slate-600">
            Takes 60 seconds • No impact to your credit • 100% Free
          </p>
        </div>

        <Card className="shadow-xl border-slate-200">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-2xl">
              <Calculator className="w-6 h-6 mr-3" />
              Quick Rate Calculator
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-slate-700 font-medium">Full Name</Label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => handleInputChange("full_name", e.target.value)}
                    placeholder="Enter your full name"
                    className="border-slate-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    className="border-slate-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(949) 555-0123"
                    className="border-slate-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loan_amount" className="text-slate-700 font-medium">Loan Amount</Label>
                  <Input
                    id="loan_amount"
                    type="number"
                    value={formData.loan_amount}
                    onChange={(e) => handleInputChange("loan_amount", e.target.value)}
                    placeholder="500000"
                    className="border-slate-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="credit_score" className="text-slate-700 font-medium">Credit Score Range</Label>
                  <Select value={formData.credit_score} onValueChange={(value) => handleInputChange("credit_score", value)}>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select your credit score range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent (740+)</SelectItem>
                      <SelectItem value="good">Good (680-739)</SelectItem>
                      <SelectItem value="fair">Fair (620-679)</SelectItem>
                      <SelectItem value="needs_improvement">Needs Improvement (Below 620)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loan_type" className="text-slate-700 font-medium">Loan Type</Label>
                  <Select value={formData.loan_type} onValueChange={(value) => handleInputChange("loan_type", value)}>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conventional">Conventional</SelectItem>
                      <SelectItem value="fha">FHA</SelectItem>
                      <SelectItem value="va">VA</SelectItem>
                      <SelectItem value="jumbo">Jumbo</SelectItem>
                      <SelectItem value="refinance">Refinance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    Get My Rate Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Your information is secure and will never be shared with third parties.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}