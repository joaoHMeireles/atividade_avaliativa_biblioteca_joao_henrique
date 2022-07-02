const express = require('express');
const router = express.Router();
const editorasHandler = require("./editoras.handler");

router.get('/', (req, res) => {
    res.json(editorasHandler.buscarEditoras());
});

router.get('/:id', (req, res) => {
    res.json(editorasHandler.buscarEditora(req.params.id));
});

router.post("/", (req, res) => {
    res.json(editorasHandler.inserirEditora(req.body));
})

router.put("/:id", (req, res) => {
    res.json(editorasHandler.atualizarEditora(req.body, req.params.id));
})

router.delete("/:id", (req, res) => {
    res.json(editorasHandler.removerEditora(req.params.id));
})

module.exports = router;