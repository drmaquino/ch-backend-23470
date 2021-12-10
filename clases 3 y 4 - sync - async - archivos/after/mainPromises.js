const fs = require('fs')

const ruta = './package.json'
const encoding = 'utf-8'

const callbackError = (error) => {
    console.log(error)
}

const callbackExito = (contenido) => {
    console.log(contenido)

    const pckObj = JSON.parse(contenido)
    console.log(pckObj)

    pckObj.name = pckObj.name + '2'

    const contenidoActualizado = JSON.stringify(pckObj, null, 2)

    return contenidoActualizado
}

const callbackExito2 = (contenidoActualizado) => {
    return fs.promises.writeFile(ruta, contenidoActualizado)
        .then(() => { console.log('terminé, salió todo bien!') })
        .catch(error => { console.log(error) })
}

fs.promises.readFile(ruta, encoding)
    .then(callbackExito)
    .then(callbackExito2)
    .catch(callbackError)