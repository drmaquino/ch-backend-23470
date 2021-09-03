function crearSaludar(nombre) {

    // const nombre = 'pepe'

    function saludar() {
        console.log('hola, ' + nombre)
    }

    return saludar
}

const fSaludar1 = crearSaludar('mariano')
const fSaludar2 = crearSaludar('pepe')

// fSaludar1()
// fSaludar2()

function crearOperacion(signo) {
    let op
    switch (signo) {
        case '-':
            op = function (n1, n2) {
                return n1 - n2
            }
            break
        case '+':
        default:
            op = function (n1, n2) {
                return n1 + n2
            }
            break
    }
    return op
}

function operar(n1, signo, n2) {
    const operacion = crearOperacion(signo)
    return operacion(n1, n2)
}

// console.log(operar(2, '+', 5))

// console.log(operar(2, '-', 5))

// const multilinea = `

// hola
// en
// muchas
// lineas
// ${operar(2, '+', 5)}

// `

let multilinea = ''

multilinea += 'hola\n'
multilinea += 'en\n'
multilinea += 'muchas\n'
multilinea += 'lineas\n'
multilinea += operar(2, '+', 5)


console.log(multilinea)