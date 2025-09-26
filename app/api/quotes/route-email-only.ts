import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Email via EmailJS (free, client-side)
async function sendEmailViaEmailJS(formData: any) {
  // This would be called from the frontend, not here
  // Just showing the concept
  console.log('Would send email with EmailJS:', formData);
}

// Email via Resend (server-side, requires API key)
async function sendEmailViaResend(formData: any) {
  if (!process.env.RESEND_API_KEY) {
    console.log('⚠️ RESEND_API_KEY not set - email not sent');
    return;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'MoTheBroker.com <onboarding@resend.dev>',
        to: ['moabdel94@gmail.com'], // Your email
        subject: `🎯 New Quote Request - ${formData.full_name}`,
        html: `
          <h2>New Quote Request Received!</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${formData.full_name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
          </div>
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Loan Details</h3>
            <p><strong>Loan Amount:</strong> $${formData.loan_amount?.toLocaleString() || 'Not specified'}</p>
            <p><strong>Loan Type:</strong> ${formData.loan_type || 'Not specified'}</p>
            ${formData.notes ? `<p><strong>Notes:</strong> ${formData.notes}</p>` : ''}
          </div>
          <p><strong>📅 Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      }),
    });

    if (response.ok) {
      console.log('✅ Email sent successfully via Resend');
    } else {
      console.error('❌ Email failed:', await response.text());
    }
  } catch (error) {
    console.error('❌ Email error:', error);
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

    // Send email notification immediately
    await sendEmailViaResend(body);

    // Return success (no storage needed)
    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully - you will be contacted soon!'
    });

  } catch (error) {
    console.error('Quote submission error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}

// No GET endpoint needed since we're not storing data
export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Data viewing not available with email-only storage'
  });
}