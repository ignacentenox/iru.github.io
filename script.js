function proponerMatrimonio(respuesta) {
    if (respuesta === 'Si') {
        alert('¡Gracias, Prometo hacer lo mejor para nosotros! Te amo... ❤️🎉');
    } else {
        alert('¡Tranquila, seguro se nos va a dar más adelante! Te amo... 😊');
    }
}

var fotos = [
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
    '10.jpg',
];

var indiceFotoActual = 0;

function mostrarSiguienteFoto() {
    indiceFotoActual = (indiceFotoActual + 1) % fotos.length;
    actualizarFoto();
}

function mostrarFotoAnterior() {
    indiceFotoActual = (indiceFotoActual - 1 + fotos.length) % fotos.length;
    actualizarFoto();
}

// Elimina la primera definición de la función actualizarFoto()
function actualizarFoto() {
    var fotoElement = document.getElementById('foto-principal');
    fadeOut(fotoElement); // Desvanece la imagen actual
    setTimeout(function () {
        fotoElement.src = fotos[indiceFotoActual];
        fadeIn(fotoElement); // Muestra la nueva imagen
    }, 500); // Espera 500ms antes de mostrar la nueva imagen
}

actualizarFoto();

// Añade estas funciones para manejar las animaciones
function fadeIn(element) {
    element.style.opacity = '1';
}

function fadeOut(element) {
    element.style.opacity = '0';
}

// Modifica la función actualizarFoto() para incluir animaciones
function actualizarFoto() {
    var fotoElement = document.getElementById('foto-principal');
    fadeOut(fotoElement); // Desvanece la imagen actual
    setTimeout(function () {
        fotoElement.src = fotos[indiceFotoActual];
        fadeIn(fotoElement); // Muestra la nueva imagen
    }, 500); // Espera 500ms antes de mostrar la nueva imagen
}

// Añade estas funciones para manejar las animaciones del mensaje
function mostrarMensaje() {
    var mensajeElement = document.getElementById('message-section');
    fadeIn(mensajeElement);
}

function ocultarMensaje() {
    var mensajeElement = document.getElementById('message-section');
    fadeOut(mensajeElement);
}

// Modifica las funciones proponerMatrimonio() para incluir animaciones
function proponerMatrimonio(respuesta) {
    ocultarMensaje(); // Oculta el mensaje actual antes de mostrar la respuesta
    setTimeout(function () {
        alert('¡Respuesta: ' + respuesta + '!'); // Muestra una alerta como ejemplo
        mostrarMensaje(); // Muestra el mensaje nuevamente para futuras propuestas
    }, 500); // Espera 500ms antes de mostrar la alerta
}
