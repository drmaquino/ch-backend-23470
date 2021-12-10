cargarMensajes()

async function cargarMensajes() {
    const plantilla = await buscarPlantilla()
    const mensajes = await buscarMensajes()

    // tambien se puede hacer esto, para resolver ambas en paralelo, pero esperar a que
    // las dos esten completas para continuar
    // const [ plantilla, mensajes ] = await Promise.all([ buscarPlantilla(), buscarMensajes() ])

    const html = armarHTML(plantilla, mensajes)
    document.getElementById('mensajes').innerHTML = html
}

function buscarMensajes() {
    return fetch('/api/mensajes')
        .then(response => response.json())
}

//---------------------------------------
// Handlebars

// function buscarPlantilla() {
//     return fetch('/plantillas/mensajes.hbs')
//         .then(respuesta => respuesta.text())
// }

// function armarHTML(plantilla, mensajes) {
//     const render = Handlebars.compile(plantilla);
//     const html = render({ mensajes })
//     return html
// }

//---------------------------------------
// EJS

function buscarPlantilla() {
    return fetch('/plantillas/mensajes.ejs')
        .then(respuesta => respuesta.text())
}

function armarHTML(plantilla, mensajes) {
    const render = ejs.compile(plantilla);
    const html = render({ mensajes })
    return html
}