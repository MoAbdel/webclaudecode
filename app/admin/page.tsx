'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";
import { Settings, Plus, Edit3, Trash2, TrendingUp, TrendingDown, Save, RefreshCw, Download, Calendar } from "lucide-react";
import Link from "next/link";
import { MortgageRate, MarketInsight, RateQuote } from "@/lib/entities";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('rates');
  const [rates, setRates] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [editingRate, setEditingRate] = useState<any>(null);
  const [editingInsight, setEditingInsight] = useState<any>(null);
  const [isScrapingRates, setIsScrapingRates] = useState(false);
  const [isScrapingInsights, setIsScrapingInsights] = useState(false);
  const [newRate, setNewRate] = useState({
    loan_type: '',
    rate: '',
    apr: '',
    points: '',
    loan_term: '30',
    min_credit_score: '620',
    max_ltv: '80',
    is_featured: false,
    effective_date: new Date().toISOString().split('T')[0]
  });
  const [newInsight, setNewInsight] = useState({
    metric: '',
    value: '',
    change: '',
    trend: 'stable',
    description: '',
    display_order: '1'
  });

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'hamadithegoat123') {
      setIsAuthenticated(true);
      setPassword(''); // Clear password from state for security
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const loadData = async () => {
    try {
      const [ratesData, insightsData, quotesData] = await Promise.all([
        MortgageRate.list('loan_type'),
        MarketInsight.list('display_order'),
RateQuote.list('-created_at')
      ]);
      setRates(ratesData);
      setInsights(insightsData);
      setQuotes(quotesData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleCreateRate = async () => {
    try {
      await MortgageRate.create({
        ...newRate,
        rate: parseFloat(newRate.rate),
        apr: parseFloat(newRate.apr),
        points: parseFloat(newRate.points || '0'),
        loan_term: parseInt(newRate.loan_term),
        min_credit_score: parseInt(newRate.min_credit_score),
        max_ltv: parseFloat(newRate.max_ltv)
      });
      setNewRate({
        loan_type: '',
        rate: '',
        apr: '',
        points: '',
        loan_term: '30',
        min_credit_score: '620',
        max_ltv: '80',
        is_featured: false,
        effective_date: new Date().toISOString().split('T')[0]
      });
      loadData();
    } catch (error) {
      console.error('Error creating rate:', error);
    }
  };

  const handleUpdateRate = async () => {
    if (!editingRate) return;
    try {
      await MortgageRate.update(editingRate.id, {
        ...editingRate,
        rate: parseFloat(editingRate.rate),
        apr: parseFloat(editingRate.apr),
        points: parseFloat(editingRate.points || '0'),
        loan_term: parseInt(editingRate.loan_term),
        min_credit_score: parseInt(editingRate.min_credit_score),
        max_ltv: parseFloat(editingRate.max_ltv)
      });
      setEditingRate(null);
      loadData();
    } catch (error) {
      console.error('Error updating rate:', error);
    }
  };

  const handleCreateInsight = async () => {
    try {
      await MarketInsight.create({
        ...newInsight,
        display_order: parseInt(newInsight.display_order)
      });
      setNewInsight({
        metric: '',
        value: '',
        change: '',
        trend: 'stable',
        description: '',
        display_order: '1'
      });
      loadData();
    } catch (error) {
      console.error('Error creating insight:', error);
    }
  };

  const handleUpdateInsight = async () => {
    if (!editingInsight) return;
    try {
      await MarketInsight.update(editingInsight.id, {
        ...editingInsight,
        display_order: parseInt(editingInsight.display_order)
      });
      setEditingInsight(null);
      loadData();
    } catch (error) {
      console.error('Error updating insight:', error);
    }
  };

  const handleDeleteRate = async (id: string) => {
    if (confirm('Are you sure you want to delete this rate?')) {
      try {
        await MortgageRate.delete(id);
        loadData();
      } catch (error) {
        console.error('Error deleting rate:', error);
      }
    }
  };

  const handleDeleteInsight = async (id: string) => {
    if (confirm('Are you sure you want to delete this insight?')) {
      try {
        await MarketInsight.delete(id);
        loadData();
      } catch (error) {
        console.error('Error deleting insight:', error);
      }
    }
  };

  const updateQuoteStatus = async (id: string, status: string) => {
    try {
      const quote = quotes.find(q => q.id === id);
      if (quote) {
        await RateQuote.update(id, { ...quote, status });
        loadData();
      }
    } catch (error) {
      console.error('Error updating quote status:', error);
    }
  };

  const scrapeRates = async () => {
    setIsScrapingRates(true);
    try {
      const response = await fetch('/api/scrape/rates');
      const result = await response.json();
      
      if (result.success && result.data) {
        // Clear existing rates
        for (const rate of rates) {
          await MortgageRate.delete(rate.id);
        }
        
        // Add new scraped rates
        for (const rateData of result.data) {
          await MortgageRate.create(rateData);
        }
        
        loadData();
        alert(`Successfully imported ${result.data.length} rates from market data!`);
      } else {
        alert('Failed to scrape rates. Please try again.');
      }
    } catch (error) {
      console.error('Error scraping rates:', error);
      alert('Error scraping rates. Please check your connection.');
    } finally {
      setIsScrapingRates(false);
    }
  };

  const scrapeInsights = async () => {
    setIsScrapingInsights(true);
    try {
      const response = await fetch('/api/scrape/insights');
      const result = await response.json();
      
      if (result.success && result.data) {
        // Clear existing insights
        for (const insight of insights) {
          await MarketInsight.delete(insight.id);
        }
        
        // Add new scraped insights
        for (const insightData of result.data) {
          await MarketInsight.create(insightData);
        }
        
        loadData();
        alert(`Successfully imported ${result.data.length} market insights!`);
      } else {
        alert('Failed to scrape insights. Please try again.');
      }
    } catch (error) {
      console.error('Error scraping insights:', error);
      alert('Error scraping insights. Please check your connection.');
    } finally {
      setIsScrapingInsights(false);
    }
  };

  // Show password form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <Card className="shadow-xl border-slate-200">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-center text-xl">
                <Settings className="w-6 h-6 mr-2" />
                Admin Access
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="password">Enter Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="mt-1"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Access Admin Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 mr-3 text-blue-600" />
                Admin Dashboard
              </h1>
              <p className="text-xl text-slate-600">
                Manage mortgage rates, market insights, and customer inquiries
              </p>
            </div>
            <Link href="/admin/weekly-update">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Calendar className="w-5 h-5 mr-2" />
                Weekly Update Hub
              </Button>
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('rates')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rates'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                Mortgage Rates ({rates.length})
              </button>
              <button
                onClick={() => setActiveTab('insights')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'insights'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                Market Insights ({insights.length})
              </button>
              <button
                onClick={() => setActiveTab('quotes')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'quotes'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                Rate Quotes ({quotes.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Rates Tab */}
        {activeTab === 'rates' && (
          <div className="space-y-8">
            {/* Scraping and Add New Rate */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <Plus className="w-5 h-5 mr-2" />
                    Manage Rates
                  </CardTitle>
                  <Button 
                    onClick={scrapeRates}
                    disabled={isScrapingRates}
                    className="bg-white text-blue-600 hover:bg-blue-50"
                    size="sm"
                  >
                    {isScrapingRates ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Scraping...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Fetch Live Rates
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="loan_type">Loan Type</Label>
                    <Input
                      id="loan_type"
                      value={newRate.loan_type}
                      onChange={(e) => setNewRate({...newRate, loan_type: e.target.value})}
                      placeholder="30-Year Fixed Conventional"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rate">Rate (%)</Label>
                    <Input
                      id="rate"
                      type="number"
                      step="0.125"
                      value={newRate.rate}
                      onChange={(e) => setNewRate({...newRate, rate: e.target.value})}
                      placeholder="7.250"
                    />
                  </div>
                  <div>
                    <Label htmlFor="apr">APR (%)</Label>
                    <Input
                      id="apr"
                      type="number"
                      step="0.125"
                      value={newRate.apr}
                      onChange={(e) => setNewRate({...newRate, apr: e.target.value})}
                      placeholder="7.300"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleCreateRate} className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Rate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Existing Rates */}
            <div className="grid gap-4">
              {rates.map((rate) => (
                <Card key={rate.id} className="shadow-sm border-slate-200">
                  <CardContent className="p-4">
                    {editingRate?.id === rate.id ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            value={editingRate.loan_type}
                            onChange={(e) => setEditingRate({...editingRate, loan_type: e.target.value})}
                            placeholder="Loan Type"
                          />
                          <Input
                            type="number"
                            step="0.125"
                            value={editingRate.rate}
                            onChange={(e) => setEditingRate({...editingRate, rate: e.target.value})}
                            placeholder="Rate"
                          />
                          <Input
                            type="number"
                            step="0.125"
                            value={editingRate.apr}
                            onChange={(e) => setEditingRate({...editingRate, apr: e.target.value})}
                            placeholder="APR"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={handleUpdateRate} className="bg-green-600 hover:bg-green-700">
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button onClick={() => setEditingRate(null)} variant="ghost">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900">{rate.loan_type}</h3>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-slate-600">
                            <span>Rate: {rate.rate}%</span>
                            <span>APR: {rate.apr}%</span>
                            {rate.is_featured && <Badge className="bg-green-100 text-green-800">Featured</Badge>}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setEditingRate(rate)}
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteRate(rate.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-8">
            {/* Scraping and Add New Insight */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <Plus className="w-5 h-5 mr-2" />
                    Manage Market Insights
                  </CardTitle>
                  <Button 
                    onClick={scrapeInsights}
                    disabled={isScrapingInsights}
                    className="bg-white text-green-600 hover:bg-green-50"
                    size="sm"
                  >
                    {isScrapingInsights ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Scraping...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Fetch Market Data
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="metric">Metric Name</Label>
                    <Input
                      id="metric"
                      value={newInsight.metric}
                      onChange={(e) => setNewInsight({...newInsight, metric: e.target.value})}
                      placeholder="Median Home Price"
                    />
                  </div>
                  <div>
                    <Label htmlFor="value">Value</Label>
                    <Input
                      id="value"
                      value={newInsight.value}
                      onChange={(e) => setNewInsight({...newInsight, value: e.target.value})}
                      placeholder="$1,250,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="change">Change</Label>
                    <Input
                      id="change"
                      value={newInsight.change}
                      onChange={(e) => setNewInsight({...newInsight, change: e.target.value})}
                      placeholder="+5.2%"
                    />
                  </div>
                  <div>
                    <Label htmlFor="trend">Trend</Label>
                    <Select value={newInsight.trend} onValueChange={(value) => setNewInsight({...newInsight, trend: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="up">Up</SelectItem>
                        <SelectItem value="down">Down</SelectItem>
                        <SelectItem value="stable">Stable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mb-4">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newInsight.description}
                    onChange={(e) => setNewInsight({...newInsight, description: e.target.value})}
                    placeholder="Year-over-year change in Orange County"
                    rows={2}
                  />
                </div>
                <Button onClick={handleCreateInsight} className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Insight
                </Button>
              </CardContent>
            </Card>

            {/* Existing Insights */}
            <div className="grid gap-4">
              {insights.map((insight) => (
                <Card key={insight.id} className="shadow-sm border-slate-200">
                  <CardContent className="p-4">
                    {editingInsight?.id === insight.id ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            value={editingInsight.metric}
                            onChange={(e) => setEditingInsight({...editingInsight, metric: e.target.value})}
                            placeholder="Metric Name"
                          />
                          <Input
                            value={editingInsight.value}
                            onChange={(e) => setEditingInsight({...editingInsight, value: e.target.value})}
                            placeholder="Value"
                          />
                          <Input
                            value={editingInsight.change}
                            onChange={(e) => setEditingInsight({...editingInsight, change: e.target.value})}
                            placeholder="Change"
                          />
                          <Select value={editingInsight.trend} onValueChange={(value) => setEditingInsight({...editingInsight, trend: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="up">Up</SelectItem>
                              <SelectItem value="down">Down</SelectItem>
                              <SelectItem value="stable">Stable</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Textarea
                          value={editingInsight.description}
                          onChange={(e) => setEditingInsight({...editingInsight, description: e.target.value})}
                          placeholder="Description"
                          rows={2}
                        />
                        <div className="flex gap-2">
                          <Button onClick={handleUpdateInsight} className="bg-green-600 hover:bg-green-700">
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button onClick={() => setEditingInsight(null)} variant="ghost">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-slate-900">{insight.metric}</h3>
                            <span className="text-2xl font-bold text-blue-600">{insight.value}</span>
                            <div className={`flex items-center space-x-1 text-sm font-medium ${
                              insight.trend === 'up' ? 'text-green-600' : 
                              insight.trend === 'down' ? 'text-red-500' : 'text-slate-600'
                            }`}>
                              {insight.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                              {insight.trend === 'down' && <TrendingDown className="w-4 h-4" />}
                              <span>{insight.change}</span>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">{insight.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setEditingInsight(insight)}
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteInsight(insight.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="space-y-4">
            {quotes.length === 0 ? (
              <Card className="shadow-sm border-slate-200">
                <CardContent className="p-8 text-center">
                  <p className="text-slate-500">No rate quotes yet.</p>
                </CardContent>
              </Card>
            ) : (
              quotes.map((quote) => (
                <Card key={quote.id} className="shadow-sm border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">{quote.full_name}</h3>
                          <Badge className={
                            quote.status === 'new' ? 'bg-blue-100 text-blue-800' :
                            quote.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                            quote.status === 'qualified' ? 'bg-green-100 text-green-800' :
                            'bg-slate-100 text-slate-800'
                          }>
                            {quote.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-slate-700">Email:</span>
                            <div className="text-slate-600">{quote.email}</div>
                          </div>
                          <div>
                            <span className="font-medium text-slate-700">Phone:</span>
                            <div className="text-slate-600">{quote.phone}</div>
                          </div>
                          <div>
                            <span className="font-medium text-slate-700">Loan Amount:</span>
                            <div className="text-slate-600">${quote.loan_amount?.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="font-medium text-slate-700">Credit Score:</span>
                            <div className="text-slate-600">{quote.credit_score}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Select value={quote.status} onValueChange={(value) => updateQuoteStatus(quote.id, value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="qualified">Qualified</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}