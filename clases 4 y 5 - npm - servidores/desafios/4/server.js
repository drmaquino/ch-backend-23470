const http = require('http')

const getMensaje = () => {
    let mensaje

    const hora = new Date().getHours()

    if (hora >= 6 && hora <= 12) {
        mensaje = 'Buenos dias!'
    } else if (hora >= 13 && hora <= 19) {
        mensaje = 'Buenas tardes!'
    } else if ((hora >= 20 && hora <= 23) || (hora >= 0 && hora <= 5)) {
        mensaje = 'Buenas noches!'
    }
    res.end(mensaje)
}

const server = http.createServer((req, res) => {
    res.end(getMensaje())
})

const PORT = 8080

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
