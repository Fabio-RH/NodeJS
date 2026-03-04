import express from 'express'
const app = express ()
import conexao from './app/database/conexao.js'
import SelecaoController from './app/controllers/SelecaoController.js'

//indicar para o express ler o body como json
app.use(express.json())

//Mock
// const selecoes = [
 //   {id:1, selecao: 'Brasil', grupo:'C'},
 //   {id:2, selecao: 'EUA', grupo:'A'},
 //   {id:3, selecao: 'Canada', grupo:'B'},
 //   {id:4, selecao: 'Alemanha', grupo:'D'},

//]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//Criando uma rota padr"ao (ou raiz)
//app.get('/',(req,res)=>{
//   res.send('Hello World')
//})

app.get('/selecoes', SelecaoController.index)
    // (req,res)=>{
    // res.status(200).send(selecoes)
//     const sql = "SELECT * FROM  dbselecao.bdcopa"
//     conexao.query(sql, (erro, resultado)=>{
//         if (erro) {
//             console.log(erro)
//             //TODO: STATUS 404 ERROR
//         } else {
//             res.status(200).json(resultado)
//         }
//     })
// }




app.get('/selecoes/:id',(req,res)=>{
    //let index = req.params.id
    //console.log(index)
    //res.json(buscarSelecaoPorId(req.params.id))
        const id = req.params.id
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
})

app.post('/selecoes',(req,res)=>{

    //selecoes.push(req.body)
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

})

app.delete('/selecoes/:id',(req,res)=>{
    //let index = req.params.id
    //console.log(index)
    //let index = buscarIndexSelecao(req.params.id)
    //selecoes.splice(index,1)
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
    
})

app.put('/selecoes/:id', (req, res) => {
    //let index = buscarIndexSelecao(req.params.id)

    //if (index === -1) {
        //return res.status(404).send("Seleção não encontrada!")
    //}

    //selecoes[index] = {
        //id: selecoes[index].id,
        //...req.body
    //}
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE dbselecao.bdcopa SET ? WHERE idselecao ? ;"
        console.log (id)
        console.log (selecao)
        console.log (sql)
    conexao.query(sql, [selecao,id], (erro, resultado)=>{
        if (erro) {
            console.log(erro)
            //TODO: STATUS 404 ERROR
        } else {
            res.status(200).json(resultado)
        }
    })

    res.send("Seleção atualizada com sucesso!")
})


export default app
