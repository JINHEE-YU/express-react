const express = require('express');
const app = express();
const apiRouter = require('./Router/api');

app.use('/api/', apiRouter);

const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})