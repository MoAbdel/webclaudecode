import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.full_name || !body.email || !body.phone || !body.loan_amount) {
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
        loan_amount: parseFloat(body.loan_amount),
        property_value: body.property_value || (parseFloat(body.loan_amount) * 1.25),
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