let houseValue = 120
let salary = 4
let termYears = 10
let installment = houseValue / (termYears * 12)

if (installment > (salary * 0.3)) {
  console.log("The installment will be USD" + installment.toFixed(2) + ", higher of 30% of salary. LOAN DENIED.")
} else {
 console.log("The installment will be USD" + installment.toFixed(2) + ", within limit of 30% of salary. LOAN APPROVED.")
}