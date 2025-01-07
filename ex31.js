let player1 = "Papel"
let player2 = "Pedra"

if (player1 === player2) {
    console.log("Tied.")
} else if ((player1 === "Pedra") && (player2 === "Papel") ){
    console.log("Player 2 won.")
} else if ((player1 === "Papel") && (player2 === "Pedra") ){
    console.log("Player 1 won.")
} else if ((player1 === "Papel") && (player2 === "Tesoura") ){
    console.log("Player 2 won.")
} else if ((player1 === "Tesoura") && (player2 === "Papel") ){
    console.log("Player 1 won.")
} else if ((player1 === "Pedra") && (player2 === "Tesoura") ){
    console.log("Player 1 won.")
} else if ((player1 === "Tesoura") && (player2 === "Pedra") ){
    console.log("Player 2 won.")
}