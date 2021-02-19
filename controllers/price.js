const express = require('express');
require('dotenv').config();
//const passport = require('../config/ppConfig');
const router = express.Router();

// import database
// const db = require('../models');

router.get('/update/:currency', (req, res) => {    
    const currency = req.params.currency
    const CoinMarketCap = require('coinmarketcap-api')
    const apiKey = process.env.COIN_API_KEY
    console.log(apiKey)
    const client = new CoinMarketCap(apiKey)

    client.getQuotes({symbol: `${currency}`})
    .then((quote)=>{
        console.log(quote.data.currency.quote)})
        .catch(console.error)
    res.redirect('/')
})

module.exports = router;