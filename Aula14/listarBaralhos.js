const { baralhos } = require("./data");

function listarBaralho() {
  if (baralhos.length > 0) {
    baralhos.forEach((baralho) => {
      console.log(
        "Listagem de baralhos cadastrados:" +
          "\nID: " +
          baralho.id +
          "\nNome: " +
          baralho.nome
      );
    });
  } else {
    console.log("Nenhum baralho criado!");
  }
}

module.exports = listarBaralho;
