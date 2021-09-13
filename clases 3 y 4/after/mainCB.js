const fs = require('fs')

const ruta = './package.json'
const encoding = 'utf-8'

fs.readFile(ruta, encoding, (error, contenido) => {
    if (error) {
        console.log(error)
    } else {
        console.log(contenido)

        const pckObj = JSON.parse(contenido)
        console.log(pckObj)

        pckObj.name = pckObj.name + '2'

        const contenidoActualizado = JSON.stringify(pckObj, null, 2)

        fs.writeFile(ruta, contenidoActualizado, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('terminé, salió todo bien!')
            }
        })
    }
})
