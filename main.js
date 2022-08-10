const contenidoMensaje = document.getElementById('contenido-mensaje');
const bloquesMensajes = document.getElementById('bloques-mensajes');

salidaMensaje = (contenido, bloque) => {
    let mensaje = contenido.value;
    let estructuraMensaje = '';
    alert(mensaje)
    let date = new Date();
    let hora = `${date.getHours()}:${date.getMinutes()}`;
    estructuraMensaje +=
        `<div class="bloque-mensaje-mio">
                <label class="nombre-mensaje">Yo:</label>
                <br>
                <span class="mensaje"> ${mensaje }<time datetime="${ hora}" class="fecha">${ hora} </time></span>
        </div>`

    bloque.innerHTML += estructuraMensaje;
    contenido.value = '';
}

