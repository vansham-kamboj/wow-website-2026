const express = require('express');
const db = require('../config/db');
const { requireAuth } = require('../middleware/auth');
const { leadSubmissionLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// Basic Indian phone number pattern (optional +91, followed by 10 digits)
const phonePattern = /^(?:\+?91[\s-]*)?[6-9]\d{9}$/;

// POST /api/leads - Public route for new lead submissions
router.post('/', leadSubmissionLimiter, async (req, res) => {
  const { name, phone, country_interested, source, honeypot, notes } = req.body;

  // Honeypot check: If the honeypot field is filled, silently discard as spam
  if (honeypot) {
    return res.status(200).json({ message: 'Lead submitted successfully' });
  }

  // Basic validation
  if (!name || !phone || !country_interested) {
    return res.status(400).json({ error: 'Name, phone, and country_interested are required' });
  }

  if (!phonePattern.test(phone)) {
    return res.status(400).json({ error: 'Invalid Indian phone number format' });
  }

  try {
    const result = await db.query(
      `INSERT INTO leads (name, phone, country_interested, source, notes)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [name, phone, country_interested, source || 'website', notes || null]
    );

    res.status(201).json({ 
      message: 'Lead submitted successfully', 
      lead: result.rows[0] 
    });
  } catch (error) {
    console.error('Error inserting lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/leads/import - Protected route for bulk importing leads
router.post('/import', requireAuth, async (req, res) => {
  const { leads } = req.body;
  if (!Array.isArray(leads)) {
    return res.status(400).json({ error: 'Expected an array of leads' });
  }

  const results = { successCount: 0, skippedCount: 0, errors: [] };
  const validLeads = [];

  // 1. Validate
  leads.forEach((row, index) => {
    const name = row.name || row.Name;
    const phone = row.phone || row.Phone;
    const country = row.country_interested || row.Country || row.country;
    const source = row.source || row.Source || 'imported';

    if (!name || !phone || !country) {
      results.skippedCount++;
      results.errors.push(`Row ${index + 1}: Missing name, phone, or country`);
      return;
    }

    if (!phonePattern.test(phone.toString().trim())) {
      results.skippedCount++;
      results.errors.push(`Row ${index + 1}: Invalid phone format (${phone})`);
      return;
    }

    validLeads.push({
      name: name.toString().trim(),
      phone: phone.toString().trim(),
      country: country.toString().trim(),
      source: source.toString().trim()
    });
  });

  // 2. Insert
  if (validLeads.length > 0) {
    const client = await db.connect();
    try {
      await client.query('BEGIN');
      for (const lead of validLeads) {
        await client.query(
          `INSERT INTO leads (name, phone, country_interested, source) VALUES ($1, $2, $3, $4)`,
          [lead.name, lead.phone, lead.country, lead.source]
        );
        results.successCount++;
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error in bulk import:', error);
      return res.status(500).json({ error: 'Database error during import' });
    } finally {
      client.release();
    }
  }

  res.json({
    message: `Import complete. ${results.successCount} imported, ${results.skippedCount} skipped.`,
    ...results
  });
});

// GET /api/leads - Protected route to get leads
router.get('/', requireAuth, async (req, res) => {
  const { status, country } = req.query;
  
  let query = 'SELECT * FROM leads';
  const queryParams = [];
  const conditions = [];

  if (status) {
    queryParams.push(status);
    conditions.push(`status = $${queryParams.length}`);
  }

  if (country) {
    queryParams.push(country);
    conditions.push(`country_interested = $${queryParams.length}`);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  query += ' ORDER BY created_at DESC';

  try {
    const result = await db.query(query, queryParams);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH /api/leads/:id - Protected route to update a lead's status and notes
router.patch('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  if (status === undefined && notes === undefined) {
    return res.status(400).json({ error: 'Must provide status or notes to update' });
  }

  // Build the update query dynamically
  const updates = [];
  const values = [];
  let paramCount = 1;

  if (status !== undefined) {
    const allowedStatuses = ['New', 'Contacted', 'Follow Up', 'Converted', 'Not Interested'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    updates.push(`status = $${paramCount++}`);
    values.push(status);
  }

  if (notes !== undefined) {
    updates.push(`notes = $${paramCount++}`);
    values.push(notes);
  }

  values.push(id);
  const query = `
    UPDATE leads 
    SET ${updates.join(', ')} 
    WHERE id = $${paramCount} 
    RETURNING *
  `;

  try {
    const result = await db.query(query, values);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
