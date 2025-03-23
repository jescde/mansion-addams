document.addEventListener("DOMContentLoaded", function() {
    let titulo = document.getElementById("titulo");
    let mensaje = document.getElementById("mensaje");

    // Mostrar el título con fadeIn después de 500ms
    setTimeout(() => {
        titulo.style.opacity = "1";
    }, 500);

    // Mostrar el mensaje con fadeIn después de 2.5s
    setTimeout(() => {
        mensaje.style.opacity = "1";
    }, 2500);
});

function goToNextPage() {
    window.location.href = 'mansion.html';  // Redirige a la página mansion.html
}
