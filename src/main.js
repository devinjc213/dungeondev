const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 640;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 16;
const staggerFrames = 5;
let frameX = 0;
let gameFrame = 0;
let enemies = [];

const tilesetImage = new Image();
tilesetImage.src = 'https://i.imgur.com/cKpp1mA.png';

const playerImage = new Image();
const playerIdleRight = 'assets/heroes/knight/knight_idle_right.png';
const playerIdleLeft = 'assets/heroes/knight/knight_idle_left.png';
const playerRunRight = 'assets/heroes/knight/knight_run_right.png';
const playerRunLeft = 'assets/heroes/knight/knight_run_left.png';
playerImage.src = playerIdleRight;

const goblinImage = new Image();
const goblinIdleAnimation = 'assets/enemies/goblin/goblin_idle_spritesheet.png';
const goblinRunningAnimation = 'assets/enemies/goblin/goblin_run_spritesheet.png';
goblinImage.src = goblinIdleAnimation;

const slimeImage = new Image();
const slimeIdleAnimation = 'assets/enemies/slime/slime_idle_spritesheet.png';
const slimeRunningAnimation = 'assets/enemies/slime/slime_run_spritesheet.png';
slimeImage.src = slimeIdleAnimation;

const background = new Image();
background.src = 'assets/maps/map1.png';

