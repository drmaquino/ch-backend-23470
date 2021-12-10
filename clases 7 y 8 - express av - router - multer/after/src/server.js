const express = require('express')
const configRoutes = require('./router/index.js')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Cargo los routers */

configRoutes(app)

const path = require('path')

function addParam(req, res, next) {
    req.mensaje = 'HOLA'
    next()
}

app.get('/', addParam, (req, res) => {
    console.log(req.mensaje)
    res.sendFile(path.resolve(process.cwd(), 'vistas/index.html'))
})

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
