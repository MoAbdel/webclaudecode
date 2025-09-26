import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// File storage directory
const DATA_DIR = path.join(process.cwd(), 'data', 'newsletter');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, subscribedAt, source } = body;

    // Validate required fields
    if (!email || !firstName) {
      return NextResponse.json(
        { success: false, error: 'Email and first name are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    ensureDataDir();

    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    try {
      const files = fs.readdirSync(DATA_DIR);
      const subscriptionFiles = files.filter(file => file.startsWith('subscription_') && file.endsWith('.json'));

      for (const file of subscriptionFiles) {
        const filepath = path.join(DATA_DIR, file);
        const content = fs.readFileSync(filepath, 'utf8');
        const subscription = JSON.parse(content);

        if (subscription.email === normalizedEmail && subscription.is_active) {
          return NextResponse.json(
            { success: false, error: 'Email already subscribed' },
            { status: 409 }
          );
        }
      }
    } catch (error) {
      console.error('Error checking existing subscriptions:', error);
    }

    // Create subscription object
    const subscription = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      email: normalizedEmail,
      first_name: firstName.trim(),
      subscribed_at: subscribedAt || new Date().toISOString(),
      source: source || 'unknown',
      is_active: true,
      created_at: new Date().toISOString()
    };

    // Save to file
    const filename = `subscription_${subscription.id}.json`;
    const filepath = path.join(DATA_DIR, filename);

    fs.writeFileSync(filepath, JSON.stringify(subscription, null, 2));

    console.log('💾 New newsletter subscription saved:', subscription.email, 'Source:', subscription.source);

    return NextResponse.json({
      success: true,
      data: {
        id: subscription.id,
        email: subscription.email,
        first_name: subscription.first_name
      },
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return NextResponse.json(
      { success: false, error: `Server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Ensure data directory exists
    ensureDataDir();

    // Read all subscription files from the data directory
    const files = fs.readdirSync(DATA_DIR);
    const subscriptionFiles = files.filter(file => file.startsWith('subscription_') && file.endsWith('.json'));

    const subscriptions = subscriptionFiles.map(file => {
      const filepath = path.join(DATA_DIR, file);
      const content = fs.readFileSync(filepath, 'utf8');
      return JSON.parse(content);
    });

    // Sort by created_at date (newest first)
    subscriptions.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return NextResponse.json({
      success: true,
      data: subscriptions
    });

  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to fetch newsletter subscriptions' },
      { status: 500 }
    );
  }
}