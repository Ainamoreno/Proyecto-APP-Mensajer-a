
obtenerDatosCanal = () => {
    listaCanales = JSON.parse(localStorage.getItem('LISTA_CANALES'));
    if (!listaCanales) {
        listaCanales = [];
    };
    console.log(listaCanales)
    listaCanales.forEach(canal => {
        canal.mensajes.forEach(mensaje => {
            mensaje.fecha = new Date(mensaje.fecha);
        });
    });

    crearCanal();
    mostrarPantallaCanales();
}
obtenerDatosCanal();
