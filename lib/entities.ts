// Mock entities for Base44 functionality
// In production, these would connect to actual database/API

interface RateQuoteData {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  loan_amount: number;
  property_value?: number;
  credit_score?: string;
  loan_type?: string;
  down_payment?: number;
  employment_status?: string;
  annual_income?: number;
  status?: string;
  notes?: string;
  created_at?: string;
}

interface MortgageRateData {
  id?: string;
  loan_type: string;
  rate: number;
  apr: number;
  display_name?: string;
  points?: number;
  loan_term?: number;
  min_credit_score?: number;
  max_ltv?: number;
  min_down_payment?: string;
  is_active?: boolean;
  is_featured?: boolean;
  effective_date?: string;
  created_at?: string;
}

interface MarketInsightData {
  id?: string;
  metric: string;
  value: string;
  change?: string;
  trend?: string;
  description?: string;
  display_order?: number;
  created_at?: string;
}

// Mock data storage (in production, this would be a database)
let rateQuotes: RateQuoteData[] = [];
let mortgageRates: MortgageRateData[] = [
  {
    id: '1',
    loan_type: '30_year_fixed',
    rate: 6.875,
    apr: 6.920,
    display_name: '30-Year Fixed Conventional',
    min_down_payment: '3%',
    is_active: true,
    effective_date: new Date().toISOString().split('T')[0]
  },
  {
    id: '2',
    loan_type: '15_year_fixed',
    rate: 6.250,
    apr: 6.290,
    display_name: '15-Year Fixed Conventional',
    min_down_payment: '3%',
    is_active: true,
    effective_date: new Date().toISOString().split('T')[0]
  },
  {
    id: '3',
    loan_type: 'fha_30_year',
    rate: 6.500,
    apr: 6.750,
    display_name: 'FHA 30-Year Fixed',
    min_down_payment: '3.5%',
    is_active: true,
    effective_date: new Date().toISOString().split('T')[0]
  },
  {
    id: '4',
    loan_type: 'jumbo_30_year',
    rate: 7.125,
    apr: 7.150,
    display_name: 'Jumbo 30-Year Fixed',
    min_down_payment: '10%',
    is_active: true,
    effective_date: new Date().toISOString().split('T')[0]
  }
];

let marketInsights: MarketInsightData[] = [
  {
    id: '1',
    metric: 'Median Home Price',
    value: '$1,285,000',
    change: '+3.2%',
    trend: 'up',
    description: 'Year over year',
    display_order: 1
  },
  {
    id: '2',
    metric: 'Days on Market',
    value: '28 Days',
    change: '-5 days',
    trend: 'down',
    description: 'vs last month',
    display_order: 2
  },
  {
    id: '3',
    metric: 'Inventory',
    value: '2.1 Months',
    change: '+0.3%',
    trend: 'up',
    description: 'Supply at current pace',
    display_order: 3
  },
  {
    id: '4',
    metric: 'Price per Sq Ft',
    value: '$685',
    change: '+2.8%',
    trend: 'up',
    description: 'Average across OC',
    display_order: 4
  }
];

// Mock Entity Classes
export class RateQuote {
  static async create(data: Omit<RateQuoteData, 'id' | 'created_at'>): Promise<RateQuoteData> {
    const newQuote: RateQuoteData = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      status: data.status || 'new'
    };
    rateQuotes.push(newQuote);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return newQuote;
  }

  static async list(orderBy?: string): Promise<RateQuoteData[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...rateQuotes].sort((a, b) => {
      if (orderBy === '-created_at') {
        return new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime();
      }
      return 0;
    });
  }

  static async update(id: string, data: Partial<RateQuoteData>): Promise<RateQuoteData | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = rateQuotes.findIndex(q => q.id === id);
    if (index === -1) return null;
    
    rateQuotes[index] = { ...rateQuotes[index], ...data };
    return rateQuotes[index];
  }

  static async delete(id: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const index = rateQuotes.findIndex(q => q.id === id);
    if (index === -1) return false;
    
    rateQuotes.splice(index, 1);
    return true;
  }
}

export class MortgageRate {
  static async create(data: Omit<MortgageRateData, 'id' | 'created_at'>): Promise<MortgageRateData> {
    const newRate: MortgageRateData = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      is_active: data.is_active ?? true
    };
    mortgageRates.push(newRate);
    
    await new Promise(resolve => setTimeout(resolve, 300));
    return newRate;
  }

  static async list(orderBy?: string): Promise<MortgageRateData[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...mortgageRates].sort((a, b) => {
      if (orderBy === '-effective_date') {
        return new Date(b.effective_date!).getTime() - new Date(a.effective_date!).getTime();
      }
      return 0;
    });
  }

  static async update(id: string, data: Partial<MortgageRateData>): Promise<MortgageRateData | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = mortgageRates.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    mortgageRates[index] = { ...mortgageRates[index], ...data };
    return mortgageRates[index];
  }

  static async delete(id: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const index = mortgageRates.findIndex(r => r.id === id);
    if (index === -1) return false;
    
    mortgageRates.splice(index, 1);
    return true;
  }
}

export class MarketInsight {
  static async create(data: Omit<MarketInsightData, 'id' | 'created_at'>): Promise<MarketInsightData> {
    const newInsight: MarketInsightData = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      display_order: data.display_order ?? 0
    };
    marketInsights.push(newInsight);
    
    await new Promise(resolve => setTimeout(resolve, 300));
    return newInsight;
  }

  static async list(orderBy?: string): Promise<MarketInsightData[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...marketInsights].sort((a, b) => {
      if (orderBy === 'display_order') {
        return (a.display_order || 0) - (b.display_order || 0);
      }
      return 0;
    });
  }

  static async update(id: string, data: Partial<MarketInsightData>): Promise<MarketInsightData | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = marketInsights.findIndex(i => i.id === id);
    if (index === -1) return null;
    
    marketInsights[index] = { ...marketInsights[index], ...data };
    return marketInsights[index];
  }

  static async delete(id: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const index = marketInsights.findIndex(i => i.id === id);
    if (index === -1) return false;
    
    marketInsights.splice(index, 1);
    return true;
  }
}