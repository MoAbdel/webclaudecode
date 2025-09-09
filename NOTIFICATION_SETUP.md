# Quote Notification Workflow Setup Guide

## Overview
This system provides real-time notifications when someone submits a quote request on MoTheBroker.com. You'll receive instant notifications via email, SMS, and/or webhook integrations.

## Features
- ✅ **Email Notifications** - Instant email with complete quote details
- ✅ **SMS Notifications** - Quick SMS alert with key information
- ✅ **Webhook Integration** - Connect to Zapier, Make, or any automation platform
- ✅ **Database Storage** - All quotes saved in Supabase for follow-up
- ✅ **Admin Dashboard** - View all quotes at /admin

## Setup Instructions

### Step 1: Email Notifications (Recommended)

#### Using Resend (Easiest Option)
1. Sign up for free at [Resend.com](https://resend.com)
2. Verify your domain (mothebroker.com)
3. Get your API key from the dashboard
4. Add to your `.env.local` file:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

#### Email Customization
- Update the `to` email in `/app/api/quotes/route.ts` line 37
- Currently set to: `mo@mothebroker.com`
- Change to your preferred email address

### Step 2: SMS Notifications (Optional)

#### Using Twilio
1. Sign up at [Twilio.com](https://www.twilio.com)
2. Get a phone number from Twilio
3. Find your Account SID and Auth Token
4. Add to your `.env.local` file:
   ```
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=xxxxxxxxxxxxx
   TWILIO_PHONE_NUMBER=+1234567890
   YOUR_PHONE_NUMBER=+19495792057
   ```

### Step 3: Webhook Integration (Optional)

#### For Zapier/Make/n8n
1. Create a webhook trigger in your automation platform
2. Copy the webhook URL
3. Add to your `.env.local` file:
   ```
   WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx
   ```

#### Webhook Payload Format
```json
{
  "event": "new_quote",
  "data": {
    "id": "uuid",
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "(949) 555-0123",
    "loan_amount": 500000,
    "property_value": 625000,
    "credit_score": "740-759",
    "loan_type": "conventional",
    "employment_status": "employed",
    "annual_income": 120000,
    "notes": "Looking to buy in Irvine"
  },
  "timestamp": "2025-08-18T12:00:00.000Z"
}
```

## Testing the Workflow

1. **Test Email Notifications**
   - Submit a test quote through your website
   - Check your email inbox
   - Verify all data is correct

2. **Test SMS Notifications**
   - Submit another test quote
   - Check your phone for SMS
   - Verify the message format

3. **Test Webhook**
   - Use [webhook.site](https://webhook.site) to test
   - Submit a quote and verify the payload

## Notification Content

### Email Notification Includes:
- Full name
- Email address
- Phone number
- Loan amount
- Property value
- Credit score range
- Loan type
- Employment status
- Annual income
- Notes/comments
- Submission timestamp

### SMS Notification Includes:
- Name
- Phone number
- Loan amount
- Quick alert format for mobile

## Admin Dashboard

View all quotes at: `https://www.mothebroker.com/admin`
- Password protected (set ADMIN_PASSWORD in .env.local)
- View all quote submissions
- Sort by date
- Export functionality

## Troubleshooting

### Email not sending?
1. Check Resend API key is correct
2. Verify domain is verified in Resend
3. Check spam folder
4. View Vercel function logs for errors

### SMS not sending?
1. Verify Twilio credentials
2. Check phone number format (+1 prefix)
3. Ensure Twilio account has credits
4. Check Twilio console for errors

### Webhook not triggering?
1. Verify webhook URL is correct
2. Test with webhook.site first
3. Check for CORS issues
4. View Vercel function logs

## Security Notes

- Never commit `.env.local` to git
- Keep API keys secure
- Use environment variables in Vercel dashboard
- Rotate keys regularly
- Monitor for suspicious activity

## Support

For issues or questions:
- Check Vercel function logs
- Review Supabase database logs
- Contact support for API services (Resend/Twilio)

## Cost Estimates

- **Resend**: Free tier includes 100 emails/day
- **Twilio**: ~$0.01 per SMS + $1/month for phone number
- **Supabase**: Free tier sufficient for thousands of quotes
- **Webhooks**: Usually free with automation platforms

---

**Note**: Remember to add all environment variables to your Vercel project settings for production deployment!
