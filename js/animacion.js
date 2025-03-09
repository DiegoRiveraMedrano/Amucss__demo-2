/*
// Función para bloquear el scroll
function bloquearScroll() {
    document.body.style.overflow = 'hidden';
}

// Función para desbloquear el scroll
function desbloquearScroll() {
    document.body.style.overflow = 'auto';
}
bloquearScroll();
*/






// Añade un evento que se ejecutará cuando toda la página haya cargado
window.addEventListener('load', function() {
    
    // Inicia un temporizador que esperará 1.5 segundos antes de ejecutar su función
    setTimeout(function () {
        
        // Busca un elemento en el documento que tenga la clase 'load'
        var elemento1 = document.querySelector('.load');
        
        // Busca un elemento en el documento que tenga la clase 'inicio__text'
        var text = document.querySelector(".inicio__text");

        // Si el elemento con la clase 'load' existe
        if (elemento1) {
            // Añade la clase 'load__none' al elemento encontrado
            elemento1.classList.add('load__none');
            // Muestra un mensaje en la consola indicando que se añadió la clase
            console.log('Se ha agregado la nueva clase al elemento.');
        } else {
            // Si no se encuentra el elemento, muestra un mensaje en la consola indicando que no se encontró
            console.log('El elemento con la clase "load" no se encontró.');
        }
        
    // Define el tiempo de espera del temporizador a 1.5 segundos (1500 milisegundos)
    }, 1500);
});
