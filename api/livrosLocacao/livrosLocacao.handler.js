const { save, get, getById, remove } = require('../../crud/index');

async function buscarLivrosLocacoes() {
    return await get("livros_locacao");
};

async function buscarLivrosLocacao(id) {
    const livrosLocacoes = await buscarLivrosLocacoes()
    return livrosLocacoes.filter(e => e.id_locacao === id)
}

async function buscarLocacaoLivro(ids) {
    const livrosLocacoes = await buscarLivrosLocacoes()
    return livrosLocacoes.find(e => e.id_locacao === ids.id_locacao && e.id_livro === ids.id_livro)
}

async function buscarLivroLocacao(id){
    return await getById("livros_locacao", id)
}

async function inserirLivrosLocacao(dado) {
    return await save("livros_locacao", false, dado)
}

async function atualizarLivrosLocacao(dado, id) {
    return await save("livros_locacao", id, dado)
}

async function removerLivrosLocacao(id) {
    return await remove("livros_locacao", id)
}

module.exports = {
    buscarLivrosLocacoes,
    buscarLivrosLocacao,
    buscarLocacaoLivro,
    buscarLivroLocacao,
    inserirLivrosLocacao,
    atualizarLivrosLocacao,
    removerLivrosLocacao
}