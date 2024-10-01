require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 데이터베이스 연결 테스트
pool.connect()
  .then(() => console.log('PostgreSQL 연결 성공!'))
  .catch(err => console.error('PostgreSQL 연결 오류:', err));

module.exports = pool;