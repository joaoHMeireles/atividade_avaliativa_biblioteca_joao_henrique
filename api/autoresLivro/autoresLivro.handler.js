const {save, get, getById, remove} = require('../../crud/index');

async function buscarAutoresLivros() {
    return await get("autores_livro");
};

async function buscarAutoresLivro(id) {
    return await getById("autores_livro", id)
}

async function inserirAutoresLivrFo(dado) {
    return await save("autores_livro", false, dado)
}

async function atualizarAutoresLivro(dado, id) {
    return await save("autores_livro", id, dado)
}

async function removerAutoresLivro(id) {
    return await remove("autores_livro", id)
}

module.exports = {
    buscarAutoresLivros,
    buscarAutoresLivro,
    inserirAutoresLivro,
    atualizarAutoresLivro,
    removerAutoresLivro
}