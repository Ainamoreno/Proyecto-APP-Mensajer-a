mostrarPantallaCanales = () => {
    contenedorBtnsPantallaCanales.innerHTML = ''
    listaCanales.forEach((canal, index) => {
        let estructuraCanal = `<button type="button" id="btn-sec" class="btn btn-dark" onclick="mostrarCanal(${index})"><i
        class="fa-solid fa-user-group"></i>&nbsp;${canal.titulo}</button>`;

        contenedorBtnsPantallaCanales.innerHTML += estructuraCanal;
    });
}

mostrarPantallaChats = () => {
    contenedorBtnsPantallaChats.innerHTML = ''
    listaChats.forEach((canal, index) => {
        let estructuraChats = `<button type="button" id="btn-sec" class="btn btn-dark" onclick="mostrarCanal(${index})"><i
        class="fa-solid fa-user-group"></i>&nbsp;${canal.nombre}</button>`;

        contenedorBtnsPantallaChats.innerHTML += estructuraChats;
    });
    
}

mostrarPantallaInicio = () => {

    mostrarPantallaChats();
    mostrarPantallaCanales();
    
    buscadorChat.style.display = 'none';
    bloqueFormularioCanal.style.display = 'none';
    contenidoCanal.style.display = 'none';
    contenedorContenidoChat.style.display = 'none';
    contenedorPantallaCanales.style.display = 'none';
    contenedorPantallaInicio.style.display = 'block'
}

mostrarPantallaInicio();