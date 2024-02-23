// Exercício 5: Ler 2 valores e escrevê-los em ordem crescente.

const valor1 = 15;
const valor2 = 7;
console.log("Exercício 5 - Valores a serem analisados:", valor1, "e", valor2);

function ordenarValores(a, b) {
    return [Math.min(a, b), Math.max(a, b)];
}

console.log("Resultado:", ordenarValores(valor1, valor2));
