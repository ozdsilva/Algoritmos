let speed = 79
let fine = 0

if (speed > 80) {
  fine = (speed - 80) * 5
  console.log("User was fined in R$" + fine.toFixed(2))
} else {
  console.log("The speed in under allowed!")
}