const mongoose = require("mongoose");
const funcionarioSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  chaveAcesso: String,
  isAdm: String,
});
const Funcionario = mongoose.model("Funcionario", funcionarioSchema);

module.exports = Funcionario;
