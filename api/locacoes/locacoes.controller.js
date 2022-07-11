const express = require('express');
const router = express.Router();
const locacoesHandler = require("./locacoes.handler");

router.get('/', async (req, res) => {
    res.json(await locacoesHandler.buscarLocacoes());
});

router.get('/:id', async (req, res) => {
    res.json(await locacoesHandler.buscarLocacao(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await locacoesHandler.inserirLocacao(req.body));
})

router.put("/:id", async (req, res) => {
    res.json(await locacoesHandler.atualizarLocacao(req.body, req.params.id));
})

router.delete("/:id", async (req, res) => {
    res.json(await locacoesHandler.removerLocacao(req.params.id));
})

module.exports = router;