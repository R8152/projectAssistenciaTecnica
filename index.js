// import express from 'express' - ESmodule (Forma nova)
// const express = require('express') - commonJS (Forma antiga)
import express from 'express'

const app = express()
// função que usa alguma condição
app.use(express.json()) //converte as funções do express para objeto e usa

function buscarClientes(req, res){
    res.send("resposta da função que busca clientes") //Aqui, inicia a função que busca clientes
}
// função que chama API passando requisição com regras de :método e rota
app.get("/clientes", buscarClientes)
app.get("/", (req, res) => {
    res.send("Online")
})
app.use("/clientes", clientesRoute)
app.use((req, res) => {
    res.send("Rota não encontrada")
})
// função que roda servidor
app.listen(3000, () => {
    console.log("Servidor rodando na http://localhost:3000")
})