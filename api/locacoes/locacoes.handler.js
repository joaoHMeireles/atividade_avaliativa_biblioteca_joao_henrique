const { save, get, getById, remove } = require('../../crud/index');
const { inserirLivrosLocacao, atualizarLivrosLocacao, buscarLivrosLocacoes, buscarLivrosLocacao, buscarLocacaoLivro } = require('../livrosLocacao/livrosLocacao.handler')
const { atualizarLivro, buscarLivros, buscarLivro } = require('../livros/livros.handler')
const { buscarAutoresLivro } = require("../autoresLivro/autoresLivro.handler")

async function buscarLocacoes() {
    return await get("locacoes");
};

async function buscarLocacao(id) {
    return await getById("locacoes", id)
}

async function inserirLocacao(dado) {
    const locacoes = await buscarLocacoes()
    const locacacoesCliente = locacoes.filter(e => e.id_cliente === dado.locacao.id_cliente)

    console.log(locacacoesCliente)

    for(const cliente of locacacoesCliente){
        if(cliente != null || cliente != []){
            const locacoes = await buscarLivrosLocacao(cliente.id)
            console.log(locacoes)
    
            for(const locacao of locacoes){
                if(!locacao.devolvido){
                    return {message: "Já tem uma locação pendente"}
                }
            }
        }
    }
    const locacaoSalva = await save("locacoes", false, dado.locacao)

    for (const id_livro of dado.livros) {
        const livro = await buscarLivro(id_livro)
        if(!livro.naBiblioteca){
            return {message: "Esse livro está alugado no momento"}
        }
        const autores = await buscarAutoresLivro(id_livro)
        const id_autores = autores.map(e => {
            return e.id_autor
        })

        const dado = {
            id_livro: id_livro,
            id_locacao: locacaoSalva.id,
            devolvido: false
        }

        const info = {
            livro: {
                id_editora: livro.id_editora,
                naBiblioteca: false
            },
            autores: id_autores
        }

        await atualizarLivro(info, id_livro)

        await inserirLivrosLocacao(dado)
    }

    return locacaoSalva
}

async function atualizarLocacao(dado, id) {
    const locacoesLivros = await buscarLivrosLocacao(id)

    for (const livroLocacao of dado.livros) {
        const livro = await buscarLivro(livroLocacao.id_livro)

        const autores = await buscarAutoresLivro(livroLocacao.id_livro)
        const id_autores = autores.map(e => {
            return e.id_autor
        })

        const dadoLivro = {
            livro: {
                naBiblioteca: livroLocacao.devolvido,
                id_editora: livro.id_editora
            },
            autores: id_autores
        }

        await atualizarLivro(dadoLivro, livroLocacao.id_livro)

        const dadoLocacao = {
            id_locacao: id,
            id_livro: livroLocacao.id_livro,
            devolvido: livroLocacao.devolvido
        }

        const id_locacao = locacoesLivros.find(e => e.id_livro === livroLocacao.id_livro).id

        await atualizarLivrosLocacao(dadoLocacao, id_locacao)
    }

    return locacoesLivros
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