//const crud = require('../../crud/');

function buscarClientes(){
    const dados = crud.get("clientes");
    console.log(dados);
};

module.exports = {
    buscarClientes
}