function mostrarLetras(palabra, termine, id, demora = 1000) {
  let i = 0
  const timer = setInterval(() => {
    if (i < palabra.length) {
      console.log(palabra[i] + ' ' + id)
      i++
    } else {
      clearInterval(timer)
      termine()
    }
  }, demora)
}

const fin = () => console.log('terminé')

// setTimeout(() => { mostrarLetras('hola', fin, 1); }, 0)
// setTimeout(() => { mostrarLetras('hola', fin, 2); }, 250)
// setTimeout(() => { mostrarLetras('hola', fin, 3); }, 500)
// setTimeout(() => { mostrarLetras('hola', fin, 4); }, 1200)

mostrarLetras('hola', fin, 1, 400)
mostrarLetras('hola', fin, 2, 600)
mostrarLetras('hola', fin, 3, 800)
mostrarLetras('hola', fin, 4, 1000)

// -----------------------------------------------

// dividir(10, 0)
//     .then(res => {
//         console.log('resultado:' + res)
//     })

//     .catch(error => {
//         console.log('error:' + error)
//     })

// -----------------------------------------------------

// recibe numeros
// function dividirYMostrar(n1, n2, devolver) {
//     if (n2 == 0) {
//         devolver('no se puede resolver')
//     } else {
//         const res = n1 / n2
//         devolver(null, res)
//     }
// }

// function callback(error, resultado) {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(resultado)
//     }
// }

//-----------------------------------------------------

// function operar(n1, n2, operacion) {
//     return operacion(n1, n2)
// }

// const sumar = (n1, n2) => n1 + n2
// const restar = (n1, n2) => n1 - n2
// const mult = (n1, n2) => n1 * n2
// const div = (n1, n2) => n1 / n2

// console.log(operar(10, 5, sumar))
// console.log(operar(10, 5, restar))
// console.log(operar(10, 5, mult))
// console.log(operar(10, 5, div))

// console.log(operar(10, 5, (n1, n2) => {
//     const res = n1 + n2 + n1 * n2
//     if (res > 10)
//         res = -1
//     return res
// }))

//////////////////////////////////////////////////////////////////////////////////////////

// function escribirYLoguear(mensaje, funcionParaRegistrarCosas) {
//     console.log(mensaje)
//     funcionParaRegistrarCosas(`terminé de escribir el mensaje: ${mensaje}`)
// }

// /**
//  * @param callback : args: fecha
//  */
// function logger(mensaje) {
//     console.log(`${mensaje} (fecha: ${new Date().toLocaleString()})`)
// }

// escribirYLoguear('holaaa', logger)

// escribirYLoguear('holaaa', function (mensaje) {
//     console.log(`${mensaje} (fecha: ${new Date().toLocaleString()})`)
// })

//////////////////////////////////////////////////////////////////////////////////////////
// class Auto {
//     constructor(marca, patente) {
//         this.marca = marca
//         this.patente = patente
//         this.fecha = new Date()
//     }

//     saludar() {
//         console.log(`hola, soy un auto de marca: ${this.marca}`)
//     }

//     verFecha() { return this.fecha }
// }

// function crearAuto(marca, patente) {
//     const fecha = new Date()
//     return {
//         marca: marca,
//         patente: patente,
//         saludar: function () {
//             console.log(`hola, soy un auto de marca: ${marca}`)
//         },
//         verFecha: () => fecha
//     }
// }
