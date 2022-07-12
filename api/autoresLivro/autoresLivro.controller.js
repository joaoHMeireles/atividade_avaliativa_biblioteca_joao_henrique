const express = require('express');
const router = express.Router();
const autoresLivroHandler = require("./autoresLivro.handler");

router.get('/', async (req, res) => {
    res.json(await autoresLivroHandler.buscarAutoresLivros());
});

router.get('/livro/:id', async (req, res) => {
    res.json(await autoresLivroHandler.buscarAutoresLivro(req.params.id));
});

router.get('/:id', async (req, res) => {
    res.json(await autoresLivroHandler.buscarAutorLivro(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await autoresLivroHandler.inserirAutoresLivro(req.body));
})

router.put("/:id", async (req, res) => {
    res.json(await autoresLivroHandler.atualizarAutoresLivro(req.body, req.params.id));
})

router.delete("/:id", async (req, res) => {
    res.json(await autoresLivroHandler.removerAutoresLivro(req.params.id));
})

module.exports = router;