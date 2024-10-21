// Esto nos permite controlar cuándo se muestra o se oculta el menú.
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

// Mostrar menú
// Escuchamos el clic en el botón para abrir el menú y le añadimos una clase para mostrarlo.
navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

// Ocultar menú
// Cuando se hace clic en el botón de cerrar, removemos la clase para ocultar el menú.
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// Funcionalidad de búsqueda
// Seleccionamos el campo de búsqueda y los botones para mostrar y ocultar la barra de búsqueda.
const search = document.getElementById("search"),
    searchBtn = document.getElementById("search-btn"),
    searchClose = document.getElementById("search-close");

// Mostrar barra de búsqueda
// Cuando se hace clic en el botón de búsqueda, mostramos la barra agregando una clase.
searchBtn.addEventListener("click", () => {
    search.classList.add("show-search");
});

// Ocultar barra de búsqueda
// Removemos la clase de búsqueda al hacer clic en cerrar para ocultar el campo.
searchClose.addEventListener("click", () => {
    search.classList.remove("show-search");
});

// Control de inicio de sesión
// Seleccionamos el formulario de inicio de sesión y los botones para abrir y cerrar el formulario.
const login = document.getElementById("login"),
    loginBtn = document.getElementById("login-btn"),
    loginClose = document.getElementById("login-close");

// Mostrar formulario de inicio de sesión
// Al hacer clic en el botón de inicio de sesión, añadimos una clase para mostrar el formulario.
loginBtn.addEventListener("click", () => {
    login.classList.add("show-login");
});

// Ocultar formulario de inicio de sesión
// Removemos la clase del formulario cuando se hace clic en cerrar para ocultarlo.
loginClose.addEventListener("click", () => {
    login.classList.remove("show-login");
});

// Efecto de aparición en scroll
// Verificamos si un contenedor específico es visible cuando el usuario hace scroll para aplicar un efecto de aparición.
window.addEventListener("scroll", () => {
    const contenedor = document.querySelector(".contenedor");
    const rect = contenedor.getBoundingClientRect();

    // Si el contenedor está visible en la ventana, le añadimos una clase que lo hace aparecer.
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        contenedor.classList.add("aparecer");
    }
});