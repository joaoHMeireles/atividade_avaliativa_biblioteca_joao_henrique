const express = require('express');
const router = express.Router();
const autoresHandler = require("./autores.handler");

router.get('/', (req, res) => {
    res.json(autoresHandler.buscarAutores());
});

router.get('/:id', (req, res) => {
    res.json(autoresHandler.buscarAutor(req.params.id));
});

router.post("/", (req, res) => {
    res.json(autoresHandler.inserirAutor(req.body));
})

router.put("/:id", (req, res) => {
    res.json(autoresHandler.atualizarAutor(req.body, req.params.id));
})

router.delete("/:id", (req, res) => {
    res.json(autoresHandler.removerAutor(req.params.id));
})

module.exports = router;