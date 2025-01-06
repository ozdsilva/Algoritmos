let s1 = 10
let s2 = 12
let s3 = 15

if (s3 < (s1 + s2)) {
  if (s2 < (s1 + s3)) {
    if(s1 < (s3 + s2)) { 
      console.log("É possível formar um triângulo.")
} else {
      console.log("Não é possível formar um triângulo.")
}}}

if (s1 === s2 & s2 === s3) {
  console.log("EQUILÁTERO: todos os lados iguais.")
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
    console.log("EISÓSCELES: dois lados iguais.")
} else {
    console.log("ESCALENO: todos os lados diferentes")
}