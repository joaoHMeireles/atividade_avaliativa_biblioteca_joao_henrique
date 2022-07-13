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
    const locacaoSalva = await save("locacoes", false, dado.locacao)

    for (const id_livro of dado.livros) {
        const dado = {
            id_livro: id_livro,
            id_locacao: locacaoSalva.id,
            devolvido: false
        }

        const livro = await buscarLivro(id_livro)
        const autores = await buscarAutoresLivro(id_livro)
        const id_autores = autores.map(e => {
            return e.id_autor
        })

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
    const livrosLocacao = await buscarLivrosLocacoes()

    for (const livro of livrosLocacao) {
        if (livro.id_locacao == id) {
            for (const livroLocacao of dado.livros) {
                if (livroLocacao.id_livro == livro.id_livro) {
                    const dadoLivro = {
                        id_livro: livro.id_livro,
                        id_locacao: id,
                        devolvido: livroLocacao.devolvido
                    }
                    //ver isso aqui mds
                    console.log(dadoLivro)

                    // const ids = {id_locacao: id, id_livro: livroLocacao.id_livro}
                    // const idLocacaoDoLivro = await buscarLocacaoLivro(ids)

                    // console.log("bbbbbbbbb")
                    // console.log(idLocacaoDoLivro);

                    // const livros = await buscarLivros()

                    // for (const livroBiblioteca of livros) {
                    //     if (livroBiblioteca.id == dadoLivro.id_livro) {
                    //         const autores = await buscarAutoresLivro(livroBiblioteca.id)
                    //         const id_autores = autores.map(e => {
                    //             return e.id_autor
                    //         })

                    //         let info = {
                    //             livro: {
                    //                 id_editora: livroBiblioteca.id_editora,
                    //                 naBiblioteca: true
                    //             },
                    //             autores: id_autores
                    //         }

                    //         await atualizarLivro(info, livroBiblioteca.id)
                    //     }
                    // }
                    
                    // await atualizarLivrosLocacao(dadoLivro, idLocacaoDoLivro)
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