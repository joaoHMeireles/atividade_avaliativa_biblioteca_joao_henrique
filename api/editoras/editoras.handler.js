const crud = require('../../crud/');

function buscarEditoras() {
    return crud.get("editoras");
};

function buscarEditora(id) {
    return crud.getById("editoras", id)
}

function inserirEditora(dado) {
    return crud.save("editoras", false, dado)
}

function atualizarEditora(dado, id) {
    return crud.save("editoras", id, dado)
}

function removerEditora(id) {
    return crud.remove("editoras", id)
}

module.exports = {
    buscarEditoras,
    buscarEditora,
    inserirEditora,
    atualizarEditora,
    removerEditora
}