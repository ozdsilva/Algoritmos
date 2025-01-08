let pricePop = 90
let priceLux = 150
let type = "luxe" //popular or luxe
let distance = 201
let days = 10
let total = 0
let priceKm1 = 0.2 //popular <= 100Km
let priceKm2 = 0.1 //popular > 100Km
let priceKm3 = 0.3 //luxe <= 200Km
let priceKm4 = 0.25 //luxe > 200Km

if (type === "popular") {
  if (distance <= 100) {
    total = priceKm1 * distance + days * pricePop
  } else { total = priceKm2 * distance + days * pricePop}
}else if (type === "luxe") {
  if (distance <= 200) {
    total = priceKm3 * distance + days * priceLux
  } else { total = priceKm4 * distance + days * priceLux}
}

console.log("The total price is USD" + total + ".");