const lista = [
    1,
    2,
    8,
    4,
    5,
    7,
    6,
    3,
]

const obj = {
    '0': 3,
    '1': 2,
    '2': 1,
    'length': 3,
    push(obj) {
        const clave = this['length']
        this[`${clave}`] = obj
        this['length'] = clave + 1
    }
}

console.log(obj)

obj.push('hola')

console.log(obj)
