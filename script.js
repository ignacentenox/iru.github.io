function proponerMatrimonio(respuesta) {
    if (respuesta === 'Si') {
        alert('¡Gracias, Prometo hacer lo mejor para nosotros! Te amo... ❤️🎉');
    } else {
        alert('¡Tranquila, seguro se nos va a dar más adelante! Te amo... 😊');
    }
}

var fotos = [
    'https://photos.app.goo.gl/tg8rWSsBT5JMDagn6',
    'https://photos.app.goo.gl/BHHQdsPQxi8oGnsYA',
    'https://photos.app.goo.gl/N4uwyG5ZxSwEXfSQ9',
    "https://photos.app.goo.gl/RFEf5RyESCQed5ms5",
    "https://photos.app.goo.gl/qHXjNEuuSZvCYL1S8",
    "https://photos.app.goo.gl/Sku7EYBYZHqKHnyk8",
    "https://photos.app.goo.gl/7VzdANCiJcwuHEdM9",
    "https://photos.app.goo.gl/KaimxmDw7xrfTfgP9",
    "https://photos.app.goo.gl/6Ks9fgik7XJDBGZVA",
    "https://photos.app.goo.gl/StKjTXyQduZHoAgLA",
    "https://photos.app.goo.gl/sSMSb72MpjXUkqew7"

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
