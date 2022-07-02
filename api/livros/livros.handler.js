const crud = require('../../crud/');

function buscarLivros() {
    return crud.get("livros");
};

function buscarLivro(id) {
    return crud.getById("livros", id)
}

function inserirLivro(dado) {
    return crud.save("livros", false, dado)
}

function atualizarLivro(dado, id) {
    return crud.save("livros", id, dado)
}

function removerLivro(id) {
    return crud.remove("livros", id)
}

module.exports = {
    buscarLivros,
    buscarLivro,
    inserirLivro,
    atualizarLivro,
    removerLivro
}