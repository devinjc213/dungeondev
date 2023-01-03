const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 16;
const staggerFrames = 5;
let frameX = 0;
let gameFrame = 0;

const playerImage = new Image();
playerImage.src = 'assets/heroes/knight/knight_idle_spritesheet.png';

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, 32, 32);

  if (gameFrame % staggerFrames === 0) {
    if (frameX < 5) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();