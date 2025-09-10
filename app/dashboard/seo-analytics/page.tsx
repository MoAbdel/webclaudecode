'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Users, Globe, Search, Eye, MousePointer, Clock, Smartphone } from 'lucide-react';

interface AnalyticsData {
  organicTraffic: number;
  keywordRankings: number;
  pageSpeed: number;
  mobileScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
  topPages: Array<{
    page: string;
    views: number;
    conversions: number;
  }>;
  topKeywords: Array<{
    keyword: string;
    position: number;
    volume: number;
    difficulty: number;
  }>;
  aiSearchVisibility: {
    chatgpt: number;
    perplexity: number;
    claude: number;
  };
}

export default function SEOAnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    organicTraffic: 0,
    keywordRankings: 0,
    pageSpeed: 0,
    mobileScore: 0,
    coreWebVitals: { lcp: 0, fid: 0, cls: 0 },
    topPages: [],
    topKeywords: [],
    aiSearchVisibility: { chatgpt: 0, perplexity: 0, claude: 0 }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setAnalyticsData({
        organicTraffic: 12450,
        keywordRankings: 847,
        pageSpeed: 92,
        mobileScore: 96,
        coreWebVitals: {
          lcp: 1.8,
          fid: 45,
          cls: 0.05
        },
        topPages: [
          { page: '/areas/irvine-mortgage-broker', views: 2834, conversions: 23 },
          { page: '/areas/newport-beach-mortgage-broker', views: 2456, conversions: 19 },
          { page: '/fha-loans-orange-county', views: 1987, conversions: 15 },
          { page: '/tools/mortgage-calculator', views: 1654, conversions: 12 },
          { page: '/resources/down-payment-assistance', views: 1432, conversions: 8 }
        ],
        topKeywords: [
          { keyword: 'orange county mortgage broker', position: 2, volume: 2900, difficulty: 68 },
          { keyword: 'irvine mortgage broker', position: 1, volume: 1600, difficulty: 52 },
          { keyword: 'newport beach mortgage', position: 3, volume: 890, difficulty: 45 },
          { keyword: 'fha loans orange county', position: 4, volume: 720, difficulty: 38 },
          { keyword: 'jumbo loans irvine', position: 2, volume: 480, difficulty: 42 }
        ],
        aiSearchVisibility: {
          chatgpt: 78,
          perplexity: 85,
          claude: 72
        }
      });
      setLoading(false);
    }, 1500);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const getScoreColor = (score: number, type: 'percentage' | 'vitals') => {
    if (type === 'percentage') {
      if (score >= 90) return 'text-green-600';
      if (score >= 70) return 'text-yellow-600';
      return 'text-red-600';
    }
    
    // Core Web Vitals scoring
    if (score <= 2.5) return 'text-green-600'; // Good LCP
    if (score <= 4.0) return 'text-yellow-600'; // Needs improvement
    return 'text-red-600'; // Poor
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-slate-200 rounded-lg w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-slate-200 rounded-lg"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 bg-slate-200 rounded-lg"></div>
              <div className="h-64 bg-slate-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            SEO Analytics Dashboard
          </h1>
          <p className="text-xl text-slate-600">
            MoTheBroker.com Performance Metrics & Optimization Tracking
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Organic Traffic */}
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-sm font-medium text-slate-600">
                <Users className="w-4 h-4 mr-2" />
                Organic Traffic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {formatNumber(analyticsData.organicTraffic)}
              </div>
              <p className="text-sm text-green-600 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +23% vs last month
              </p>
            </CardContent>
          </Card>

          {/* Keyword Rankings */}
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-sm font-medium text-slate-600">
                <Search className="w-4 h-4 mr-2" />
                Keywords Ranking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {formatNumber(analyticsData.keywordRankings)}
              </div>
              <p className="text-sm text-green-600 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +87 new rankings
              </p>
            </CardContent>
          </Card>

          {/* Page Speed */}
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-sm font-medium text-slate-600">
                <Clock className="w-4 h-4 mr-2" />
                Page Speed Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold mb-1 ${getScoreColor(analyticsData.pageSpeed, 'percentage')}`}>
                {analyticsData.pageSpeed}
              </div>
              <p className="text-sm text-slate-500">Google PageSpeed</p>
            </CardContent>
          </Card>

          {/* Mobile Score */}
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-sm font-medium text-slate-600">
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold mb-1 ${getScoreColor(analyticsData.mobileScore, 'percentage')}`}>
                {analyticsData.mobileScore}
              </div>
              <p className="text-sm text-slate-500">Mobile Performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Core Web Vitals */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Core Web Vitals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* LCP */}
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(analyticsData.coreWebVitals.lcp, 'vitals')}`}>
                  {analyticsData.coreWebVitals.lcp}s
                </div>
                <p className="text-slate-600 font-medium">Largest Contentful Paint</p>
                <p className="text-sm text-slate-500">Good: ≤2.5s</p>
              </div>

              {/* FID */}
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${analyticsData.coreWebVitals.fid <= 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {analyticsData.coreWebVitals.fid}ms
                </div>
                <p className="text-slate-600 font-medium">First Input Delay</p>
                <p className="text-sm text-slate-500">Good: ≤100ms</p>
              </div>

              {/* CLS */}
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${analyticsData.coreWebVitals.cls <= 0.1 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {analyticsData.coreWebVitals.cls}
                </div>
                <p className="text-slate-600 font-medium">Cumulative Layout Shift</p>
                <p className="text-sm text-slate-500">Good: ≤0.1</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Top Pages */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                Top Performing Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 text-sm truncate">
                        {page.page}
                      </p>
                      <p className="text-xs text-slate-500">
                        {formatNumber(page.views)} views • {page.conversions} conversions
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">
                        {((page.conversions / page.views) * 100).toFixed(1)}%
                      </div>
                      <div className="text-xs text-slate-500">CVR</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Keywords */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-6 h-6 mr-2" />
                Top Ranking Keywords
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topKeywords.map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 text-sm">
                        {keyword.keyword}
                      </p>
                      <p className="text-xs text-slate-500">
                        Volume: {formatNumber(keyword.volume)} • Difficulty: {keyword.difficulty}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${keyword.position <= 3 ? 'text-green-600' : keyword.position <= 10 ? 'text-yellow-600' : 'text-slate-600'}`}>
                        #{keyword.position}
                      </div>
                      <div className="text-xs text-slate-500">Position</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Search Visibility */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              AI Search Visibility (AIO Score)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* ChatGPT */}
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(analyticsData.aiSearchVisibility.chatgpt, 'percentage')}`}>
                  {analyticsData.aiSearchVisibility.chatgpt}%
                </div>
                <p className="text-slate-600 font-medium">ChatGPT Citations</p>
                <p className="text-sm text-slate-500">vs industry average</p>
              </div>

              {/* Perplexity */}
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(analyticsData.aiSearchVisibility.perplexity, 'percentage')}`}>
                  {analyticsData.aiSearchVisibility.perplexity}%
                </div>
                <p className="text-slate-600 font-medium">Perplexity Citations</p>
                <p className="text-sm text-slate-500">vs industry average</p>
              </div>

              {/* Claude */}
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(analyticsData.aiSearchVisibility.claude, 'percentage')}`}>
                  {analyticsData.aiSearchVisibility.claude}%
                </div>
                <p className="text-slate-600 font-medium">Claude Citations</p>
                <p className="text-sm text-slate-500">vs industry average</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MousePointer className="w-6 h-6 mr-2" />
              Optimization Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Performing Well</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Core Web Vitals are in excellent range</li>
                  <li>• Mobile optimization is outstanding (96/100)</li>
                  <li>• AI search visibility above industry average</li>
                  <li>• Strong local keyword rankings in Orange County</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">🔄 Areas for Improvement</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Expand content for long-tail keyword targeting</li>
                  <li>• Create more neighborhood-specific landing pages</li>
                  <li>• Increase internal linking between related pages</li>
                  <li>• Add more client testimonials with schema markup</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🚀 Growth Opportunities</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Target emerging AI search platforms</li>
                  <li>• Create video content for YouTube SEO</li>
                  <li>• Develop seasonal mortgage content campaigns</li>
                  <li>• Build partnerships for quality backlinks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



