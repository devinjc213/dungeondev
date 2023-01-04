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

const playerImage = new Image();
playerIdleRight = 'assets/heroes/knight/knight_idle_right.png';
playerIdleLeft = 'assets/heroes/knight/knight_idle_left.png';
playerRunRight = 'assets/heroes/knight/knight_run_right.png';
playerRunLeft = 'assets/heroes/knight/knight_run_left.png';
playerImage.src = playerIdleRight;

const goblinImage = new Image();
goblinIdleAnimation = 'assets/enemies/goblin/goblin_idle_spritesheet.png';
goblinRunningAnimation = 'assets/enemies/goblin/goblin_run_spritesheet.png';
goblinImage.src = goblinIdleAnimation;

const slimeImage = new Image();
slimeIdleAnimation = 'assets/enemies/slime/slime_idle_spritesheet.png';
slimeRunningAnimation = 'assets/enemies/slime/slime_run_spritesheet.png';
slimeImage.src = slimeIdleAnimation;

const background = new Image();
background.src = 'assets/maps/map1.png';

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
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 32;
    this.height = 32;
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.isFacingRight = true;
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

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (input.keys.indexOf('ArrowRight') > -1) this.xSpeed = 3;
    else if (input.keys.indexOf('ArrowLeft') > -1) this.xSpeed = -3;
    else this.xSpeed = 0;

    if (input.keys.indexOf('ArrowDown') > -1) this.ySpeed = 3;
    else if (input.keys.indexOf('ArrowUp') > -1) this.ySpeed = -3;
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
  constructor(gameWidth, gameHeight, image, x, y) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = image;
    this.width = 32;
    this.height = 32;
    this.x = x;
    this.y = y;
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

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(background, 0, 0);
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
const player = new Player(canvas.width, canvas.height);
enemies.push(new Enemy(canvas.width, canvas.height, goblinImage, 420, 420));
enemies.push(new Enemy(canvas.width, canvas.height, slimeImage, 69, 420));

animate();