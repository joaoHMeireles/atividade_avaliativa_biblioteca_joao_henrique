const { save, get, getById, remove } = require('../../crud/index');
const { inserirLivrosLocacao, atualizarLivrosLocacao, buscarLivrosLocacoes } = require('../livrosLocacao/livrosLocacao.handler')

async function buscarLocacoes() {
    return await get("locacoes");
};

async function buscarLocacao(id) {
    return await getById("locacoes", id)
}

async function inserirLocacao(dado) {
    const locacaoSalva = await save("locacoes", false, dado.locacao)

    for (const id_livro of dado.livros) {
        const dado = {
            id_livro: id_livro,
            id_locacao: locacaoSalva.id,
            devolvido: false
        }

        await inserirLivrosLocacao(dado)
    }

    return locacaoSalva
}

async function atualizarLocacao(dado, id) {
    const livrosLocacao = await buscarLivrosLocacoes()

    for (const livro of livrosLocacao) {
        if (livro.id_locacao == id) {
            for (const livroLocacao of dado.livros) {
                if (livroLocacao.id_livro == livro.id_livro) {
                    const dado = {
                        id_livro: livro.id_livro,
                        id_locacao: id,
                        devolvido: livroLocacao.devolvido
                    }
                    await atualizarLivrosLocacao(dado, livro.id)
                }
            }
        }
    }

    return await buscarLivrosLocacao(id)
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