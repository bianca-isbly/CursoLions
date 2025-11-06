const prompt = require("prompt-sync")();
let nAleatorio;
let nUsuario;

const numeros = [0, 1, 2, 3, 4, 5];
nAleatorio = Math.floor(Math.random() * numeros.length);
console.log(nAleatorio);
console.log("Bem-vindo ao jogo de adivinhação!");
let nomeUsuario = prompt("Qual seu nome? ");

function pergunta(){
    
    nUsuario = parseInt(prompt(`${nomeUsuario}, escolha um número entre 0 e 5 `));
    
    if (nUsuario > 5) {
      console.log("Número inválido, tente novamente!");
      while (nUsuario > 5) {
        nUsuario = parseInt(
          prompt(`${nomeUsuario}, escolha um número entre 0 e 5 `)
        );
      }
    }
    
    if (nUsuario == nAleatorio) {
      console.log("Vc ganhou!");
      return;
    }
    
    if (nUsuario != nAleatorio) {
    
      console.log("Vc perdeu");
    
    }
};
return
