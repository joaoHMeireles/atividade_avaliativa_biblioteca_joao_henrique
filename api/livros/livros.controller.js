const express = require('express');
const router = express.Router();
const livrosHandler = require("./livros.handler");

router.get('/', (req, res) => {
    res.json(livrosHandler.buscarLivros());
});

router.get('/:id', (req, res) => {
    res.json(livrosHandler.buscarLivro(req.params.id));
});

router.post("/", (req, res) => {
    res.json(livrosHandler.inserirLivro(req.body));
})

router.put("/:id", (req, res) => {
    res.json(livrosHandler.atualizarLivro(req.body, req.params.id));
})

router.delete("/:id", (req, res) => {
    res.json(livrosHandler.removerLivro(req.params.id));
})

module.exports = router;