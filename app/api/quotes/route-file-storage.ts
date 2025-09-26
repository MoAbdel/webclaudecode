import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// File storage directory
const DATA_DIR = path.join(process.cwd(), 'data', 'submissions');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Email notification function (simplified)
async function sendEmailNotification(quoteData: any) {
  // You can integrate with services like:
  // - Resend.com (free tier: 3000 emails/month)
  // - EmailJS (free tier: 200 emails/month)
  // - Nodemailer with Gmail

  console.log('📧 New quote submission received:', {
    name: quoteData.full_name,
    email: quoteData.email,
    phone: quoteData.phone,
    loan_amount: quoteData.loan_amount,
    timestamp: new Date().toISOString()
  });

  // TODO: Add email sending logic here
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
      down_payment: body.down_payment || null,
      employment_status: body.employment_status || null,
      annual_income: body.annual_income || null,
      status: body.status || 'new',
      notes: body.notes || null,
      created_at: new Date().toISOString()
    };

    // Save to file
    const filename = `submission_${submission.id}.json`;
    const filepath = path.join(DATA_DIR, filename);

    fs.writeFileSync(filepath, JSON.stringify(submission, null, 2));

    // Send email notification
    await sendEmailNotification(submission);

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

    // Read all submission files
    const files = fs.readdirSync(DATA_DIR).filter(file => file.endsWith('.json'));

    const submissions = files.map(file => {
      const filepath = path.join(DATA_DIR, file);
      const content = fs.readFileSync(filepath, 'utf-8');
      return JSON.parse(content);
    });

    // Sort by created_at (newest first)
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