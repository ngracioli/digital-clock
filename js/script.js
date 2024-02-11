// Captura os elementos HTML
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

// Função para corrigir o tempo, ela coloca um 0 na esquerda caso o digito do tempo for < 10
function fixTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

// Função para atualizar o relógio
function updateClock() {
  const currentDate = new Date();
  const hours = fixTime(currentDate.getHours());
  const minutes = fixTime(currentDate.getMinutes());
  const seconds = fixTime(currentDate.getSeconds());

  // Atualiza os elementos HTML com o tempo atual
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}

// Inicializa o relógio ao carregar a página
updateClock();

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
