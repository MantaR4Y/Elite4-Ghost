// Get the modal element
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImage");
var modalImg = document.getElementById("modalImage");

// When the user clicks on the image, open the modal
img.onclick = function () {
  modal.style.display = "block";
};
//changes text img and adds ping sound 7 times
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
function changetext4() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  document.getElementById("t4").classList.add("hidden");
  document.getElementById("t5").classList.remove("hidden");
}
function changetext5() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  document.getElementById("t5").classList.add("hidden");
  document.getElementById("t6").classList.remove("hidden");
}
function changetext6() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  document.getElementById("t6").classList.add("hidden");
  document.getElementById("t7").classList.remove("hidden");
}
function changetext7() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  document.getElementById("t7").classList.add("hidden");
  document.getElementById("t8").classList.remove("hidden");
}
//starts battle with mimikyu
function nextroom() {
  const ping = new Audio("sounds/click.mp3");
  ping.play();
  window.location.href = "mimikyu.html";
}
