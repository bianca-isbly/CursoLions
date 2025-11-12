// Atividade 4:

// Escreva um programa que tenha um array com as notas de 10 alunos,
// com isso:
// 1. Calcule e exiba a média das notas da turma.
// 2. Encontre e exiba a nota mais alta e a nota mais baixa.
// 3. Conte e exiba quantas notas estão acima da média calculada.
// 4. Adicione uma nova nota ao array e exiba o array atualizado.
// 5. Conte e exiba quantas notas são consideradas reprovadas (abaixo de
// 8.0).

let notas = [5, 8.5, 6, 7, 4, 9.5, 10, 6.7, 9.5, 8.9];
let soma = 0;
let media = 0;
let notaAlta = 0;
let notaBaixa = 11;
let acimaMedia = [];

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i];
  media = soma / notas.length;
}

for (let i = 0; i < notas.length; i++) {
  const numeroAtual = notas[i];
  if (numeroAtual > notaAlta) {
    notaAlta = numeroAtual;
  }
}

for (let i = 0; i < notas.length; i++) {
  const numeroAtual = notas[i];
  if (numeroAtual < notaBaixa) {
    notaBaixa = numeroAtual;
  }
}

// console.log(`A média da turma é ${media.toFixed(1)}`);
// console.log(`A nota mais alta é ${notaAlta}`);
// console.log(`A nota mais baixa é ${notaBaixa}`);

for (let i = 0; i < notas.length; i++) {
    
    if (notas[i] >= media) {
        acimaMedia.push(notas[i]);
    }
  }

console.log(`A média da turma é ${media.toFixed(1)}\nA nota mais alta é ${notaAlta}\nA nota mais baixa é ${notaBaixa}\nO total de notas acima da média são: ${acimaMedia.length}\nSendo elas: ${acimaMedia.join(', ')}`);
// O .join() é um método de array em JavaScript usado para transformar todos os elementos de um array em uma única string.
// por padrão " .join() " --> usa , para separar. espaço dps da vírgula como no ex, ajuda a separar os valores. --> para separar os parâmetros.