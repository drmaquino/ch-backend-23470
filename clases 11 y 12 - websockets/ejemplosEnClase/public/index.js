console.log('hola del lado del cliente');

const socket = io();

socket.on('saludos', dato => {
    console.log(dato)
    socket.emit('eventoCliente', { msg: 'todo piola' })
})

socket.on('nuevoCliente', dato => {
    console.log(dato)
})