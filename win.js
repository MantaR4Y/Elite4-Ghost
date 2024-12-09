var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImage");
var modalImg = document.getElementById("modalImage");

// When the user clicks on the image, open the modal
window.onload = function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
};
//change text times 3
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

//what triggers and is the spin effect
function triggerSpin() {
  $(".spin-image").css("transform", "rotateY(1080deg)");
}
//what makes the pokeball come down after my last words
function victory() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  setTimeout(function () {
    $("#pokeBall").animate({ top: "250px" }, 5000);
    triggerSpin();
  }, 500);
}
//luzniak's room
function nextroom() {
  window.location.href = "https://beatopia.github.io/SableyeMaze/intro.html";
}
