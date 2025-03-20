document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".registroForm");
    const nombreCorrecto = "Noelia"; // Cambia esto por el nombre que desees
    const passwordCorrecto = "1234"; // Cambia esto por la contraseña predefinida

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const nombreInput = document.getElementById("name").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        if (nombreInput === nombreCorrecto && passwordInput === passwordCorrecto) {
            alert("¡Bienvenida a la Mansión Addams, " + nombreCorrecto + "!");
            window.location.href = "mansion.html"; // Redirige a otra página si es necesario
        } else {
            alert("Nombre o contraseña incorrectos. Inténtalo de nuevo.");
        }
    });
});
