PosNegZero(5);
Aprovacao(8, 6);
Votacao(2024, 2000);
maiorEntreDois(10, 20);
ordemCrescente(30, 10);
maiorEntreTres(15, 25, 10);
somaDoisMaiores(20, 10, 30);
ordemCrescenteTres(5, 3, 8);
ParImpar(7);
Vencedor(2, 2);


// 1
function PosNegZero(valor) {
    if (valor > 0) {
        console.log("Positivo");
    } else if (valor < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

// 2
function Aprovacao(nota1, nota2) {
    var media = (nota1 + nota2) / 2;
    console.log("Média:", media);
    if (media >= 7) {
        console.log("Aluno aprovado");
    } else {
        console.log("Aluno reprovado");
    }
}

// 3
function Votacao(anoAtual, anoNascimento) {
    var idade = anoAtual - anoNascimento;
    if (idade >= 16) {
        console.log("Pode votar este ano");
    } else {
        console.log("Não pode votar este ano");
    }
}

// 4
function maiorEntreDois(val1, val2) {
    if (val1 > val2) {
        console.log(val1);
    } else if (val2 > val1) {
        console.log(val2);
    } else {
        console.log("Os valores são iguais");
    }
}

// 5
function ordemCrescente(val1, val2) {
    console.log(val1 < val2 ? val1 + ", " + val2 : val2 + ", " + val1);
}

// 6
function maiorEntreTres(val1, val2, val3) {
    var maior = val1;
    if (val2 > maior) {
        maior = val2;
    }
    if (val3 > maior) {
        maior = val3;
    }
    console.log("Maior valor:", maior);
}

// 7
function somaDoisMaiores(val1, val2, val3) {
    var soma = val1 + val2 + val3 - Math.min(val1, val2, val3);
    console.log("Soma dos dois maiores:", soma);
}

// 8
function ordemCrescenteTres(val1, val2, val3) {
    var arr = [val1, val2, val3];
    arr.sort(function(a, b){return a - b});
    console.log(arr);
}

// 9
function ParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}

// 10
function Vencedor(timeA, timeB) {
    if (timeA > timeB) {
        console.log("Vencedor: TIME A");
    } else if (timeB > timeA) {
        console.log("Vencedor: TIME B");
    } else {
        console.log("EMPATE");
    }
}

