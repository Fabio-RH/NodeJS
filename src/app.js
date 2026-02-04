import express from 'express'
const app = express ()

//Mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo:'C'},
    {id:2, selecao: 'EUA', grupo:'A'},
    {id:3, selecao: 'Canada', grupo:'B'},
    {id:4, selecao: 'Alemanha', grupo:'D'},

]

//Criando uma rota padr"ao (ou raiz)
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/selecoes',(req,res)=>{
    res.send(selecoes)
})


export default app
