// setinterval 
// every interval fetch update route
// update dom with values
// let currencies = document.getElementsByClassName('p')
// for (currency in currency){
//     console.log(currency)
// }

//const cherio = require('cheerio')

// const $ = cheerio.load('<h2 class="title">Hello world</h2>');

// $('h2.title').text('Hello there!');
// $('h2').addClass('welcome');
// $.html();

// const async getPrice = ()=>{
//     try{
//         const response = await fetch('localhost:3000/price/update/BTC')
//         console.log(response)

//     }catch(error){
//         console.log(console.error();)
//     }
// }
// const fetch = require('node-fetch')
const p = document.getElementsByClassName('coin')[0]
console.log(p)
//console.log(p1[0].innerHTML)
fetch('/price/update/BTC')
.then(response =>response.text())
.then(data=>{
    console.log(data)
})