class Animal {

    #apellido

    constructor(nombre, apellido) {
        this.nombre = nombre
        this.#apellido = apellido
        Animal.cantidad++
    }

    static cantidad = 0

    saludar() {
        console.log(this.nombre)
    }

    static verCantPretty() {
        console.log(`la cant de animales creados es ${Animal.cantidad}`)
    }
}

const a1 = new Animal('pepe', 'xxx')
const a2 = new Animal('coca', 'xxx')

a1.saludar()
a2.saludar()

// console.log(Animal.cantidad)

Animal.verCantPretty()

console.log(a1)

a1.edad = 9

console.log(a1)