//EXERCÍCIOS - Laço for em JavaScript

//1. Controle de Estoque
//Você tem um array com a quantidade de produtos em estoque:
//let estoque = [12, 0, 5, 8, 0, 3];
//Use um for para percorrer o array e exiba:
//- “Produto X está em falta” se a quantidade for 0
//- “Produto X disponível” caso contrário.
//Dica: use if/else e o índice i para identificar o número do produto.

let estoque = [12, 0, 5, 8, 0, 3];

for (let posicao = 0; posicao < estoque.length; posicao++) {
  if (estoque[posicao]) {
    console.log(`O produto ${posicao} está disponível.`);
  } else {
    console.log(`O produto ${posicao} está em falta.`);
  }
}

//2. Soma de Números Pares
//Crie um array com 10 números inteiros.
//Percorra com um for e calcule a soma apenas dos números pares.
//Dica: use o operador % para verificar se o número é par (num % 2 === 0).

let num = [10, 15, 30, 45, 50, 65, 70, 85, 90, 105];
let soma1 = 0;
let resto;

for (let i = 0; i < num.length; i = i + 1) {
  if (num[i] % 2 == 0) {
    soma1 = soma1 + num[i];
    console.log(`A soma dos números pares é ${soma1}`);
  } else {
    resto = num[i];
    console.log(`O número ${resto} é ímpar, não é possível somá-lo.`);
  }
}
// para printar os últimos dois resultados e deixar a lógica (for) "escondida".
//console.log(`A soma dos números pares é ${soma}`);
//console.log(`O número ${resto} é ímpar, não é possível somá-lo.`);

// 3. Média das Notas
// Dado um array com as notas de um aluno:
// let notas = [7, 5, 8, 9, 6];
// Use um for para calcular a média e exiba:
// - “Aprovado” se a média for maior ou igual a 6
// - “Reprovado” caso contrário.
// Dica: some todas as notas com o for, depois divida pelo tamanho do array.

const prompt = require("prompt-sync")();

let nomeAluno = prompt("Nome do aluno(a): ");

let notasAluno = [8, 7, 5, 7, 9];
let soma = 0;
let media = 0;

for (let i = 0; i < notasAluno.length; i++) {
  soma = soma + notasAluno[i]; // soma = 0 + cada nota do aluno [posicao0, posicao1, posicao2, posicao3, posicao4, posicao5]
}

media = soma / notasAluno.length; // resultado da soma, dividido pelo número de notas dentro do array notasAluno.
console.log(`A média do aluno(a) ${nomeAluno} é de ${media}`);

if (media >= 6) {
  console.log(
    `O aluno(a) ${nomeAluno} foi aprovado, com média de ${media}, sendo superior a 6.`
  );
} else {
  console.log(
    `O aluno(a) ${nomeAluno} foi reprovado, com média de ${media}, sendo inferior a 6.`
  );
}

// 4. Contador de Palavras Curta/Longa
// Dado o array:
// let palavras = ["sol", "computador", "lua", "montanha", "céu"];
// Mostre quantas palavras têm menos de 5 letras e quantas têm 5 ou mais.
// Dica: use palavras[i].length para saber o tamanho de cada palavra.

let palavras = ["sol", "computador", "lua", "montanha", "céu"];

// let palavras = []
// palavras.push(prompt("Digite a palavra: "));

for (let i = 0; i < palavras.length; i++) {
  let numLetras = 0 + palavras[i].length;

  if (numLetras < 5) {
    console.log(`A palavra ${palavras[i]} é MENOR que 5 letras`);
  } else {
    console.log(`A palavra ${palavras[i]} é MAIOR que 5 letras`);
  }
}

// 5. Multiplicação de Elementos
// Crie um array com 5 números e outro array vazio.
// Use um for para multiplicar cada número por 3 e armazenar o resultado no novo array.
// Dica: use novoArray.push(valor) dentro do for.

let numeros = [5, 20, 35, 50, 10];
let resultado = [];
let novoArray = [];

for (let i = 0; i < numeros.length; i++) {
  resultado = numeros[i] * 3;
  //console.log(resultado);
  novoArray.push(resultado);
  console.log(`O resultado do número ${numeros[i]}x3 é = ${novoArray[i]}.`);
}

// 6. Busca de Nome
// Crie um array com nomes de convidados.
// Defina uma variável nomeProcurado e use um for para verificar se ele está na lista.
// Exiba “Convidado confirmado” ou “Não está na lista”.
// Dica: compare com if (nomes[i] === nomeProcurado).

let convidados = ["Isabela", "Carlos", "Gabriel", "Patrícia", "Laura"]; // 5
let nomeProcurado;
let convidadeConfirmado = false;

for (let i = 0; i < convidados.length; i++) {
  if (convidados[i] == "Gabriel") {
    convidadeConfirmado = true;
    console.log("Convidado confirmado!");
    break;
  }
}

if (convidadeConfirmado == false) {
  console.log("Não está na lista!");
}

// 7. Temperaturas da Semana
// Dado um array com as temperaturas de 7 dias:
// let temperaturas = [22, 25, 19, 30, 28, 24, 26];
// Use um for para contar quantos dias tiveram temperatura acima de 25°C.
// Dica: crie uma variável cont e incremente com cont++ quando a condição for atendida.

let temperaturas = [22, 25, 19, 30, 28, 24, 26];
let verificar = [];
let dias = 0;

for (let i = 0; i < temperaturas.length; i++) {
  if (temperaturas[i] > 25) {
    verificar.push(temperaturas[i]);
    dias = dias + 1;
  }
}

console.log(`Dias com temperaturas acima de 25º: ${dias}`);

// 8. Relatório de Notas
// Você tem os nomes e notas de alunos em dois arrays:
// let alunos = ["Ana", "Bruno", "Carlos", "Diana"];
// let notas = [8, 4, 6, 9];
// Use um for para exibir:
// Ana - Aprovado
// Bruno - Reprovado
// ...
// Dica: use o mesmo índice i para acessar alunos[i] e notas[i].

let alunos = ["Ana", "Bruno", "Carlos", "Diana"];
let notas = [8, 4, 6, 9];

for (let i = 0; i < alunos.length; i++) {
  if (notas[i] >= 6) {
    console.log(`O ALUNO(A) ${alunos[i]} ESTÁ APROVADO(A)!!`);
  } else {
    console.log(`O ALUNO(A) ${alunos[i]} ESTÁ REPROVADO(A)!!`);
  }
}

// 9. Tabela de Multiplicação
// Crie um programa que exiba a tabuada do 7 (de 1 até 10) usando um for.
// Dica: dentro do for, mostre 7 x i = resultado.

let tabuada7 = 7;
let i;

for (i = 0; i <= 10; i++) {
  console.log(`O resultado de ${tabuada7}x${[i]} é = ${i * tabuada7}.`);
}

// 10. Ajuste de Preços
// Você tem os preços de produtos em um array:
// let precos = [10, 20, 35, 50, 5];
// Use um for para aumentar 10% em cada preço e exiba o novo valor.
// Dica: multiplique cada preço por 1.1 e use toFixed(2) para arredondar.

let precos = [10, 20, 35, 50, 5];

for (let i = 0; i < precos.length; i++) {
  let aumento10 = precos[i] * 1.1;
  console.log(
    `O valor ${
      precos[i]
    }, teve um aumento de 10%, totalizando: ${aumento10.toFixed(2)}`
  );
}
