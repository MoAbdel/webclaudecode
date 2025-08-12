// Quick test script to verify Freddie Mac PMMS API is working
const fetch = require('node-fetch');

async function testFreddieMacAPI() {
  try {
    console.log('Testing Freddie Mac PMMS API connection...');
    
    // Test historical data endpoint
    const currentDate = new Date();
    const endDate = currentDate.toISOString().split('T')[0];
    const startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 7 days ago
    
    const url = `https://www.freddiemac.com/pmms-search/api/historical?startDt=${startDate}&endDt=${endDate}`;
    
    console.log('Fetching from:', url);
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      
      if (data && data.length > 0) {
        const latest = data[data.length - 1]; // Most recent entry
        console.log('✅ Freddie Mac PMMS API Working!');
        console.log(`30-Year Fixed Rate: ${latest.pmms30}% (as of ${latest.date})`);
        console.log(`15-Year Fixed Rate: ${latest.pmms15}% (as of ${latest.date})`);
        console.log(`5/1 ARM Rate: ${latest.pmms51}% (as of ${latest.date})`);
        console.log('Your website will now prioritize Freddie Mac PMMS data!');
      } else {
        console.log('❌ No data received from Freddie Mac PMMS API');
        console.log('Response:', JSON.stringify(data, null, 2));
      }
    } else {
      console.log('❌ HTTP Error:', response.status, response.statusText);
      const errorText = await response.text();
      console.log('Response body:', errorText);
    }
  } catch (error) {
    console.log('❌ Error testing Freddie Mac PMMS API:', error.message);
  }
}

testFreddieMacAPI();