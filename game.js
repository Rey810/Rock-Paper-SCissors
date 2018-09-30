var counter_usr = 0;
var counter_comp = 0;
var theme = 1;

  function themechange(num){
    if (num == 1){
      counter_usr = 0;
      counter_comp = 0;
      window.theme = num;
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/placeholder.png";
      document.getElementById("placeholder_2").src = "media/placeholder.png";
      document.getElementById("placeholder_1").src = "media/placeholder.png";
      document.getElementById("placeholder_3").style.backgroundColor = "transparent";
      document.getElementById("placeholder_2").style.backgroundColor= "transparent";
      document.getElementById("placeholder_1").style.backgroundColor = "transparent";
      document.getElementById("title").innerHTML = "Nuke Roach Leg";
      document.getElementById("title_2").innerHTML = "Nuke Roach Leg";
      document.getElementById("nuke").src = "media/" + theme + "/1.png";
      document.getElementById("roach").src = "media/" + theme + "/2.png";
      document.getElementById("leg").src = "media/" + theme + "/3.png";
      document.getElementById("nuke").style.border = "2px solid black";
      document.getElementById("roach").style.border = "2px solid black";
      document.getElementById("leg").style.border = "2px solid black";
      document.getElementById("leg").style.border = "2px solid black";
      document.getElementById("nuke").style.borderRadius = "49px";
      document.getElementById("roach").style.borderRadius = "49px";
      document.getElementById("leg").style.borderRadius = "49px";
      document.body.style.backgroundImage = "none";
      document.getElementById("players").style.backgroundColor = "#2E4A62";
      document.getElementById("usr_result").style.border = "1px dashed black";
      document.getElementById("comp_result").style.border = "1px dashed black";
      document.getElementById("result").style.border = "1px dashed black";
      document.getElementById("footer").style.backgroundColor = "#2E4A62";
      document.getElementById("title_2").style.backgroundColor = "#2E4A62";
      document.getElementById("instructions").innerHTML = 'Play for the fate of the World';
    }

    if (num == 2 ){
      window.theme = num
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/placeholder.png";
      document.getElementById("placeholder_2").src = "media/placeholder.png";
      document.getElementById("placeholder_1").src = "media/placeholder.png";
      document.getElementById("placeholder_3").style.backgroundColor = "transparent";
      document.getElementById("placeholder_2").style.backgroundColor= "transparent";
      document.getElementById("placeholder_1").style.backgroundColor = "transparent";
      document.getElementById("title").innerHTML = "Garfield";
      document.getElementById("title_2").innerHTML = "Garfield";
      document.getElementById("nuke").src = "media/" + theme + "/1.png";
      document.getElementById("roach").src = "media/" + theme + "/2.png";
      document.getElementById("leg").src = "media/" + theme + "/3.png";
      document.getElementById("nuke").style.border = "2px solid black";
      document.getElementById("roach").style.border = "2px solid black";
      document.getElementById("leg").style.border = "2px solid black";
      document.getElementById("nuke").style.borderRadius = "49px";
      document.getElementById("roach").style.borderRadius = "49px";
      document.getElementById("leg").style.borderRadius = "49px";
      document.body.style.backgroundImage = 'url(media/wallpaper_2.png)';
      document.getElementById("players").style.backgroundColor = "transparent";
      document.getElementById("usr_result").style.border = "1px dashed black";
      document.getElementById("comp_result").style.border = "1px dashed black";
      document.getElementById("result").style.border = "1px dashed black";
      document.getElementById("title_2").style.backgroundColor = "transparent";
      document.getElementById("footer").style.backgroundColor = "transparent";
      document.getElementById("instructions").innerHTML = "";
    }

    if (num == 3){
      window.theme = num;
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/placeholder.png";
      document.getElementById("placeholder_2").src = "media/placeholder.png";
      document.getElementById("placeholder_1").src = "media/placeholder.png";
      document.getElementById("placeholder_3").style.backgroundColor = "transparent";
      document.getElementById("placeholder_2").style.backgroundColor= "transparent";
      document.getElementById("placeholder_1").style.backgroundColor = "transparent";
      document.getElementById("title").innerHTML = "Rick and Morty";
      document.getElementById("title_2").innerHTML = "Rick and Morty";
      document.getElementById("nuke").src = "media/" + theme + "/1.png";
      document.getElementById("roach").src = "media/" + theme + "/2.png";
      document.getElementById("leg").src = "media/" + theme + "/3.png";
      document.getElementById("nuke").style.border = "1px solid black";
      document.getElementById("roach").style.border = "1px solid black";
      document.getElementById("leg").style.border = "1px solid black";
      document.getElementById("nuke").style.borderRadius = "10px";
      document.getElementById("roach").style.borderRadius = "10px";
      document.getElementById("leg").style.borderRadius = "10px";
      document.body.style.backgroundImage = 'url(media/rickmorty2.png)';
      document.getElementById("players").style.backgroundColor = "transparent";
      document.getElementById("usr_result").style.border = "1px dashed black";
      document.getElementById("comp_result").style.border = "1px dashed black";
      document.getElementById("result").style.border = "1px dashed black";
      document.getElementById("footer").style.backgroundColor = "transparent";
      document.getElementById("title_2").style.backgroundColor = "transparent";
      document.getElementById("instructions").innerHTML = '';
    }
  }

  function playerChoice(num){
      if (num == 1){
        document.getElementById("placeholder_1").src = "media/" + window.theme + "/1.png";
        document.getElementById("placeholder_1").style.backgroundColor = "#FEF265";
      } if (num == 2){
        document.getElementById("placeholder_1").src = "media/" + window.theme + "/2.png";
        document.getElementById("placeholder_1").style.backgroundColor = "#FCE8A4";
      } if (num == 3){
        document.getElementById("placeholder_1").src = "media/" + window.theme + "/3.png";
        document.getElementById("placeholder_1").style.backgroundColor = "#FEEED4";
      }
    }

