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
    show(req,res) {const id = req.params.id
        const sql = "SELECT * FROM  dbselecao.bdcopa WHERE idselecao=?;"
    conexao.query(sql, id, (erro, resultado)=>{
        const linha = resultado[0]
        if (erro) {
            console.log(erro)
            //TODO: STATUS 404 ERROR
        } else {
            res.status(200).json(linha)
        }
    })


    }

    // Criar dados
    store (req,res) {
        const selecao = req.body
    const sql = "INSERT INTO dbselecao.bdcopa SET ?;"
    conexao.query(sql, selecao, (erro, resultado)=>{
        if (erro) {
            console.log(erro)
            //TODO: STATUS 404 ERROR
        } else {
            res.status(201).json(resultado)
        }
    })
    }

    // Atualizar
    update(req,res){
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE dbselecao.bdcopa SET ? WHERE idselecao = ?;"

    console.log(id)
    console.log(selecao)

    conexao.query(sql, [selecao, id], (erro, resultado) => {
        if (erro) {
            console.log(erro)
            return res.status(500).json(erro)
        }

        res.status(200).json({
            mensagem: "Seleção atualizada com sucesso!",
            resultado
        })
    })
        
    }

    //remover dados
    delete (req,res){
        const id = req.params.id
        const sql = "DELETE FROM dbselecao.bdcopa WHERE idselecao=?;"
    conexao.query(sql, id, (erro, resultado)=>{
        const linha = resultado[0]
        if (erro) {
            console.log(erro)
            //TODO: STATUS 404 ERROR
        } else {
            res.status(200).json(linha)
        }
    })
    res.status(200).json(resultado)
    }
}
//padrao singleton
export default new SelecaoController()