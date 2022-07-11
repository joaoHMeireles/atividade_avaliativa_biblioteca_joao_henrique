const { save, get, getById, remove } = require('../../crud/index');

async function buscarLocacoes() {
    return await get("locacoes");
};

async function buscarLocacao(id) {
    return await getById("locacoes", id)
}

async function inserirLocacao(dado) {
    return await save("locacoes", false, dado)
}

async function atualizarLocacao(dado, id) {
    return await save("locacoes", id, dado)
}

async function removerLocacao(id) {
    return await remove("locacoes", id)
}

module.exports = {
    buscarLocacoes,
    buscarLocacao,
    inserirLocacao,
    atualizarLocacao,
    removerLocacao
}