function toggleImages() {
    const imageContainer = document.getElementById('imageContainer');
    const toggleButton = document.getElementById('toggleButton');

    // Verifica si el contenedor de imágenes está visible
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block'; // Muestra las imágenes
        toggleButton.textContent = 'Ocultar modelos'; // Cambia el texto del botón
    } else {
        imageContainer.style.display = 'none'; // Oculta las imágenes
        toggleButton.textContent = 'Mostrar modelos'; // Cambia el texto del botón
    }
}
