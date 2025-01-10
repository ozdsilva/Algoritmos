let count = 30

while (count > 0) {
  if ((count % 4) !== 0 ) {
    console.log(count)
  } else {
    console.log(`[${count}]`)
  }
  count--
}