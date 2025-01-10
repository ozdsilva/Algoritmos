let start = 100
let end = 101
let add = 10
let count = start

if (end < start) {
  console.log("There wasn´t a count because the start number is less than the end number.")
} else {

  while (count < (end + 1)) {
    console.log(count)
    count = count + add
  }
  console.log("Finished!!!")
}