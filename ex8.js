let m = 185.72

let km = (m / 1000).toFixed(5)

let hm = (m / 100).toFixed(4)

let dam = (m / 10).toFixed(3)

let dm =  (m / 0.1).toFixed(1)

let cm = (m / 0.01).toFixed(1)

let mm = (m / 0.001).toFixed(1)

console.log("A distância de " + m + "m corresponde a:")
console.log(km + "Km\n" +
  hm + "Hm\n" +
  dam + "Dam\n" +
  dm + "dm\n" +
  cm + "cm\n" +
  mm + "mm")