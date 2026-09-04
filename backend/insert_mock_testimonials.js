const { Pool } = require('pg');
require('dotenv').config();

const testimonials = [
  { text: "WOW Global changed my entire perspective. They guided me every step of the way. I couldn't have done this without their support.", name: "Amelia R.", since: "Student since 2023", country: "🇬🇧 United Kingdom" },
  { text: "The counselors actually know your name. It feels like a true partnership rather than a typical consultancy. Their care makes all the difference.", name: "Rohan K.", since: "Student since 2022", country: "🇨🇦 Canada" },
  { text: "I came in confused about my options. Six months later, I was studying in Germany. The team made it feel effortless.", name: "Priya M.", since: "Student since 2024", country: "🇩🇪 Germany" }
];

async function insertMockData() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    for (let i = 0; i < testimonials.length; i++) {
      const t = testimonials[i];
      // Note: The schema expects student_name, testimonial_text, country, photo_url, is_published, display_order
      // Our UI expects "since" and the country string with emoji. For simplicity, we can store "since" in notes or just omit it 
      // Wait, the UI hardcodes "since: Student since 202x". If we want to store it, maybe we should append it to the name or country?
      // Or we can just let the frontend format it or use the default "Student" string. We don't have a 'since' column in the schema.
      // Let's just store the country string.
      await pool.query(
        `INSERT INTO testimonials (student_name, testimonial_text, country, is_published, display_order)
         VALUES ($1, $2, $3, $4, $5)`,
        [t.name, t.text, t.country, true, i]
      );
    }
    console.log('Mock testimonials inserted successfully');
  } catch (error) {
    console.error('Error inserting mock data:', error);
  } finally {
    await pool.end();
  }
}

insertMockData();
