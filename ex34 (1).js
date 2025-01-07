let height = 1.99
let weight = 100
let imc = weight / (height ** 2)

function getIMCCategory(imc) {
    if (imc < 18.5) return "Underweight";
    if (imc < 25) return "Ideal weight";
    if (imc < 30) return "Overweight";
    if (imc < 40) return "Obesity";
    return "Morbid obesity";
}

console.log(`IMC is ${imc.toFixed(2)}. ${getIMCCategory(imc)}.`);