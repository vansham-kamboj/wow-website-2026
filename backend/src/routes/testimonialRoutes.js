const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// GET /api/testimonials - Public route (published only), but returns all if admin JWT provided
router.get('/', async (req, res) => {
  try {
    let isAdmin = false;
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        jwt.verify(token, process.env.JWT_SECRET);
        isAdmin = true;
      } catch (e) {
        // Token invalid or expired, just fallback to public view
      }
    }

    const query = isAdmin 
      ? `SELECT * FROM testimonials ORDER BY display_order ASC, created_at DESC`
      : `SELECT * FROM testimonials WHERE is_published = true ORDER BY display_order ASC, created_at DESC`;

    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/testimonials - Protected route to create a testimonial
router.post('/', requireAuth, async (req, res) => {
  const { student_name, testimonial_text, country, photo_url, is_published, display_order } = req.body;

  if (!student_name || !testimonial_text || !country) {
    return res.status(400).json({ error: 'student_name, testimonial_text, and country are required' });
  }

  try {
    const result = await db.query(
      `INSERT INTO testimonials (student_name, testimonial_text, country, photo_url, is_published, display_order)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [student_name, testimonial_text, country, photo_url || null, is_published || false, display_order || 0]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/testimonials/import - Protected route for bulk importing testimonials
router.post('/import', requireAuth, async (req, res) => {
  const { testimonials } = req.body;
  if (!Array.isArray(testimonials)) {
    return res.status(400).json({ error: 'Expected an array of testimonials' });
  }

  const results = { successCount: 0, skippedCount: 0, errors: [] };
  const validItems = [];

  // 1. Validate
  testimonials.forEach((row, index) => {
    const name = row.student_name || row.StudentName || row.Name || row.name;
    const text = row.testimonial_text || row.TestimonialText || row.Text || row.text;
    const country = row.country || row.Country;
    const photoUrl = row.photo_url || row.PhotoUrl || row.photoUrl || null;

    if (!name || !text || !country) {
      results.skippedCount++;
      results.errors.push(`Row ${index + 1}: Missing student_name, testimonial_text, or country`);
      return;
    }

    validItems.push({
      student_name: name.toString().trim(),
      testimonial_text: text.toString().trim(),
      country: country.toString().trim(),
      photo_url: photoUrl ? photoUrl.toString().trim() : null
    });
  });

  // 2. Insert
  if (validItems.length > 0) {
    const client = await db.connect();
    try {
      await client.query('BEGIN');
      // Get max display order
      const maxResult = await client.query('SELECT COALESCE(MAX(display_order), -1) as max_order FROM testimonials');
      let currentOrder = parseInt(maxResult.rows[0].max_order, 10) + 1;

      for (const item of validItems) {
        await client.query(
          `INSERT INTO testimonials (student_name, testimonial_text, country, photo_url, is_published, display_order) 
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [item.student_name, item.testimonial_text, item.country, item.photo_url, false, currentOrder++]
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

// PATCH /api/testimonials/:id - Protected route to update a testimonial
router.patch('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const updates = [];
  const values = [];
  let paramCount = 1;

  const allowedFields = ['student_name', 'testimonial_text', 'country', 'photo_url', 'is_published', 'display_order'];
  
  Object.keys(req.body).forEach((key) => {
    if (allowedFields.includes(key)) {
      updates.push(`${key} = $${paramCount++}`);
      values.push(req.body[key]);
    }
  });

  if (updates.length === 0) {
    return res.status(400).json({ error: 'No valid fields provided for update' });
  }

  values.push(id);
  const query = `
    UPDATE testimonials 
    SET ${updates.join(', ')} 
    WHERE id = $${paramCount} 
    RETURNING *
  `;

  try {
    const result = await db.query(query, values);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/testimonials/:id - Protected route to delete a testimonial
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM testimonials WHERE id = $1 RETURNING id', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    
    res.json({ message: 'Testimonial deleted successfully', id });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
