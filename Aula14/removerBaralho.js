const prompt = require("../Aula13/prompt");
const { baralhos } = require("./data");
const listarBaralho = require("./listarBaralhos");

function removerBaralho() {
  listarBaralho(baralhos);

  let escolha =
    parseInt(prompt("Escolha um baralho pelo ID para removê-lo: ")) - 1;
  if (escolha < baralhos.length) {
    baralhos.splice(escolha, 1);
    console.log(`Baralho com ID ${escolha + 1} removido com sucesso.`);
  } else {
    console.log(
      `Inválido. Baralho com o ID ${escolha + 1} não foi encontrado.`
    );
  }
}
module.exports = removerBaralho;
