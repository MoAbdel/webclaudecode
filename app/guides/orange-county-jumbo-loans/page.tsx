import React from 'react';
import Link from 'next/link';
import { Crown, TrendingUp, Home, MapPin, Calculator, Phone, DollarSign, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OrangeCountyJumboLoansGuide() {
  const luxuryMarkets = [
    {
      area: "Newport Coast",
      medianPrice: "$3,200,000",
      priceRange: "$2.5M - $20M+",
      features: ["Ocean views", "Resort lifestyle", "Crystal Cove proximity"],
      jumboRequired: "95%",
      avgLoanAmount: "$2,400,000"
    },
    {
      area: "Newport Beach (Balboa Island)",
      medianPrice: "$2,800,000", 
      priceRange: "$2M - $15M",
      features: ["Waterfront living", "Private docks", "Island community"],
      jumboRequired: "90%",
      avgLoanAmount: "$2,100,000"
    },
    {
      area: "Laguna Beach", 
      medianPrice: "$2,500,000",
      priceRange: "$1.8M - $12M",
      features: ["Artist community", "Coastal views", "Unique architecture"],
      jumboRequired: "85%",
      avgLoanAmount: "$1,900,000"
    },
    {
      area: "Corona del Mar",
      medianPrice: "$2,200,000",
      priceRange: "$1.5M - $8M", 
      features: ["Beach proximity", "Top schools", "Upscale shopping"],
      jumboRequired: "80%",
      avgLoanAmount: "$1,650,000"
    },
    {
      area: "Turtle Rock (Irvine)",
      medianPrice: "$1,800,000",
      priceRange: "$1.3M - $5M",
      features: ["Gated community", "Golf course", "Luxury amenities"],
      jumboRequired: "70%",
      avgLoanAmount: "$1,350,000"
    },
    {
      area: "Coto de Caza",
      medianPrice: "$1,600,000",
      priceRange: "$1.2M - $4M",
      features: ["Private golf", "Gated security", "Equestrian facilities"],
      jumboRequired: "65%", 
      avgLoanAmount: "$1,200,000"
    }
  ];

  const jumboLoanFeatures = [
    {
      feature: "Higher Loan Limits",
      description: "Loans above $1,089,300 for Orange County's luxury market",
      benefit: "Access to premium properties"
    },
    {
      feature: "Competitive Rates",
      description: "Often comparable to conforming loan rates with strong credit",
      benefit: "Save thousands annually"
    },
    {
      feature: "Flexible Down Payments",
      description: "Options from 10-20% down depending on loan program", 
      benefit: "Preserve liquidity for investments"
    },
    {
      feature: "No PMI Required",
      description: "Jumbo loans don't require private mortgage insurance",
      benefit: "Lower monthly payments"
    },
    {
      feature: "Portfolio Lending",
      description: "Banks keep loans in portfolio for flexible underwriting",
      benefit: "Faster approvals, custom terms"
    },
    {
      feature: "Asset-Based Qualification",
      description: "Qualify based on assets rather than traditional income",
      benefit: "Perfect for high net worth clients"
    }
  ];

  const jumboLoanTypes = [
    {
      type: "Conventional Jumbo",
      downPayment: "10-20%",
      rates: "6.75-7.25%",
      maxLTV: "90%",
      creditScore: "740+",
      features: ["Full documentation", "Standard underwriting", "Best rates"],
      bestFor: "Traditional W-2 borrowers with excellent credit"
    },
    {
      type: "Bank Statement Jumbo",
      downPayment: "15-25%", 
      rates: "7.25-8.0%",
      maxLTV: "80%",
      creditScore: "700+",
      features: ["Bank statements for income", "Self-employed friendly", "Flexible documentation"],
      bestFor: "Business owners and self-employed professionals"
    },
    {
      type: "Asset Depletion Jumbo",
      downPayment: "20-30%",
      rates: "7.0-7.75%", 
      maxLTV: "75%",
      creditScore: "720+",
      features: ["Asset-based qualification", "No income verification", "High net worth focus"],
      bestFor: "Retirees and high-asset individuals"
    },
    {
      type: "Interest-Only Jumbo",
      downPayment: "20-30%",
      rates: "7.5-8.25%",
      maxLTV: "70%", 
      creditScore: "760+",
      features: ["Interest-only payments 5-10 years", "Lower initial payments", "Premium product"],
      bestFor: "Sophisticated borrowers with cash flow preferences"
    }
  ];

  const qualificationFactors = [
    {
      factor: "Credit Score",
      minimum: "700+",
      ideal: "740+",
      impact: "Major rate factor",
      tips: ["Pay down credit cards", "Don't close old accounts", "Monitor credit report"]
    },
    {
      factor: "Debt-to-Income",
      minimum: "Under 43%", 
      ideal: "Under 36%",
      impact: "Approval likelihood",
      tips: ["Pay down existing debt", "Consider asset depletion", "Increase income documentation"]
    },
    {
      factor: "Assets & Reserves",
      minimum: "2-6 months payments",
      ideal: "12+ months", 
      impact: "Risk assessment",
      tips: ["Liquid assets preferred", "Document all accounts", "Consider gift funds"]
    },
    {
      factor: "Down Payment",
      minimum: "10%",
      ideal: "20%+",
      impact: "Rate and terms", 
      tips: ["Larger down = better rates", "Source of funds documentation", "Gift letter requirements"]
    }
  ];

  const privateBanking = [
    {
      bank: "Chase Private Client",
      minAssets: "$250,000",
      jumboRates: "Competitive + 0.125%",
      benefits: ["Dedicated banker", "Fee waivers", "Exclusive rates"],
      bestFor: "Relationship banking clients"
    },
    {
      bank: "Bank of America Private Bank", 
      minAssets: "$1,000,000",
      jumboRates: "Prime rates",
      benefits: ["Wealth management", "Complex transactions", "Global services"],
      bestFor: "Ultra-high net worth clients"
    },
    {
      bank: "Wells Fargo Private Bank",
      minAssets: "$1,000,000",
      jumboRates: "Preferred pricing",
      benefits: ["Trust services", "Estate planning", "Investment management"], 
      bestFor: "Comprehensive wealth services"
    },
    {
      bank: "Local Credit Unions",
      minAssets: "Varies",
      jumboRates: "Often best rates",
      benefits: ["Local decision making", "Competitive rates", "Personal service"],
      bestFor: "Rate-focused borrowers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Crown className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Orange County Jumbo Loan Guide 2025
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Complete guide to jumbo mortgages for luxury Orange County properties. Access Newport Beach, 
              Laguna Beach, and other premium markets with competitive jumbo loan financing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 579-2057
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="border border-slate-300 px-8 py-4 text-lg font-semibold">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Jumbo Loan Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2025 Jumbo Loan Limits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              2025 Orange County Jumbo Loan Limits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding when you need a jumbo loan in Orange County's high-cost housing market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Conforming Loan Limit</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$1,089,300</div>
                <p className="text-slate-600 mb-4">2025 limit for Orange County</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    Loans up to this amount qualify for conforming rates and can be sold to Fannie Mae/Freddie Mac
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Jumbo Loan Territory</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$1,089,301+</div>
                <p className="text-slate-600 mb-4">Above conforming limits</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700">
                    Loans above this amount require jumbo loan programs with specialized underwriting
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Orange County Reality Check</h4>
            <p className="text-yellow-700">
              With median home prices around $1.2M in Orange County, approximately <strong>60-70%</strong> of home purchases 
              require jumbo financing. This is especially true in luxury markets like Newport Beach, Laguna Beach, and Irvine.
            </p>
          </div>
        </div>
      </section>

      {/* Luxury Markets Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Premium Orange County Markets Requiring Jumbo Loans
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Exclusive communities where jumbo financing is essential for homeownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryMarkets.map((market, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{market.area}</h3>
                  <Crown className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Median Price:</span>
                    <div className="font-bold text-green-600">{market.medianPrice}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Price Range:</span>
                    <div className="font-medium text-slate-800">{market.priceRange}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Avg Loan Amount:</span>
                    <div className="font-medium text-blue-600">{market.avgLoanAmount}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-slate-600 font-medium">Key Features:</span>
                  <ul className="mt-2 space-y-1">
                    {market.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Jumbo Required:</span>
                    <span className="font-bold text-red-600">{market.jumboRequired}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jumbo Loan Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advantages of Jumbo Loans for Luxury Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Why jumbo loans are designed for high-value Orange County real estate transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jumboLoanFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">{feature.feature}</h3>
                </div>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-green-800">Benefit: </span>
                  <span className="text-sm font-bold text-green-600">{feature.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jumbo Loan Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Types of Jumbo Loans Available
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Different jumbo loan programs for various borrower profiles and financial situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jumboLoanTypes.map((loan, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{loan.type}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm text-slate-600">Down Payment</div>
                    <div className="font-semibold text-green-600">{loan.downPayment}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm text-slate-600">Interest Rates</div>
                    <div className="font-semibold text-blue-600">{loan.rates}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm text-slate-600">Max LTV</div>
                    <div className="font-semibold text-slate-800">{loan.maxLTV}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm text-slate-600">Credit Score</div>
                    <div className="font-semibold text-purple-600">{loan.creditScore}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-blue-800">Best For: </span>
                  <span className="text-sm text-blue-700">{loan.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Jumbo Loan Qualification Requirements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What lenders look for when approving jumbo loans for Orange County luxury properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualificationFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{factor.factor}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Minimum:</span>
                    <div className="font-semibold text-red-600">{factor.minimum}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Ideal:</span>
                    <div className="font-semibold text-green-600">{factor.ideal}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-slate-600">Impact on Approval:</span>
                  <div className="font-medium text-slate-800">{factor.impact}</div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Improvement Tips</h4>
                  <ul className="space-y-1">
                    {factor.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-slate-600">• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Banking Relationships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Private Banking & Jumbo Loan Relationships
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leverage private banking relationships for competitive jumbo loan terms and exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privateBanking.map((bank, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{bank.bank}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Min Assets:</span>
                    <div className="font-semibold text-green-600">{bank.minAssets}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Jumbo Rates:</span>
                    <div className="font-semibold text-blue-600">{bank.jumboRates}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {bank.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-slate-600">• {benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-blue-800">Best For: </span>
                  <span className="text-sm text-blue-700">{bank.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Finance Your Orange County Luxury Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get competitive jumbo loan rates and access exclusive Orange County properties. 
            Mo Abdel specializes in jumbo financing for luxury home buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(949) 579-2057">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                Get Jumbo Loan Quote
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-100">
              <strong>Mo Abdel</strong> • NMLS #1426884 • Specializing in Orange County luxury home financing since 2015
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

