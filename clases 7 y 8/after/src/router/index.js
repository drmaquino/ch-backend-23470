const { routerMascotas } = require("./mascotas")
const { routerPersonas } = require("./personas")

function config(app) {
    app.use('/api/mascotas', routerMascotas)
    app.use('/api/personas', routerPersonas)
}

module.exports = config