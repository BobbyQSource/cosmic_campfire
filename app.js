const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let time = 0;

// Stars
const stars = [];

for (let i = 0; i < 130; i++) {
  stars.push({
    x: Math.random() * 800,
    y: Math.random() * 320,
    size: Math.random() * 2 + 1
  });
}

// Galaxy
function drawGalaxy() {
  ctx.fillStyle = "#00020b";
  ctx.fillRect(0, 0, 800, 450);

  ctx.fillStyle = "#d8c8ff";

  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Grass
function drawGrass() {
  ctx.fillStyle = "#28583a";
  ctx.fillRect(0, 365, 800, 130);
}

// Draw campfire
function drawFire() {
  // Campfire logs
  ctx.strokeStyle = "#65402d";
  ctx.lineWidth = 12;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(375, 390);
  ctx.lineTo(425, 365);
  ctx.moveTo(425, 390);
  ctx.lineTo(375, 365);
  ctx.stroke();

  // Flicker flames
  const flicker = Math.sin(time * 5) * 6;

  // Outer red flames
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(375, 375);

  ctx.bezierCurveTo(350, 350, 380, 335, 370, 310 + flicker);
  ctx.bezierCurveTo(395, 330, 385, 345, 400, 350);
  ctx.bezierCurveTo(385, 320, 410, 300 + flicker, 405, 285 + flicker);
  ctx.bezierCurveTo(435, 325, 410, 340, 420, 350);
  ctx.bezierCurveTo(445, 330, 440, 315 + flicker, 435, 305 + flicker);
  ctx.bezierCurveTo(460, 345, 440, 370, 425, 375);

  ctx.closePath();
  ctx.fill();

  // Orange flames
  ctx.fillStyle = "orangered";
  ctx.beginPath();
  ctx.moveTo(385, 375);

  ctx.bezierCurveTo(375, 350, 395, 340, 390, 325 + flicker);
  ctx.bezierCurveTo(410, 345, 395, 355, 405, 355);
  ctx.bezierCurveTo(400, 330, 420, 315 + flicker, 415, 305 + flicker);
  ctx.bezierCurveTo(435, 345, 420, 355, 430, 375);

  ctx.closePath();
  ctx.fill();

  // Yellow flames
  ctx.fillStyle = "gold";
  ctx.beginPath();
  ctx.moveTo(392, 375);

  ctx.bezierCurveTo(390, 355, 405, 350, 400, 340 + flicker);
  ctx.bezierCurveTo(420, 355, 415, 360, 417, 375);

  ctx.closePath();
  ctx.fill();
}

// Draw alien UFO
function drawUFO(x, y) {
  // Glass 
  ctx.fillStyle = "lightblue";
  ctx.beginPath();
  ctx.arc(x, y, 28, Math.PI, 0);
  ctx.fill();

  // Alien head
  ctx.fillStyle = "lightgreen";
  ctx.beginPath();
  ctx.arc(x, y - 7, 11, 0, Math.PI * 2);
  ctx.fill();

  // Alien's eyes
  ctx.fillStyle = "black";
  ctx.fillRect(x - 6, y - 9, 3, 4);
  ctx.fillRect(x + 3, y - 9, 3, 4);

  // UFO's body
  ctx.fillStyle = "silver";
  ctx.beginPath();
  ctx.ellipse(x, y + 13, 55, 16, 0, 0, Math.PI * 2);
  ctx.fill();

  // UFO's lights
  ctx.fillStyle = "yellow";

  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(x + i * 19, y + 13, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Animation
function animate() {
  drawGalaxy();
  drawGrass();
  drawFire();

  // Makes UFO fly around
  const x = 400 + Math.sin(time) * 250;
  const y = 110 + Math.sin(time * 2) * 15;

  drawUFO(x, y);

  time += 0.015;
  requestAnimationFrame(animate);
}

animate();