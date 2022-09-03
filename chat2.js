mostrarChatMensajes = (indiceChat) => {
    let chat = listaChats[indiceChat];
    let estructuraChatMensaje = ` <div id="bloques-mensajes-chat" class="bloques-mensajes"> <div class="fs-5 nombre-chat">${chat.nombre}</div>
    <h3>${chat.estado}</h3> <a>${chat.imagen}</a> 
    </div>`
    for (let mensaje of chat.mensajes) {
        let hora = `${mensaje.fecha.getHours()}:${mensaje.fecha.getMinutes()}`;
        estructuraChatMensaje += `<div class="bloque-mensaje">
        <label class="nombre-mensaje ">${mensaje.nombre}:</label>
        <br>
        <span class="mensaje">${mensaje.texto}<time datetime="${hora}"
                class="fecha">${hora}</time></span>
    </div> `
    }
    estructuraChatMensaje += `<div>
    <nav class="input-mensajes">
        <form class="">
            <div class="input-group">
                <input type="text" id="contenido-mensaje-chat" class="form-control contenido-mensaje"
                    placeholder="    Escriba su mensaje aquí">
                <button id="btn-enviar-mensaje" class="btn-enviar-mensaje input-group-text btn btn-dark"
                    type="button" onclick="salidaMensajeChat()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </form>
    </nav>
    </div>`;
    contenedorContenidoChat.innerHTML = estructuraChatMensaje;
    bloquesMensajes = document.getElementById('bloques-mensajes-chat');

    buscadorChat.style.display = 'none';
    bloqueFormularioCanal.style.display = 'none';
    contenedorPantallaCanales.style.display = 'none';
    contenidoCanal.style.display = 'none';
    contenedorContenidoChat.style.display = 'block';
}

salidaMensajeChat = () => {
    contenidoMensaje = document.getElementById('contenido-mensaje-chat');
    let textoMensaje = contenidoMensaje.value;
    let date = new Date();
    let hora = `${date.getHours()}:${date.getMinutes()}`;
    let estructuraMensaje = '';
    estructuraMensaje +=
        `<div class="bloque-mensaje-mio">
                <label class="nombre-mensaje">Yo:</label>
                <br>
                <span class="mensaje"> ${textoMensaje}<time datetime="${hora}" class="fecha">${hora} </time></span>
        </div>`
    bloquesMensajes.innerHTML += estructuraMensaje;
    contenidoMensaje.value = '';


}