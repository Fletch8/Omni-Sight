const express = require('express');
require('dotenv').config();
//const passport = require('../config/ppConfig');
const router = express.Router();

// import database
// const db = require('../models');

router.get('/update/:currency', (req, res) => {    
    const currency = req.params.currency
    console.log(req.params, currency, "***************************************")
    const CoinMarketCap = require('coinmarketcap-api')
    const apiKey = process.env.COIN_API_KEY
    console.log(apiKey)
    const client = new CoinMarketCap(apiKey)

    client.getQuotes({symbol: `${currency}`})
    .then((quote)=>{
        let currPrice = quote.data[`${currency}`].quote.USD.price
        console.log(quote.data[`${currency}`].quote.USD.price)
        res.send(String(currPrice))
    }).catch(console.error) 
})

module.exports = router;