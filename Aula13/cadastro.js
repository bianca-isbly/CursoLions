const prompt = require("prompt-sync")();
let usuarios = require("./usuarios");

function cadastro() {
  console.log(`Cadastrando um usuário: `);
  let id = usuarios.length + 1;
  // let id = Math.floor(Math.random() * 10);
  let condicao = true;
  let email;
  while (condicao) {
    email = prompt("Email: ");

    if (usuarios.some((usuarios) => email === usuarios.email)) {
      console.log("email já cadastrado, tente novamente");
    } else {
      condicao = false;
    }
  }

  let nome = prompt("Nome do usuário: ");
  let idade = parseInt(prompt("Idade: "));
  let telefone = parseInt(prompt("Telefone: "));

  usuarios.push({
    id: id,
    email: email,
    nome: nome,
    idade: idade,
    telefone: telefone,
  });
}

module.exports = cadastro;
