const fs = require('fs')

class FileArray {
    constructor(ruta) {
        this.ruta = ruta
    }

    async save(array = []) {
        const jsonElem = JSON.stringify(array)
        await fs.promises.writeFile(this.ruta, jsonElem)
    }

    async read() {
        try {
            const json = await fs.promises.readFile(this.ruta)
            const array = JSON.parse(json)
            return array
        } catch (error) {
            return []
        }
    }

    async push(elem) {
        const array = await this.read()
        array.push(elem)
        await this.save(array)
    }

    async pop() {
        const array = await this.read()
        const popeado = array.pop()
        await this.save(array)
        return popeado
    }

    async get() {
        return await this.read()
    }
}

module.exports = FileArray
