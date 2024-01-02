function proponerMatrimonio(respuesta) {
    ocultarMensaje();
    setTimeout(function () {
        alert('¡Respuesta: ' + respuesta + '!');
        mostrarMensaje();
    }, 500);
}

function mostrarPropuesta() {
    alert('Respuesta Si: Prometo dar lo mejor de mí para que esto funcione. ❤️ ¡Te amo!');
    ocultarCartel();
}

function rechazarPropuesta() {
    alert('Respuesta No: Tranquila, más adelante se nos dará. Te sigo amando como el primer día ❤️');
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
