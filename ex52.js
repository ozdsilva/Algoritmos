const ages = [1,40,3,4,5,6,30,19,9,20]

let higherAge = Math.max(...ages)

let avgAge = (ages.reduce((callback, initial) => callback + initial))/ages.length

let higher18 = (ages.filter(num => num > 18)).length

let lower5 = (ages.filter(num => num < 5)).length

console.log(`About the ages: ${avgAge} is the average of the ages, ${higher18} people has more than 18 years old, 
${lower5} has less the 5 years old and ${higherAge} is the higher age.`)