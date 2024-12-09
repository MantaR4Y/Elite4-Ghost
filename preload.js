console.log("Preload running...");

// all this helps load imgs
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/7.png",
  "images/8.png",
  "images/9.png",
  "images/10.png",
  "images/11.png",
  "images/12.png",
  "images/13.png",
  "images/14.png",
  "images/15.png",
  "images/16.png",
  "images/17.png",
  "images/18.png",
  "images/19.png",
  "images/20.png",
  "images/21.png",
  "images/22.png",
  "images/23.png",
  "images/24.png",
  "images/25.png",
  "images/26.png",
  "images/27.png",
  "images/28.png",
  "images/29.png",
  "images/30.png",
  "images/31.png",
  "images/32.png",
  "images/33.png",
  "images/34.png",
  "images/LavenderTown.png",
  "images/arena.png",
  "images/GhostR4Y.png",
  "images/GhostR4Ychibi.png",
  "images/aegislash.png",
  "images/aegislashFindMe.png",
  "images/aegislashfoundme.png",
  "images/dragapult.png",
  "images/dragapultfindme.png",
  "images/dragapultfoundme.png",
  "images/dreepy.png",
  "images/explosion.jpg",
  "images/gengar.png",
  "images/gengarfindme.png",
  "images/gengarfoundme.png",
  "images/hz.png",
  "images/hzfindme.png",
  "images/hzfoundme.png",
  "images/mimikyu.png",
  "images/mimikyufindme.png",
  "images/mimikyufoundme.png",
  "images/trevenant.png",
  "images/trevenantfindme.png",
  "images/trevenantfoundme.png",
  "images/Master-Ball.png"
);
