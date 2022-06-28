const express = require('express');
const router = express.Router();
const clientesHandler = require("./clientes.handler");

router.get('/', (req, res) => {
    res.send("aaaaaaaaaaaaaaaaa")
});

module.exports = router;