// // Crie um programa que permita ao usuário jogar Pedra, Papel e Tesoura contra o computador.
// // O programa deve sortear a escolha do computador e determinar o vencedor.
// // Idéia:
// // 1. Definir um array opcoes com Pedra, Papel e Tesoura dentro.
// // 2. Inicializar escolhaComputador, escolhaUsuario e resultado como strings vazias.
// 3. Usar o process.stdin para pegar a escolhaUsuario.
// 4. Definir escolhaComputador como uma posição aleatória do vetor opcoes.
// // 5. Implementar a lógica:
// // 1. Se escolhaUsuario == escolhaComputador, resultado = Empate.
// // 2. Senão se escolhaUsuario == ‘Pedra' && escolhaComputador == ‘Tesoura’ || ...
// // resultado = ‘Você venceu!’.
// // 3. Senão resultado = ‘Você perdeu!’.
// // 6. Finalmente, mostrar usando console.log() a escolha do computador, do usuário e o
// // resultado.

const prompt = require("prompt-sync")();
let escolhaComputador;
let escolhaUsuario;

const opcoes = ["Pedra", "Papel", "Tesoura"];
escolhaComputador = Math.floor(Math.random() * opcoes.length);
// O método Math.floor() arredonda o número decimal para o inteiro mais próximo abaixo. Em vez de ficar 0.3... 1.5...
// e Math.random é para randonizar um número aleatório dentro do array, no caso opcoes.length = 3 > L20

console.log(
  "Bem-vindo ao jogo de pedra, papel e tesoura \n Para selecionar, use os números: \n Pedra (0), Papel (1) e Tesoura (2) \n"
); // \n é para quebrar a linha no console
let nomeUsuario = prompt("Qual seu nome? ");
escolhaUsuario = parseInt(prompt("Escolha entre 0, 1 e 2")); // parseInt é para transformar a escolha do usuário em número inteiro, igual parseFloat.

// como arrumar pra aparecer as palavras de opções? L34
// como mudar a escolha do usuário para 1,2,3 no console em vez de 0,1,2?

//condição de empate
if (escolhaUsuario == escolhaComputador) {
  console.log(
    `${nomeUsuario} escolheu ${escolhaComputador} e PC escolheu ${escolhaComputador}`
  );
  console.log("Empate!");
}
//condição de escolha do usuário ser pedra
if (escolhaUsuario == 0 && escolhaComputador == 2) {
  console.log(
    `${nomeUsuario} escolheu ${opcoes[0]} e PC escolheu ${opcoes[2]} = ${opcoes[0]} ganha de ${opcoes[2]}.`
  );
  console.log(`${nomeUsuario} ganhou!`);
}

if (escolhaUsuario == 0 && escolhaComputador == 1) {
  console.log(
    `PC escolheu ${opcoes[1]} e ${nomeUsuario} escolheu ${opcoes[0]} = ${opcoes[1]} ganha de ${opcoes[0]}.`
  );
  console.log(`${nomeUsuario} perdeu!`);
}
//condição de escolha do usuário ser papel
if (escolhaUsuario == 1 && escolhaComputador == 0) {
  console.log(
    `${nomeUsuario} escolheu ${opcoes[1]} e PC escolheu ${opcoes[0]} = ${opcoes[1]} ganha de ${opcoes[0]}.`
  );
  console.log(`${nomeUsuario} ganhou!`);
}

if (escolhaUsuario == 1 && escolhaComputador == 2) {
  console.log(
    `PC escolheu ${opcoes[2]} e ${nomeUsuario} escolheu ${opcoes[1]} = ${opcoes[2]} ganha de ${opcoes[1]}.`
  );
  console.log(`${nomeUsuario} perdeu!`);
}
//condição de escolha do usuário ser tesoura
if (escolhaUsuario == 2 && escolhaComputador == 1) {
  console.log(
    `${nomeUsuario} escolheu ${opcoes[2]} e PC escolheu ${opcoes[1]} = ${opcoes[2]} ganha de ${opcoes[1]}.`
  );
  console.log(`${nomeUsuario} ganhou!`);
}

if (escolhaUsuario == 2 && escolhaComputador == 0) {
  console.log(
    `PC escolheu ${opcoes[0]} e ${nomeUsuario} escolheu ${opcoes[2]} = ${opcoes[0]} ganha de ${opcoes[2]}.`
  );
  console.log(`${nomeUsuario} perdeu!`);
}
