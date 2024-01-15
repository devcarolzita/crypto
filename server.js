
// server.js

import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
const SERVER_KEY = import.meta.env.VITE_SERVER_KEY ;

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware para habilitar o CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5175');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', async (req, res) => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': SERVER_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    res.json(json);
  } catch (ex) {
    console.error('Error fetching data from CoinMarketCap API:', ex);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
