// OPÇÃO 1: Cadastrar Baralho (POST)
const app = require("./index");

function criarBaralho() {
  app.post("/criarBaralho", (req, res) => {
    const { nome } = req.body; // escreve no postman o nome do baralho.

    if (!nome)
      return res.status(400).json({ erro: "Nome do baralho não preenchido!" });

    const novoBaralho = {
      id: baralhos.lenght + 1, // id sequencial.
      nome: nome,
    };

    baralhos.push(novoBaralho);
    res.status(201).json(novoBaralho);
  });
}

module.exports = criarBaralho;
