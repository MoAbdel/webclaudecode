import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: Request) {
  try {
    // Debug environment variables
    console.log('Environment check:', {
      hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_AK,
      url: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 20) + '...'
    });

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

    // Check if email already exists and is active
    const { data: existingSubscription, error: checkError } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', email.toLowerCase().trim())
      .eq('is_active', true)
      .single();

    // Ignore "no rows" error - that's expected for new emails
    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing subscription:', checkError);
    }

    if (existingSubscription) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Create newsletter subscription in Supabase
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        email: email.toLowerCase().trim(),
        first_name: firstName.trim(),
        subscribed_at: subscribedAt || new Date().toISOString(),
        source: source || 'unknown',
        is_active: true
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
      
      // Return more specific error information for debugging
      return NextResponse.json(
        { success: false, error: `Database error: ${error.message}`, code: error.code },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        id: data.id,
        email: data.email,
        first_name: data.first_name
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