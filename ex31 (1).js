const outcomes = {
    Pedra: { Pedra: "Tied.", Papel: "Player 2 won.", Tesoura: "Player 1 won." },
    Papel: { Pedra: "Player 1 won.", Papel: "Tied.", Tesoura: "Player 2 won." },
    Tesoura: { Pedra: "Player 2 won.", Papel: "Player 1 won.", Tesoura: "Tied." }
};

const player1 = "Pedra";
const player2 = "Papel";

console.log(outcomes[player1][player2]);