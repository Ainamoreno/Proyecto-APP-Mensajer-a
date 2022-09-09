

recogerFiltrado = () => {
    let contenidoInput = inputBuscador.value;
    let estructuraBuscador = '';
    listaCanales.forEach(canal => {
        if (canal.mensajes.find(mensaje => mensaje.texto.includes(contenidoInput))) {
            estructuraBuscador += `<h2 class=" titulo-canal">${canal.titulo}</h2>`;
            canal.mensajes.forEach(mensaje => {
                if (mensaje.texto.includes(contenidoInput)) {
                    estructuraBuscador += `<div><b>${mensaje.nombre}</b> : ${mensaje.texto}</div>`;
                }
            })
        }
    });

    if(contenidoInput == '') {
        estructuraBuscador = ''
    };

    resultados.innerHTML = estructuraBuscador;

}

