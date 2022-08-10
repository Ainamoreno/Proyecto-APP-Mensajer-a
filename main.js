// Elementos chat canal
let contenidoMensaje = document.getElementById('contenido-mensaje');
let bloquesMensajes = document.getElementById('bloques-mensajes');
const contenidoCanal = document.getElementById('contenido-canal');

// Elementos formulario nuevo canal
const bloqueFormularioCanal = document.getElementById('formulario-canal');
const nombreNuevoCanal = document.getElementById('nombre-nuevo-canal');
const descripcionNuevoCanal = document.getElementById('descrip-nuevo-canal');

// Elementos sidebar
const contenedorCanales = document.getElementById('contenedor-canales');

let listaCanales = [
    {
        titulo: 'Grupo de clase B2',
        descripcion: '',
        mensajes: [
            {
                nombre: 'Jesús Rodríguez',
                texto: 'Hola clase! ¿Cómo lleváis los primeros días?',
                fecha: new Date(),

            }
        ]
    }
]

mostrarCanal = (indiceCanal) => {
    let canal = listaCanales[indiceCanal];
    let estructuraCanal = `<h2 class="fs-5">${canal.titulo}</h2>
    <time class="fecha" datetime="2022-08-08"> Lunes 08 de agosto, 2022 </time>
    <div id="bloques-mensajes" class="bloques-mensajes">`;
    for (let mensaje of canal.mensajes) {
        let hora = `${mensaje.fecha.getHours()}:${mensaje.fecha.getMinutes()}`;
        estructuraCanal += `<div class="bloque-mensaje jesus">
        <label class="nombre-mensaje ">${mensaje.nombre}:</label>
        <br>
        <span class="mensaje">${mensaje.texto}<time datetime="${hora}"
                class="fecha">${hora}</time></span>
    </div>`
    }
    estructuraCanal += `</div>
    <nav class="input-mensajes">
        <form class="">
            <div class="input-group">
                <input type="text" id="contenido-mensaje" class="form-control contenido-mensaje"
                    placeholder="    Escriba su mensaje aquí">
                <button id="btn-enviar-mensaje" class="btn-enviar-mensaje input-group-text btn btn-dark"
                    type="button" onclick="salidaMensaje()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </form>
    </nav>`;
    contenidoCanal.innerHTML = estructuraCanal;
    contenidoMensaje = document.getElementById('contenido-mensaje');
    bloquesMensajes = document.getElementById('bloques-mensajes');
}

salidaMensaje = () => {
    let mensaje = contenidoMensaje.value;
    let estructuraMensaje = '';
    let date = new Date();
    let hora = `${date.getHours()}:${date.getMinutes()}`;
    estructuraMensaje +=
        `<div class="bloque-mensaje-mio">
                <label class="nombre-mensaje">Yo:</label>
                <br>
                <span class="mensaje"> ${mensaje}<time datetime="${hora}" class="fecha">${hora} </time></span>
        </div>`

    bloquesMensajes.innerHTML += estructuraMensaje;
    contenidoMensaje.value = '';
}

mostrarCanalesSidebar = () => {
    listaCanales.forEach((canal, index) => {
        let estructuraCanal = `<button type="button" id="btn-sec" class="btn btn-dark" onclick="mostrarCanal(${index})"><i
        class="fa-solid fa-user-group"></i>${canal.titulo}</button>`;

        contenedorCanales.innerHTML += estructuraCanal;

    });
}

crearCanal = () => {
    let nombreCanal = nombreNuevoCanal.value;
    let descripcionCanal = descripcionNuevoCanal.value;
    let estructuraCanal =
        `<div class="formulario-canal px-3 pt-4">
        <div class="titulo-creacion-canal fs-5" >${nombreCanal}</div> 
        <div>${descripcionCanal}</div>
        
        
    </div>`


    bloqueFormularioCanal.innerHTML = '';
}

mostrarCanalesSidebar()