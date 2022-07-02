const crud = require('../../crud/');

function buscarAutores() {
    return crud.get("autores");
};

function buscarAutor(id) {
    return crud.getById("autores", id)
}

function inserirAutor(dado) {
    return crud.save("autores", false, dado)
}

function atualizarAutor(dado, id) {
    return crud.save("autores", id, dado)
}

function removerAutor(id) {
    return crud.remove("autores", id)
}

module.exports = {
    buscarAutores,
    buscarAutor,
    inserirAutor,
    atualizarAutor,
    removerAutor
}