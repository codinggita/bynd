const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

// Initialize Server Protocol
const initializeServer = async () => {
  try {
    // 1. Connect to Sovereign Database
    await connectDB();

    // 2. 🛡️ Security Middleware
    app.use(helmet()); 
    app.use(cors({
      origin: process.env.NODE_ENV === 'production' 
        ? ['https://bynd-sync.vercel.app', 'https://bynd-sync.com', 'http://localhost:5173', 'http://localhost:5174'] 
        : '*', 
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));

    // 3. 🚦 Rate Limiting
    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: { msg: 'Too many requests from this IP, please try again after 15 minutes' }
    });
    app.use('/api/', limiter);

    // 4. 📦 Performance & Logging
    app.use(compression());
    app.use(morgan('dev'));
    app.use(express.json());

    // 5. Define Routes
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/sync', require('./routes/sync'));

    // 6. Health Checks
    app.get('/', (req, res) => res.send('BYND Sovereign Backend Operational [v2.0 Production]'));
    app.get('/api/health', (req, res) => {
      res.json({ status: 'Connected', database: 'Operational' });
    });

    // 7. 🚨 Error Handling
    app.use(notFound);
    app.use(errorHandler);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`BYND Backend Core running on port ${PORT} [Production Mode]`));

  } catch (err) {
    console.error('CRITICAL STARTUP ERROR:', err.message);
    process.exit(1);
  }
};

initializeServer();
