// Exercício 5: Programa que recebe a idade e a altura de várias pessoas e calcula a média das alturas das pessoas com mais de 50 anos.

function calcularMediaAlturas(idades, alturas) {
    let somaAlturas = 0;
    let contador = 0;

    for (let i = 0; i < idades.length; i++) {
        if (idades[i] > 50) {
            somaAlturas += alturas[i];
            contador++;
        }
    }

    const mediaAlturas = somaAlturas / contador;
    return mediaAlturas;
}

const idades = [25, 65, 48, 52, 55, 60];
const alturas = [1.75, 1.68, 1.80, 1.70, 1.62, 1.78];
console.log("Idades:", idades);
console.log("Alturas:", alturas);

const mediaAlturas = calcularMediaAlturas(idades, alturas);
console.log("Média das alturas das pessoas com mais de 50 anos:", mediaAlturas.toFixed(2));
