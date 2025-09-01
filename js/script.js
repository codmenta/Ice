document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA PARA EL MENÚ HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Alternar la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
        // Alternar la clase 'active' para animar el ícono
        hamburger.classList.toggle('active');
    });

    // Cerrar el menú si se hace clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // --- 2. LÓGICA PARA LAS ANIMACIONES AL HACER SCROLL ---
    // Selecciona todos los elementos que quieres animar
    const hiddenElements = document.querySelectorAll('.hidden');

    // Configura el Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Si el elemento es visible en la pantalla
            if (entry.isIntersecting) {
                // Añade la clase 'show' para activar la animación
                entry.target.classList.add('show');
            } else {
                // Opcional: Remueve la clase si quieres que la animación se repita cada vez
                // entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
    });

    // Observa cada uno de los elementos seleccionados
    hiddenElements.forEach((el) => observer.observe(el));

});