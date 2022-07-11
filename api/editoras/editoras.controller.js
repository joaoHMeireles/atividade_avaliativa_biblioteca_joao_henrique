const express = require('express');
const router = express.Router();
const editorasHandler = require("./editoras.handler");

router.get('/', async (req, res) => {
    res.json(await editorasHandler.buscarEditoras());
});

router.get('/:id', async (req, res) => {
    res.json(await editorasHandler.buscarEditora(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await editorasHandler.inserirEditora(req.body));
})

router.put("/:id", async (req, res) => {
    res.json(await editorasHandler.atualizarEditora(req.body, req.params.id));
})

router.delete("/:id", async (req, res) => {
    res.json(await editorasHandler.removerEditora(req.params.id));
})

module.exports = router;