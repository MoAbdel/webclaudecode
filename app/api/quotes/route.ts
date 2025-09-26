import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
// import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
// Fixed: Contact forms and quiz now use file-based storage instead of Supabase

// File storage directory
const DATA_DIR = path.join(process.cwd(), 'data', 'submissions');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Initialize Resend with API key - temporarily disabled to fix build
// const resend = new Resend('re_e2RhAnsw_NNMvX2jngjETx5CHMWVsq9Pw');

// Email notification function
async function sendEmailNotification(quoteData: any) {
  try {
    // Send email notification to Mo
    const emailBody = `
      <h2>🎯 New Quote Request Received!</h2>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${quoteData.full_name}</p>
        <p><strong>Email:</strong> <a href="mailto:${quoteData.email}">${quoteData.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${quoteData.phone}">${quoteData.phone}</a></p>
      </div>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e40af; margin-top: 0;">Loan Details</h3>
        <p><strong>Loan Amount:</strong> $${quoteData.loan_amount?.toLocaleString() || 'Not specified'}</p>
        <p><strong>Property Value:</strong> $${quoteData.property_value?.toLocaleString() || 'Not specified'}</p>
        <p><strong>Credit Score:</strong> ${quoteData.credit_score || 'Not specified'}</p>
        <p><strong>Loan Type:</strong> ${quoteData.loan_type || 'Not specified'}</p>
        <p><strong>Employment Status:</strong> ${quoteData.employment_status || 'Not specified'}</p>
        <p><strong>Annual Income:</strong> ${quoteData.annual_income ? '$' + quoteData.annual_income.toLocaleString() : 'Not specified'}</p>
      </div>
      
      ${quoteData.notes ? `
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #d97706; margin-top: 0;">Additional Notes</h3>
        <p>${quoteData.notes}</p>
      </div>
      ` : ''}
      
      <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>📅 Submitted:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>🆔 Quote ID:</strong> ${quoteData.id}</p>
      </div>
      
      <hr style="margin: 30px 0;">
      <p style="color: #dc2626; font-weight: bold;">⚡ Please follow up with this lead within 1 hour for best conversion rates!</p>
    `;

    // Using Resend SDK - temporarily disabled to fix build
    // const { data, error } = await resend.emails.send({
    //   from: 'MoTheBroker.com <onboarding@resend.dev>',
    //   to: ['moabdel94@gmail.com'],
    //   subject: `🎯 New Quote Request - ${quoteData.full_name} ($${quoteData.loan_amount?.toLocaleString() || 'N/A'})`,
    //   html: emailBody,
    // });

    // if (error) {
    //   console.error('❌ Email notification failed:', error);
    // } else {
    //   console.log('✅ Email notification sent successfully to moabdel94@gmail.com:', data);
    // }
    
    console.log('Email notification temporarily disabled - resend package not installed');
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

    // Ensure data directory exists
    ensureDataDir();

    // Create submission object
    const submission = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      full_name: body.full_name,
      email: body.email.toLowerCase().trim(),
      phone: body.phone,
      loan_amount: body.loan_amount ? parseFloat(body.loan_amount) : 0,
      property_value: body.property_value || (body.loan_amount ? parseFloat(body.loan_amount) * 1.25 : 0),
      credit_score: body.credit_score || null,
      loan_type: body.loan_type || 'conventional',
      loan_purpose: body.loan_purpose || 'purchase',
      down_payment: body.down_payment || null,
      employment_status: body.employment_status || null,
      annual_income: body.annual_income || null,
      zip_code: body.zip_code || null,
      occupancy: body.occupancy || null,
      current_rate: body.current_rate || null,
      cash_amount: body.cash_amount || null,
      specialty_loan_type: body.specialty_loan_type || null,
      status: body.status || 'new',
      source: body.source || 'Website',
      notes: body.notes || null,
      submitted_at: body.submitted_at || new Date().toISOString(),
      created_at: new Date().toISOString()
    };

    // Save to file
    const filename = `submission_${submission.id}.json`;
    const filepath = path.join(DATA_DIR, filename);

    fs.writeFileSync(filepath, JSON.stringify(submission, null, 2));

    console.log('💾 New submission saved:', submission.email, 'Source:', submission.source);

    // Send notifications asynchronously (don't wait for them)
    Promise.all([
      sendEmailNotification(submission),
      sendSMSNotification(submission)
    ]).catch(error => {
      console.error('❌ Notification error:', error);
      // Log to help debug notification issues
      console.log('📧 Quote data for notifications:', {
        id: submission.id,
        name: submission.full_name,
        email: submission.email,
        phone: submission.phone,
        loan_amount: submission.loan_amount
      });
    });

    // Also trigger a webhook if configured (for Zapier, Make, etc.)
    if (process.env.WEBHOOK_URL) {
      fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'new_quote',
          data: submission,
          timestamp: new Date().toISOString()
        })
      }).catch(console.error);
    }

    return NextResponse.json({
      success: true,
      data: {
        id: submission.id,
        full_name: submission.full_name,
        email: submission.email
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
    // Ensure data directory exists
    ensureDataDir();

    // Read all submission files from the data directory
    const files = fs.readdirSync(DATA_DIR);
    const submissionFiles = files.filter(file => file.startsWith('submission_') && file.endsWith('.json'));

    const submissions = submissionFiles.map(file => {
      const filepath = path.join(DATA_DIR, file);
      const content = fs.readFileSync(filepath, 'utf8');
      return JSON.parse(content);
    });

    // Sort by created_at date (newest first)
    submissions.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return NextResponse.json({
      success: true,
      data: submissions
    });

  } catch (error) {
    console.error('Error fetching quotes:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}