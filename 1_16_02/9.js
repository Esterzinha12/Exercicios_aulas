// Exercício 9: Faça um algoritmo que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar.

const numero = 6;
console.log("Exercício 9 - Valor a ser analisado:", numero);

function verificarParOuImpar(numero) {
    return numero % 2 === 0 ? "par" : "ímpar";
}

console.log("Resultado:", verificarParOuImpar(numero));
