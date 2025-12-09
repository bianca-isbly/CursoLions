const prompt = require("../Aula13/prompt");
const { baralhos } = require("./data");
const listarBaralho = require("./listarBaralhos");

function atualizarBaralho(id, novoBaralho) {
  listarBaralho(baralhos);
  //let escolha = parseInt(prompt("Escolha um baralho pelo ID para atualizar: "));
  baralhos.forEach((baralhoEscolhido) => {
    if (id == baralhoEscolhido.id) {
      console.log(`Atualizando o baralho: `);
      let novoNome = prompt("Novo nome do baralho: ");
      baralhoEscolhido.nome = novoNome;
      console.log(`Baralho atualizado com sucesso!`);
    } else {
      console.log(`ERRO: Baralho com o ID ${escolha} não foi encontrado.`);
    }
  });
}

module.exports = atualizarBaralho;
