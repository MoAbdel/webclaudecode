# Free APIs for Real-Time Mortgage & Market Data

## Currently Integrated Free APIs

### 1. **Freddie Mac PMMS** (No API Key Required!) 🏆
- **URL**: https://www.freddiemac.com/pmms-search/api/
- **What it provides**: 
  - Most current mortgage rates (updated weekly)
  - 30-Year Fixed Rate
  - 15-Year Fixed Rate  
  - 5/1 Adjustable Rate
- **Priority**: PRIMARY data source (most accurate)
- **Already working** in your app - no setup needed!

### 2. **US Treasury Direct** (No API Key Required!)
- **URL**: https://api.fiscaldata.treasury.gov/
- **What it provides**: Real-time treasury rates (basis for mortgage rates)
- **Priority**: Fallback for rate calculations
- **Already working** in your app - no setup needed!

### 3. **FRED (Federal Reserve Economic Data)** - FREE
- **Sign up**: https://fred.stlouisfed.org/docs/api/api_key.html
- **What it provides**:
  - Federal Funds Rate
  - 30-Year Mortgage Rates
  - 15-Year Mortgage Rates
  - Economic indicators
- **Limits**: 120 requests per minute (very generous!)
- **Setup**:
  1. Create free account at the link above
  2. Get your API key
  3. Add to your `.env.local` file: `FRED_API_KEY=your_key_here`

### 3. **Alpha Vantage** - FREE Tier
- **Sign up**: https://www.alphavantage.co/support/#api-key
- **What it provides**:
  - Stock market data
  - Economic indicators
  - Currency exchange rates
- **Limits**: 25 requests/day, 5 requests/minute on free tier
- **Setup**:
  1. Get free API key instantly (just enter email)
  2. Add to `.env.local`: `ALPHA_VANTAGE_KEY=your_key_here`

## Additional Free APIs You Can Add

### 4. **IEX Cloud** - Free Tier
- **URL**: https://iexcloud.io/
- **Provides**: Stock market data, economic data
- **Free tier**: 50,000 messages/month

### 5. **World Bank Data API** (No Key Required!)
- **URL**: https://datahelpdesk.worldbank.org/knowledgebase/articles/889392
- **Provides**: Global economic indicators

### 6. **Census Bureau API** - FREE
- **URL**: https://www.census.gov/data/developers.html
- **Provides**: Housing data, demographic data

## How Your App Uses These APIs (Priority Order)

When you click "Fetch Live Rates" in your admin panel:
1. **First**: Tries Freddie Mac PMMS (most current mortgage rates)
2. **Second**: Falls back to FRED API (if key is provided)
3. **Third**: Uses Treasury rates + typical spreads as final fallback
4. Updates your database with the best available real, current rates

**Data Source Priority:**
- 🥇 **Freddie Mac PMMS** - Industry standard, weekly updates
- 🥈 **FRED API** - Federal Reserve data, reliable backup
- 🥉 **Treasury + Spreads** - Calculated rates if APIs unavailable

When you click "Fetch Market Data":
1. Fetches Fed Funds Rate from FRED (if key provided)
2. Gets Treasury data (automatic)
3. Calculates market indicators
4. Updates your insights with real data

## Quick Setup Instructions

1. **No API Keys (Works Now!):**
   - Your app already works with Treasury data
   - Click "Fetch Live Rates" to get calculated rates based on real Treasury yields

2. **With FRED API Key (Recommended - Takes 2 minutes):**
   - Go to https://fred.stlouisfed.org/docs/api/api_key.html
   - Create free account
   - Copy your API key
   - Create `.env.local` file in your project root
   - Add: `FRED_API_KEY=your_key_here`
   - Restart your app
   - Now you'll get actual mortgage rates from FRED!

## Testing the APIs

1. Go to `/admin` on your site
2. Click "Fetch Live Rates" - this will pull real Treasury data and calculate current rates
3. Click "Fetch Market Data" - this will pull real economic indicators
4. Check the data - it should show "Source: Live Market Data"

## Notes

- All these APIs are **completely free** for your usage level
- Treasury API requires no authentication at all
- FRED is the most valuable for mortgage data (highly recommended)
- The app has fallback data if APIs are unavailable
- Your data updates will be based on real market conditions!