function alternarContenido(historia) {
    const elementos = document.querySelectorAll('.elemento-tiempo');
    const elementoActual = elementos[historia];

    elementoActual.classList.toggle('activo');
}
