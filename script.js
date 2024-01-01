function proponerMatrimonio(respuesta) {
    ocultarMensaje();
    setTimeout(function () {
        alert('¡Respuesta: ' + respuesta + '!');
        mostrarMensaje();
    }, 500);
}

function mostrarPropuesta() {
    alert('¡Gracias por aceptar! ¡Te amo!');
    ocultarCartel();
}

function rechazarPropuesta() {
    alert('¡No hay problema! Seguimos siendo geniales juntos.');
    ocultarCartel();
}

function mostrarElemento(elemento) {
    elemento.style.display = 'block';
}

function ocultarElemento(elemento) {
    elemento.style.display = 'none';
}

function mostrarMensaje() {
    var mensajeElement = document.getElementById('message-section');
    mostrarElemento(mensajeElement);
}

function ocultarMensaje() {
    var mensajeElement = document.getElementById('message-section');
    ocultarElemento(mensajeElement);
}

function mostrarCorazon() {
    var corazonElement = document.getElementById('corazon');
    mostrarElemento(corazonElement);
}

function mostrarCartel() {
    var cartelFinal = document.getElementById('cartel-final');
    mostrarElemento(cartelFinal);
}

function ocultarCartel() {
    var cartelFinal = document.getElementById('cartel-final');
    ocultarElemento(cartelFinal);
}

var video = document.getElementById('video-background');
video.addEventListener('ended', function () {
    mostrarCartel();
});

window.onload = function () {
    mostrarMensaje();
};
