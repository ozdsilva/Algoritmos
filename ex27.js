let n1 = 5.5
let n2 = 8.65

let avg = (n1 + n2) / 2
avg = avg.toFixed(1)

if (avg <= 4.9) {
  console.log("Média até 4.9: REPROVADO")
} if (avg > 4.9 & avg <= 6.9 ) {
    console.log("Média entre 5.0 e 6.9: RECUPERAÇÃO")
} if (avg > 7) {
    console.log("Média 7.0 ou superior: APROVADO")
}