import React from 'react';
import Link from 'next/link';
import { Building, TrendingUp, DollarSign, MapPin, Calculator, Phone, Home, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OrangeCountyInvestmentPropertyGuide() {
  const investmentAreas = [
    {
      area: "Santa Ana",
      medianPrice: "$650,000",
      rentRange: "$2,800-$3,500",
      capRate: "5.2%",
      cashFlow: "Positive",
      pros: ["Affordable entry point", "Growing downtown", "Rental demand"],
      cons: ["Slower appreciation", "Market perception"]
    },
    {
      area: "Garden Grove", 
      medianPrice: "$750,000",
      rentRange: "$3,200-$4,000",
      capRate: "4.8%",
      cashFlow: "Break-even",
      pros: ["Stable rents", "Family neighborhoods", "Good schools"],
      cons: ["Limited appreciation", "Competition"]
    },
    {
      area: "Costa Mesa",
      medianPrice: "$950,000", 
      rentRange: "$4,000-$5,500",
      capRate: "4.5%",
      cashFlow: "Slight negative",
      pros: ["Strong appreciation", "Young professionals", "Nightlife/dining"],
      cons: ["High purchase prices", "Parking issues"]
    },
    {
      area: "Irvine",
      medianPrice: "$1,400,000",
      rentRange: "$5,500-$8,000", 
      capRate: "3.8%",
      cashFlow: "Negative",
      pros: ["Premium rents", "Top schools", "Stable market"],
      cons: ["High entry cost", "Lower cap rates"]
    },
    {
      area: "Newport Beach",
      medianPrice: "$2,200,000",
      rentRange: "$8,000-$15,000+",
      capRate: "3.2%", 
      cashFlow: "Negative",
      pros: ["Luxury market", "Prestige location", "High rents"],
      cons: ["Very high entry", "Seasonal vacancy"]
    }
  ];

  const loanPrograms = [
    {
      type: "DSCR Loans",
      description: "Debt Service Coverage Ratio loans based on rental income",
      benefits: ["No personal income verification", "Portfolio lending", "Up to 80% LTV"],
      rates: "7.5-9.5%",
      downPayment: "20-25%"
    },
    {
      type: "Portfolio Loans", 
      description: "Bank portfolio loans for multiple properties",
      benefits: ["Flexible terms", "Multiple properties", "Relationship banking"],
      rates: "7.0-8.5%",
      downPayment: "25-30%"
    },
    {
      type: "Fix & Flip Loans",
      description: "Short-term financing for renovation projects", 
      benefits: ["Fast funding", "Interest-only payments", "Based on ARV"],
      rates: "9.0-12.0%",
      downPayment: "20-30%"
    },
    {
      type: "Commercial Loans",
      description: "For 5+ unit properties or mixed-use buildings",
      benefits: ["Higher loan amounts", "Longer terms", "Professional rates"],
      rates: "6.5-8.0%",
      downPayment: "25-35%"
    }
  ];

  const analysisMetrics = [
    {
      metric: "Cap Rate",
      formula: "Annual Net Operating Income ÷ Purchase Price",
      goodRange: "4-6% in Orange County",
      description: "Measures property's return on investment"
    },
    {
      metric: "Cash Flow",
      formula: "Monthly Rent - (Mortgage + Taxes + Insurance + Maintenance)",
      goodRange: "Break-even to positive", 
      description: "Monthly cash generated after expenses"
    },
    {
      metric: "Cash-on-Cash Return",
      formula: "Annual Cash Flow ÷ Initial Cash Investment",
      goodRange: "6-10% annually",
      description: "Return on actual cash invested"
    },
    {
      metric: "Debt Service Coverage",
      formula: "Net Operating Income ÷ Annual Debt Service", 
      goodRange: "1.20x or higher",
      description: "Property's ability to cover loan payments"
    }
  ];

  const investmentStrategies = [
    {
      strategy: "Buy & Hold Rental",
      bestFor: "Long-term wealth building",
      timeframe: "5+ years",
      capitalNeeded: "$200,000-$400,000",
      expectedReturn: "3-6% cap rate + appreciation"
    },
    {
      strategy: "Fix & Flip",
      bestFor: "Active investors with construction knowledge", 
      timeframe: "6-12 months",
      capitalNeeded: "$150,000-$300,000",
      expectedReturn: "15-25% per project"
    },
    {
      strategy: "BRRRR Method",
      bestFor: "Scaling portfolio quickly",
      timeframe: "12-18 months per cycle", 
      capitalNeeded: "$100,000-$200,000",
      expectedReturn: "Infinite returns with refinancing"
    },
    {
      strategy: "Short-Term Rentals",
      bestFor: "High-demand tourist areas",
      timeframe: "Ongoing management",
      capitalNeeded: "$300,000-$600,000", 
      expectedReturn: "8-12% cap rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Orange County Investment Property Guide 2025
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Complete guide to buying investment properties in Orange County. Market analysis, 
              financing options, and strategies for building wealth through real estate.
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
                  Get Investment Loan Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Investment Market Overview
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Analyze the best areas for investment properties based on price, rental yields, and market trends.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Area</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Median Price</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Rent Range</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Cap Rate</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Cash Flow</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Investment Profile</th>
                </tr>
              </thead>
              <tbody>
                {investmentAreas.map((area, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{area.area}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-600">{area.medianPrice}</td>
                    <td className="px-6 py-4 text-slate-600">{area.rentRange}</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">{area.capRate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        area.cashFlow === 'Positive' ? 'bg-green-100 text-green-800' :
                        area.cashFlow === 'Break-even' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {area.cashFlow}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-xs text-green-600">
                          Pros: {area.pros.join(', ')}
                        </div>
                        <div className="text-xs text-red-600">
                          Cons: {area.cons.join(', ')}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Loan Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Investment Property Financing Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized loan programs designed for real estate investors and rental properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanPrograms.map((program, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.type}</h3>
                <p className="text-slate-600 mb-4">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm text-slate-600">Interest Rates</div>
                    <div className="font-semibold text-blue-600">{program.rates}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm text-slate-600">Down Payment</div>
                    <div className="font-semibold text-green-600">{program.downPayment}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-slate-600">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/loan-programs/dscr-investment-loans">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mr-4">
                Learn More About DSCR Loans
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="border border-slate-300 px-8 py-3">
                Get Investment Loan Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Analysis */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Investment Analysis Metrics
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Essential calculations every Orange County real estate investor should understand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">{metric.metric}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-600">Formula:</span>
                    <div className="bg-slate-50 p-2 rounded font-mono text-sm">{metric.formula}</div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-slate-600">Good Range:</span>
                    <div className="font-semibold text-green-600">{metric.goodRange}</div>
                  </div>
                  
                  <p className="text-slate-600">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular Investment Strategies for Orange County
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right investment approach based on your goals, timeline, and available capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{strategy.strategy}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Best For:</span>
                    <div className="font-medium text-slate-800">{strategy.bestFor}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Timeframe:</span>
                    <div className="font-medium text-slate-800">{strategy.timeframe}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Capital Needed:</span>
                    <div className="font-medium text-green-600">{strategy.capitalNeeded}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Expected Return:</span>
                    <div className="font-medium text-blue-600">{strategy.expectedReturn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orange County Specific Considerations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Investment Considerations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Important factors specific to investing in Orange County real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Market Dynamics</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• High barrier to entry due to prices</li>
                <li>• Strong rental demand from job growth</li>
                <li>• Limited land for new construction</li>
                <li>• Premium market with stable appreciation</li>
                <li>• Diverse economy reduces risk</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Regulatory Environment</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Rent control in some cities</li>
                <li>• Strict tenant protection laws</li>
                <li>• Environmental regulations</li>
                <li>• HOA restrictions on rentals</li>
                <li>• Short-term rental limitations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Financial Factors</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• High property taxes (0.7-1.2%)</li>
                <li>• Expensive property management</li>
                <li>• Higher maintenance costs</li>
                <li>• Premium insurance rates</li>
                <li>• Strong appreciation potential</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Building Your Investment Portfolio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert guidance on investment property financing in Orange County. 
            Mo Abdel specializes in DSCR loans and portfolio lending for real estate investors.
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
                Get Investment Loan Quote
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-100">
              <strong>Mo Abdel</strong> • NMLS #1426884 • Specializing in Orange County investment property financing since 2015
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



