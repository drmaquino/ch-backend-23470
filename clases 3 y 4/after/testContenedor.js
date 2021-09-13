const MiArrayEnArchivos = require('./Contenedor.js')

async function main() {
    const fa = new MiArrayEnArchivos('./db.json')
    await fa.push(1)
    await fa.push(2)
    await fa.push(3)
    await fa.push(4)
    const p = await fa.pop()
    console.log(p)
}

main()