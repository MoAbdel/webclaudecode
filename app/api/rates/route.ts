import { NextResponse } from 'next/server';
import { MortgageRate } from '@/lib/entities';

export const dynamic = 'force-dynamic'; // Disable caching
export const revalidate = 0; // Always fetch fresh data

export async function GET() {
  try {
    const rates = await MortgageRate.list('loan_type');
    
    return NextResponse.json({
      success: true,
      data: rates || [],
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching rates:', error);
    return NextResponse.json({
      success: false,
      data: [],
      error: 'Failed to fetch rates'
    });
  }
}



