exports.up = (pgm) => {
  pgm.createTable('leads', {
    id: 'id', // shorthand for serial primary key
    name: { type: 'text', notNull: true },
    phone: { type: 'text', notNull: true },
    country_interested: { type: 'text', notNull: true },
    source: { type: 'text', default: 'unknown' },
    status: { 
      type: 'text', 
      default: 'New',
      check: "status IN ('New', 'Contacted', 'Follow Up', 'Converted', 'Not Interested')"
    },
    notes: { type: 'text' },
    assigned_to: { type: 'text' },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('testimonials', {
    id: 'id',
    student_name: { type: 'text', notNull: true },
    testimonial_text: { type: 'text', notNull: true },
    country: { type: 'text', notNull: true },
    photo_url: { type: 'text' },
    is_published: { type: 'boolean', default: false },
    display_order: { type: 'integer', default: 0 },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('testimonials');
  pgm.dropTable('leads');
};
