onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 2000);

    // Llama a la función para generar corazones cada cierto tiempo
    // El intervalo de 2000ms (2 segundos) ayuda a reducir la carga de rendimiento
    setInterval(createHeart, 2000); // Crea un corazón cada 2 segundos
  };

// Función para crear y animar un corazón
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('span');
    heart.classList.add('heart-emoji');
    heart.innerHTML = '❤️'; // El emoji de corazón

    // Posición inicial aleatoria en la parte inferior de la pantalla
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-5vh'; // Empieza un poco fuera de la pantalla por abajo

    // Duración de la animación aleatoria para más variedad
    heart.style.animationDuration = Math.random() * 4 + 3 + 's'; // Entre 3 y 7 segundos
    heart.style.animationDelay = Math.random() * 0.5 + 's'; // Pequeño retraso aleatorio

    heartsContainer.appendChild(heart);

    // Eliminar el corazón del DOM después de que termine su animación para no acumular elementos
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}