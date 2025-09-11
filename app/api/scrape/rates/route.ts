import { NextResponse } from 'next/server';
import { fetchRealMortgageRates } from '@/lib/scrapers';

export async function GET() {
  try {
    // Fetch real mortgage rates from free APIs and data sources
    const rates = await fetchRealMortgageRates();

    return NextResponse.json({
      success: true,
      data: rates,
      source: 'Mortgage News Daily',
      message: 'Current mortgage rates from Mortgage News Daily',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error scraping rates:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to scrape rates' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // This endpoint could be used to trigger a more intensive scraping operation
    // For now, we'll use the same logic as GET
    const response = await GET();
    return response;
  } catch (error) {
    console.error('Error in POST scraping rates:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to scrape rates' },
      { status: 500 }
    );
  }
}



