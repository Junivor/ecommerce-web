const fs = require('fs');
const path = require('path');
const pool = require('./pool');

async function initializeDatabase() {
  const filePath = path.join(__dirname, 'migrations', 'init.sql');
  const sql = fs.readFileSync(filePath, 'utf8');

  const statements = sql
    .split(';')
    .map((statement) => statement.trim())
    .filter(Boolean);

  try {
    await pool.query('SELECT 1');

    for (const statement of statements) {
      await pool.query(statement);
    }

    console.log('Database initialized successfully.');
  } catch (err) {
    console.error('Database initialization failed:', err);
    throw err;
  }
}

module.exports = initializeDatabase;
