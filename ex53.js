const people = [
  {sex: "man", age: 20},
  {sex: "man", age: 30},
  {sex: "woman", age: 35},
  {sex: "man", age: 18},
  {sex: "woman", age: 38}
  ]

let man = 0

let woman =0

let womanAge = []

let manAge = []

const womanMore20 = (womanAge.filter(w => w > 20)).length

for (const person of people) {
  if(person.sex === "woman") {
    woman++
    womanAge.push(person.age)
  } else if (person.sex === "man") {
    man++
    manAge.push(person.age)
  }}

const sumManAge = manAge.reduce((callback, age) => callback + age, 0)
const avgManAge = sumManAge / manAge.length
  
const sumAge = (people.reduce((sum, individual) => {return sum + individual.age}, 0))
const avgAge = sumAge / people.length

console.log(`This result is ${man} men registred, ${woman} women registred, the average age of people is ${avgAge}, 
between the men the average is ${avgManAge.toFixed(2)} and there are ${womanMore20} women over 20 years old.`)
