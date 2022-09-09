

recogerFiltrado = () => {
    let contenidoInput = inputBuscador.value;
    let estructuraBuscador = '';
    listaCanales.forEach(canal => {
        if (canal.mensajes.find(mensaje => mensaje.texto.includes(contenidoInput))) {
            estructuraBuscador += `<h2 class=" titulo-canal">${canal.titulo}</h2>`;
            canal.mensajes.forEach(mensaje => {
                if (mensaje.texto.includes(contenidoInput)) {
                    estructuraBuscador += `<div class="texto-buscador" ><b>${mensaje.nombre}</b> : ${mensaje.texto}</div>
                    <hr>`;
                }
            })
        }
    });

    listaChats.forEach(chat => {
        if (chat.mensajes.find(mensaje => mensaje.texto.includes(contenidoInput))) {
            estructuraBuscador += `<h2 class=" titulo-canal">Chat con: ${chat.nombre}</h2>`;
            chat.mensajes.forEach(mensaje => {
                if (mensaje.texto.includes(contenidoInput)) {
                    estructuraBuscador += `<div class="texto-buscador"><b>${mensaje.nombre}</b> : ${mensaje.texto}</div>
                    <hr>`;
                }
            })
        }
    });

    if(contenidoInput == '') {
        estructuraBuscador = ''
    };

    resultados.innerHTML = estructuraBuscador;

    resultados.style.display = 'block';
    contenedorPantallaInicio.style.display = 'none';
    contenedorContenidoChat.style.display = 'none';
    buscadorChat.style.display = 'none';
    bloqueFormularioCanal.style.display = 'none';
    contenedorPantallaCanales.style.display = 'none';
    contenidoCanal.style.display = 'none';
}

