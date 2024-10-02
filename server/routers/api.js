const express = require('express');
const router = express.Router();
// const dbPool = require('../src/config/dbconnect-postgresql');

const testRouter = require('./test');

router.get("/", (req, res) => {
  res.send("hello api router");
});

router.get('/example', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.use("/test", testRouter)

module.exports = router;
