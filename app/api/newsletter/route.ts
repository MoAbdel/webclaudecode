import { NextResponse } from 'next/server';
import { NewsletterSubscription } from '@/lib/entities';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

    // Create newsletter subscription
    const subscription = await NewsletterSubscription.create({
      email: email.toLowerCase().trim(),
      firstName: firstName.trim(),
      subscribedAt: subscribedAt || new Date().toISOString(),
      source: source || 'unknown',
      isActive: true
    });

    return NextResponse.json({
      success: true,
      data: {
        id: subscription.id,
        email: subscription.email,
        firstName: subscription.firstName
      },
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Handle duplicate email error
    if (error instanceof Error && error.message.includes('duplicate')) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}