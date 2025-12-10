const prompt = require("../Aula13/prompt");
const { baralhos } = require("./data");

function cadastrarBaralho(data) {
  let id = baralhos.length + 1;
  baralhos.push({ name: data.name, id: id });
}

module.exports = cadastrarBaralho;
