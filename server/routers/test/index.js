const express = require('express');
const router = express.Router();
const dbPool = require('../../src/config/dbconnect-postgresql');


router.get("/", (req, res) => {
    res.send("hello api router");
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