const map1 = {"map":[{"0-0":[3,2],"1-0":[3,2],"2-0":[3,2],"3-0":[3,2],"4-0":[3,2],"5-0":[3,2],"6-0":[3,2],"7-0":[3,2],"8-0":[3,2],"9-1":[3,2],"10-1":[3,2],"11-1":[3,2],"12-1":[3,2],"13-1":[3,2],"14-1":[3,2],"15-1":[3,2],"16-1":[3,2],"17-1":[3,2],"18-1":[3,2],"18-2":[3,2],"19-2":[3,2],"19-1":[3,2],"20-1":[3,2],"21-1":[3,2],"22-1":[3,2],"23-1":[3,2],"23-0":[3,2],"24-0":[3,2],"22-0":[3,2],"21-0":[3,2],"20-0":[3,2],"19-0":[3,2],"18-0":[3,2],"17-0":[3,2],"16-0":[3,2],"15-0":[3,2],"14-0":[3,2],"13-0":[3,2],"12-0":[3,2],"11-0":[3,2],"10-0":[3,2],"9-0":[3,2],"17-2":[3,2],"16-2":[3,2],"15-2":[3,2],"14-2":[3,2],"13-2":[3,2],"12-2":[3,2],"11-2":[3,2],"10-2":[3,2],"9-2":[3,2],"8-2":[3,2],"7-2":[3,2],"6-2":[3,2],"5-2":[3,2],"4-2":[3,2],"3-2":[3,2],"3-1":[3,2],"2-1":[3,2],"4-1":[3,2],"5-1":[3,2],"6-1":[3,2],"7-1":[3,2],"8-1":[3,2],"1-1":[3,2],"0-1":[3,2],"0-2":[3,2],"1-2":[3,2],"1-3":[3,2],"2-3":[3,2],"3-3":[3,2],"2-2":[3,2],"0-3":[3,2],"1-4":[3,2],"2-4":[3,2],"3-4":[3,2],"4-4":[3,2],"4-3":[3,2],"5-3":[3,2],"6-3":[3,2],"7-3":[3,2],"8-3":[3,2],"9-3":[3,2],"10-3":[3,2],"11-3":[3,2],"12-3":[3,2],"24-1":[3,2],"24-2":[3,2],"23-2":[3,2],"23-3":[3,2],"22-2":[3,2],"21-2":[3,2],"20-2":[3,2],"19-3":[3,2],"18-3":[3,2],"17-3":[3,2],"16-3":[3,2],"15-3":[3,2],"14-3":[3,2],"13-3":[3,2],"13-4":[3,2],"12-4":[3,2],"11-4":[3,2],"10-4":[3,2],"9-4":[3,2],"8-4":[3,2],"7-4":[3,2],"6-4":[3,2],"5-4":[3,2],"0-4":[3,2],"14-4":[3,2],"15-4":[3,2],"16-4":[3,2],"17-4":[3,2],"18-4":[3,2],"19-4":[3,2],"20-4":[3,2],"21-4":[3,2],"21-3":[3,2],"22-3":[3,2],"20-3":[3,2],"24-3":[3,2],"24-4":[3,2],"23-4":[3,2],"22-4":[3,2],"21-5":[3,2],"22-5":[3,2],"22-6":[3,2],"23-6":[3,2],"23-5":[3,2],"24-5":[3,2],"24-6":[3,2],"23-7":[3,2],"21-6":[3,2],"20-5":[3,2],"19-5":[3,2],"20-6":[3,2],"19-6":[3,2],"22-7":[3,2],"24-7":[3,2],"21-7":[3,2],"20-7":[3,2],"18-6":[3,2],"17-6":[3,2],"17-5":[3,2],"16-5":[3,2],"16-6":[3,2],"18-5":[3,2],"19-7":[3,2],"20-8":[3,2],"21-8":[3,2],"22-8":[3,2],"23-8":[3,2],"24-8":[3,2],"24-9":[3,2],"24-10":[3,2],"24-11":[3,2],"24-12":[3,2],"23-11":[3,2],"23-10":[3,2],"23-9":[3,2],"22-10":[3,2],"22-11":[3,2],"21-11":[3,2],"22-12":[3,2],"23-12":[3,2],"21-12":[3,2],"20-12":[3,2],"19-12":[3,2],"18-12":[3,2],"17-12":[3,2],"16-12":[3,2],"15-12":[3,2],"14-12":[3,2],"13-12":[3,2],"12-12":[3,2],"11-12":[3,2],"10-12":[3,2],"9-12":[3,2],"8-12":[3,2],"7-12":[3,2],"6-12":[3,2],"5-12":[3,2],"4-12":[3,2],"3-12":[3,2],"2-12":[3,2],"1-12":[3,2],"0-12":[3,2],"0-11":[3,2],"0-10":[3,2],"0-9":[3,2],"-1-9":[3,2],"0-5":[3,2],"0-6":[3,2],"0-7":[3,2],"0-8":[3,2],"1-9":[3,2],"1-8":[3,2],"2-8":[3,2],"3-8":[3,2],"4-8":[3,2],"4-7":[3,2],"5-7":[3,2],"5-6":[3,2],"4-6":[3,2],"4-5":[3,2],"3-5":[3,2],"2-5":[3,2],"1-5":[3,2],"1-6":[3,2],"2-6":[3,2],"2-7":[3,2],"1-7":[3,2],"3-6":[3,2],"3-7":[3,2],"2-9":[3,2],"1-10":[3,2],"2-10":[3,2],"3-10":[3,2],"4-10":[3,2],"2-11":[3,2],"1-11":[3,2],"3-11":[3,2],"4-11":[3,2],"5-11":[3,2],"6-11":[3,2],"7-11":[3,2],"8-11":[3,2],"9-11":[3,2],"9-10":[3,2],"10-10":[3,2],"11-10":[3,2],"12-10":[3,2],"13-10":[3,2],"14-10":[3,2],"15-10":[3,2],"16-10":[3,2],"17-10":[3,2],"18-10":[3,2],"19-10":[3,2],"20-10":[3,2],"20-11":[3,2],"19-11":[3,2],"18-11":[3,2],"17-11":[3,2],"16-11":[3,2],"15-11":[3,2],"14-11":[3,2],"13-11":[3,2],"12-11":[3,2],"11-11":[3,2],"10-11":[3,2],"21-10":[3,2],"22-9":[3,2],"21-9":[3,2],"20-9":[3,2],"19-9":[3,2],"18-9":[3,2],"17-9":[3,2],"16-9":[3,2],"15-9":[3,2],"14-9":[3,2],"13-9":[3,2],"12-9":[3,2],"11-9":[3,2],"10-9":[3,2],"9-9":[3,2],"8-9":[3,2],"7-9":[3,2],"6-9":[3,2],"6-10":[3,2],"8-10":[3,2],"7-10":[3,2],"5-10":[3,2],"4-9":[3,2],"3-9":[3,2],"5-9":[3,2],"5-8":[3,2],"5-5":[3,2],"6-7":[3,2],"6-8":[3,2],"6-6":[3,2],"6-5":[3,2],"7-6":[3,2],"7-7":[3,2],"7-8":[3,2],"8-8":[3,2],"8-7":[3,2],"8-6":[3,2],"8-5":[3,2],"9-6":[3,2],"7-5":[3,2],"9-5":[3,2],"10-5":[3,2],"11-5":[3,2],"12-5":[3,2],"13-5":[3,2],"14-5":[3,2],"15-5":[3,2],"12-6":[3,2],"11-6":[3,2],"10-6":[3,2],"13-6":[3,2],"14-6":[3,2],"15-6":[3,2],"13-7":[3,2],"12-7":[3,2],"11-7":[3,2],"10-7":[3,2],"9-7":[3,2],"11-8":[3,2],"12-8":[3,2],"10-8":[3,2],"9-8":[3,2],"13-8":[3,2],"14-7":[3,2],"15-7":[3,2],"16-7":[3,2],"17-7":[3,2],"18-7":[3,2],"18-8":[3,2],"17-8":[3,2],"16-8":[3,2],"15-8":[3,2],"14-8":[3,2],"19-8":[3,2],"0-13":[3,2],"0-14":[3,2],"0-15":[3,2],"0-16":[3,2],"0-17":[3,2],"0-18":[3,2],"0-19":[3,2],"1-19":[3,2],"2-19":[3,2],"3-19":[3,2],"4-19":[3,2],"5-19":[3,2],"6-19":[3,2],"7-19":[3,2],"8-19":[3,2],"9-19":[3,2],"10-19":[3,2],"11-19":[3,2],"12-19":[3,2],"13-19":[3,2],"14-19":[3,2],"15-19":[3,2],"16-19":[3,2],"17-19":[3,2],"18-19":[3,2],"19-19":[3,2],"20-19":[3,2],"21-19":[3,2],"22-19":[3,2],"23-19":[3,2],"24-19":[3,2],"24-18":[3,2],"24-17":[3,2],"24-16":[3,2],"24-15":[3,2],"24-14":[3,2],"24-13":[3,2],"23-13":[3,2],"22-13":[3,2],"21-13":[3,2],"20-13":[3,2],"19-13":[3,2],"18-13":[3,2],"20-14":[3,2],"19-14":[3,2],"21-14":[3,2],"22-14":[3,2],"23-14":[3,2],"23-15":[3,2],"23-16":[3,2],"23-17":[3,2],"23-18":[3,2],"22-18":[3,2],"21-18":[3,2],"20-18":[3,2],"20-17":[3,2],"20-16":[3,2],"20-15":[3,2],"17-13":[3,2],"17-14":[3,2],"17-15":[3,2],"18-15":[3,2],"18-16":[3,2],"18-17":[3,2],"18-14":[3,2],"19-16":[3,2],"19-17":[3,2],"19-18":[3,2],"18-18":[3,2],"17-18":[3,2],"17-17":[3,2],"19-15":[3,2],"17-16":[3,2],"21-16":[3,2],"21-15":[3,2],"22-15":[3,2],"22-16":[3,2],"22-17":[3,2],"21-17":[3,2],"16-16":[3,2],"15-16":[3,2],"15-17":[3,2],"14-17":[3,2],"14-18":[3,2],"15-18":[3,2],"16-18":[3,2],"16-17":[3,2],"16-15":[3,2],"16-13":[3,2],"15-13":[3,2],"14-13":[3,2],"13-13":[3,2],"12-13":[3,2],"11-13":[3,2],"10-13":[3,2],"9-13":[3,2],"8-13":[3,2],"7-13":[3,2],"6-13":[3,2],"5-13":[3,2],"4-13":[3,2],"3-13":[3,2],"2-13":[3,2],"1-13":[3,2],"1-14":[3,2],"1-15":[3,2],"1-16":[3,2],"1-17":[3,2],"1-18":[3,2],"2-18":[3,2],"3-18":[3,2],"4-18":[3,2],"5-18":[3,2],"6-18":[3,2],"7-18":[3,2],"8-18":[3,2],"9-18":[3,2],"10-18":[3,2],"11-18":[3,2],"12-18":[3,2],"13-18":[3,2],"14-16":[3,2],"14-15":[3,2],"15-15":[3,2],"16-14":[3,2],"15-14":[3,2],"14-14":[3,2],"13-14":[3,2],"12-14":[3,2],"13-15":[3,2],"13-16":[3,2],"13-17":[3,2],"12-17":[3,2],"12-16":[3,2],"12-15":[3,2],"11-15":[3,2],"10-15":[3,2],"10-14":[3,2],"9-14":[3,2],"8-14":[3,2],"7-14":[3,2],"6-14":[3,2],"5-14":[3,2],"4-14":[3,2],"3-14":[3,2],"2-14":[3,2],"11-14":[3,2],"11-16":[3,2],"11-17":[3,2],"10-17":[3,2],"9-17":[3,2],"8-17":[3,2],"8-16":[3,2],"7-16":[3,2],"6-17":[3,2],"5-17":[3,2],"5-16":[3,2],"4-16":[3,2],"3-16":[3,2],"3-17":[3,2],"2-17":[3,2],"4-17":[3,2],"3-15":[3,2],"2-15":[3,2],"2-16":[3,2],"4-15":[3,2],"5-15":[3,2],"6-15":[3,2],"7-15":[3,2],"8-15":[3,2],"9-15":[3,2],"10-16":[3,2],"9-16":[3,2],"7-17":[3,2],"6-16":[3,2]},{"10-4":[21,2],"11-4":[22,2],"12-4":[23,2],"13-4":[24,2]},{"13-3":[24,1],"12-3":[23,1],"11-3":[22,1],"10-3":[21,1],"10-2":[21,0],"11-2":[22,0],"12-2":[23,0],"13-2":[24,0]}],"collision":[{"10-4":"solid"},{"11-4":"solid"},{"12-4":"solid"},{"13-4":"solid"},{"13-3":"solid"},{"12-3":"solid"},{"11-3":"solid"},{"10-3":"solid"}]};

