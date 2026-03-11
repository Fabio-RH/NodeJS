import conexao from "../database/conexao.js"


class SelecaoRepository{
    create(){}

    findAll(){
        const sql = "SELECT * FROM dbselecao.dbcopa "
        return new Promise ((resolve,reject)=>{
            conexao.query(sql, (erro,resultado)=>{
                if (erro){
                    return reject(erro)
                } else {
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve (row)
                }
            })
        })

}

}