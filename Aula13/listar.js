const prompt = require("prompt-sync")();
const forEach = require("for-each");
let usuarios = require("./usuarios");

function listar(usuarios) {
  usuarios.forEach((usuario) => {
    console.log(
      "Listagem de usuários cadastrados:" 
        + "\nID: " + usuario.id
        + "\nNome: " + usuario.nome
        + "\nIdade: " + usuario.idade
        + "\nTelefone: " + usuario.telefone
    );
  });
}

module.exports = listar;
