const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

app.get('/api/tokenData', async (req, res) => {
    const symbol = req.query.symbol;
    const apikey = '2ad9f937-58a4-458b-8613-72a2dc7350ef';
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}&CMC_PRO_API_KEY=${apikey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});