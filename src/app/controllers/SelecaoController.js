import conexao from '../database/conexao.js'
class SelecaoController {
    // LISTAR TUDO
    index(req,res){

    const sql = "SELECT * FROM  dbselecao.bdcopa;"
    conexao.query(sql, (erro, resultado)=>{
        if (erro) {
            console.log(erro)
            //TODO: STATUS 404 ERROR
        } else {
            res.status(200).json(resultado)
        }
    })
    }

    // LISTAR POR id
    show() {}

    // Criar dados
    store () {}

    // Atualizar
    update(){}

    //remover dados
    delete (){}
}
//padrao singleton
export default new SelecaoController()