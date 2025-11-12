// Atividade 4:

// Escreva um programa que tenha um array com as notas de 10 alunos,
// com isso:
// 1. Calcule e exiba a média das notas da turma.
// 2. Encontre e exiba a nota mais alta e a nota mais baixa.
// 3. Conte e exiba quantas notas estão acima da média calculada.
// 4. Adicione uma nova nota ao array e exiba o array atualizado.
// 5. Conte e exiba quantas notas são consideradas reprovadas (abaixo de
// 8.0).

let notas = [5, 6, 8, 10, 10, 9, 7, 8, 10, 6];
let soma = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
    media = soma / notas.length;
}

console.log(`A média da turma é ${media}.`);