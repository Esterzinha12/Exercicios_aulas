// Exercício 4: Programa que recebe uma lista de números positivos ou negativos e fornece a soma dos números positivos, a soma dos números negativos e a soma das duas somas parciais.

function somarNumeros(listaNumeros) {
    let somaPositivos = 0;
    let somaNegativos = 0;

    listaNumeros.forEach(numero => {
        if (numero > 0) {
            somaPositivos += numero;
        } else if (numero < 0) {
            somaNegativos += numero;
        }
    });

    const somaTotal = somaPositivos + somaNegativos;
    return { somaPositivos, somaNegativos, somaTotal };
}

const numeros = [10, -5, 20, -15, 30, -25];
console.log("Números:", numeros);

const { somaPositivos, somaNegativos, somaTotal } = somarNumeros(numeros);
console.log("Soma dos números positivos:", somaPositivos);
console.log("Soma dos números negativos:", somaNegativos);
console.log("Soma total:", somaTotal);
