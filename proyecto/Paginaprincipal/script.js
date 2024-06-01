function mostrarCalculadora() {
    var linkCalculadora = document.getElementById('linkCalculadora');
    linkCalculadora.style.display = 'inline';
}



// Función para mostrar enlaces dependiendo del botón presionado
function mostrarEnlace(enlace) {
    // Ocultar todos los enlaces
    var enlaces = document.querySelectorAll('a');
    enlaces.forEach(function(enlace) {
        enlace.style.display = 'none';
    });
    // Mostrar el enlace específico
    var link = document.getElementById('link' + enlace);
    link.style.display = 'inline';
}

// Función para mostrar enlaces dependiendo del botón presionado
function mostrarEnlace(enlace) {
    // Ocultar todos los enlaces
    var enlaces = document.querySelectorAll('a');
    enlaces.forEach(function(enlace) {
        enlace.style.display = 'none';
    });
    // Mostrar el enlace específico
    var link = document.getElementById('link' + enlace);
    link.style.display = 'inline';
}