// Exercício 2: Ler as notas da 1a e 2a avaliação de um aluno.
// Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado
// (considerar que se a nota for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.

const nota1 = 8;
const nota2 = 6;
console.log("Notas a serem analisadas:", nota1, "e", nota2);

function verificarAprovacao(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    const mensagem = media >= 7 ? "Aprovado" : "Reprovado";
    return `${mensagem} com média ${media.toFixed(2)}`;
}

// Resultado
console.log("Resultado:", verificarAprovacao(nota1, nota2));
