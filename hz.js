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
  document.getElementById("hz").src = "images/hzfoundme.png";
  const hzSound = new Audio("sounds/HZcry.mp3");
  hzSound.play();
  music.pause();
  setTimeout(function () {
    begintext();
  }, 1500);
}

// Hide the first modal and show the second modal (with 2.png)
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImage");
var modalImg = document.getElementById("modalImage");

// When the user clicks on the image, open the modal
function begintext() {
  clearInterval(timerInterval); // stop timer
  var modal = document.getElementById("myModal");
  modal.style.display = "block"; // Display the modal when the image is clicked
}
function changetext1() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  document.getElementById("t1").classList.add("hidden");
  document.getElementById("t2").classList.remove("hidden");
}
function changetext2() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  document.getElementById("t2").classList.add("hidden");
  document.getElementById("t3").classList.remove("hidden");
}
function changetext3() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  document.getElementById("t3").classList.add("hidden");
  document.getElementById("t4").classList.remove("hidden");
}

function refreshPage() {
  location.reload();
}
function nextroom() {
  window.location.href = "gengar.html";
}
