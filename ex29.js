let name = "Oznir"
let time = 9
let salary = 2000
let newSalary = 0

if (time <= 3) {
  newSalary = salary * 1.03
} if (time > 3 & time < 10 ) {
    newSalary = salary * 1.125
} if (time > 10) {
    newSalary = salary * 1.20
}

console.log(name + " will increasy the salary to USD" + newSalary + " . ")