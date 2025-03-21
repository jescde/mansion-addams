document.addEventListener("DOMContentLoaded", function () {
    const thing = document.getElementById("thing");
    const message = document.getElementById("character-message");
    const lurch = document.getElementById("lurch");
    const lurchWarning = document.getElementById("lurch-message");
    const followThing = document.getElementById("follow-thing");
    const sidebar = document.querySelector(".sidebar");

    if (thing) {
        setTimeout(() => {
            thing.classList.remove("hidden");
            thing.classList.add("show");
        }, 500);

        // Verificar que thing tiene animación
        thing.addEventListener("animationend", () => {
            if (message) {
                message.classList.remove("hidden");
                message.classList.add("show");
            }

            // Asegurar que el botón aparece después del mensaje
            setTimeout(() => {
                if (followThing) {
                    followThing.classList.remove("hidden");
                    followThing.classList.add("show-button");
                }
            }, 1000);
        });

        // Si la animación no se ejecuta, forzar la visibilidad después de un tiempo
        setTimeout(() => {
            if (message && !message.classList.contains("show")) {
                message.classList.remove("hidden");
                message.classList.add("show");
            }
            if (followThing && followThing.classList.contains("hidden")) {
                followThing.classList.remove("hidden");
                followThing.classList.add("show-button");
            }
        }, 5000);
    }

    setTimeout(() => {
        if (lurch) lurch.classList.remove("hidden");
        if (lurchWarning) lurchWarning.classList.remove("hidden");
    }, 2500);

    // Agregar evento de clic al botón "Seguir a Cosa"
    if (followThing) {
        followThing.addEventListener("click", goToNextPage);
    }

    // Cerrar el menú con la tecla Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && sidebar.style.width === "250px") {
            closeMenu();
        }
    });
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
    window.location.href = "mazmorra.html";
}