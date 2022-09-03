
crearChat = () => {
    let nombreChat = document.getElementById('nombre-nuevo-chat').value
    let estadoChat = ''
    let chat = {
        nombre: nombreChat,
        estado: estadoChat,
        mensajes: []
    };
    listaChats.push(chat);

    mostrarChatsSidebar()
}


mostrarChatsSidebar = () => {
    contenedorMensajesDirectos.innerHTML = ''
    listaChats.forEach((canal, index) => {
        let estructuraChatMensaje = `<button type="button" id="btn-sec" class="btn btn-dark" onclick="mostrarChatMensajes(${index})"><i
        class="fa-solid fa-user-group"></i>${canal.nombre}</button>`;

        contenedorMensajesDirectos.innerHTML += estructuraChatMensaje;

    });
}
mostrarChatsSidebar();