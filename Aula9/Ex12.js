const prompt = require("prompt-sync")();

let nAleatorio;
let nUsuario;

const numeros = [0, 1, 2, 3, 4, 5];
nAleatorio = Math.floor(Math.random() * numeros.length);
console.log(nAleatorio);
console.log("Bem-vindo ao jogo de adivinhação!");
let nomeUsuario = prompt("Qual seu nome? ");

nUsuario = parseInt(prompt(`${nomeUsuario}, escolha um número entre 0 e 5 `));

if (nUsuario > 5) {
  console.log("Número inválido");
  perguntarAoUser();
}

function perguntarAoUser() {
  while (nUsuario != nAleatorio) {
    nUsuario = parseInt(
      prompt(`Tente novamente! Escolha um número entre 0 e 5 `)
    );

    if (nUsuario <= 5) {
      console.log("vc perdeu");
      nUsuario = parseInt(
        prompt(`Tente novamente! Escolha um número entre 0 e 5 `)
      );
    }
    if (nUsuario == nAleatorio) {
      console.log("Vc ganhou!");
      return;
    }
  }
}

