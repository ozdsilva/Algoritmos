let width = 10
let height = 5

let area = width * height

if (area < 100) {
  console.log("Abaixo de 100m² = TERRENO POPULAR")
} if (area > 100 & area <= 500 ) {
    console.log("Entre 100m² e 500m² = TERRENO MASTER")
} if (area > 500) {
    console.log("Acima de 500m² = TERRENO VIP")
}