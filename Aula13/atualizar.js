const forEach = require("for-each");
const listar = require("./listar");
const prompt = require("./prompt");
let usuarios = require("./usuarios");

function atualizar() {
  listar(usuarios);
  let escolha = parseInt(prompt("Escolha um usuário pelo ID para atualizar: "));
  let busca = usuarios.forEach((usuarioEscolhido) => {
    if (escolha == usuarioEscolhido.id) {
      console.log(`Atualizando os dados de um usuário: `);
      let novoNome = prompt("Novo nome do usuário: ");
      let novaIdade = parseInt(prompt("Idade: "));
      let novoTelefone = parseInt(prompt("Telefone: "));
      let novoEmail = prompt("Novo e-mail: ");
      usuarioEscolhido.nome = novoNome;
      usuarioEscolhido.idade = novaIdade;
      usuarioEscolhido.telefone = novoTelefone;
      usuarioEscolhido.email = novoEmail;
      console.log(`ERRO: Usuário com o ID ${escolha} não foi encontrado.`);
    }
  });
  console.log(`Dados do usuário atualizado com sucesso!`);
}

module.exports = atualizar;
