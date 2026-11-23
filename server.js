const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello! My Express Server is Running.');
});

app.get('/about', (req, res) => {
    res.send('Welcome to my Express.js Assignment!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running at http://localhost:${PORT}");
});