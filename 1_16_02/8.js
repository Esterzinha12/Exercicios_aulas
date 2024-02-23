// Exercício 8: Ler 3 valores e escrevê-los em ordem crescente.

const valor1 = 20;
const valor2 = 5;
const valor3 = 15;
console.log("Exercício 8 - Valores a serem analisados:", valor1, ",", valor2, "e", valor3);

function ordenarValores(a, b, c) {
    const menor = Math.min(a, b, c);
    const maior = Math.max(a, b, c);
    const medio = a + b + c - menor - maior;
    return [menor, medio, maior];
}

console.log("Resultado:", ordenarValores(valor1, valor2, valor3));
