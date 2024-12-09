var music = new Audio("sounds/LavenderTownMusic.mp3");
var jumpscare = document.getElementById("jumpscare");
var hidescare = document.getElementById("hidescare");

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);
music.volume = 0.3;
music.play();

function jumpScare() {
  var jumpscaresound = new Audio("sounds/jumpscare.mp3"); // Replace with your file path
  jumpscaresound.play();
  setTimeout(function () {
    hidescare.classList.remove("none");
    jumpscare.style.display = "block"; // Make jumpscare visible
    hidescare.classList.remove("none");
    body.setAttribute("class", "center-content");
    jumpscare.classList.add("growscare");
  }, 500);
  setTimeout(function () {
    refreshPage();
  }, 2000);
}

var timerInterval;

window.onload = function timer() {
  const timer = document.getElementById("timer");
  let timeSec = 45;
  timerInterval = setInterval(() => {
    if (timeSec === -1) {
      jumpScare();
      music.pause();
      clearInterval(timerInterval);
    } else {
      timer.innerText = timeSec;
      timeSec = timeSec - 1;
    }
    if (timeSec === 19) {
      const clocksound = new Audio("sounds/clocksound.mp3");
      clocksound.play();
    }
    if (timeSec === 9) {
      const heartbeat = new Audio("sounds/heartbeat.mp3");
      heartbeat.volume = 0.25;
      heartbeat.play();
    }
  }, 1000);
};
function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;
  // Adjust coordinates based on the position of .legs
  const legs = document.querySelector(".legs");
  const rect = legs.getBoundingClientRect();

  // Calculate the position within the .legs container
  const cursorX = x - rect.left;
  const cursorY = y - rect.top;

  // Set the CSS variables
  document.documentElement.style.setProperty("--cursorX", cursorX + "px");
  document.documentElement.style.setProperty("--cursorY", cursorY + "px");
}

// Show the second modal (with 2.png)

function foundMe() {
  document.getElementById("gengar").src = "images/gengarfoundme.png";
  const gengarSound = new Audio("sounds/GengarCry.mp3");
  gengarSound.play();
  music.pause();
  setTimeout(function () {
    nextroom();
  }, 1500);
}

// Hide the first modal and show the second modal (with 2.png)

function nextroom() {
  window.location.href = "win.html";
}
function refreshPage() {
  //refreshes page
  location.reload();
}
