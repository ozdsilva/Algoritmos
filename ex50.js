const numbers = [3,22,31,47,15,6,7,8,9,10]
let drawnNumbers = []
let drawn = 0
let turns = 3
let fromFive = 0
let divThree = 0

for (let i = turns; i > 0; i--) {
  drawn = numbers[Math.floor(Math.random() * numbers.length)]
  drawnNumbers.push(drawn)
  if (drawn > 5) {
    fromFive++
  } 
  if ((drawn % 3) === 0) {
    divThree++
  } 
  
}
  
console.log(`The drawns numbers were ${drawnNumbers}, where ${divThree} can be divided by 3 an ${fromFive} are higher than 5.`)