// Exercício 10: Programa que lê um número indeterminado de dados sobre a audiência de um canal de TV.

function calcularVencedor(casas) {
    let totalGolsTimeA = 0;
    let totalGolsTimeB = 0;

    casas.forEach(casa => {
        totalGolsTimeA += casa.golsTimeA;
        totalGolsTimeB += casa.golsTimeB;
    });

    if (totalGolsTimeA > totalGolsTimeB) {
        return "TIME A";
    } else if (totalGolsTimeB > totalGolsTimeA) {
        return "TIME B";
    } else {
        return "EMPATE";
    }
}

const casas = [
    { golsTimeA: 2, golsTimeB: 1 },
    { golsTimeA: 1, golsTimeB: 3 },
    { golsTimeA: 2, golsTimeB: 2 },
    { golsTimeA: 3, golsTimeB: 2 },
    { golsTimeA: 0, golsTimeB: 0 } ]

console.log("Dados dos jogos:", casas);

const vencedor = calcularVencedor(casas);
console.log("Vencedor:", vencedor);
