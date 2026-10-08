// ELEMENTOS

const welcome = document.getElementById("welcome");
const openButton = document.getElementById("openButton");
const card = document.getElementById("card");

const infoButton = document.getElementById("infoButton");
const infoBox = document.getElementById("infoBox");
const surpriseBox = document.getElementById("surpriseBox");
const musicButton = document.getElementById("musicButton");
const musica = document.getElementById("musica");


// ABRIR INVITACIÓN
// El toque en este botón permite iniciar la música automáticamente

openButton.addEventListener("click", function () {

  // Iniciar música
  musica.play()
    .then(function () {
      musicButton.textContent = "⏸️ Pausar música";
    })
    .catch(function () {
      musicButton.textContent = "🎵 Música";
    });

  // Mostrar la tarjeta
  card.classList.remove("oculta");

  // Ocultar la bienvenida con desvanecido
  welcome.classList.add("cerrada");

  setTimeout(function () {
    welcome.style.display = "none";
  }, 700);

});


// VER INDICACIONES
// Muestra las indicaciones y el mensaje final juntos

infoButton.addEventListener("click", function () {

  infoBox.classList.toggle("show");

  surpriseBox.classList.toggle(
    "show",
    infoBox.classList.contains("show")
  );

});


// MÚSICA (pausar / reanudar)

musicButton.addEventListener("click", function () {

  if (musica.paused) {
    musica.play();
    musicButton.textContent = "⏸️ Pausar música";
  } else {
    musica.pause();
    musicButton.textContent = "🎵 Música";
  }

});
