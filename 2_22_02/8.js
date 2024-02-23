// Exercício 8: Programa que recebe duas notas de 6 alunos e imprime diversas informações.

function MediaNotasAlunos(notasAlunos) {
    const medias = [];
    let totalAprovados = 0;
    let totalReprovados = 0;
    let somaMedias = 0;

    notasAlunos.forEach(notas => {
        const media = (notas[0] + notas[1]) / 2;
        medias.push(media);
        somaMedias += media;

        if (media >= 7) {
            totalAprovados++;
        } else {
            totalReprovados++;
        }
    });

    const mediaGeral = somaMedias / notasAlunos.length;

    return { medias, totalAprovados, totalReprovados, mediaGeral };
}

const notasAlunos = [
    [8, 6],
    [5, 7],
    [9, 8],
    [4, 6],
    [7, 6],
    [6, 9]
];

console.log("Notas dos alunos:", notasAlunos);

const { medias, totalAprovados, totalReprovados, mediaGeral } = MediaNotasAlunos(notasAlunos);

console.log("Médias dos alunos:", medias);
console.log("Total de alunos aprovados:", totalAprovados);
console.log("Total de alunos reprovados:", totalReprovados);
console.log("Média geral:", mediaGeral.toFixed(2));

medias.forEach((media, index) => {
    if (media >= 0 && media <= 5) {
        console.log(`Aluno ${index + 1}: Média ${media} - Reprovado`);
    } else if (media >= 5.1 && media <= 6.9) {
        console.log(`Aluno ${index + 1}: Média ${media} - Recuperação`);
    } else {
        console.log(`Aluno ${index + 1}: Média ${media} - Aprovado`);
    }
});
