const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");

router.post(
  "/funcionario-login",
  funcionarioController.funcionario_find_post //aqui "post" é o método, ex: get, put, patch e etc..
);

router.post(
  "/funcionario-cadastro",
  funcionarioController.funcionario_create_post
);

module.exports = router;
