import app from './src/app.js'
import conexao from './infra/conexao.js'
const port = 3000

//realizando a conexão
conexao.connect((erro) =>{
    if (erro){
        console.log("Erro na Conexão",erro)
    }else {
        console.log("Conexão Com Sucesso")
        //escutando a porta
        app.listen(port, ()=>{
        console.log(`Servidor rodando http://localhost:${port}`)
}
)}
})