class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown',  (e) => {
      if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key);
    })
    window.addEventListener('keyup', e => {
      this.keys.splice(this.keys.indexOf(e.key), 1);
    })
  }
}

class Player {
  constructor() {
    this.gameWidth = CANVAS_WIDTH;
    this.gameHeight = CANVAS_HEIGHT;
    this.width = 32;
    this.height = 32;
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.isFacingRight = true;
    this.runDirection = 'east';
  }

  draw (context) {
    context.beginPath();
    context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
    context.stroke();
    context.drawImage(playerImage, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 32, 32);
  }

  update(input, enemies) {
    //collision detection
    enemies.forEach(enemy => {
      const dx = enemy.x - this.x;
      const dy = enemy.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < enemy.width/2 + this.width/2) {
        console.log('collision detected');
      }
    })

    map1.collision.forEach((solid) => {
      const coords = Object.keys(solid)[0];
      const x = coords.split('-')[0] * 32;
      const y = coords.split('-')[1] * 32;
      const dx = x - this.x;
      const dy = y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 32) {
        switch (this.runDirection) {
          case 'east':
            this.x = x - this.width;
            break;
          case 'west':
            this.x = x + this.width;
            break;
          case 'north':
            this.y = y + this.width;
            break;
          case 'south':
            this.y = y - this.width;
            break;
        }
      }
    })

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (input.keys.indexOf('ArrowRight') > -1) {
      this.xSpeed = 3;
      this.runDirection = 'east';
    } else if (input.keys.indexOf('ArrowLeft') > -1) {
      this.xSpeed = -3;
      this.runDirection = 'west';
    }
    else this.xSpeed = 0;

    if (input.keys.indexOf('ArrowDown') > -1) {
      this.ySpeed = 3;
      this.runDirection = 'south';
    }
    else if (input.keys.indexOf('ArrowUp') > -1) {
      this.ySpeed = -3;
      this.runDirection = 'north';
    }
    else this.ySpeed = 0;

    //switch between animations
    if (this.xSpeed > 0) {
      playerImage.src = playerRunRight;
      this.isFacingRight = true;
    }
    else if (this.xSpeed < 0) {
      playerImage.src = playerRunLeft;
      this.isFacingRight = false;
    }
    else if (this.xSpeed === 0) playerImage.src = this.isFacingRight ? playerIdleRight : playerIdleLeft;

    //ensure still animating run on y coord movements
    if (this.ySpeed !== 0 && this.isFacingRight) playerImage.src = playerRunRight;
    else if (this.ySpeed !== 0 && !this.isFacingRight) playerImage.src = playerRunLeft;

    //contain player in boundary
    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

    if (this.y < 0) this.y = 0;
    else if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height
  }
}

class Enemy {
  constructor(image, x, y) {
    this.gameWidth = CANVAS_WIDTH;
    this.gameHeight = CANVAS_HEIGHT;
    this.image = image;
    this.width = 32;
    this.height = 32;
    this.x = x;
    this.y = y;
    this.isFacingRight = true;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
    context.stroke();
    context.drawImage(this.image, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 32, 32);
  }
}

function handleEnemies() {
  enemies.forEach(enemy => {
    enemy.draw(ctx);
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
  player.draw(ctx);
  player.update(input, enemies);

  if (gameFrame % staggerFrames === 0) {
    if (frameX < 5) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}

const input = new InputHandler();
const player = new Player();
enemies.push(new Enemy(goblinImage, 420, 420));
enemies.push(new Enemy(slimeImage, 69, 420));

animate();