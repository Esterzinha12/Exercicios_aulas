// Exercício 1: Programa que recebe a idade de 15 pessoas e calcula a quantidade e porcentagem em cada faixa etária.

const idades = [10, 25, 33, 40, 15, 50, 20, 60, 35, 28, 42, 55, 30, 18, 8];

console.log("Idades", idades);

function calcularFaixaEtaria(idades) {
    const faixasEtarias = {
        "1 a 15 anos": 0,
        "16 a 30 anos": 0,
        "31 a 45 anos": 0,
        "46 a 60 anos": 0,
        ">= 61 anos": 0
    };

    idades.forEach(idade => {
        if (idade >= 1 && idade <= 15) {
            faixasEtarias["1 a 15 anos"]++;
        } else if (idade >= 16 && idade <= 30) {
            faixasEtarias["16 a 30 anos"]++;
        } else if (idade >= 31 && idade <= 45) {
            faixasEtarias["31 a 45 anos"]++;
        } else if (idade >= 46 && idade <= 60) {
            faixasEtarias["46 a 60 anos"]++;
        } else {
            faixasEtarias[">= 61 anos"]++;
        }
    });

    const totalPessoas = idades.length;
    const porcentagens = {};

    for (const faixaEtaria in faixasEtarias) {
        const quantidade = faixasEtarias[faixaEtaria];
        const porcentagem = (quantidade / totalPessoas) * 100;
        porcentagens[faixaEtaria] = porcentagem.toFixed(2) + "%";
    }

    return { faixasEtarias, porcentagens };
}

const { faixasEtarias, porcentagens } = calcularFaixaEtaria(idades);

console.log("Quantidade de pessoas em cada faixa etária:", faixasEtarias);
console.log("Porcentagem de cada faixa etária:", porcentagens);
