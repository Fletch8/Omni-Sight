const db = require('./models')
const currency = require('./models/currency')

db.currency.create({
    name: 'DOGE-USD',
    price: 0.1
}).then((currency)=> {
    console.log(currency.get().price)
})