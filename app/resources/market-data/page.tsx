import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  TrendingUp, 
  TrendingDown,
  Home, 
  Calendar,
  DollarSign,
  BarChart3,
  MapPin,
  Users,
  Building,
  Calculator,
  ArrowRight,
  AlertCircle,
  Clock,
  Target,
  PieChart,
  Activity,
  Percent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County Housing Market Data 2025 | Real Estate Trends & Stats',
  description: 'Current Orange County housing market data, trends, and analysis. Home prices, inventory levels, days on market, and neighborhood statistics for informed home buying.',
  keywords: 'Orange County housing market, home prices, real estate trends, market data, inventory levels, days on market, median home price, Orange County real estate statistics',
};

export default function MarketDataPage() {
  const currentData = {
    medianPrice: '$1,195,000',
    priceChange: '+4.1%',
    inventoryLevel: '1.9 months',
    daysOnMarket: '25 days',
    salesVolume: '2,124 homes',
    newListings: '2,687',
    pricePerSqft: '$725',
    activeListings: '4,012'
  };

  const cityData = [
    {
      city: 'Newport Beach',
      medianPrice: '$2,895,000',
      change: '+3.4%',
      dom: '32 days',
      inventory: '2.8 months',
      trend: 'up'
    },
    {
      city: 'Irvine',
      medianPrice: '$1,465,000',
      change: '+4.8%',
      dom: '20 days',
      inventory: '1.6 months',
      trend: 'up'
    },
    {
      city: 'Huntington Beach',
      medianPrice: '$1,315,000',
      change: '+3.7%',
      dom: '23 days',
      inventory: '2.1 months',
      trend: 'up'
    },
    {
      city: 'Laguna Beach',
      medianPrice: '$2,185,000',
      change: '+2.1%',
      dom: '38 days',
      inventory: '3.7 months',
      trend: 'up'
    },
    {
      city: 'Mission Viejo',
      medianPrice: '$998,000',
      change: '+4.2%',
      dom: '21 days',
      inventory: '1.7 months',
      trend: 'up'
    },
    {
      city: 'Anaheim',
      medianPrice: '$845,000',
      change: '+5.1%',
      dom: '17 days',
      inventory: '1.4 months',
      trend: 'up'
    },
    {
      city: 'Costa Mesa',
      medianPrice: '$1,125,000',
      change: '+3.8%',
      dom: '22 days',
      inventory: '1.8 months',
      trend: 'up'
    },
    {
      city: 'Santa Ana',
      medianPrice: '$765,000',
      change: '+5.8%',
      dom: '16 days',
      inventory: '1.2 months',
      trend: 'up'
    }
  ];

  const marketMetrics = [
    {
      title: 'Market Temperature',
      value: 'Seller\'s Market',
      description: 'Low inventory driving competition',
      icon: Activity,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Price Trend',
      value: 'Rising',
      description: '+3.2% year over year',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Buyer Competition',
      value: 'High',
      description: 'Multiple offers common',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Interest Rate Impact',
      value: 'Moderate',
      description: 'Rates affecting affordability',
      icon: Percent,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const priceRanges = [
    { range: 'Under $750K', percentage: '18%', homes: '332' },
    { range: '$750K - $1M', percentage: '22%', homes: '406' },
    { range: '$1M - $1.5M', percentage: '28%', homes: '517' },
    { range: '$1.5M - $2M', percentage: '16%', homes: '295' },
    { range: '$2M - $3M', percentage: '11%', homes: '203' },
    { range: 'Over $3M', percentage: '5%', homes: '94' }
  ];

  const monthlyTrends = [
    { month: 'Aug 2024', price: '$1,142,000', sales: 1923 },
    { month: 'Sep 2024', price: '$1,151,000', sales: 1876 },
    { month: 'Oct 2024', price: '$1,158,000', sales: 1654 },
    { month: 'Nov 2024', price: '$1,163,000', sales: 1432 },
    { month: 'Dec 2024', price: '$1,167,000', sales: 1298 },
    { month: 'Jan 2025', price: '$1,175,000', sales: 1847 }
  ];

  const marketInsights = [
    {
      title: 'Inventory Shortage Continues',
      description: 'With only 2.1 months of inventory, Orange County remains in a strong seller\'s market. Balanced market typically has 4-6 months of supply.',
      impact: 'Buyers should be prepared for competition and quick decisions'
    },
    {
      title: 'Strong Price Growth Continues',
      description: 'Annual price growth of 4.1% shows continued strength in the Orange County market, driven by tech sector growth and limited inventory.',
      impact: 'Strong market fundamentals support continued appreciation'
    },
    {
      title: 'Interest Rate Sensitivity',
      description: 'Current mortgage rates in the 6-7% range are impacting buyer purchasing power compared to the 3% rates of 2021-2022.',
      impact: 'Affordability remains a challenge for many buyers'
    },
    {
      title: 'Seasonal Recovery',
      description: 'January sales volume of 1,847 homes shows typical seasonal recovery after slower winter months.',
      impact: 'Spring market expected to bring increased activity'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">Live Market Data</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orange County Housing Market Data
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Current market trends, pricing data, and analysis to help you make informed decisions 
              about buying or selling in Orange County's dynamic real estate market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Market Analysis
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                  <Calculator className="w-5 h-5 mr-2" />
                  Affordability Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Market Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              August 2025 Market Snapshot
            </h2>
            <p className="text-xl text-slate-600">
              Latest data from Orange County real estate market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{currentData.medianPrice}</div>
                <div className="text-sm text-slate-600">Median Sale Price</div>
                <div className="text-xs text-green-600 mt-1">{currentData.priceChange} YoY</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{currentData.daysOnMarket}</div>
                <div className="text-sm text-slate-600">Avg Days on Market</div>
                <div className="text-xs text-slate-500">Down from 32 days</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{currentData.inventoryLevel}</div>
                <div className="text-sm text-slate-600">Months of Inventory</div>
                <div className="text-xs text-red-600">Low supply</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{currentData.salesVolume}</div>
                <div className="text-sm text-slate-600">Homes Sold (Aug)</div>
                <div className="text-xs text-green-600">+15% from Jul</div>
              </CardContent>
            </Card>
          </div>

          {/* Market Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-lg ${metric.bgColor} w-fit mb-3`}>
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <h3 className="font-semibold mb-1">{metric.title}</h3>
                  <div className="text-lg font-bold text-slate-900 mb-1">{metric.value}</div>
                  <p className="text-sm text-slate-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* City-by-City Data */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              City-by-City Market Data
            </h2>
            <p className="text-xl text-slate-600">
              Median home prices and key metrics for major Orange County cities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityData.map((city, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{city.city}</CardTitle>
                      <div className="text-2xl font-bold text-slate-900 mt-1">
                        {city.medianPrice}
                      </div>
                    </div>
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">{city.change}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Days on Market:</span>
                      <span className="font-semibold">{city.dom}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Inventory:</span>
                      <span className="font-semibold">{city.inventory}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Distribution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Home Price Distribution
              </h2>
              <p className="text-slate-600 mb-8">
                Breakdown of recent home sales by price range in Orange County
              </p>
              
              <div className="space-y-4">
                {priceRanges.map((range, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{range.range}</span>
                        <span className="text-lg font-bold text-blue-600">{range.percentage}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: range.percentage}}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-sm text-slate-600">
                      {range.homes} homes
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                6-Month Price Trend
              </h2>
              <p className="text-slate-600 mb-8">
                Median home price and sales volume trends
              </p>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Price & Volume Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {monthlyTrends.map((trend, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div className="font-semibold">{trend.month}</div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-900">{trend.price}</div>
                          <div className="text-sm text-slate-600">{trend.sales} sales</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Market Analysis & Insights
            </h2>
            <p className="text-xl text-slate-600">
              Expert analysis of current market conditions and trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{insight.description}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                    <p className="text-sm text-blue-800">
                      <strong>Impact:</strong> {insight.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Forecast */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">
                  2025 Market Outlook
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="text-lg font-bold mb-2">Price Growth</div>
                    <div>Expected 2-4% appreciation</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-2">Inventory</div>
                    <div>Gradual increase expected</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-2">Activity</div>
                    <div>Spring market pickup likely</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <strong>Data Disclaimer:</strong> Market data compiled from multiple MLS sources, public records, 
              and real estate analytics platforms. Data is updated monthly and represents general market trends. 
              Individual property values may vary significantly. Consult with a licensed real estate professional 
              for specific property analysis and current market conditions.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Navigate This Market?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Understanding market data is crucial, but having expert guidance makes all the difference. 
            I'll help you time your purchase or sale perfectly and secure the best possible terms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Market Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button size="lg" variant="ghost" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <div className="mt-8">
            <p className="text-sm text-slate-600">
              Mo Abdel, NMLS #1426884 | Orange County Market Expert
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



