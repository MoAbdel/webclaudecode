-- ========================================
-- SUPABASE DATABASE SETUP FOR MO THE BROKER
-- ========================================
-- Run this SQL in your Supabase SQL Editor:
-- https://app.supabase.com/project/YOUR_PROJECT/sql/new

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  source VARCHAR(100) DEFAULT 'unknown',
  is_active BOOLEAN DEFAULT true,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add unique constraint on email for active subscriptions
CREATE UNIQUE INDEX idx_newsletter_active_email 
ON newsletter_subscriptions(email) 
WHERE is_active = true;

-- Create rate_quotes table
CREATE TABLE IF NOT EXISTS rate_quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  loan_amount DECIMAL(12, 2) NOT NULL,
  property_value DECIMAL(12, 2),
  credit_score VARCHAR(50),
  loan_type VARCHAR(50),
  down_payment DECIMAL(12, 2),
  employment_status VARCHAR(100),
  annual_income DECIMAL(12, 2),
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_rate_quotes_email ON rate_quotes(email);
CREATE INDEX idx_rate_quotes_status ON rate_quotes(status);
CREATE INDEX idx_rate_quotes_created_at ON rate_quotes(created_at DESC);
CREATE INDEX idx_newsletter_created_at ON newsletter_subscriptions(created_at DESC);

-- Create view for unique leads (combines both tables)
CREATE OR REPLACE VIEW unique_leads AS
SELECT DISTINCT email, 
       MAX(created_at) as last_activity,
       'quote' as source_type
FROM rate_quotes
GROUP BY email
UNION
SELECT DISTINCT email, 
       MAX(created_at) as last_activity,
       'newsletter' as source_type
FROM newsletter_subscriptions
WHERE is_active = true
GROUP BY email;

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_quotes ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous access (for form submissions)
-- Allow inserts from anonymous users
CREATE POLICY "Allow anonymous newsletter signups" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous quote requests" ON rate_quotes
  FOR INSERT WITH CHECK (true);

-- Only allow authenticated users (you) to read/update/delete
CREATE POLICY "Only authenticated users can read newsletters" ON newsletter_subscriptions
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can read quotes" ON rate_quotes
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update newsletters" ON newsletter_subscriptions
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update quotes" ON rate_quotes
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Optional: Create a function to get statistics
CREATE OR REPLACE FUNCTION get_lead_statistics()
RETURNS TABLE (
  total_quotes BIGINT,
  total_newsletter_subscribers BIGINT,
  total_unique_leads BIGINT,
  quotes_this_week BIGINT,
  newsletters_this_week BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    (SELECT COUNT(*) FROM rate_quotes) as total_quotes,
    (SELECT COUNT(*) FROM newsletter_subscriptions WHERE is_active = true) as total_newsletter_subscribers,
    (SELECT COUNT(DISTINCT email) FROM unique_leads) as total_unique_leads,
    (SELECT COUNT(*) FROM rate_quotes WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as quotes_this_week,
    (SELECT COUNT(*) FROM newsletter_subscriptions WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as newsletters_this_week;
END;
$$ LANGUAGE plpgsql;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION get_lead_statistics() TO anon, authenticated;

-- ========================================
-- IMPORTANT NEXT STEPS:
-- 1. Run this SQL in your Supabase SQL Editor
-- 2. Get your project URL and anon key from:
--    https://app.supabase.com/project/YOUR_PROJECT/settings/api
-- 3. Add them to your .env.local file:
--    NEXT_PUBLIC_SUPABASE_URL=your-project-url
--    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
-- ========================================