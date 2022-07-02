const express = require('express');
const router = express.Router();
const clientesHandler = require("./clientes.handler");

router.get('/', (req, res) => {
    res.json(clientesHandler.buscarClientes());
});

router.get('/:id', (req, res) => {
    res.json(clientesHandler.buscarCliente(req.params.id));
});

router.post("/", (req, res) => {
    res.json(clientesHandler.inserirCliente(req.body));
})

router.put("/:id", (req, res) => {
    res.json(clientesHandler.atualizarCliente(req.body, req.params.id));
})

router.delete("/:id", (req, res) => {
    res.json(clientesHandler.removerCliente(req.params.id));
})

module.exports = router;