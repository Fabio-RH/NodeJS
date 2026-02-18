import express from 'express'
const app = express ()

//indicar para o express ler o body como json
app.use(express.json())

//Mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo:'C'},
    {id:2, selecao: 'EUA', grupo:'A'},
    {id:3, selecao: 'Canada', grupo:'B'},
    {id:4, selecao: 'Alemanha', grupo:'D'},

]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//Criando uma rota padr"ao (ou raiz)
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/selecoes',(req,res)=>{
    res.status(200).send(selecoes)
})

app.post('/selecoes',(req,res)=>{
    selecoes.push(req.body)
    res.status(200).send("Seleção Cadastrada com Sucesso!")
})

app.get('/selecoes/:id',(req,res)=>{
    //let index = req.params.id
    //console.log(index)
    res.json(buscarSelecaoPorId(req.params.id))
})

app.delete('/selecoes/:id',(req,res)=>{
    //let index = req.params.id
    //console.log(index)
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index,1)
    res.send("Seleção Deletada com Sucesso!")
    
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)

    if (index === -1) {
        return res.status(404).send("Seleção não encontrada!")
    }

    selecoes[index] = {
        id: selecoes[index].id,
        ...req.body
    }

    res.send("Seleção atualizada com sucesso!")
})





export default app