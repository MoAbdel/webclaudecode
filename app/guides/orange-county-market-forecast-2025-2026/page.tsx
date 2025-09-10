import React from 'react';

export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/guides/orange-county-market-forecast-2025-2026" },
    openGraph: { title, description, url: BASE + "/guides/orange-county-market-forecast-2025-2026", siteName: "Mo Abdel — Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import Link from 'next/link';
import { TrendingUp, Calendar, BarChart3, MapPin, Calculator, Phone, AlertCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OrangeCountyMarketForecast() {
  const marketPredictions = [
    {
      metric: "Home Prices",
      current: "$1.2M median",
      q4_2025: "+3-5%",
      q2_2026: "+2-4%",
      full_2026: "+4-7% total",
      confidence: "High",
      factors: ["Limited inventory", "Job growth", "Population growth"]
    },
    {
      metric: "Interest Rates",
      current: "6.5-7.0%",
      q4_2025: "6.0-6.5%",
      q2_2026: "5.75-6.25%", 
      full_2026: "5.5-6.0%",
      confidence: "Medium",
      factors: ["Fed policy", "Inflation trends", "Economic growth"]
    },
    {
      metric: "Inventory Levels",
      current: "1.2 months",
      q4_2025: "1.5 months",
      q2_2026: "2.0 months",
      full_2026: "2.5 months",
      confidence: "Medium",
      factors: ["New construction", "Move-up buyers", "Economic conditions"]
    },
    {
      metric: "Days on Market",
      current: "25 days",
      q4_2025: "35 days",
      q2_2026: "45 days",
      full_2026: "50-60 days",
      confidence: "High", 
      factors: ["Rate normalization", "Increased inventory", "Buyer selectivity"]
    }
  ];

  const bestTimingScenarios = [
    {
      scenario: "First-Time Buyers",
      bestTiming: "Q1-Q2 2026",
      reasoning: "Rates stabilize, inventory increases, less competition",
      strategy: ["Get pre-approved now", "Save for larger down payment", "Monitor rate trends"],
      riskLevel: "Low"
    },
    {
      scenario: "Move-Up Buyers",
      bestTiming: "Q4 2025 - Q1 2026", 
      reasoning: "Sell high, buy before rates drop further",
      strategy: ["List home in Q3 2025", "Coordinate buy/sell timing", "Consider bridge financing"],
      riskLevel: "Medium"
    },
    {
      scenario: "Luxury Market ($2M+)",
      bestTiming: "Q2-Q3 2026",
      reasoning: "More inventory, motivated sellers, rate relief",
      strategy: ["Build relationships with luxury agents", "Prepare jumbo loan approval", "Monitor luxury inventory"],
      riskLevel: "Low"
    },
    {
      scenario: "Investment Properties",
      bestTiming: "Q1 2026",
      reasoning: "Rate environment improves cash flow projections",
      strategy: ["Analyze cash flow scenarios", "Build lender relationships", "Research emerging areas"],
      riskLevel: "Medium"
    }
  ];

  const areaSpecificForecasts = [
    {
      area: "Irvine",
      currentMedian: "$1,400,000",
      forecast2026: "$1,500,000-$1,550,000",
      appreciation: "5-8%",
      outlook: "Strong",
      drivers: ["Tech job growth", "New developments", "School quality"],
      risks: ["High prices", "Interest rate sensitivity"]
    },
    {
      area: "Newport Beach",
      currentMedian: "$2,200,000", 
      forecast2026: "$2,350,000-$2,450,000",
      appreciation: "6-10%",
      outlook: "Very Strong",
      drivers: ["Luxury demand", "Limited inventory", "Coastal premium"],
      risks: ["Economic downturn impact", "Luxury market volatility"]
    },
    {
      area: "Santa Ana",
      currentMedian: "$650,000",
      forecast2026: "$700,000-$750,000",
      appreciation: "8-12%",
      outlook: "Strong", 
      drivers: ["Affordability relative to OC", "Urban renewal", "Transit access"],
      risks: ["Gentrification pace", "Economic factors"]
    },
    {
      area: "Huntington Beach",
      currentMedian: "$1,300,000",
      forecast2026: "$1,400,000-$1,475,000",
      appreciation: "6-9%",
      outlook: "Strong",
      drivers: ["Beach lifestyle", "Steady demand", "Limited coastal land"],
      risks: ["Climate concerns", "HOA costs"]
    }
  ];

  const economicFactors = [
    {
      factor: "Employment Growth",
      current: "4.2% unemployment",
      trend: "Stable",
      impact: "Positive for housing demand",
      sectors: ["Technology", "Healthcare", "Professional services"]
    },
    {
      factor: "Population Growth", 
      current: "0.5% annually",
      trend: "Slow but steady",
      impact: "Supports housing demand",
      sectors: ["Young professionals", "Families", "Retirees"]
    },
    {
      factor: "Income Growth",
      current: "$85,000 median",
      trend: "2-3% annually", 
      impact: "Supports affordability",
      sectors: ["Tech salaries", "Professional wages", "Business income"]
    },
    {
      factor: "Construction Activity",
      current: "Limited new supply",
      trend: "Gradual increase",
      impact: "May moderate price growth",
      sectors: ["Condos/townhomes", "ADUs", "Senior housing"]
    }
  ];

  const rateScenarios = [
    {
      scenario: "Optimistic",
      rates2026: "5.5-6.0%",
      probability: "30%",
      triggers: ["Inflation controlled", "Economic stability", "Fed dovish"],
      impact: "Strong buyer activity, price acceleration"
    },
    {
      scenario: "Base Case",
      rates2026: "6.0-6.5%", 
      probability: "50%",
      triggers: ["Gradual Fed easing", "Moderate inflation", "Steady economy"],
      impact: "Balanced market, modest price growth"
    },
    {
      scenario: "Conservative",
      rates2026: "6.5-7.0%",
      probability: "20%",
      triggers: ["Persistent inflation", "Economic uncertainty", "Fed hawkish"],
      impact: "Slower sales, price moderation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Orange County Real Estate Market Forecast 2025-2026
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Expert analysis and predictions for Orange County's housing market. Interest rate forecasts, 
              pricing trends, and optimal timing strategies for buyers and sellers.
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
                  Get Market Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Market Predictions Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Market Predictions for 2025-2026
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive forecast of Orange County's real estate market based on current trends and economic indicators.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Metric</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Current</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Q4 2025</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Q2 2026</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Full 2026</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {marketPredictions.map((prediction, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{prediction.metric}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Key factors: {prediction.factors.join(', ')}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700">{prediction.current}</td>
                    <td className="px-6 py-4 font-medium text-blue-600">{prediction.q4_2025}</td>
                    <td className="px-6 py-4 font-medium text-green-600">{prediction.q2_2026}</td>
                    <td className="px-6 py-4 font-bold text-green-700">{prediction.full_2026}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        prediction.confidence === 'High' ? 'bg-green-100 text-green-800' :
                        prediction.confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {prediction.confidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interest Rate Scenarios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Interest Rate Scenarios for 2026
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three possible rate environments and their impact on Orange County real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rateScenarios.map((scenario, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{scenario.scenario}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    scenario.scenario === 'Optimistic' ? 'bg-green-100 text-green-800' :
                    scenario.scenario === 'Base Case' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {scenario.probability}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-slate-600">2026 Rate Range:</span>
                  <div className="text-2xl font-bold text-blue-600">{scenario.rates2026}</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Key Triggers</h4>
                  <ul className="space-y-1">
                    {scenario.triggers.map((trigger, idx) => (
                      <li key={idx} className="text-sm text-slate-600">• {trigger}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-3">
                  <span className="text-sm font-medium text-slate-800">Market Impact:</span>
                  <p className="text-sm text-slate-600 mt-1">{scenario.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Timing Strategies */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Optimal Timing Strategies by Buyer Type
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When to buy or sell based on your specific situation and market forecasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestTimingScenarios.map((timing, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{timing.scenario}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    timing.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                    timing.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {timing.riskLevel} Risk
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-600">{timing.bestTiming}</span>
                  </div>
                  <p className="text-slate-600">{timing.reasoning}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Recommended Strategy</h4>
                  <ul className="space-y-1">
                    {timing.strategy.map((step, idx) => (
                      <li key={idx} className="text-sm text-slate-600">• {step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area-Specific Forecasts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Area-Specific Market Forecasts
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Detailed predictions for key Orange County submarkets through 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areaSpecificForecasts.map((area, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{area.area}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    area.outlook === 'Very Strong' ? 'bg-green-100 text-green-800' :
                    area.outlook === 'Strong' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {area.outlook}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Current Median:</span>
                    <div className="font-semibold text-slate-800">{area.currentMedian}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">2026 Forecast:</span>
                    <div className="font-semibold text-green-600">{area.forecast2026}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-slate-600">Expected Appreciation:</span>
                  <div className="text-lg font-bold text-blue-600">{area.appreciation}</div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Growth Drivers</h4>
                    <ul className="space-y-1">
                      {area.drivers.map((driver, idx) => (
                        <li key={idx} className="text-sm text-green-600">+ {driver}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Risk Factors</h4>
                    <ul className="space-y-1">
                      {area.risks.map((risk, idx) => (
                        <li key={idx} className="text-sm text-red-600">- {risk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Factors */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Economic Factors Driving the Market
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Underlying economic trends that will shape Orange County real estate through 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {economicFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">{factor.factor}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Current Status:</span>
                    <div className="font-medium text-slate-800">{factor.current}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Trend:</span>
                    <div className="font-medium text-blue-600">{factor.trend}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-slate-600">Housing Impact:</span>
                  <p className="text-slate-700 font-medium">{factor.impact}</p>
                </div>
                
                <div>
                  <span className="text-sm text-slate-600">Key Sectors:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {factor.sectors.map((sector, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Risks & Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Market Risks & Opportunities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key factors that could accelerate or decelerate the Orange County market forecast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-900">Potential Risks</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-red-700">
                  <span className="font-semibold">Economic Recession:</span> Could reduce demand and slow price growth
                </li>
                <li className="text-red-700">
                  <span className="font-semibold">Interest Rate Shock:</span> Rates above 8% would severely impact affordability
                </li>
                <li className="text-red-700">
                  <span className="font-semibold">Tech Industry Downturn:</span> Major employer layoffs could affect high-end market
                </li>
                <li className="text-red-700">
                  <span className="font-semibold">Natural Disasters:</span> Fires, earthquakes could impact insurance and demand
                </li>
                <li className="text-red-700">
                  <span className="font-semibold">Regulatory Changes:</span> New taxes or restrictions could affect investment
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-900">Market Opportunities</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-green-700">
                  <span className="font-semibold">Rate Decline:</span> Faster Fed easing could accelerate demand
                </li>
                <li className="text-green-700">
                  <span className="font-semibold">New Construction:</span> Increased supply could moderate luxury market prices
                </li>
                <li className="text-green-700">
                  <span className="font-semibold">Tech Recovery:</span> AI and biotech growth could drive high-end demand
                </li>
                <li className="text-green-700">
                  <span className="font-semibold">Infrastructure Investment:</span> Transit improvements could boost certain areas
                </li>
                <li className="text-green-700">
                  <span className="font-semibold">Climate Migration:</span> People relocating from other states for weather
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Time Your Orange County Real Estate Move?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized market timing advice and financing strategies based on these forecasts. 
            Mo Abdel helps you navigate Orange County's changing market conditions.
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
                Get Market Timing Analysis
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-100">
              <strong>Mo Abdel</strong> • NMLS #1426884 • Orange County market expert since 2015 • Updated forecasts monthly
            </p>
          </div>
        </div>
      </section>
    
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Orange County Market Forecast 2025 2026 | Mo Abdel","mainEntityOfPage":"https://www.mothebroker.com/guides/orange-county-market-forecast-2025-2026","author":{"@type":"Person","name":"Mo Abdel"},"publisher":{"@type":"Organization","name":"Mo Abdel — Mortgage Broker","logo":{"@type":"ImageObject","url":"https://www.mothebroker.com/logo.png"}},"image":"https://www.mothebroker.com/logo.png"})
}} />
</div>
  );
}



