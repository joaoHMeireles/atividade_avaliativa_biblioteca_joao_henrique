const { save, get, getById, remove } = require('../../crud/index');

async function buscarEditoras() {
    return await get("editoras");
};

async function buscarEditora(id) {
    return await getById("editoras", id)
}

async function inserirEditora(dado) {
    return await save("editoras", false, dado)
}

async function atualizarEditora(dado, id) {
    return await save("editoras", id, dado)
}

async function removerEditora(id) {
    return await remove("editoras", id)
}

module.exports = {
    buscarEditoras,
    buscarEditora,
    inserirEditora,
    atualizarEditora,
    removerEditora
}