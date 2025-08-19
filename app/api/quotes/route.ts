import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Email notification function
async function sendEmailNotification(quoteData: any) {
  try {
    // Send email notification to Mo
    const emailBody = `
      <h2>New Quote Request Received!</h2>
      <p><strong>Name:</strong> ${quoteData.full_name}</p>
      <p><strong>Email:</strong> ${quoteData.email}</p>
      <p><strong>Phone:</strong> ${quoteData.phone}</p>
      <p><strong>Loan Amount:</strong> $${quoteData.loan_amount?.toLocaleString() || 'Not specified'}</p>
      <p><strong>Property Value:</strong> $${quoteData.property_value?.toLocaleString() || 'Not specified'}</p>
      <p><strong>Credit Score:</strong> ${quoteData.credit_score || 'Not specified'}</p>
      <p><strong>Loan Type:</strong> ${quoteData.loan_type || 'Not specified'}</p>
      <p><strong>Employment Status:</strong> ${quoteData.employment_status || 'Not specified'}</p>
      <p><strong>Annual Income:</strong> ${quoteData.annual_income ? '$' + quoteData.annual_income.toLocaleString() : 'Not specified'}</p>
      <p><strong>Notes:</strong> ${quoteData.notes || 'None'}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      <hr>
      <p>Please follow up with this lead as soon as possible!</p>
    `;

    // Using Resend API (you'll need to set up Resend or another email service)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'MoTheBroker.com <quotes@mothebroker.com>',
        to: ['mo@mothebroker.com'], // Replace with your actual email
        subject: `New Quote Request - ${quoteData.full_name}`,
        html: emailBody,
      }),
    });

    if (!response.ok) {
      console.error('Email notification failed:', await response.text());
    }
  } catch (error) {
    console.error('Email notification error:', error);
    // Don't throw - we still want to save the quote even if email fails
  }
}

// SMS notification function (optional - using Twilio)
async function sendSMSNotification(quoteData: any) {
  try {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      return; // Skip SMS if Twilio not configured
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
    const yourPhone = process.env.YOUR_PHONE_NUMBER; // Your phone number

    const message = `New Quote Request!\n${quoteData.full_name}\n${quoteData.phone}\nLoan: $${quoteData.loan_amount?.toLocaleString() || 'N/A'}`;

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: yourPhone || '+19495792057', // Your phone number
          From: twilioPhone || '',
          Body: message,
        }),
      }
    );

    if (!response.ok) {
      console.error('SMS notification failed:', await response.text());
    }
  } catch (error) {
    console.error('SMS notification error:', error);
    // Don't throw - we still want to save the quote even if SMS fails
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.full_name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Required fields missing' },
        { status: 400 }
      );
    }

    // Insert quote into Supabase
    const { data, error } = await supabase
      .from('rate_quotes')
      .insert({
        full_name: body.full_name,
        email: body.email.toLowerCase().trim(),
        phone: body.phone,
        loan_amount: body.loan_amount ? parseFloat(body.loan_amount) : 0,
        property_value: body.property_value || (body.loan_amount ? parseFloat(body.loan_amount) * 1.25 : 0),
        credit_score: body.credit_score || null,
        loan_type: body.loan_type || 'conventional',
        down_payment: body.down_payment || null,
        employment_status: body.employment_status || null,
        annual_income: body.annual_income || null,
        status: body.status || 'new',
        notes: body.notes || null
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      // Provide more detailed error message
      if (error.code === '42P01') {
        return NextResponse.json(
          { success: false, error: 'Database tables not set up. Please run the SQL setup script in Supabase.' },
          { status: 500 }
        );
      }
      throw error;
    }

    // Send notifications asynchronously (don't wait for them)
    Promise.all([
      sendEmailNotification(data),
      sendSMSNotification(data)
    ]).catch(console.error);

    // Also trigger a webhook if configured (for Zapier, Make, etc.)
    if (process.env.WEBHOOK_URL) {
      fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'new_quote',
          data: data,
          timestamp: new Date().toISOString()
        })
      }).catch(console.error);
    }

    return NextResponse.json({
      success: true,
      data: {
        id: data.id,
        full_name: data.full_name,
        email: data.email
      },
      message: 'Quote request submitted successfully'
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Fetch quotes from Supabase (for admin use)
    const { data, error } = await supabase
      .from('rate_quotes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return NextResponse.json({
      success: true,
      data: data || []
    });

  } catch (error) {
    console.error('Error fetching quotes:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}