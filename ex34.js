let height = 1.99
let weight = 140
let imc = weight / (height ** 2)

if (imc < 18.5) {
  console.log("IMC is " + imc.toFixed(2) + ". Underweight.")
} else if (imc < 25) {
  console.log("IMC is " + imc.toFixed(2) + ". Ideal weigth.")
} else if (imc < 30) {
  console.log("IMC is " + imc.toFixed(2) + ". Overweigth.")
} else if (imc < 40) {
  console.log("IMC is " + imc.toFixed(2) + ". Obesity.")
} else {
  console.log("IMC is " + imc.toFixed(2) + ". Morbid obesity.")
}