const http = require('http')
const express = require('express')
const iofuncionalidades = require('socket.io')
const fs = require('fs')

const app = express()
const servidorhttp = http.createServer(app)
const io = iofuncionalidades(servidorhttp)

app.use('/', express.static('public'))
app.get('/mensagens.json', (req, res) => {
    const data = fs.readFileSync('./mensagens.json', 'utf-8')
    res.json(JSON.parse(data))
})

let numero_de_pessoa = 0

io.addListener('connection', (socket) => {
    console.log('alguem conectou')
    socket.addListener("entrou_nn", () => {
        numero_de_pessoa += 1
        io.emit("entrou", numero_de_pessoa)
    })
    socket.addListener("nova mensagem", (msg, pessoa) => {
        io.emit("nova mensagem", msg, pessoa)

        
        const data = fs.readFileSync('./mensagens.json', 'utf-8')
        const mensagens = JSON.parse(data)

        const novaMensagem = {mensagem: msg, pessoa: pessoa}
        mensagens.push(novaMensagem)

        const novojson = JSON.stringify(mensagens, null, 2)

        fs.writeFileSync('./mensagens.json', novojson, 'utf-8')
    })
    const data = fs.readFileSync('./mensagens.json', 'utf-8')
    const mensagens = JSON.parse(data)
    if (mensagens.length == 0){
        numero_de_pessoa = 0
    }
})

servidorhttp.listen(1000)