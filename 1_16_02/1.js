// Exercício 1: Ler um valor e escrever se é positivo, negativo ou zero.

const valor = 0;
console.log("Valor a ser analisado:", valor);

function verificarPositivoNegativoZero(valor) {
    if (valor > 0) {
        return "positivo";
    } else if (valor < 0) {
        return "negativo";
    } else {
        return "zero";
    }
}

// Resultado
console.log("Resultado:", verificarPositivoNegativoZero(valor));
