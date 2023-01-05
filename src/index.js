import InputHandler from './game/InputHandler';
import Player from './game/Player';
import Enemy from './game/Enemy';
import { map1 } from './maps/map1.js';
import tilesheet from './assets/tiles/fullSets/tilesheet.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 640;
const staggerFrames = 5;
let frameX = 0;
let gameFrame = 0;
let enemies = [];

const tilesetImage = new Image();
tilesetImage.src = tilesheet;

function handleEnemies() {
  enemies.forEach(enemy => {
    enemy.draw(ctx, frameX);
  })
}

function handleDrawMap() {
  let size_of_crop = 32;

  map1.map.forEach((layer) => {
    Object.keys(layer).forEach((key) => {
      //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
      const positionX = Number(key.split('-')[0]);
      const positionY = Number(key.split('-')[1]);
      const [tilesheetX, tilesheetY] = layer[key];

      ctx.drawImage(
        tilesetImage,
        tilesheetX * 32,
        tilesheetY * 32,
        size_of_crop,
        size_of_crop,
        positionX * 32,
        positionY * 32,
        size_of_crop,
        size_of_crop
      );
    });
  });
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.drawImage(background, 0, 0);
  handleDrawMap();
  handleEnemies();
  player.draw(ctx, frameX);
  player.update(input, enemies);

  if (gameFrame % staggerFrames === 0) {
    if (frameX < 5) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}

const input = new InputHandler();
const player = new Player(CANVAS_WIDTH, CANVAS_HEIGHT);
enemies.push(new Enemy(CANVAS_WIDTH, CANVAS_HEIGHT, 'goblin', 420, 420));
enemies.push(new Enemy(CANVAS_WIDTH, CANVAS_HEIGHT, 'slime', 69, 420));

animate();