// Exercício 9: Programa que realiza uma pesquisa de audiência de canal de TV em várias casas de uma certa cidade.

function PorcentagemAudiencia(casas) {
    let totalPessoasAssistindo = 0;
    const audienciaPorCanal = {};

    casas.forEach(casa => {
        totalPessoasAssistindo += casa.pessoasAssistindo;

        if (casa.canal !== 0) {
            if (!audienciaPorCanal[casa.canal]) {
                audienciaPorCanal[casa.canal] = 0;
            }
            audienciaPorCanal[casa.canal] += casa.pessoasAssistindo;
        }
    });

    const porcentagens = {};

    for (const canal in audienciaPorCanal) {
        const porcentagem = (audienciaPorCanal[canal] / totalPessoasAssistindo) * 100;
        porcentagens[canal] = porcentagem.toFixed(2) + "%";
    }

    return porcentagens;
}

const casas = [
    { canal: 4, pessoasAssistindo: 100 },
    { canal: 5, pessoasAssistindo: 150 },
    { canal: 7, pessoasAssistindo: 80 },
    { canal: 12, pessoasAssistindo: 120 },
    { canal: 5, pessoasAssistindo: 200 },
    { canal: 4, pessoasAssistindo: 80 },
    { canal: 12, pessoasAssistindo: 90 },
    { canal: 0, pessoasAssistindo: 0 } 
];

console.log("Dados das casas:", casas);

const porcentagensAudiencia = PorcentagemAudiencia(casas);
console.log("Porcentagem de audiência em cada canal:", porcentagensAudiencia);
