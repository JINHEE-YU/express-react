const express = require('express');
const router = express.Router();
// const dbPool = require('../src/config/dbconnect-postgresql');

const testRouter = require('./test');

router.use("/test", testRouter)

module.exports = router;
