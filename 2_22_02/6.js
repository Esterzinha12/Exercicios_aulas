// Exercício 6: Programa que apresenta informações sobre times de futebol.

function calcularMediaPeso(listasJogadores) {
    const pesos = [];
    const idades = [];

    listasJogadores.forEach(lista => {
        let somaPeso = 0;
        let somaIdade = 0;

        lista.forEach(jogador => {
            somaPeso += jogador.peso;
            somaIdade += jogador.idade;
        });

        pesos.push(somaPeso / lista.length);
        idades.push(somaIdade / lista.length);
    });

    const pesoMedioGeral = pesos.reduce((acc, curr) => acc + curr, 0) / pesos.length;
    const idadeMediaGeral = idades.reduce((acc, curr) => acc + curr, 0) / idades.length;

    return { pesos, idades, pesoMedioGeral, idadeMediaGeral };
}

const listasJogadores = [
    [{ idade: 25, peso: 70 }, { idade: 28, peso: 75 }, { idade: 30, peso: 80 }],
    [{ idade: 32, peso: 75 }, { idade: 27, peso: 72 }, { idade: 29, peso: 78 }],
    [{ idade: 23, peso: 68 }, { idade: 26, peso: 74 }, { idade: 31, peso: 82 }]
];

console.log("Listas de jogadores:", listasJogadores);

const { pesos, idades, pesoMedioGeral, idadeMediaGeral } = calcularMediaPeso(listasJogadores);

console.log("Pesos médios dos times:", pesos);
console.log("Idades médias dos times:", idades);
console.log("Peso médio geral:", pesoMedioGeral.toFixed(2));
console.log("Idade média geral:", idadeMediaGeral.toFixed(2));
