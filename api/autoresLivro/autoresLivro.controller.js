const express = require('express');
const router = express.Router();
const autoresLivroHandler = require("./autoresLivro.handler");

router.get('/', (req, res) => {
    res.json(autoresLivroHandler.buscarAutoresLivros());
});

router.get('/:id', (req, res) => {
    res.json(autoresLivroHandler.buscarAutoresLivro(req.params.id));
});

router.post("/", (req, res) => {
    res.json(autoresLivroHandler.inserirAutoresLivro(req.body));
})

router.put("/:id", (req, res) => {
    res.json(autoresLivroHandler.atualizarAutoresLivro(req.body, req.params.id));
})

router.delete("/:id", (req, res) => {
    res.json(autoresLivroHandler.removerAutoresLivro(req.params.id));
})

module.exports = router;