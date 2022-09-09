obtenerDatosCanal = () => {
    listaCanales = JSON.parse(localStorage.getItem('LISTA_CANALES'));
    if (!listaCanales) {
        listaCanales = [
            {
                titulo: 'Canal de GeeksHubs',
                descripcion: 'Canal para consultar todas las dudas de clase',
                mensajes: [
                    {
                        nombre: 'Jesús Rodríguez',
                        texto: 'Hola chicos, ¿qué tal los primeros días?',
                        fecha: new Date(),
                    },
                    {
                        nombre: 'Maite Tamarit',
                        texto: 'Con muchas ganas y con ganas de aprender!!',
                        fecha: new Date(),
                    },
                    {
                        nombre: 'Marc Gómez',
                        texto: 'Yo voy un poco perdido espero que sea normal éstos primeros días...',
                        fecha: new Date(),
                    },
                    {
                        nombre: 'Alicia Esteve',
                        texto: 'Muy bien, aprovechando el tiempo y dándole caña :)',
                        fecha: new Date(),
                    },
                ]
            },
            {
                titulo: 'Canal del proyecto final',
                descripcion: '',
                mensajes: [
                    {
                        nombre: 'Esther García',
                        texto: 'Hola!! ¿Qué ideas tenéis para el proyecto?',
                        fecha: new Date(),
                    },
                    {
                        nombre: 'Cristian Moreno',
                        texto: 'Yo había pensado en hacer una web donde los usuarios puedas registrarse, y tenga un apartado blog donde puedan añadir entradas.',
                        fecha: new Date(),
                    },
                    {
                        nombre: 'Marc Gómez',
                        texto: 'Es buena idea, también podemos añadir el chat con un bot, el cuál conteste las preguntas más frecuentes',
                        fecha: new Date(),
                    },
                    {
                        nombre: 'Raúl Reif',
                        texto: 'Pues vamos a por ello chicos!!',
                        fecha: new Date(),
                    },
                ]
            }
        ];
    }

    listaCanales.forEach(canal => {
        canal.mensajes.forEach(mensaje => {
            mensaje.fecha = new Date(mensaje.fecha);
        });
    });
}

obtenerDatosCanal();

obtenerDatosChats = () => {

    listaChats = JSON.parse(localStorage.getItem('LISTA_CHATS'));
    if (!listaChats) {
        listaChats = [
            {
                imagen: 'https://ceslava.s3-accelerate.amazonaws.com/2012/12/foto-perfil.jpg',
                nombre: 'Raúl Reif',
                estado: 'Programming...',
                mensajes: [
                    {
                        nombre: 'Raúl Reif',
                        texto: 'Hola!! ¿Cómo vas?',
                        fecha: new Date(),
                    }
                ]
            },
            {
                imagen: 'https://i.pinimg.com/564x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg',
                nombre: 'Carmen Pérez',
                estado: 'Hey! What´s up?',
                mensajes: [
                    {
                        nombre: 'Carmen Pérez',
                        texto: 'Hola! ¿Qué tal llevas el proyecto?',
                        fecha: new Date(),
                    }
                ]
            }
        ];
    }
    
    listaChats.forEach(canal => {
        canal.mensajes.forEach(mensaje => {
            mensaje.fecha = new Date(mensaje.fecha);
        });
    });    
}

obtenerDatosChats();