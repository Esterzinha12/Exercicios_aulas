// Exercício 10: Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B marcou.
// Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

const golsTimeA = 2;
const golsTimeB = 3;
console.log("Exercício 10 - Gols marcados pelos times A e B:", golsTimeA, "e", golsTimeB);

function verificarVencedor(golsTimeA, golsTimeB) {
    if (golsTimeA > golsTimeB) {
        return "Time A venceu.";
    } else if (golsTimeB > golsTimeA) {
        return "Time B venceu.";
    } else {
        return "EMPATE";
    }
}

console.log("Resultado:", verificarVencedor(golsTimeA, golsTimeB));
