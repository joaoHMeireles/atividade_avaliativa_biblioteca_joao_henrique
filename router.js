const express = require('express');
const router = express.Router();
const clientes = require('./api/clientes/clientes.controler');

router.use("/clientes", clientes);

module.exports = router;