const express = require('express');
const router = express.Router();
const clientesHandler = require("./clientes.handler");

router.get('/', async (req, res) => {
    res.json(await clientesHandler.buscarClientes());
});

router.get('/:id', async (req, res) => {
    res.json(await clientesHandler.buscarCliente(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await clientesHandler.inserirCliente(req.body));
})

router.put("/:id", async (req, res) => {
    res.json(await clientesHandler.atualizarCliente(req.body, req.params.id));
})

router.delete("/:id", async (req, res) => {
    res.json(await clientesHandler.removerCliente(req.params.id));
})

module.exports = router;