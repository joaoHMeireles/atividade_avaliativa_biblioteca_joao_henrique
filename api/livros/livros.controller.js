const express = require('express');
const router = express.Router();
const livrosHandler = require("./livros.handler");

router.get('/', async (req, res) => {
    res.json(await livrosHandler.buscarLivros());
});

router.get('/:id', async (req, res) => {
    res.json(await livrosHandler.buscarLivro(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await livrosHandler.inserirLivro(req.body));
})

router.put("/:id", async (req, res) => {
    res.json(await livrosHandler.atualizarLivro(req.body, req.params.id));
})

router.delete("/:id", async (req, res) => {
    res.json(await livrosHandler.removerLivro(req.params.id));
})

module.exports = router;