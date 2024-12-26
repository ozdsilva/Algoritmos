let usd = 6.30

let wallet = 10

let exchanged = (wallet / usd).toFixed(2).toString().replace('.',',')

console.log("Pode comprar USD " + exchanged)