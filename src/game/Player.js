import playerRunRight from '../assets/heroes/knight/knight_run_right.png';
import playerRunLeft from '../assets/heroes/knight/knight_run_left.png';
import playerIdleRight from '../assets/heroes/knight/knight_idle_right.png';
import playerIdleLeft from '../assets/heroes/knight/knight_idle_left.png';
import { map1 } from '../maps/map1.js';

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 16;
const playerImage = new Image();
playerImage.src = playerIdleRight;

export default class Player {
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
    this.runDirection = 'east';
    this.playerImage = playerImage;
  }

  draw (context, frameX) {
    context.beginPath();
    context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
    context.stroke();
    context.drawImage(this.playerImage, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 32, 32);
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
      this.playerImage.src = playerRunRight;
      this.isFacingRight = true;
    }
    else if (this.xSpeed < 0) {
      this.playerImage.src = playerRunLeft;
      this.isFacingRight = false;
    }
    else if (this.xSpeed === 0) this.playerImage.src = this.isFacingRight ? playerIdleRight : playerIdleLeft;

    //ensure still animating run on y coord movements
    if (this.ySpeed !== 0 && this.isFacingRight) this.playerImage.src = playerRunRight;
    else if (this.ySpeed !== 0 && !this.isFacingRight) this.playerImage.src = playerRunLeft;

    //contain player in boundary
    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

    if (this.y < 0) this.y = 0;
    else if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height
  }
}