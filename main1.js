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
        ],
        mensajesB: [],
    }
]

mostrarCanal = (indiceCanal) => {
    let canal = listaCanales[indiceCanal];
    let estructuraCanal = `<h2 class="fs-5 titulo-canal">${canal.titulo}</h2>
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
   
    estructuraCanal +=
        `<div>
    <nav class="input-mensajes">
        <form class="">
            <div class="input-group">
                <input type="text" id="contenido-mensaje" class="form-control contenido-mensaje"
                    placeholder="    Escriba su mensaje aquí">
                <button id="btn-enviar-mensaje" class="btn-enviar-mensaje input-group-text btn btn-dark"
                    type="button" onclick="salidaMensaje()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </form>
    </nav> 
    </div>`;
    contenidoCanal.innerHTML = estructuraCanal;
    contenidoMensaje = document.getElementById('contenido-mensaje');
    bloquesMensajes = document.getElementById('bloques-mensajes');

    contenedorContenidoChat.style.display = 'none';
    buscadorChat.style.display = 'none';
    bloqueFormularioCanal.style.display = 'none';
    contenedorPantallaCanales.style.display = 'none';
    contenidoCanal.style.display = 'block';


}
