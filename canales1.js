function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

mostrarCanal = (indiceCanal) => {
    let canal = listaCanales[indiceCanal];
    let estructuraCanal = `<h2 class=" titulo-canal">${canal.titulo}</h2> 
    <h3 class = "descripcion-canal">${canal.descripcion} </h3>
    <div id="bloques-mensajes-canal" class="bloques-mensajes">`;

    for (let mensaje of canal.mensajes) {
        let hora = `${mensaje.fecha.getDate()}-${mensaje.fecha.getMonth()}-${mensaje.fecha.getFullYear()} ${mensaje.fecha.getHours()}:${addZero(mensaje.fecha.getMinutes()) }`;
        estructuraCanal += mensaje.nombre == 'Yo' ? '<div class="bloque-mensaje-mio">' : '<div class="bloque-mensaje">'
        estructuraCanal += `<label class="nombre-mensaje ">${mensaje.nombre}:</label> <time datetime="${hora}" class="fecha">${hora}</time></span>
            <br>
            <span class="mensaje">${mensaje.texto}
        </div>`
    }
    estructuraCanal += '</div>';
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

    resultados.style.display = 'none';
    contenedorPantallaInicio.style.display = 'none';
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
    let hora = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${addZero(date.getMinutes())}`;
    let estructuraMensaje = '';
    estructuraMensaje +=
        `<div class="bloque-mensaje-mio">
                <label class="nombre-mensaje">Yo:</label> <time datetime=" ${hora}" class="fecha">${hora} </time>
                <br>
                <span class="mensaje"> ${textoMensaje}</span>
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

    localStorage.setItem('LISTA_CANALES', JSON.stringify(listaCanales));

    bloquesMensajes.scroll(0, 99999999);
}
