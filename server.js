const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Define an API endpoint to fetch country data
app.get('/api/countries', async(req, res) => {
    try {
        // Fetch data from the external API
        const response = await axios.get('https://api-uct.mukuru.com/taurus/v1/resources/countries');
        const countries = response.data.results;
        res.json(countries); // Send the data back to the client
    } catch (error) {
        console.error('Error fetching countries:', error);
        res.status(500).json({ error: 'Error fetching countries' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});