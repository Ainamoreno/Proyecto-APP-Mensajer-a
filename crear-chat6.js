
crearChat = () => {
    let nombreChat = document.getElementById('nombre-nuevo-chat').value
    let chat = {
        nombre: nombreChat,
        mensajes: []
    };
    listaChats.push(chat);
    nombreNuevoChat.value= '';
    
    if(!chat.imagen) {
        chat.imagen = 'https://previews.123rf.com/images/alekseyvanin/alekseyvanin1712/alekseyvanin171200974/91724249-perfil-del-c%C3%ADrculo-para-avatar-.jpg'
    }
    localStorage.setItem('LISTA_CHATS', JSON.stringify(listaChats))
    mostrarChatsSidebar()
}


mostrarChatsSidebar = () => {
    contenedorMensajesDirectos.innerHTML = ''
    listaChats.forEach((canal, index) => {
        let estructuraChatMensaje = `<button type="button" id="btn-sec" class="btn btn-dark" onclick="mostrarChatMensajes(${index})"><i
        class="fa-solid fa-user-group"></i>&nbsp;${canal.nombre}</button>`;

        contenedorMensajesDirectos.innerHTML += estructuraChatMensaje;

    });
}
mostrarChatsSidebar();