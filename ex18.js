let yearBorn = 2005
let currentYear = new Date().getFullYear()

let age = currentYear - yearBorn

if (age >= 16) {
  console.log("Can vote!")
} else {
  console.log("Cannot vote.")
}