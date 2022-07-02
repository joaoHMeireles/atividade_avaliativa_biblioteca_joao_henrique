const crud = require('../../crud/');

function buscarLocacoes() {
    return crud.get("locacoes");
};

function buscarLocacao(id) {
    return crud.getById("locacoes", id)
}

function inserirLocacao(dado) {
    return crud.save("locacoes", false, dado)
}

function atualizarLocacao(dado, id) {
    return crud.save("locacoes", id, dado)
}

function removerLocacao(id) {
    return crud.remove("locacoes", id)
}

module.exports = {
    buscarLocacoes,
    buscarLocacao,
    inserirLocacao,
    atualizarLocacao,
    removerLocacao
}