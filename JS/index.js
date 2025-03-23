document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".registroForm");
    const nombreCorrecto = "Noelia";
    const passwordCorrecto = "nr13"; 
    const doorContainer = document.getElementById("door-container");
    const doors = document.querySelectorAll(".door");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const nombreInput = document.getElementById("name").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        if (nombreInput === nombreCorrecto && passwordInput === passwordCorrecto) {
            alert("¡Bienvenida a la Mansión Addams, " + nombreCorrecto + "!");

            // Muestra las puertas cerradas
            doorContainer.style.display = "flex";

            // Espera un poco y comienza la animación
            setTimeout(() => {
                doors[0].style.transform = "rotateY(-100deg)";
                doors[1].style.transform = "rotateY(100deg)";
            }, 500);

            // Espera a que la animación termine y redirige
            setTimeout(() => {
                window.location.href = "mansion.html";
            }, 2500);
        } else {
            alert("Nombre o contraseña incorrectos. Inténtalo de nuevo.");
        }
    });
});
