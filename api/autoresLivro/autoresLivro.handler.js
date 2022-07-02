const crud = require('../../crud/');

function buscarAutoresLivros() {
    return crud.get("autores_livro");
};

function buscarAutoresLivro(id) {
    return crud.getById("autores_livro", id)
}

function inserirAutoresLivro(dado) {
    return crud.save("autores_livro", false, dado)
}

function atualizarAutoresLivro(dado, id) {
    return crud.save("autores_livro", id, dado)
}

function removerAutoresLivro(id) {
    return crud.remove("autores_livro", id)
}

module.exports = {
    buscarAutoresLivros,
    buscarAutoresLivro,
    inserirAutoresLivro,
    atualizarAutoresLivro,
    removerAutoresLivro
}