/*  function playerplay(choice) {
    var choice_mod = choice.toLowerCase();
    var choice_final = choice_mod.replace(choice_mod[0], choice_mod[0].toUpperCase());
    if (choice_final == "Rock") {
      return "Rock";
    } else if (choice_final == "Paper") {
      return "Paper";
    } else (choice_final == "Scissors")
      return "Scissors";
  }
*/

  function playerplay(choice) {
    if (choice == 1) {
      var choice = 1;
      return 1;
    } else if (choice == 2) {
      var choice = 2;
      return 2;
    } else choice = 3;
      return 3;
  }

  function complay(){
    var num = Math.floor(Math.random() * 3)
    if (num == 1){
      var complay = 1;
      document.getElementById("placeholder_2").src = "media/" + theme + "/1.png";
      document.getElementById("placeholder_2").style.backgroundColor = "#FEF265";
      return 1;
    } else if(num == 2) {
      var complay = 2;
      document.getElementById("placeholder_2").src = "media/" + theme + "/2.png";
      document.getElementById("placeholder_2").style.backgroundColor = "#FCE8A4";
      return 2;
    } else {
      var complay = 3;
      document.getElementById("placeholder_2").src = "media/" + theme + "/3.png";
      document.getElementById("placeholder_2").style.backgroundColor = "#FEEED4";
      return 3;
    }
  }

