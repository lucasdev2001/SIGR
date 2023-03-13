const Funcionario = require("../models/funcionario");
const crypto = require("crypto");
exports.funcionario_find_post = async (req, res) => {
  const { cpf, chaveAcesso } = req.body;
  try {
    const findFuncionario = await Funcionario.findOne({
      cpf: cpf,
      chaveAcesso: chaveAcesso,
    });
    if (findFuncionario !== null) {
      const { nome, cpf, isAdm } = findFuncionario;
      res.status(202).json({
        success: true,
        message: "Accepted",
        data: {
          nome,
          cpf,
          isAdm,
        },
      });
    } else {
      res.status(401).json({
        Error: "Unauthorized",
        message: "CPF ou Chave de acesso incorretos",
      });
    }
  } catch (error) {
    res.send(error);
  }
};

exports.funcionario_create_post = async (req, res) => {
  const { nome, cpf, isAdm } = req.body;
  const createdFuncionario = await new Funcionario({
    nome: nome,
    cpf: cpf,
    chaveAcesso: nome + crypto.randomBytes(2).toString("hex"),
    isAdm: isAdm,
  }).save();
  res.status(201).json({
    Success: "Created",
    createdFuncionario,
  });
};
