// Import the 'express' module
const express = require('express');

// Create an Express application
const app = express();

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Listen on a specific port (e.g., 3000)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});