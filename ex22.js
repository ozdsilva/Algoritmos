let yearBirth = 2000

let currentYear = new Date().getFullYear()

let age = currentYear -  yearBirth

if (age >= 18) {
  let after = age - 18
  console.log("You are " + after + " years after the military draft.")
} else {
  let before = 18 - age
  console.log("You are " + before + " years before the military draft.")
}