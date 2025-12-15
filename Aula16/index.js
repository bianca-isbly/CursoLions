const express = require("express");
const app = express();
app.use(express.json());

const data = require("./data");
const criarBaralho = require("./criarBaralho");

app.listen(3000, () => {
  console.log("------------------------------------------------");
  console.log("SERVIDOR RODANDO NA PORTA 3000");
  console.log("Esqueça o terminal. Use o POSTMAN agora.");
  console.log("------------------------------------------------");
});

criarBaralho();

module.exports = app;

// faz tudo junto, depois modulariza.
