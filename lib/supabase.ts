import { createClient } from '@supabase/supabase-js';

// You need to add these to your .env.local file
// Get them from: https://app.supabase.com/project/YOUR_PROJECT/settings/api
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_AK!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_AK to your .env.local file');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface NewsletterSubscription {
  id?: string;
  email: string;
  first_name: string;
  subscribed_at: string;
  source: string;
  is_active: boolean;
  unsubscribed_at?: string;
  created_at?: string;
}

export interface RateQuote {
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
  status: string;
  notes?: string;
  created_at?: string;
}