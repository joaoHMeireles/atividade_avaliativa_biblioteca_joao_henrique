const express = require('express');
const router = express.Router();
const livrosLocacaoHandler = require("./livrosLocacao.handler");

router.get('/', async (req, res) => {
    res.json(await livrosLocacaoHandler.buscarLivrosLocacoes());
});

router.get('/locacao/:id', async (req, res) => {
    res.json(await livrosLocacaoHandler.buscarLivrosLocacao(req.params.id));
});

router.get('/:id', async (req, res) => {
    res.json(await livrosLocacaoHandler.buscarLivroLocacao(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await livrosLocacaoHandler.inserirLivrosLocacao(req.body));
})

router.put("/:id", async (req, res) => {
    res.json(await livrosLocacaoHandler.atualizarLivrosLocacao(req.body, req.params.id));
})

router.delete("/:id", async (req, res) => {
    res.json(await livrosLocacaoHandler.removerLivrosLocacao(req.params.id));
})

module.exports = router;