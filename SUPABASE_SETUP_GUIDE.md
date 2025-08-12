# 🚀 Supabase Setup Guide for Mo The Broker

## Step 1: Run the SQL to Create Tables

1. Go to your Supabase dashboard
2. Navigate to **SQL Editor** (in the left sidebar)
3. Click **New Query**
4. Copy ALL the content from `supabase-setup.sql` file
5. Paste it into the SQL editor
6. Click **Run** (or press Ctrl+Enter)

✅ This will create:
- `newsletter_subscriptions` table
- `rate_quotes` table  
- Security policies
- Performance indexes
- Statistics function

## Step 2: Get Your API Credentials

1. In Supabase dashboard, go to **Settings** (gear icon)
2. Click **API** in the settings menu
3. You'll see two important values:
   - **Project URL**: Something like `https://xxxxx.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`

## Step 3: Add Credentials to Your Project

1. Open your `.env.local` file
2. Add these lines:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

⚠️ Replace with YOUR actual values from Step 2!

## Step 4: Test Locally

```bash
npm run dev
```

Try submitting a newsletter signup or quote form. Check if data appears in Supabase:
1. Go to Supabase dashboard
2. Click **Table Editor**
3. Check `newsletter_subscriptions` and `rate_quotes` tables

## Step 5: Deploy to Vercel

1. Go to your Vercel dashboard
2. Go to your project settings
3. Click **Environment Variables**
4. Add the same two variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Redeploy your site

## What's Different Now?

### Before (In-Memory):
- Data lost on every deployment
- No persistence
- Can't scale

### After (Supabase):
- Data saved forever
- Real database
- Can handle millions of records
- Export anytime
- Connect to email tools

## Viewing Your Data

### Option 1: Supabase Dashboard
- Go to **Table Editor** in Supabase
- View, filter, export data

### Option 2: Your Admin Page
- Visit `/admin/data` on your website
- Works the same, but now shows real database data!

## Troubleshooting

**"Missing Supabase environment variables" error:**
- Make sure you added both variables to `.env.local`
- Restart your development server

**Forms not saving:**
- Check browser console for errors
- Verify tables were created in Supabase
- Check that policies allow anonymous inserts

**Can't see data in admin:**
- Make sure you're logged into Supabase
- Check that read policies are working

## Next Steps

1. ✅ Set up automated email campaigns
2. ✅ Create email templates for newsletters  
3. ✅ Set up weekly market update automation
4. ✅ Export leads to CRM

---

Need help? The Supabase dashboard has great documentation and support!