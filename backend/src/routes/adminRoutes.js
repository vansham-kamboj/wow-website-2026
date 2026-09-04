const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('--- NEW LOGIN ATTEMPT ---');
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('Expected:', { envEmail: process.env.ADMIN_EMAIL, envPass: process.env.ADMIN_PASSWORD });
  console.log('Type of Body email:', typeof email, 'length:', email ? email.length : 0);
  console.log('Type of Expected email:', typeof process.env.ADMIN_EMAIL, 'length:', process.env.ADMIN_EMAIL ? process.env.ADMIN_EMAIL.length : 0);
  
  if (!email || !password) {
    console.log('Failed: Email or password missing');
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Trim to be safe
  const inputEmail = email.trim();
  const inputPass = password.trim();
  
  const expectedEmail = (process.env.ADMIN_EMAIL || '').trim();
  const expectedPass = (process.env.ADMIN_PASSWORD || '').trim();

  // Check against env variables
  if (inputEmail === expectedEmail && inputPass === expectedPass) {
    // Generate JWT token
    const token = jwt.sign(
      { email: process.env.ADMIN_EMAIL, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    return res.json({ token, message: 'Login successful' });
  }

  return res.status(401).json({ error: 'Invalid email or password' });
});

module.exports = router;
