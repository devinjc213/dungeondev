import InputHandler from './game/InputHandler';
import Player from './game/Player';
import Enemy from './game/Enemy';
import { map1 } from './maps/map1.js';
import tilesheet from './assets/tiles/fullSets/tilesheet.png';

const canvas = <HTMLCanvasElement>document.getElementById('game');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 640;
const TILE_SIZE = 32;
const staggerFrames = 5;
let frameX = 0;
let gameFrame = 0;
let enemies: Enemy[] = [];

const tilesetImage = new Image();
tilesetImage.src = tilesheet;

function handleEnemies() {
  enemies.forEach((enemy: Enemy) => {
    enemy.draw(ctx, frameX);
  })
}

function paintUI() {
  ctx.font = '30px Comic Sans MS'
  ctx.fillText(`${player.hp}/10`, CANVAS_WIDTH - 100, 50);
}

function handleDrawMap(layer3: boolean) {
  if (layer3) {
    ctx.save();
    Object.keys(map1.map[2]).forEach((key) => {
      //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
      const positionX = Number(key.split('-')[0]);
      const positionY = Number(key.split('-')[1]);
      // @ts-ignore
      const [tilesheetX, tilesheetY] = map1.map[2][key];

      ctx.drawImage(
        tilesetImage,
        tilesheetX * TILE_SIZE,
        tilesheetY * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE,
        positionX * TILE_SIZE,
        positionY * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE
      );
    });
    ctx.restore();
  } else {
    map1.map.forEach((layer) => {
      Object.keys(layer).forEach((key) => {
        //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
        const positionX = Number(key.split('-')[0]);
        const positionY = Number(key.split('-')[1]);
        // @ts-ignore
        const [tilesheetX, tilesheetY] = layer[key];

        ctx.drawImage(
          tilesetImage,
          tilesheetX * TILE_SIZE,
          tilesheetY * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE,
          positionX * TILE_SIZE,
          positionY * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
      });
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.drawImage(background, 0, 0);
  handleDrawMap(false);
  handleEnemies();
  player.draw(ctx, frameX);
  player.update(input, enemies, ctx, frameX);
  //draw layer3 over character
  handleDrawMap(true);
  paintUI();

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