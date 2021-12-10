const fs = require('fs')

// const ruta = './main.js'
// const encoding = 'utf-8'

// const contenido = fs.readFileSync(ruta, encoding)

// const strObj = JSON.stringify([{ hola: 'mundo' }], null, 2)

// console.log(strObj)

// const objReconst = JSON.parse(strObj)

// console.log(objReconst)
// console.log(objReconst[0]['hola'])

// console.log(contenido)

const ruta = './package.json'
const encoding = 'utf-8'

function leerYEscribir(num) {
    try {
        const contenido = fs.readFileSync(ruta, encoding)
        // console.log(contenido)
        const pckObj = JSON.parse(contenido)
        // console.log(pckObj)
        pckObj.name = pckObj.name + num
        const contenidoActualizado = JSON.stringify(pckObj, null, 2)
        fs.writeFileSync(ruta + num, contenidoActualizado)
        console.log(`terminé, salió todo bien con el ${num}!`)
    } catch (error) {
        console.log('fallo algo:', error)
    }
}

leerYEscribir(1)
leerYEscribir(2)
leerYEscribir(3)
leerYEscribir(4)
leerYEscribir(5)
leerYEscribir(6)
