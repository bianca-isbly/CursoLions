const express = require("express");
const app = express();
app.use(express.json());

let baralhos = [];
let flashcards = [];

// OPÇÃO 1: Cadastrar Baralho (POST)
app.post("/criarBaralho", (req, res) => {
  const { nome } = req.body; // escreve no postman o nome do baralho.

  if (!nome)
    return res
      .status(400)
      .json({ status_400: "Nome do Baralho não preenchido!" });

  const novoBaralho = {
    id: baralhos.length + 1, // id sequencial.
    nome: nome,
  };

  baralhos.push(novoBaralho);
  res
    .status(201)
    .json({ novoBaralho, status_201: "Baralho cadastrado com sucesso!" });
});

// OPÇÃO 2: Listar Baralhos (GET)
app.get("/listarBaralhos", (req, res) => {
  return res
    .status(200)
    .json({ baralhos, status_200: "Lista de baralhos cadastrados!" });
});

// OPÇÃO 3: Atualizar Baralho (PUT)
app.put("/atualizarBaralho/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let novoNome = req.body.nome;

  baralhos.forEach((baralhoEscolhido) => {
    if (id == baralhoEscolhido.id) {
      baralhoEscolhido.nome = novoNome;
      return res
        .status(200)
        .json({ baralhos, status_200: "Baralho atualizado com sucesso!" });
    }
  });

  return res.status(400).json({ status_400: "ID inválido!" });
});

// OPÇÃO 4: Remoção do Baralho (DELETE)

//  node --watch index.js --> para rodar o terminal automaticamente.

app.listen(3000, () => {
  console.log("------------------------------------------------");
  console.log("SERVIDOR RODANDO NA PORTA 3000");
  console.log("Esqueça o terminal. Use o POSTMAN agora.");
  console.log("------------------------------------------------");
});

module.exports = app;
