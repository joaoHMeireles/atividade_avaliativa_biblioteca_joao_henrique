const { save, get, getById, remove } = require('../../crud/index');

async function buscarLivros() {
    return await get("livros");
};

async function buscarLivro(id) {
    return await getById("livros", id)
}

async function inserirLivro(dado) {
    return await save("livros", false, dado)
}

async function atualizarLivro(dado, id) {
    return await save("livros", id, dado)
}

async function removerLivro(id) {
    return await remove("livros", id)
}

module.exports = {
    buscarLivros,
    buscarLivro,
    inserirLivro,
    atualizarLivro,
    removerLivro
}