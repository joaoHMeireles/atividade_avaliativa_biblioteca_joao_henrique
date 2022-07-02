const crud = require('../../crud/');

function buscarClientes() {
    return crud.get("clientes");
};

function buscarCliente(id) {
    return crud.getById("clientes", id)
}

function inserirCliente(dado) {
    return crud.save("clientes", false, dado)
}

function atualizarCliente(dado, id) {
    return crud.save("clientes", id, dado)
}

function removerCliente(id) {
    return crud.remove("clientes", id)
}

module.exports = {
    buscarClientes,
    buscarCliente,
    inserirCliente,
    atualizarCliente,
    removerCliente
}