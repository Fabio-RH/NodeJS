import conexao from "../database/conexao.js"

class SelecaoRepository {

    // método pra deixar as queries centralizado no banco
    executarQuery(sql, valores = '', mensagemErro = 'Erro ao realizar a operação') {
        return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, resultado) => {
                if (erro) return reject(mensagemErro)
                return resolve(resultado)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM dbselecao.bdcopa;"
        return this.executarQuery(sql,'', 'Não foi possível listar')
    }

    findById(id) {
        const sql = "SELECT * FROM dbselecao.bdcopa WHERE idselecao=?;"
        return this.executarQuery(sql, id, 'Não foi possível localizar')
    }

    create(selecao) {
        const sql = "INSERT INTO dbselecao.bdcopa SET ?;"
        return this.executarQuery(sql, selecao, 'Não foi possível cadastrar')
    }

    update(selecao, id) {
        const sql = "UPDATE dbselecao.bdcopa SET ? WHERE idselecao=?;"
        return this.executarQuery(sql, [selecao, id], 'Não foi possível atualizar')
    }

    delete(id) {
        const sql = "DELETE FROM dbselecao.bdcopa WHERE idselecao=?;"
        return this.executarQuery(sql, id, 'Não foi possível apagar')
    }

    // método pra buscar seleções por grupo, em vez de id. Ele mostra todas as seleções que estão em um determinado grupo.
    findByGroup(grupo) {
        const sql = "SELECT * FROM dbselecao.bdcopa WHERE grupo_selecao=?;"
        return this.executarQuery(sql, grupo, 'Não foi possível localizar por grupo')
    }
}

export default new SelecaoRepository()