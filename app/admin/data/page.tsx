'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Mail, Phone, Download, Users, MessageCircle, Calendar } from 'lucide-react';
import PasswordProtection from '@/components/PasswordProtection';

interface Quote {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  loan_amount: number;
  loan_type: string;
  credit_score: string;
  status: string;
  notes: string;
  created_at: string;
}

interface Newsletter {
  id: string;
  email: string;
  firstName: string;
  subscribedAt: string;
  source: string;
  isActive: boolean;
}

export default function AdminDataPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch from API endpoints instead of direct Supabase
      const [quotesResponse, newslettersResponse] = await Promise.all([
        fetch('/api/quotes').then(res => res.json()),
        fetch('/api/newsletter').then(res => res.json())
      ]);
      
      if (!quotesResponse.success) {
        console.error('Error fetching quotes:', quotesResponse.error);
      }
      if (!newslettersResponse.success) {
        console.error('Error fetching newsletters:', newslettersResponse.error);
      }
      
      setQuotes(quotesResponse.data || []);
      setNewsletters(newslettersResponse.data?.map((sub: any) => ({
        ...sub,
        firstName: sub.first_name,
        subscribedAt: sub.subscribed_at,
        isActive: sub.is_active
      })) || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => 
        JSON.stringify(row[header] || '')
      ).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Data Collection Dashboard</h1>
            <p className="text-slate-600">View and export quote requests and newsletter subscriptions</p>
          </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageCircle className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-slate-900">{quotes.length}</p>
                  <p className="text-slate-600">Quote Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-slate-900">{newsletters.filter(n => n.isActive).length}</p>
                  <p className="text-slate-600">Newsletter Subscribers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-slate-900">
                    {new Set([...quotes.map(q => q.email), ...newsletters.map(n => n.email)]).size}
                  </p>
                  <p className="text-slate-600">Total Unique Leads</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Requests */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
              Quote Requests ({quotes.length})
            </CardTitle>
            <Button
              onClick={() => exportToCSV(quotes, 'quote-requests.csv')}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={quotes.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            {quotes.length === 0 ? (
              <p className="text-slate-600 text-center py-8">No quote requests yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-2">Name</th>
                      <th className="text-left py-3 px-2">Email</th>
                      <th className="text-left py-3 px-2">Phone</th>
                      <th className="text-left py-3 px-2">Loan Amount</th>
                      <th className="text-left py-3 px-2">Loan Type</th>
                      <th className="text-left py-3 px-2">Credit Score</th>
                      <th className="text-left py-3 px-2">Notes</th>
                      <th className="text-left py-3 px-2">Status</th>
                      <th className="text-left py-3 px-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotes.map((quote) => (
                      <tr key={quote.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-2 font-medium">{quote.full_name}</td>
                        <td className="py-3 px-2">{quote.email}</td>
                        <td className="py-3 px-2">{quote.phone}</td>
                        <td className="py-3 px-2">{formatCurrency(quote.loan_amount)}</td>
                        <td className="py-3 px-2 capitalize">{quote.loan_type}</td>
                        <td className="py-3 px-2 capitalize">{quote.credit_score || 'N/A'}</td>
                        <td className="py-3 px-2 max-w-xs">
                          <div className="truncate" title={quote.notes}>
                            {quote.notes ? quote.notes.substring(0, 50) + (quote.notes.length > 50 ? '...' : '') : 'N/A'}
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            quote.status === 'new' ? 'bg-blue-100 text-blue-800' :
                            quote.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                            quote.status === 'qualified' ? 'bg-green-100 text-green-800' :
                            'bg-slate-100 text-slate-800'
                          }`}>
                            {quote.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">{formatDate(quote.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Newsletter Subscriptions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-green-600" />
              Newsletter Subscriptions ({newsletters.filter(n => n.isActive).length})
            </CardTitle>
            <Button
              onClick={() => exportToCSV(newsletters.filter(n => n.isActive), 'newsletter-subscribers.csv')}
              className="bg-green-600 hover:bg-green-700"
              disabled={newsletters.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            {newsletters.length === 0 ? (
              <p className="text-slate-600 text-center py-8">No newsletter subscribers yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-2">First Name</th>
                      <th className="text-left py-3 px-2">Email</th>
                      <th className="text-left py-3 px-2">Source</th>
                      <th className="text-left py-3 px-2">Status</th>
                      <th className="text-left py-3 px-2">Subscribed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsletters.map((sub) => (
                      <tr key={sub.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-2 font-medium">{sub.firstName}</td>
                        <td className="py-3 px-2">{sub.email}</td>
                        <td className="py-3 px-2 capitalize">{sub.source.replace('_', ' ')}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            sub.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {sub.isActive ? 'Active' : 'Unsubscribed'}
                          </span>
                        </td>
                        <td className="py-3 px-2">{formatDate(sub.subscribedAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
        </div>
      </div>
    </PasswordProtection>
  );
}



