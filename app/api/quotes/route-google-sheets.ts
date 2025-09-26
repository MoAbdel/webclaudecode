import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Google Sheets integration
async function saveToGoogleSheets(formData: any) {
  // You would need to:
  // 1. Create a Google Sheet
  // 2. Set up Google Apps Script to accept POST requests
  // 3. Use the Web App URL as GOOGLE_SHEETS_WEBHOOK_URL

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log('⚠️ GOOGLE_SHEETS_WEBHOOK_URL not set');
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        loan_amount: formData.loan_amount || 0,
        loan_type: formData.loan_type || 'Not specified',
        notes: formData.notes || 'None'
      }),
    });

    if (response.ok) {
      console.log('✅ Data saved to Google Sheets');
    } else {
      console.error('❌ Google Sheets save failed:', await response.text());
    }
  } catch (error) {
    console.error('❌ Google Sheets error:', error);
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

    // Save to Google Sheets
    await saveToGoogleSheets(body);

    return NextResponse.json({
      success: true,
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