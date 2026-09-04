require('dotenv').config();
const express = require('express');
const cors = require('cors');

const adminRoutes = require('./src/routes/adminRoutes');
const leadRoutes = require('./src/routes/leadRoutes');
const testimonialRoutes = require('./src/routes/testimonialRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up CORS to only allow the frontend URL
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

// Trust proxy for rate limiting if behind a reverse proxy (like Railway)
app.set('trust proxy', 1);

app.use(cors(corsOptions));
app.use(express.json());

// Basic health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Wow Global Backend is running' });
});

// Health check under /api for frontend base URL compatibility
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is awake' });
});

// API Routes
app.use('/api/admin', adminRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
