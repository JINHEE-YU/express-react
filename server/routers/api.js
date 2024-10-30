const express = require('express');
const router = express.Router();
// const dbPool = require('../src/config/dbconnect-postgresql');

const logger = require('../src/config/log-winston'); // Winston 로거 가져오기

router.get("/", (req, res) => {
  logger.info("API Router 접속. call /api");
  res.send("hello api router");
});

router.get('/example', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const testRouter = require('./test');
router.use("/test", testRouter)

const jwtRouter = require('./jwt');
router.use("/jwt", jwtRouter);

module.exports = router;
