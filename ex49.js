let intNumbers = [1,2,2.9,4,5.6,6.5]
let int = 0

for (let i = 0; intNumbers.length > i; i++) {
  if (Number.isInteger(intNumbers[i]))
    int = int + 1
  }

console.log(int)