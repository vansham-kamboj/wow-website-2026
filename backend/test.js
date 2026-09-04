const http = require('http');

async function runTests() {
  const baseUrl = 'http://localhost:5000/api';
  let token = '';
  let leadId = '';

  console.log('--- Running Backend Tests ---');

  // 1. Test Login (Success)
  try {
    console.log('1. Testing POST /api/admin/login');
    const loginRes = await fetch(`${baseUrl}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@wowglobal.com', password: 'securepassword123' })
    });
    const loginData = await loginRes.json();
    if (loginRes.ok && loginData.token) {
      console.log('   ✅ Login successful, token received.');
      token = loginData.token;
    } else {
      console.error('   ❌ Login failed:', loginData);
    }
  } catch (e) {
    console.error('   ❌ Login error:', e.message);
  }

  // 2. Test Create Lead (Validation Error)
  try {
    console.log('2. Testing POST /api/leads (Invalid phone)');
    const failRes = await fetch(`${baseUrl}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test User', phone: '123', country_interested: 'USA' })
    });
    if (failRes.status === 400) {
      console.log('   ✅ Validation correctly caught invalid phone.');
    } else {
      console.error('   ❌ Validation failed to catch invalid phone.');
    }
  } catch (e) {}

  // 3. Test Create Lead (Success)
  try {
    console.log('3. Testing POST /api/leads (Valid)');
    const successRes = await fetch(`${baseUrl}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test User', phone: '9925944556', country_interested: 'USA' })
    });
    const data = await successRes.json();
    if (successRes.ok && data.lead) {
      console.log('   ✅ Lead created successfully.');
      leadId = data.lead.id;
    } else {
      console.error('   ❌ Lead creation failed:', data);
    }
  } catch (e) {}

  // 4. Test Create Lead (Honeypot)
  try {
    console.log('4. Testing POST /api/leads (Honeypot)');
    const honeyRes = await fetch(`${baseUrl}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Bot', phone: '9925944556', country_interested: 'USA', honeypot: 'bot_filled' })
    });
    if (honeyRes.status === 200) {
      console.log('   ✅ Honeypot successfully trapped bot.');
    } else {
      console.error('   ❌ Honeypot failed.');
    }
  } catch (e) {}

  // 5. Test Get Leads (Protected)
  try {
    console.log('5. Testing GET /api/leads');
    const getRes = await fetch(`${baseUrl}/leads`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await getRes.json();
    if (getRes.ok && Array.isArray(data)) {
      console.log(`   ✅ Fetched ${data.length} leads.`);
    } else {
      console.error('   ❌ Fetch leads failed:', data);
    }
  } catch (e) {}

  // 6. Test Patch Lead (Protected)
  if (leadId) {
    try {
      console.log(`6. Testing PATCH /api/leads/${leadId}`);
      const patchRes = await fetch(`${baseUrl}/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: 'Contacted', notes: 'Called the student' })
      });
      const data = await patchRes.json();
      if (patchRes.ok && data.status === 'Contacted') {
        console.log('   ✅ Lead updated successfully.');
      } else {
        console.error('   ❌ Lead update failed:', data);
      }
    } catch (e) {}
  }
}

runTests();
