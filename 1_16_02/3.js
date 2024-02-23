// Exercício 3: Ler o ano atual e o ano de nascimento de uma pessoa.
// Escrever uma mensagem que diga se ela poderá ou não votar este ano
// (não é necessário considerar o mês em que a pessoa nasceu).

// Apresentando os valores dos anos a serem analisados
const anoAtual = 2024;
const anoNascimento = 2000;
console.log("Exercício 3 - Ano atual e ano de nascimento:", anoAtual, "e", anoNascimento);

function verificarVotacao(anoAtual, anoNascimento) {
    const idade = anoAtual - anoNascimento;
    return idade >= 16 ? "Pode votar este ano." : "Não pode votar este ano.";
}

console.log("Resultado:", verificarVotacao(anoAtual, anoNascimento));
