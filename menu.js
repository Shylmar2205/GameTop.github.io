document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-hamburguesa");
    const navMenu = document.querySelector(".nav");

    // Toggle para el menú hamburguesa
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Obtener el botón para cambiar el color del footer
    const botonCambiarColor = document.getElementById('cambiar-color');

    // Función para cambiar el color del footer
    botonCambiarColor.addEventListener('click', function () {
        const colorActualFooter = document.querySelector('footer').style.backgroundColor;

        // Cambiar el color del footer entre dos colores
        if (colorActualFooter === 'rgb(106, 13, 173)' || colorActualFooter === '') {
            document.querySelector('footer').style.backgroundColor = '#4B0082'; // Color de cambio para el footer
        } else {
            document.querySelector('footer').style.backgroundColor = '#6A0DAD'; // Color original del footer
        }
    });
});