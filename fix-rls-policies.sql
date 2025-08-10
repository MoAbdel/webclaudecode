-- Fix RLS policies for anonymous access
-- Run this in your Supabase SQL Editor

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous newsletter signups" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Allow anonymous quote requests" ON rate_quotes;

-- Create new policies with proper permissions
CREATE POLICY "Allow anonymous newsletter signups" ON newsletter_subscriptions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous quote requests" ON rate_quotes
  FOR INSERT TO anon WITH CHECK (true);

-- Verify the policies are working
SELECT schemaname, tablename, policyname, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename IN ('newsletter_subscriptions', 'rate_quotes');