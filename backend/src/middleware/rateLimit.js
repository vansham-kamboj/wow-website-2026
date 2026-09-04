const rateLimit = require('express-rate-limit');

// Limit lead submissions to 5 per minute per IP to prevent spam
const leadSubmissionLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per `window` (here, per 1 minute)
  message: { error: 'Too many requests from this IP, please try again after a minute' },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = { leadSubmissionLimiter };
