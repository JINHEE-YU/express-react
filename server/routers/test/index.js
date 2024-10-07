const express = require('express');
const router = express.Router();
const dbPool = require('../../src/config/dbconnect-postgresql');

const logger = require('../../src/config/log-winston'); // Winston 로거 가져오기

router.get("/", (req, res) => {
    res.send("hello api router");
});
router.get("/log", (req, res) => {
    logger.info("I'm info.");
    logger.error("I'm error.");
    logger.warn("I'm warn.");
    logger.debug("I'm debug.");
    res.send("hello log");
});

router.get("/db-test", async (req, res) => {
    try {
        const result = await dbPool.query('select version()');
        res.status(201).json(result.rows[0]);
    }catch (err) {
        res.status(500).json({error: 'Database error'});
    }
});

module.exports = router;