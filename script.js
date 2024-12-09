//variables
var music = new Audio("sounds/LavenderTownMusic.mp3");
var jumpscare = document.getElementById("jumpscare");
var hidescare = document.getElementById("hidescare");
//this for cursor aka flashlight
document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);
//music starts
music.volume = 0.3;
music.play();

//how my jumpscare works
function jumpScare() {
  var jumpscaresound = new Audio("sounds/jumpscare.mp3"); // Replace with your file path
  jumpscaresound.play(); //the sound plays first
  setTimeout(function () {
    //since delay in sound i put a "timer" to play the func at sync with sound
    hidescare.classList.remove("none"); //none hides the scare and its removing that
    jumpscare.style.display = "block"; // Make jumpscare visible
    jumpscare.classList.add("growscare"); //makes it grow at certain speed as well as shake it
  }, 500);
  setTimeout(function () {
    //after a certain time it refreshes page
    refreshPage();
  }, 2000);
}

var timerInterval;

window.onload = function timer() {
  //starts as soon as window is open
  const timer = document.getElementById("timer");
  let timeSec = 45; //45 secs total
  timerInterval = setInterval(() => {
    if (timeSec === -1) {
      //when time is pasts 0
      jumpScare(); //call js func
      music.pause(); //stop music
      clearInterval(timerInterval); //this helps the timer stop when mimikyu found (later func) to stop jumpscare happening
    } else {
      //if not keeps counting down
      timer.innerText = timeSec;
      timeSec = timeSec - 1;
    }
    if (timeSec === 19) {
      //when past 20 secs clock starts
      const clocksound = new Audio("sounds/clocksound.mp3");
      clocksound.play();
    }
    if (timeSec === 9) {
      //when past 20 secs heart starts
      const heartbeat = new Audio("sounds/heartbeat.mp3");
      heartbeat.volume = 0.25;
      heartbeat.play();
    }
  }, 1000); //every sec
};
function update(e) {
  //flashlight follow cursor
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;
  // Adjust coordinates based on the position of .legs
  const legs = document.querySelector(".legs");
  const rect = legs.getBoundingClientRect();

  // Calculate the position within the .legs container
  const cursorX = x - rect.left;
  const cursorY = y - rect.top;

  document.documentElement.style.setProperty("--cursorX", cursorX + "px");
  document.documentElement.style.setProperty("--cursorY", cursorY + "px");
}

//func when u click on pokemon
function foundMe() {
  document.getElementById("mimikyu").src = "images/mimikyufoundme.png"; //change img
  const mimikyuSound = new Audio("sounds/MimikyuCry.mp3"); //this defines the cry
  mimikyuSound.play(); //plays cry
  music.pause(); //stops music so u could hear it
  setTimeout(function () {
    //gives a little time before it loads the texts
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
  //change text bubble x2
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

function refreshPage() {
  //refreshes page
  location.reload();
}
function nextroom() {
  //next pokemon
  window.location.href = "trevenant.html";
}

//I do the same code for all of the other pokemon so notes here will be answer to those other js files except win and start js'
