function proponerMatrimonio(respuesta) {
    if (respuesta === 'Si') {
        alert('¡Felicidades, Irupé ha dicho que sí! 🎉');
    } else {
        alert('¡Ánimo, seguro que todo saldrá bien! 😊');
    }
}

// Lista de nombres de archivos de fotos en orden
var fotos = ['01.jpg', '02.jpg', '03.jpg'];  // Asegúrate de tener tus nombres de archivos reales aquí

// Índice actual de la foto que se está mostrando
var indiceFotoActual = 0;

// Función para cambiar a la siguiente foto
function mostrarSiguienteFoto() {
    indiceFotoActual = (indiceFotoActual + 1) % fotos.length;
    actualizarFoto();
}

// Función para cambiar a la foto anterior
function mostrarFotoAnterior() {
    indiceFotoActual = (indiceFotoActual - 1 + fotos.length) % fotos.length;
    actualizarFoto();
}

// Función para actualizar la imagen en la página
function actualizarFoto() {
    var fotoElement = document.getElementById('foto-principal');
    fotoElement.src = 'ruta/a/tu/carpeta/de/fotos/' + fotos[indiceFotoActual];
}

// Llama a la función para mostrar la primera foto al cargar la página
actualizarFoto();