/*4=draw, 5=win, 6=loss*/
    /*DRAWS*/
  function game(playerplay, complay) {
    if (playerplay == complay) {
      var result = 4;
      document.getElementById("play_again_2").style.visibility = "hidden";
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      /*if (themechange == 2){
        document.getElementById("placeholder_3").src = "media/"}*/
      document.getElementById("placeholder_3").src = "media/" + theme + "/4.gif";
      document.getElementById("result").style.border = "5px solid blue";
      document.getElementById("stamp_3").style.visibility = "visible";

      return 4;
    } /*WINS*/
    else if (playerplay == 1 && complay == 3){
      var result = 5;
      document.getElementById("play_again_2").style.visibility = "hidden";
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/" + theme + "/1.gif";
      document.getElementById("result").style.border = "5px solid green";
      document.getElementById("stamp").style.visibility = "visible";
      window.counter_usr++;
      document.getElementById("player_score").innerHTML = counter_usr;
      reset_score();
      return 5;
    } else if (playerplay == 2 && complay == 1){
      var result = 5;
      document.getElementById("play_again_2").style.visibility = "hidden";
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/" + theme + "/2.gif";
      document.getElementById("result").style.border = "5px solid green";
      document.getElementById("stamp").style.visibility = "visible";
      window.counter_usr++;
      document.getElementById("player_score").innerHTML = counter_usr;
      reset_score();
      return 5;
    } else if (playerplay == 3 && complay == 2) {
      var result = 5;
      document.getElementById("play_again_2").style.visibility = "hidden";
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/" + theme + "/3.gif";
      document.getElementById("result").style.border = "5px solid green";
      document.getElementById("stamp").style.visibility = "visible";
      window.counter_usr++;
      document.getElementById("player_score").innerHTML = counter_usr;
      reset_score();
      return 5;
    } /*LOSSES*/
    else if (complay == 1 && playerplay == 3){
      var result = 6;
      document.getElementById("play_again_2").style.visibility = "hidden";
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/" + theme + "/1.gif";
      document.getElementById("result").style.border = "5px solid red";
      document.getElementById("stamp_2").style.visibility = "visible";
      window.counter_comp++;
      document.getElementById("com_score").innerHTML = counter_comp;
      reset_score();
      return 6;
    } else if (complay == 2 && playerplay == 1){
      var result = 6;
      document.getElementById("play_again_2").style.visibility = "hidden";
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/" + theme + "/2.gif";
      document.getElementById("result").style.border = "5px solid red";
      document.getElementById("stamp_2").style.visibility = "visible";
      window.counter_comp++;
      document.getElementById("com_score").innerHTML = counter_comp;
      reset_score();
      return 6;
    } else (complay == 3 && playerplay == 2)
      var result = 6;
      document.getElementById("play_again_2").style.visibility = "hidden";
      document.getElementById("stamp").style.visibility = "hidden";
      document.getElementById("stamp_2").style.visibility = "hidden";
      document.getElementById("stamp_3").style.visibility = "hidden";
      document.getElementById("placeholder_3").src = "media/" + theme + "/3.gif";
      document.getElementById("result").style.border = "5px solid red";
      document.getElementById("stamp_2").style.visibility = "visible";
      window.counter_comp++;
      document.getElementById("com_score").innerHTML = counter_comp;
      reset_score();
      return 6;
}

function reset_score(){
  if (window.counter_usr == 5){
    window.counter_usr = 0;
    document.getElementById("player_score").innerHTML = counter_usr;
    window.counter_comp = 0;
    document.getElementById("com_score").innerHTML = counter_comp;
    document.getElementById("canvas").style.visibility = "visible";
    document.getElementById("canvas").style.height = "100%";
    document.getElementById("canvas_2").style.height = "100%";
    confetti();
    document.getElementById("play_again").style.visibility = "visible";
    document.getElementById("play_again").style.background = "green";
  } if (window.counter_comp == 5){
    window.counter_usr = 0;
    document.getElementById("player_score").innerHTML = counter_usr;
    window.counter_comp = 0;
    document.getElementById("com_score").innerHTML = counter_comp;
    document.getElementById("play_again_2").style.visibility = "visible";
    document.getElementById("play_again_2").style.backgroundColor = "red";
  }
}

function confetti(){
let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];

  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();
}
