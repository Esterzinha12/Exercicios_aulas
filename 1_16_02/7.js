// Exercício 7: Ler 3 valores e escrever a soma dos 2 maiores.

const valor1 = 10;
const valor2 = 20;
const valor3 = 15;
console.log("Exercício 7 - Valores a serem analisados:", valor1, ",", valor2, "e", valor3);

function somaDosDoisMaiores(a, b, c) {
    const arr = [a, b, c].sort((x, y) => y - x);
    return arr[0] + arr[1];
}

console.log("Resultado:", somaDosDoisMaiores(valor1, valor2, valor3));
