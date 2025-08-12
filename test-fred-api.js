// Quick test script to verify FRED API is working
const fetch = require('node-fetch');

async function testFredAPI() {
  const apiKey = '6c73dbfcbc98d4024d419fa64690ba7b';
  
  try {
    console.log('Testing FRED API connection...');
    
    // Test 30-year mortgage rate
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=MORTGAGE30US&api_key=${apiKey}&file_type=json&limit=1&sort_order=desc`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.observations && data.observations.length > 0) {
      const rate = data.observations[0];
      console.log('✅ FRED API Working!');
      console.log(`30-Year Mortgage Rate: ${rate.value}% (as of ${rate.date})`);
      console.log('Your website will now use real FRED data!');
    } else {
      console.log('❌ No data received from FRED API');
      console.log('Response:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.log('❌ Error testing FRED API:', error.message);
  }
}

testFredAPI();