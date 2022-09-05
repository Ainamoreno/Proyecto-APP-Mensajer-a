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
];

mostrarCanal = (indiceCanal) => {
    let canal = listaCanales[indiceCanal];
    let estructuraCanal = `<h2 class="fs-5 titulo-canal">${canal.titulo}</h2>
    <time class="fecha" datetime="2022-08-08"> Lunes 08 de agosto, 2022 </time>
    <div id="bloques-mensajes-canal" class="bloques-mensajes">`;

    for (let mensaje of canal.mensajes) {
        let hora = `${mensaje.fecha.getHours()}:${mensaje.fecha.getMinutes()}`;
        estructuraCanal += mensaje.nombre == 'Yo' ? '<div class="bloque-mensaje-mio">' : '<div class="bloque-mensaje jesus">'
        estructuraCanal += `<label class="nombre-mensaje ">${mensaje.nombre}:</label>
        <br>
        <span class="mensaje">${mensaje.texto}<time datetime="${hora}"
                class="fecha">${hora}</time></span>
            </div>
            </div>`
    }

    /*btnEnviarMensaje.addEventListener("click", () => {
        salidaMensajeCanal(indiceCanal)
    })*/
    estructuraCanal += `<div class="input-mensajes" >
    <nav>
        <form class="">
            <div class="input-group">
                <input type="text" id="contenido-mensaje-canal" class="form-control contenido-mensaje"
                    placeholder="    Escriba su mensaje aquí">
                <button id="btn-enviar-mensaje" class="btn-enviar-mensaje input-group-text btn btn-dark"
                    type="button" onclick= "salidaMensajeCanal(${indiceCanal})"><i class="fas fa-paper-plane"></i></button>
            </div>
        </form>
    </nav> 
    </div>`
    contenidoCanal.innerHTML = estructuraCanal;
    bloquesMensajes = document.getElementById('bloques-mensajes-canal');

    contenedorContenidoChat.style.display = 'none';
    buscadorChat.style.display = 'none';
    bloqueFormularioCanal.style.display = 'none';
    contenedorPantallaCanales.style.display = 'none';
    contenidoCanal.style.display = 'block';


}


salidaMensajeCanal = (indiceCanal) => {
    contenidoMensaje = document.getElementById('contenido-mensaje-canal');
    let textoMensaje = contenidoMensaje.value;
    let date = new Date();
    let hora = `${date.getHours()}:${date.getMinutes()}`;
    let estructuraMensaje = '';
    estructuraMensaje +=
        `<div class="bloque-mensaje-mio">
                <label class="nombre-mensaje">Yo:</label>
                <br>
                <span class="mensaje"> ${textoMensaje}<time datetime="${hora}" class="fecha">${hora} </time></span>
        </div>`;
    bloquesMensajes.innerHTML += estructuraMensaje;
    contenidoMensaje.value = '';

    let canal = listaCanales[indiceCanal];
    let mensaje = {
        nombre: 'Yo',
        texto: textoMensaje,
        fecha: date,
    };
    canal.mensajes.push(mensaje);
    bloquesMensajes.scroll(0, 99999999);
}