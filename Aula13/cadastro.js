const prompt = require("prompt-sync")();
let usuarios = require("./usuarios");

function cadastro() {
  console.log(`Cadastrando um usuário: `);
  let id = usuarios.length + 1;
  // let id = Math.floor(Math.random() * 10);
  let nome = prompt("Nome do usuário: ");
  let idade = parseInt(prompt("Idade: "));
  let telefone = parseInt(prompt("Telefone: "));

  let user = usuarios.push({
    id: id,
    nome: nome,
    idade: idade,
    telefone: telefone,
  });
}

module.exports = cadastro;
