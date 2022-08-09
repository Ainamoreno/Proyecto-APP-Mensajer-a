const contenidoMensaje = document.getElementById('contenido-mensaje');
const bloquesMensajes = document.getElementById('bloques-mensajes');

salidaMensaje = () => {
    let mensaje = contenidoMensaje.value;
    let estructura = '';
    let date = new Date();
    let hora = `${date.getHours()}:${date.getMinutes()}`;
    estructura +=
        `<div class="bloque-mensaje-mio">
                <label class="nombre-mensaje">Yo:</label>
                <br>
                <span class="mensaje">${mensaje }<time datetime="${ hora}" class="fecha">${ hora} </time></span>
        </div>`

    bloquesMensajes.innerHTML += estructura;
    contenidoMensaje.value = '';
}

