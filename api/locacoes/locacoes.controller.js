const express = require('express');
const router = express.Router();
const locacoesHandler = require("./locacoes.handler");

router.get('/', (req, res) => {
    res.json(locacoesHandler.buscarLocacoes());
});

router.get('/:id', (req, res) => {
    res.json(locacoesHandler.buscarLocacao(req.params.id));
});

router.post("/", (req, res) => {
    res.json(locacoesHandler.inserirLocacao(req.body));
})

router.put("/:id", (req, res) => {
    res.json(locacoesHandler.atualizarLocacao(req.body, req.params.id));
})

router.delete("/:id", (req, res) => {
    res.json(locacoesHandler.removerLocacao(req.params.id));
})

module.exports = router;