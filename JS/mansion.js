document.addEventListener("DOMContentLoaded", function () {
    const thing = document.getElementById("thing");
    const message = document.getElementById("character-message");
    const lurch = document.getElementById("lurch");
    const lurchWarning = document.getElementById("lurch-warning");
    const followThing = document.getElementById("follow-thing");

    if (thing) {
        // Aseguramos que "Cosa" aparece después de 500ms
        setTimeout(() => {
            thing.style.display = "block"; // Asegura que sea visible
            thing.classList.add("show");
        }, 500);

        // Usar setTimeout en vez de animationend para más compatibilidad
        setTimeout(() => {
            if (message) {
                message.style.display = "block";
                message.classList.add("show");
            }
        }, 4000); // 4s para asegurar que "Cosa" termina de moverse
    }

    // Aparecen Lurch y su advertencia después de 2.5s
    setTimeout(() => {
        if (lurch) lurch.style.display = "block";
        if (lurchWarning) lurchWarning.style.display = "block";

        // Luego de 1s más, mostramos el botón "Seguir a Cosa"
        setTimeout(() => {
            if (followThing) followThing.style.display = "block";
        }, 1000);
    }, 2500);
});

/* Funciones del menú */
function openMenu() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.width = "250px";
}

function closeMenu() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.width = "0";
}

function goToNextPage() {
    window.location.href = "mazmorra.html"; // Reemplaza con la URL real
}
