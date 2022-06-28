const express = require('express');
const router = express.Router();
const clientesHandler = require("./clientes.handler");

router.get('/', (req, res) => {
    res.json({message:"aaaaaaaaaaaaaaaaa"})
});

module.exports = router;