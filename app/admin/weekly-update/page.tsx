'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, TrendingUp, Home, DollarSign, BarChart3, FileText, Calculator, Database, RefreshCw } from "lucide-react";
import Link from "next/link";

const dataSourceCategories = [
  {
    title: "Orange County Real Estate Data",
    icon: Home,
    sources: [
      {
        name: "Redfin - Orange County Market Data",
        description: "Median sale price, homes sold, inventory levels",
        updateFrequency: "Weekly",
        badge: "Primary Source"
      },
      {
        name: "Realtor.com - Orange County Stats",
        description: "Median listing price, days on market, price trends",
        updateFrequency: "Monthly",
        badge: "Detailed"
      },
      {
        name: "California Association of Realtors",
        description: "Official CA market reports, county-level data",
        updateFrequency: "Monthly",
        badge: "Official"
      },
      {
        name: "Zillow - Orange County Home Values",
        description: "Zillow Home Value Index, forecast data",
        updateFrequency: "Monthly",
        badge: "Forecasts"
      }
    ]
  },
  {
    title: "Mortgage & Interest Rate Data",
    icon: DollarSign,
    sources: [
      {
        name: "Mortgage News Daily",
        description: "Daily mortgage rates, market commentary",
        updateFrequency: "Daily",
        badge: "Industry Standard"
      },
      {
        name: "Freddie Mac PMMS",
        description: "Primary Mortgage Market Survey - official rates",
        updateFrequency: "Weekly (Thursday)",
        badge: "Official"
      },
      {
        name: "FRED - Mortgage Rates",
        description: "30-year fixed mortgage average",
        updateFrequency: "Weekly",
        badge: "Fed Data"
      },
      {
        name: "Bankrate - Mortgage Rates",
        description: "National average rates, rate trends",
        updateFrequency: "Daily",
        badge: "Consumer"
      }
    ]
  },
  {
    title: "Economic Indicators",
    icon: BarChart3,
    sources: [
      {
        name: "FRED - Fed Funds Rate",
        description: "Federal Reserve interest rate",
        updateFrequency: "Daily",
        badge: "Fed Data"
      },
      {
        name: "MBA Weekly Applications Survey",
        description: "Mortgage application volume, refinance index",
        updateFrequency: "Weekly (Wednesday)",
        badge: "Industry"
      },
      {
        name: "US Treasury Rates",
        description: "10-year treasury yield (mortgage rate indicator)",
        updateFrequency: "Daily",
        badge: "Treasury"
      },
      {
        name: "BLS - CPI Inflation Data",
        description: "Consumer Price Index - affects Fed policy",
        updateFrequency: "Monthly",
        badge: "Official"
      }
    ]
  },
  {
    title: "Housing Market Reports",
    icon: FileText,
    sources: [
      {
        name: "NAR Housing Statistics",
        description: "National Association of Realtors reports",
        updateFrequency: "Monthly",
        badge: "NAR"
      },
      {
        name: "Census - New Home Sales",
        description: "New residential sales data",
        updateFrequency: "Monthly",
        badge: "Gov"
      },
      {
        name: "FHFA House Price Index",
        description: "Federal housing price index by region",
        updateFrequency: "Quarterly",
        badge: "Official"
      },
      {
        name: "CoreLogic Home Price Insights",
        description: "Home price index and forecasts",
        updateFrequency: "Monthly",
        badge: "Analytics"
      }
    ]
  }
];

const quickUpdateTasks = [
  { task: "Update Fed Funds Rate from FRED", priority: "High" },
  { task: "Update Orange County Median Price from Redfin", priority: "High" },
  { task: "Update Mortgage Application Index from MBA", priority: "Medium" },
  { task: "Update Days on Market from Realtor.com", priority: "Medium" },
  { task: "Update Inventory Levels from Redfin", priority: "Medium" },
  { task: "Update 10-Year Treasury from Treasury.gov", priority: "Low" }
];

export default function WeeklyUpdatePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleDateString());

  React.useEffect(() => {
    // Check if already authenticated (from main admin page)
    const checkAuth = sessionStorage.getItem('adminAuthenticated');
    if (checkAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'hamadithegoat123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      setPassword('');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle>Admin Access Required</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Access Weekly Update Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Weekly Data Update Dashboard
              </h1>
              <p className="text-xl text-slate-600">
                Quick access to all mortgage and housing market data sources
              </p>
            </div>
            <Link href="/admin">
              <Button variant="ghost" className="text-blue-600">
                ← Back to Admin
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <Badge className="bg-green-100 text-green-800">
              Last Updated: {lastUpdated}
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              Next Update: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </Badge>
          </div>
        </div>

        {/* Quick Update Checklist */}
        <Card className="mb-8 shadow-lg border-slate-200">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <Calculator className="w-5 h-5 mr-2" />
              Weekly Update Checklist
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickUpdateTasks.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700">{item.task}</span>
                  </div>
                  <Badge className={
                    item.priority === 'High' ? 'bg-red-100 text-red-800' :
                    item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }>
                    {item.priority}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex gap-4">
              <Link href="/admin">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Database className="w-4 h-4 mr-2" />
                  Go to Data Entry
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-green-600 border-green-200"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset Checklist
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Source Categories */}
        <div className="grid gap-6">
          {dataSourceCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl">
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.sources.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-slate-900">{source.name}</h3>
                        <Badge className="bg-blue-100 text-blue-800 text-xs">
                          {source.badge}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-3">{source.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Updates: {source.updateFrequency}
                        </span>
                        <span className="text-xs text-slate-400 italic">
                          Data source reference
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tips */}
        <Card className="mt-8 shadow-lg border-slate-200">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <TrendingUp className="w-5 h-5 mr-2" />
              Pro Tips for Weekly Updates
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Update rates every <strong>Thursday morning</strong> after Freddie Mac PMMS releases (usually 10am ET)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Check MBA data every <strong>Wednesday</strong> for mortgage application trends</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Redfin updates Orange County data <strong>weekly</strong> - best source for local metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Use Fed Funds Rate from FRED for the most current federal rate data</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Screenshot important charts from these sources to share with clients</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}