const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const srvSocket = new IOServer(httpServer)

const clientes = {}

app.use(express.static('public'))

app.get('/test', (req, res) => {
    res.json({ msg: 'ok' })
})

srvSocket.on('connection', clientSocket => {

    console.log(`#${clientSocket.id} se conectó`)

    clientes[clientSocket.id] = clientSocket

    srvSocket.sockets.emit('nuevoCliente', { msg: `se conectó ${clientSocket.id}` })

    clientSocket.emit('saludos', { msg: 'hola, soy el servidor' })

    clientSocket.on('eventoCliente', dato => {
        console.log(dato)
    })

})

const PORT = 8080
const server = httpServer.listen(PORT)
server.on('listening', () => {
    console.log(`ya me conecté al puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error) })