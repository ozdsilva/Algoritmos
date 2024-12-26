let price = 100

let woman = false

if (woman) {
  let finalPrice = price * 0.87
  console.log("The final price for you, a woman, is USD" + finalPrice.toFixed(2))
} else {
  let finalPrice = price * 0.95
  console.log("The final price for you, a man, is USD" + finalPrice.toFixed(2))
}