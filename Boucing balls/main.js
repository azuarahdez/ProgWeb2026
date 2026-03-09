// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// imagen del icono de JavaScript
const jsIcon = new Image();
jsIcon.src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 150)},${random(0, 200)},${random(0, 75)})`;
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x; //posición horizontal
  this.y = y; //posición vertical
  this.velX = velX; //velocidad horizontal
  this.velY = velY; //velocidad vertical
  this.color = color; //color
  this.size = size; //tamaño
}

// dibujar icono en lugar de bola
Ball.prototype.draw = function () {
  ctx.drawImage(
    jsIcon,
    this.x - this.size,
    this.y - this.size,
    this.size * 2,
    this.size * 2
  );
};

Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

var balls = [];

function loop() {
  ctx.fillStyle = "rgba(164, 164, 209, 0.25)";
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 45) {
    var size = random(30, 50);
    var ball = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      `rgb(${random(0, 205)},${random(0, 105)},${random(0, 175)})`,
      size
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

Ball.prototype.collisionDetect = function () {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
      }
    }
  }
};

loop();