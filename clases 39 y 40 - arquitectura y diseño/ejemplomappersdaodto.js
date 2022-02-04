export default class Producto {
  constructor({ nombre, precio, foto }) {
    this.setNombre(nombre)
    this.setPrecio(precio)
  }

  setNombre(nombre) {
    if (!nombre) throw new MissingAttrError()
    if (!nombre.isAlpha()) throw new WrongFormatError()
    this.nombre = nombre
  }

  setPrecio(newPrecio) {
    if (newPrecio < 0) throw new InvalidAmountError()
  }

  aplicarDescuento(porcentaje) {}
}

// mappers
// ProductoMapper
export const BoToDTO = prod => {
  return {
    nombre: prod.nombre,
    precio: prod.precio,
  }
}

export const dtoToBo = datosProd => {
  return new Producto(datosProd)
}
