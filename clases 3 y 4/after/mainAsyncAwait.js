const fs = require('fs')

const ruta = './package.json'
const encoding = 'utf-8'

async function leerYEscribir(num) {
    try {
        const contenido = await fs.promises.readFile(ruta, encoding)
        // console.log(contenido)
        const pckObj = JSON.parse(contenido)
        // console.log(pckObj)
        pckObj.name = `${pckObj.name}${num}`
        const contenidoActualizado = JSON.stringify(pckObj, null, 2)
        await fs.promises.writeFile(ruta + num, contenidoActualizado)
        console.log(`terminé, salió todo bien con el ${num}!`)
    } catch (error) {
        console.log(error)
    }
}

leerYEscribir(1)
leerYEscribir(2)
leerYEscribir(3)
leerYEscribir(4)
leerYEscribir(5)
leerYEscribir(6)