function proponerMatrimonio(respuesta) {
    if (respuesta === 'Si') {
        alert('¡Gracias, Prometo hacer lo mejor para nosotros! Te amo... ❤️🎉');
    } else {
        alert('¡Tranquila, seguro se nos va a dar más adelante! Te amo... 😊');
    }
}

var fotos = [
    './fotos/01.jpg',
    './fotos/02.jpg',
    './fotos/03.jpg',
    './fotos/04.jpg',
    './fotos/05.jpg',
    './fotos/06.jpg',
    './fotos/07.JPG',
    './fotos/08.JPG',
    './fotos/09.jpg',
    './fotos/10.HEIC'
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

function actualizarFoto() {
    var fotoElement = document.getElementById('foto-principal');
    fotoElement.src = fotos[indiceFotoActual];
}

actualizarFoto();
