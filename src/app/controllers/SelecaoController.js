import conexao from '../database/conexao.js'

class SelecaoController {

    

    // LISTAR TODAS
    index(req, res) {

        const sql = "SELECT * FROM dbselecao.bdcopa"

        conexao.query(sql, (erro, resultado) => {

            if (erro) {
                console.log(erro)
                return res.status(500).json({ erro: "Erro ao buscar seleções" })
            }

            res.status(200).json(resultado)

        })

    }


    // LISTAR POR ID
    show(req, res) {

        const id = req.params.id
        const sql = "SELECT * FROM dbselecao.bdcopa WHERE idselecao = ?"

        conexao.query(sql, id, (erro, resultado) => {

            if (erro) {
                console.log(erro)
                return res.status(500).json({ erro: "Erro ao buscar seleção" })
            }

            res.status(200).json(resultado[0])

        })

    }


    // CRIAR
    store(req, res) {

        const selecao = req.body
        const sql = "INSERT INTO dbselecao.bdcopa SET ?"

        conexao.query(sql, selecao, (erro, resultado) => {

            if (erro) {
                console.log(erro)
                return res.status(500).json({ erro: "Erro ao cadastrar seleção" })
            }

            res.status(201).json({
                mensagem: "Seleção cadastrada com sucesso",
                resultado
            })

        })

    }


    // ATUALIZAR
    update(req, res) {

        const id = req.params.id
        const selecao = req.body

        const sql = "UPDATE dbselecao.bdcopa SET ? WHERE idselecao = ?"

        conexao.query(sql, [selecao, id], (erro, resultado) => {

            if (erro) {
                console.log(erro)
                return res.status(500).json({ erro: "Erro ao atualizar seleção" })
            }

            res.status(200).json({
                mensagem: "Seleção atualizada com sucesso",
                resultado
            })

        })

    }


    // DELETAR
    delete(req, res) {

        const id = req.params.id
        const sql = "DELETE FROM dbselecao.bdcopa WHERE idselecao = ?"

        conexao.query(sql, id, (erro, resultado) => {

            if (erro) {
                console.log(erro)
                return res.status(500).json({ erro: "Erro ao deletar seleção" })
            }

            res.status(200).json({
                mensagem: "Seleção removida com sucesso",
                resultado
            })

        })

    }

}

export default new SelecaoController()