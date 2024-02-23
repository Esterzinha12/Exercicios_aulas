// Exercício 2: Programa que recebe a idade e o peso de 15 pessoas e calcula a média dos pesos das pessoas em cada faixa etária.

const pessoas = [
    { idade: 10, peso: 30 },
    { idade: 25, peso: 60 },
    { idade: 33, peso: 70 },
    { idade: 40, peso: 80 },
    { idade: 15, peso: 45 },
    { idade: 50, peso: 75 },
    { idade: 20, peso: 55 },
    { idade: 60, peso: 85 },
    { idade: 35, peso: 65 },
    { idade: 28, peso: 60 },
    { idade: 42, peso: 75 },
    { idade: 55, peso: 80 },
    { idade: 30, peso: 65 },
    { idade: 18, peso: 50 },
    { idade: 8, peso: 35 }
];

console.log("Pessoas", pessoas);

function calcularMediaPesosPorFaixaEtaria(pessoas) {
    const faixasEtarias = {
        "1 a 10 anos": [],
        "11 a 20 anos": [],
        "21 a 30 anos": [],
        "maiores de 30 anos": []
    };

    pessoas.forEach(dado => {
        if (dado.idade >= 1 && dado.idade <= 10) {
            faixasEtarias["1 a 10 anos"].push(dado.peso);
        } else if (dado.idade >= 11 && dado.idade <= 20) {
            faixasEtarias["11 a 20 anos"].push(dado.peso);
        } else if (dado.idade >= 21 && dado.idade <= 30) {
            faixasEtarias["21 a 30 anos"].push(dado.peso);
        } else {
            faixasEtarias["maiores de 30 anos"].push(dado.peso);
        }
    });

    const mediasPesos = {};

    for (const faixaEtaria in faixasEtarias) {
        const pesos = faixasEtarias[faixaEtaria];
        const media = pesos.reduce((acc, curr) => acc + curr, 0) / pesos.length;
        mediasPesos[faixaEtaria] = media.toFixed(2);
    }

    return mediasPesos;
}

const mediasPesos = calcularMediaPesosPorFaixaEtaria(pessoas);
console.log("Médias dos pesos das pessoas por faixa etária:", mediasPesos);
