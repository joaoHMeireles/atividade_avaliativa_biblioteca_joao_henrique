const express = require('express');
const router = express.Router();
const autoresHandler = require("./autores.handler");

router.get('/', async (req, res) => {
    res.json(await autoresHandler.buscarAutores());
});

router.get('/:id', async (req, res) => {
    res.json(await autoresHandler.buscarAutor(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await autoresHandler.inserirAutor(req.body));
})

router.put("/:id", async (req, res) => {
    res.json(await autoresHandler.atualizarAutor(req.body, req.params.id));
})

router.delete("/:id", async (req, res) => {
    res.json(await autoresHandler.removerAutor(req.params.id));
})

module.exports = router;