const db = require('./models')
// const currency = require('./models/currency')

// db.currency.create({
//     name: 'BTC',
//     price: .12
// }).then((currency)=> {
//     console.log(currency)
// })
// db.currency.create({
//     name: 'LTC',
//     price: .12
// }).then((currency)=> {
//     console.log(currency)
// })
// db.currency.create({
//     name: 'DOGE',
//     price: .12
// }).then((currency)=> {
//     console.log(currency)
// })
// db.currency.create({
//     name: 'XLM',
//     price: .12
// }).then((currency)=> {
//     console.log(currency)
// })

// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'USD'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': '0bd4476a-0e27-48bc-b1b6-74cb8bead987'
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });

require('dotenv').config();
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = process.env.COIN_API_KEY
console.log(apiKey)
const client = new CoinMarketCap(apiKey)

client.getQuotes({symbol: 'BTC'})
.then((quote)=>{
    console.log(quote.data.BTC.quote.USD.price)})
    .catch(console.error)