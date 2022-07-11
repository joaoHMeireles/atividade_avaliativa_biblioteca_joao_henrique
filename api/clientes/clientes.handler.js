const { save, get, getById, remove } = require('../../crud/index');

async function buscarClientes() {
    return await get("clientes");
};

async function buscarCliente(id) {
    return await getById("clientes", id)
}

async function inserirCliente(dado) {
    return await save("clientes", false, dado)
}

async function atualizarCliente(dado, id) {
    return await save("clientes", id, dado)
}

async function removerCliente(id) {
    return await remove("clientes", id)
}

module.exports = {
    buscarClientes,
    buscarCliente,
    inserirCliente,
    atualizarCliente,
    removerCliente
}