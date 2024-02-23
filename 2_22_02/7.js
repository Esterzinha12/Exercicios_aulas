// Exercício 7: Programa que realiza levantamento de candidatos para vagas de emprego.

function Levantamento(candidatos) {
    let numHomens = 0;
    let numMulheres = 0;
    let somaIdadeHomensExperiencia = 0;
    let numHomensExperiencia = 0;
    let numMulheresExperienciaMenos35 = 0;
    let menorIdadeMulheresExperiencia = Infinity;

    candidatos.forEach(candidato => {
        if (candidato.idade === 0) {
            return;
        }

        if (candidato.sexo === 1) { 
            numHomens++;
            if (candidato.experiencia === 1) { 
                somaIdadeHomensExperiencia += candidato.idade;
                numHomensExperiencia++;
            }
            if (candidato.idade > 45) {
                numHomensMais45++;
            }
        } else { 
            numMulheres++;
            if (candidato.experiencia === 1 && candidato.idade < 35) {
                numMulheresExperienciaMenos35++;
            }
            if (candidato.experiencia === 1 && candidato.idade < menorIdadeMulheresExperiencia) {
                menorIdadeMulheresExperiencia = candidato.idade;
            }
        }
    });

    const idadeMediaHomensExperiencia = somaIdadeHomensExperiencia / numHomensExperiencia;
    const percentualHomensMais45 = (numHomensMais45 / numHomens) * 100;

    return {
        numHomens,
        numMulheres,
        idadeMediaHomensExperiencia,
        percentualHomensMais45,
        numMulheresExperienciaMenos35,
        menorIdadeMulheresExperiencia
    };
}

const candidatos = [
    { idade: 30, sexo: 1, experiencia: 1 },
    { idade: 25, sexo: 2, experiencia: 2 },
    { idade: 40, sexo: 1, experiencia: 2 },
    { idade: 50, sexo: 1, experiencia: 1 },
    { idade: 35, sexo: 2, experiencia: 1 },
    { idade: 55, sexo: 1, experiencia: 1 },
    { idade: 0, sexo: 0, experiencia: 0 } 
];

console.log("Dados dos candidatos:", candidatos);

const resultadoLevantamento = Levantamento(candidatos);

console.log("Número de candidatos do sexo masculino:", resultadoLevantamento.numHomens);
console.log("Número de candidatos do sexo feminino:", resultadoLevantamento.numMulheres);
console.log("Idade média dos homens com experiência:", resultadoLevantamento.idadeMediaHomensExperiencia.toFixed(2));
console.log("Porcentagem dos homens com mais de 45 anos:", resultadoLevantamento.percentualHomensMais45.toFixed(2) + "%");
console.log("Número de mulheres com idade inferior a 35 anos e com experiência no serviço:", resultadoLevantamento.numMulheresExperienciaMenos35);
console.log("Menor idade entre as mulheres que já têm experiência no serviço:", resultadoLevantamento.menorIdadeMulheresExperiencia);
