const express = require('express')
const path = require('path')

const ContenedorArchivo = require('./contenedores/ContenedorArchivo.js')

//-------------------------------------------------------

const mensajesApi = new ContenedorArchivo('./DB/mensajes.txt')

const app = express()

app.use(express.static('public'))
app.set('views', './views')

//-------------------------------------------
// rutas del web server

// con render del lado del servidor
app.get('/mensajesEJS', async (req, res) => {
    const mensajes = await mensajesApi.listarAll()
    res.render('mensajes.ejs', { mensajes })
})

// con render del lado del cliente
app.get('/mensajes', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views/mensajes.html'))
})

//-------------------------------------------
// rutas de la api rest

app.get('/api/mensajes', async (req, res) => {
    const mensajes = await mensajesApi.listarAll()
    res.json(mensajes)
})

//-------------------------------------------
// arranque del servidor

const PORT = 8080
const server = app.listen(PORT, function () {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))