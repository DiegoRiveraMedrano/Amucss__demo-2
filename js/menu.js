(function () {
    // Selecciona el botón para abrir el menú
    const openButton = document.querySelector('.nav__menu');
    // Selecciona el menú de navegación
    const menu = document.querySelector('.nav__link');
    // Selecciona el botón para cerrar el menú
    const closeMenu = document.querySelector('.nav__close');

    // Agrega un event listener al botón de abrir el menú
    openButton.addEventListener('click', () => {
        // Muestra el menú agregando una clase
        menu.classList.add('nav__link--show');
        // Desactiva el scroll de la página al abrir el menú
        document.body.style.overflow = 'hidden';
    });

    // Agrega un event listener al botón de cerrar el menú
    closeMenu.addEventListener('click', () => {
        // Oculta el menú removiendo la clase
        menu.classList.remove('nav__link--show');
        // Vuelve a activar el scroll de la página
        document.body.style.overflow = 'auto';
        // Remueve la clase 'nav__toggle--active' de todos los otros elementos 'nav__toggle'
        document.querySelectorAll('.nav__toggle').forEach(otherToggle => {
                otherToggle.classList.remove('nav__toggle--active');
        });
        // Remueve la clase 'nav__sublink--active' de cada 'nav__sublink'
        document.querySelectorAll('.nav__sublink--active').forEach(sublink => {
            sublink.classList.remove('nav__sublink--active');
        });
    });
})();

// Función para verificar el tamaño de la página, remover la clase y activar el scroll si se superan los 1000px
function checkPageDimensionsAndAdjust(className) {
    const pageWidth = window.innerWidth;

    if (pageWidth > 1000) {
        // Remover la clase del elemento con la clase especificada
        const element = document.querySelector(`.${className}`);
        if (element) {
            element.classList.remove(className);
        }

        // Activar el scroll del body
        document.body.style.overflow = 'auto';
    }
}

// Función que se ejecutará cada segundo para verificar las dimensiones y ajustar la clase y el scroll si es necesario
function checkPageDimensionsAndAdjustRepeatedly(className) {
    setInterval(() => {
        checkPageDimensionsAndAdjust(className);
    }, 1000); // 1000 milisegundos = 1 segundo
}

// Llamar a la función con el nombre de la clase que deseas remover y activar el scroll si se superan los 1000px
const classNameToRemove = 'nav__link--show';
checkPageDimensionsAndAdjustRepeatedly(classNameToRemove);

/* Condición para que cambie de color la barra de navegación al bajar */
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const link = document.querySelector(".nav__link");
    const logo = document.querySelector(".nav__logo--img");
    const iconomenu = document.querySelector(".nav__img");

    nav.classList.toggle("nav--abajo", window.scrollY > 0);
    link.classList.toggle("nav__link--abajo", window.scrollY > 0);
    iconomenu.classList.toggle("nav__img--abajo", window.scrollY > 0);

    document.querySelectorAll('.nav__links').forEach(links => {
        if (window.scrollY > 0) {
            links.classList.add('nav__links--abajo'); // agregar
        } else {
            links.classList.remove('nav__links--abajo'); // remover
        }
    });

    if (window.scrollY > 0) {
        logo.src = './img/logo__color.svg'; // Actualizar el atributo "src" con la nueva ruta de la imagen
    } else {
        logo.src = './img/logo__color.svg'; // Si está arriba, regresar a la imagen original
    }
});

// Selecciona todos los elementos <li> con la clase 'nav__items'
const navItems = document.querySelectorAll('.nav__items');

// Añade un event listener para el evento 'click' a cada 'nav__items'
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Si el ancho de la ventana es menor o igual a 1000px
        if (window.innerWidth <= 1000) {
            // Selecciona el ul dentro del elemento clickeado
            const sublink = item.querySelector('.nav__sublink');
            const toggle = item.querySelector('.nav__toggle');
            if (sublink) {
                // Toggle la clase 'nav__sublink--active'
                sublink.classList.toggle('nav__sublink--active');

                // Remueve la clase 'nav__sublink--active' de todos los otros elementos 'nav__sublink'
                document.querySelectorAll('.nav__sublink').forEach(otherSublink => {
                    if (otherSublink !== sublink) {
                        otherSublink.classList.remove('nav__sublink--active');
                    }
                });
            }
            if (toggle) {
                // Toggle la clase 'nav__toggle--active'
                toggle.classList.toggle('nav__toggle--active');

                // Remueve la clase 'nav__toggle--active' de todos los otros elementos 'nav__toggle'
                document.querySelectorAll('.nav__toggle').forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        otherToggle.classList.remove('nav__toggle--active');
                    }
                });
            }
        }
    });
});

// Añade un event listener para el evento 'resize' de la ventana
window.addEventListener('resize', () => {
    // Si el ancho de la ventana es mayor a 1000px
    if (window.innerWidth > 1000) {
        // Selecciona todos los elementos <ul> con la clase 'nav__sublink'
        document.querySelectorAll('.nav__sublink').forEach(sublink => {
            // Remueve la clase 'nav__sublink--active' de cada 'nav__sublink'
            sublink.classList.remove('nav__sublink--active');
        });
        // Selecciona todos los elementos con la clase 'nav__toggle'
        document.querySelectorAll('.nav__toggle').forEach(toggle => {
            // Remueve la clase 'nav__toggle--active' de cada 'nav__toggle'
            toggle.classList.remove('nav__toggle--active');
        });
    }
});
