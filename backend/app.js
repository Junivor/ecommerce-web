require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const usersRouter = require('./routes/users');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Ecommerce API' });
});

app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: req.app.get('env') === 'development' ? err.message : 'Internal server error'
  });
});

module.exports = app;

