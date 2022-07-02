const express = require('express');
const router = express.Router();
const autores = require('./api/autores/autores.controller');
const autoresLivro = require('./api/autoresLivro/autoresLivro.controller');
const clientes = require('./api/clientes/clientes.controler');
const editoras = require('./api/editoras/editoras.controller');
const livros = require('./api/livros/livros.controller');
const locacoes = require('./api/locacoes/locacoes.controller');

router.use("/autores", autores)
router.use("/autores-livro", autoresLivro)
router.use("/clientes", clientes);
router.use("/editoras", editoras)
router.use("/livros", livros)
router.use("/locacoes", locacoes)

module.exports = router;