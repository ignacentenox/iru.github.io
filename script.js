// Función para proponer matrimonio
function proponerMatrimonio(respuesta) {
    ocultarMensaje(); // Oculta el mensaje actual antes de mostrar la respuesta
    setTimeout(function () {
        alert('¡Respuesta: ' + respuesta + '!'); // Muestra una alerta como ejemplo
        mostrarMensaje(); // Muestra el mensaje nuevamente para futuras propuestas
    }, 500); // Espera 500ms antes de mostrar la alerta
}

// Función para mostrar un elemento
function mostrarElemento(elemento) {
    elemento.style.display = 'block';
}

// Función para ocultar un elemento
function ocultarElemento(elemento) {
    elemento.style.display = 'none';
}

// Función para mostrar el mensaje
function mostrarMensaje() {
    var mensajeElement = document.getElementById('message-section');
    mostrarElemento(mensajeElement);
}

// Función para ocultar el mensaje
function ocultarMensaje() {
    var mensajeElement = document.getElementById('message-section');
    ocultarElemento(mensajeElement);
}

// Puedes agregar más funciones según tus necesidades

// Función para mostrar el corazón
function mostrarCorazon() {
    var corazonElement = document.getElementById('corazon');
    mostrarElemento(corazonElement);
}

// Puedes ajustar estas funciones según lo que desees hacer con la animación del corazón

// Llama a la función mostrarMensaje() cuando la página se carga
window.onload = function () {
    mostrarMensaje();
};
