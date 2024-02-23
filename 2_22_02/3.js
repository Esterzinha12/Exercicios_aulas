// Exercício 3: Programa que recebe um conjunto de valores inteiros e positivos e imprime o maior e o menor valor do conjunto.

function MaiorEMenorValores(valores) {
    let maior = valores[0];
    let menor = valores[0];

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }

    return { maior, menor };
}

const valores = [10, 25, 33, 40, 15, 50, 20, 60, 35, 28, 42, 55, 30, 18, 8];
console.log("Valores:", valores);

const { maior, menor } = MaiorEMenorValores(valores);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);
