const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/api/datos', (req, res) => {
    res.json({
        nombre: 'coder',
        apellido: 'house',
        edad: 25,
        email: 'coder@house',
        telefono: '12345678'
    })
})

app.listen(8080)