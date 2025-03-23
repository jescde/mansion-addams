document.addEventListener("DOMContentLoaded", async function () {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.style.animation = "latido 1.5s ease-in-out infinite alternate";
        setTimeout(() => titulo.style.animation = "none", 5000);
    }

    const firstMessage = document.getElementById("wednesday-message");
    const newMessage = document.getElementById("wednesday-message2");
    const buttons = document.querySelectorAll(".hidden-button");
    const contentContainers = document.querySelectorAll(".content-box");
    const wednesdayImage = document.getElementById("wednesday-photo");
    const desdichadoButtons = document.querySelectorAll(".hidden-button");

    // Ocultar los botones de los "Desdichados" al inicio
    desdichadoButtons.forEach(button => button.style.display = "none");

    async function showMessages() {
        if (firstMessage) {
            firstMessage.style.animation = "fadeIn 2s forwards";
            await delay(14000);
            firstMessage.style.animation = "fadeOut 2s forwards";
            await delay(2000);
            firstMessage.style.display = "none";
        }

        if (newMessage) {
            newMessage.style.animation = "fadeIn 2s forwards";
            await delay(1000);
        }

        // Mostrar botones con animación
        desdichadoButtons.forEach(button => {
            button.style.display = "block";
            button.style.animation = "fadeIn 1s forwards";
        });
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showMessages();

    // Mostrar la imagen con animación
    if (wednesdayImage) {
        wednesdayImage.style.animation = "fadeInMove 2s ease-in-out forwards";
    }

    // Sonido para los botones
    const audio = new Audio("click-sound.mp3");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Ocultar todos los contenidos antes de mostrar el correspondiente
            contentContainers.forEach(container => container.style.display = "none");

            const contentId = button.id.replace("btn", "desdichado") + "-content";
            const targetContent = document.getElementById(contentId);

            if (targetContent) {
                // Posicionar el contenido encima del botón
                const rect = button.getBoundingClientRect();
                targetContent.style.position = "absolute";
                targetContent.style.top = `${rect.top - targetContent.offsetHeight - 10}px`; // Justo encima del botón
                targetContent.style.left = `${rect.left}px`;
                targetContent.style.display = targetContent.style.display === "block" ? "none" : "block";
            }

            // Sonido al hacer clic
            audio.currentTime = 0;
            audio.play();
        });

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#FFD700";
            button.style.color = "#000";
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#000";
            button.style.color = "#FFD700";
        });
    });

    // Redirigir al hall de la mansión
    window.goToNextPage = function () {
        window.location.href = "mansion.html";
    };
});

function redirectTo(page) {
    window.location.href = page;
}