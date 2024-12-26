let price = 4.15

console.log("PREÇO PROMOCIONAL: de R$" + price.toString().replace('.',',') + " por R$" + (price * 0.95).toFixed(2).toString().replace('.',','))