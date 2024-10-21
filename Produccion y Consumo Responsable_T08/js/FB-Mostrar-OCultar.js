function mostrarValores() {
    const listaValores = document.getElementById("listaValores");
    if (listaValores.style.display === "none") {
        listaValores.style.display = "block"; // Muestra la lista
        document.querySelector(".boton-desplegar").innerText = "Ocultar Valores"; // Cambia el texto del botón
    } else {
        listaValores.style.display = "none"; // Oculta la lista
        document.querySelector(".boton-desplegar").innerText = "Mostrar Valores"; // Cambia el texto del botón
    }
}
