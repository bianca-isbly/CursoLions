const express = require("express");
const app = express();
app.use(express.json()); // Permite ler JSON enviado pelo Postman

// Importamos seus dados (arrays vazios ou preenchidos que estão em data.js)
const { baralhos, flashcards } = require("./data");

// -----------------------------------------------------------------------
//   PARTE 1: GERENCIAMENTO DE BARALHOS (Opções 1 a 4)
// -----------------------------------------------------------------------

// OPÇÃO 1: Cadastrar Baralho (POST)
app.post("/baralhos", (req, res) => {
  const { name } = req.body; // Pega o titulo enviado no JSON

  if (!name)
    return res.status(400).json({ erro: "Nome do Baralho obrigatório" });

  const novoBaralho = {
    id: baralhos.length + 1, // Gera ID simples
    name: name,
  };

  baralhos.push(novoBaralho);
  res.status(201).json(novoBaralho);
});

// OPÇÃO 2: Listar Baralhos (GET)
app.get("/baralhos", (req, res) => {
  res.json(baralhos);
});

// OPÇÃO 3: Atualizar Baralho (PUT)
// No Postman use: PUT http://localhost:3000/baralhos/1 (onde 1 é o ID)
app.put("/baralhos/:id", (req, res) => {
  const { id } = req.params; // Pega o ID da URL
  const { titulo } = req.body; // Pega o novo título do JSON

  // Procura o baralho pelo ID
  const baralho = baralhos.find((b) => b.id == id);

  if (!baralho) return res.status(404).json({ erro: "Baralho não encontrado" });

  // Atualiza o dado
  baralho.titulo = titulo;

  res.json(baralho);
});

// OPÇÃO 4: Remover Baralho (DELETE)
// No Postman use: DELETE http://localhost:3000/baralhos/1
app.delete("/baralhos/:id", (req, res) => {
  const { id } = req.params;

  // Acha a posição no array
  const index = baralhos.findIndex((b) => b.id == id);

  if (index === -1)
    return res.status(404).json({ erro: "Baralho não encontrado" });

  // Remove do array
  baralhos.splice(index, 1);

  res.status(204).send(); // 204 = Sem conteúdo (deletado com sucesso)
});

// -----------------------------------------------------------------------
//   PARTE 2: GERENCIAMENTO DE FLASHCARDS (Opções 5 a 8)
// -----------------------------------------------------------------------

// OPÇÃO 6: Listar Flashcards (GET)
// Rota: GET http://localhost:3000/flashcards
app.get("/flashcards", (req, res) => {
  res.json(flashcards);
});

// OPÇÃO 5: Criar Flashcard (POST)
// Rota: POST http://localhost:3000/flashcards
// No Body do Postman envie: { "pergunta": "...", "resposta": "...", "baralhoId": 1 }
app.post("/flashcards", (req, res) => {
  const { pergunta, resposta, baralhoId } = req.body;

  // Validação básica
  if (!pergunta || !resposta || !baralhoId) {
    return res
      .status(400)
      .json({ erro: "Pergunta, resposta e ID do baralho são obrigatórios" });
  }

  const novoFlashcard = {
    id: flashcards.length + 1,
    pergunta: pergunta,
    resposta: resposta,
    baralhoId: baralhoId, // Vincula o card a um baralho
  };

  flashcards.push(novoFlashcard);
  res.status(201).json(novoFlashcard);
});

// OPÇÃO 7: Atualizar Flashcard (PUT)
// Rota: PUT http://localhost:3000/flashcards/1
app.put("/flashcards/:id", (req, res) => {
  const { id } = req.params;
  const { pergunta, resposta } = req.body;

  const card = flashcards.find((f) => f.id == id);

  if (!card) return res.status(404).json({ erro: "Flashcard não encontrado" });

  // Atualiza só se a pessoa mandou a informação
  if (pergunta) card.pergunta = pergunta;
  if (resposta) card.resposta = resposta;

  res.json(card);
});

// OPÇÃO 8: Remover Flashcard (DELETE)
// Rota: DELETE http://localhost:3000/flashcards/1
app.delete("/flashcards/:id", (req, res) => {
  const { id } = req.params;
  const index = flashcards.findIndex((f) => f.id == id);

  if (index === -1)
    return res.status(404).json({ erro: "Flashcard não encontrado" });

  flashcards.splice(index, 1);
  res.status(204).send();
});

// INICIA O SERVIDOR
app.listen(3000, () => {
  console.log("------------------------------------------------");
  console.log("SERVIDOR RODANDO NA PORTA 3000");
  console.log("Esqueça o terminal. Use o POSTMAN agora.");
  console.log("------------------------------------------------");
});
