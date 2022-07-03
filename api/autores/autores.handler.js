const {save, get, getById, remove} = require('../../crud/index');

async function buscarAutores() {
    return await get("autores");
};

async function buscarAutor(id) {
    return await getById("autores", id)
}

async function inserirAutor(dado) {
    return await save("autores", false, dado)
}

async function atualizarAutor(dado, id) {
    return await save("autores", id, dado)
}

async function removerAutor(id) {
    return await remove("autores", id)
}

module.exports = {
    buscarAutores,
    buscarAutor,
    inserirAutor,
    atualizarAutor,
    removerAutor
}