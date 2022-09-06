mostrarCanalesSidebar = () => {
    contenedorCanales.innerHTML = ''
    listaCanales.forEach((canal, index) => {
        let estructuraCanal = `<button type="button" id="btn-sec" class="btn btn-dark" onclick="mostrarCanal(${index})"><i
        class="fa-solid fa-user-group"></i>&nbsp;${canal.titulo}</button>`;

        contenedorCanales.innerHTML += estructuraCanal;

    });
}

crearCanal = () => {
    let nombreCanal = nombreNuevoCanal.value;
    let descripcionCanal = descripcionNuevoCanal.value;
    let canal = {
        titulo: nombreCanal,
        descripcion: descripcionCanal,
        mensajes: []
    };
    listaCanales.push(canal);
    nombreNuevoCanal.value = '';
    descripcionNuevoCanal.value = '';

localStorage.setItem('LISTA_CANALES', JSON.stringify(listaCanales));

    mostrarCanalesSidebar()
}

mostrarPantallaCanales = () => {
    contenedorBtnsPantallaCanales.innerHTML = ''
    listaCanales.forEach((canal, index) => {
        let estructuraCanal = `<button type="button" id="btn-sec" class="btn btn-dark" onclick="mostrarCanal(${index})"><i
        class="fa-solid fa-user-group"></i>&nbsp;${canal.titulo}</button>`;

        contenedorBtnsPantallaCanales.innerHTML += estructuraCanal;
    });
    buscadorChat.style.display = 'none';
    bloqueFormularioCanal.style.display = 'none';
    contenidoCanal.style.display = 'none';
    contenedorContenidoChat.style.display = 'none';
    contenedorPantallaCanales.style.display = 'block';
}

mostrarPantallaInicio = () => {

    
    mostrarPantallaCanales();
    
    buscadorChat.style.display = 'none';
    bloqueFormularioCanal.style.display = 'none';
    contenidoCanal.style.display = 'none';
    contenedorContenidoChat.style.display = 'none';
    contenedorPantallaCanales.style.display = 'none';
    contenedorPantallaInicio.style.display = 'block'
}


mostrarCanalesSidebar();
mostrarPantallaInicio();