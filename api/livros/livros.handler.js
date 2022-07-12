const { save, get, getById, remove } = require('../../crud/index');
const { inserirAutoresLivro, removerAutoresLivro, buscarAutoresLivros} = require("../autoresLivro/autoresLivro.handler")

async function buscarLivros() {
    return await get("livros");
};

async function buscarLivro(id) {
    return await getById("livros", id)
}

async function inserirLivro(dado) {
    dado.naBiblioteca = true
    const livroSalvo = await save("livros", false, dado.livro)

    for (const id_autor of dado.autores) {
        const dado = {
            id_autor: id_autor,
            id_livro: livroSalvo.id
        }

        await inserirAutoresLivro(dado)
    }

    return livroSalvo
}

async function atualizarLivro(dado, id) {
    const livroSalvo = await save("livros", id, dado.livro)
    const autoresLivro = await buscarAutoresLivros()

    for(const autores of autoresLivro){
        if(autores.id_livro == id){
            removerAutoresLivro(autores.id)
        }
    }

    for (const id_autor of dado.autores) {
        const dado = {
            id_autor: id_autor,
            id_livro: livroSalvo.id
        }

        await inserirAutoresLivro(dado)
    }

    return livroSalvo
}

async function removerLivro(id) {
    return await remove("livros", id)
}

module.exports = {
    buscarLivros,
    buscarLivro,
    inserirLivro,
    atualizarLivro,
    removerLivro
}