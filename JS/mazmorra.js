document.addEventListener("DOMContentLoaded", function () {
    // Animación del latido del título de bienvenida
    const titulo = document.querySelector("h1");
    titulo.classList.add("latido");

    // Se detiene la animación después de 5 segundos
    setTimeout(() => {
        titulo.classList.remove("latido");
    }, 5000);

    // Manejo de mensajes con animaciones
    const firstMessage = document.getElementById("wednesday-message");
    const newMessage = document.getElementById("wednesday-message2");
    const buttons = document.querySelectorAll(".hidden-button");
    const contentContainers = document.querySelectorAll(".content-box");

    // Mostrar el primer mensaje con animación
    firstMessage.style.display = "block";
    firstMessage.style.animation = "fadeIn 2s forwards";

    // Pasados 14 segundos, se desvanece el primer mensaje
    setTimeout(() => {
        firstMessage.style.animation = "fadeOut 2s forwards";

        // Cuando desaparezca, mostrar el nuevo mensaje
        setTimeout(() => {
            firstMessage.style.display = "none";
            newMessage.style.display = "block";
            newMessage.style.animation = "fadeIn 2s forwards";

            // Mostrar los botones después de 1 segundo de la aparición del nuevo mensaje
            setTimeout(() => {
                buttons.forEach(button => {
                    button.style.display = "block"; 
                    button.style.animation = "fadeIn 1s forwards";
                });
            }, 1000); // Espera 1 segundo después del segundo mensaje

        }, 2000); // Espera el tiempo de la animación de salida del primer mensaje
    }, 14000);

    // Asignar eventos a los botones para mostrar su contenido correspondiente
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            contentContainers.forEach(container => container.style.display = "none"); // Oculta todos los contenidos
            document.getElementById(`content-${index + 1}`).style.display = "block"; // Muestra el contenido correspondiente
        });
    });

    // Mostrar la imagen de miércoles con animación
    const wednesdayImage = document.getElementById("wednesday-photo");
    wednesdayImage.style.display = "block";
    wednesdayImage.style.animation = "fadeInMove 2s ease-in-out forwards";

    // Agregar sonido al hacer clic en los botones
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const audio = new Audio("click-sound.mp3"); // Asegúrate de que el archivo de sonido está en la misma carpeta
            audio.play();
        });
    });

    // Cambiar el color de fondo al pasar el mouse sobre los botones
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#FFD700";
            button.style.color = "#000";
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#000";
            button.style.color = "#FFD700";
        });
    });
});

// Función para redirigir al hall de la mansión
function goToNextPage() {
    window.location.href = "mansion.html";
}
