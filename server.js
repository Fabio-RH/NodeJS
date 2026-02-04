import app from './src/app.js'
const port = 3000



//escutando a porta
app.listen(port, ()=>{
    console.log(`Servidor rodando http://localhost:${port}`)
})