// Exercício 6: Ler 3 valores e escrever o maior deles.

const valor1 = 10;
const valor2 = 20;
const valor3 = 15;
console.log("Exercício 6 - Valores a serem analisados:", valor1, ",", valor2, "e", valor3);

function encontrarMaiorValor(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Resultado:", encontrarMaiorValor(valor1, valor2, valor3));
