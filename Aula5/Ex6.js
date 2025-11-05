// Crie um programa que solicite informações de uma pessoa
// Nome, email, data de nascimento
// Valide se o nome que a pessoa está inserindo é valido
// (ou seja se tem mais que x caracteres)
// Tbm valide se a pessoa é maior de 18 anos, caso seja
// permita o cadastro, se não imprima uma mensagem dizendo
// que ela n pode ser cadastrada, pq tem menos de 18 anos.

//puxar prompt
const prompt = require("prompt-sync")();

//NOME DO USUÁRIO VALIDANDO SE TEM MAIS QUE 3 CARACTERES
let nomeUsuario = prompt("Digite seu nome de usuário: ");
while (nomeUsuario.trim().length < 3) {
  //while é loop de repetição e trim é para limpar o que foi preenchido errado. (limpa se o numero de caracteres for menor que 3)
  console.log("Precisa incluir 3 ou mais caracteres no nome de usuário.");
  nomeUsuario = prompt("Digite seu nome de usuário novamente: ");
}
// E-MAIL DO USUÁRIO
let email = prompt("Digite seu e-mail: ");
//CALCULANDO A IDADE, COM O ANO DE NASCIMENTO
let anoNasc = parseFloat(prompt("Em qual ano você nasceu? "));
let dataAtual = new Date(); // data atual
let anoAtual = dataAtual.getFullYear(); // pegar somente o ano
//DESCOBRINDO A IDADE DO USUÁRIO
let idadeUsuario = anoAtual - anoNasc;
//VERIFICANDO QUANTOS ANOS FALTA PARA ELE TER 18 ANOS (SE ELE FOR MENOR)
let anosFalta = 18 - idadeUsuario;
// VALIDAÇÃO DA IDADE
if (idadeUsuario >= 18) {
  console.log(`Ótimo, seu cadastro foi validado com sucesso!`);
} else {
  console.log(
    `Sinto muito, não será possível realizar o seu cadastro, pois você é MENOR de idade. Retorne daqui ${anosFalta} anos.`
  );
}
// OBSERVAÇÃO
console.log(`*Obs.: O usuário ${nomeUsuario} tem ${idadeUsuario} anos.`);
