// Exercício 4: Ler 2 valores e escrever o maior deles.

const valor1 = -5;
const valor2 = 10;
console.log("Exercício 4 - Valores a serem analisados:", valor1, "e", valor2);

function encontrarMaiorValor(a, b) {
    return Math.max(a, b);
}

console.log("Resultado:", encontrarMaiorValor(valor1, valor2));
