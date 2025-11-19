const listar = require("./listar");
const prompt = require("./prompt");
let usuarios = require("./usuarios");

function remover() {
  listar(usuarios);

  let escolha =
    parseInt(prompt("Escolha um usuário pelo ID para removê-lo: ")) - 1;
  if (escolha < usuarios.length) {
    usuarios.splice(escolha, 1);
    console.log(`Usuário com ID ${escolha + 1} removido com sucesso.`);
  } else {
    console.log(
      `Inválido. Usuário com o ID ${escolha + 1} não foi encontrado.`
    );
  }
}
module.exports = remover;
