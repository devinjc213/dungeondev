import playerRunRight from '../assets/heroes/knight/knight_run_right.png';
import playerRunLeft from '../assets/heroes/knight/knight_run_left.png';
import playerIdleRight from '../assets/heroes/knight/knight_idle_right.png';
import playerIdleLeft from '../assets/heroes/knight/knight_idle_left.png';
import swordLeft from '../assets/props_itens/sword_left.png';
import swordRight from '../assets/props_itens/sword_right.png';
import swordSwingLeft from '../assets/props_itens/sword_swing_left.png';
import swordSwingRight from '../assets/props_itens/sword_swing_right.png';
import { map1 } from '../maps/map1.js';
import Enemy from '../game/Enemy';
import InputHandler from '../game/InputHandler';
import { CircleCollision, CircleRectangleCollision, RectangleCollision } from '../utils';

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 16;
const TILE_SIZE = 32;
const MOVEMENT_SPEED = 3;
const playerImage = new Image();
playerImage.src = playerIdleRight;

const swordImage = new Image();
swordImage.src = swordRight;

export default class Player {
  readonly gameWidth: number;
  readonly gameHeight: number;
  readonly width: number;
  readonly height: number;
  public x: number;
  public y: number;
  public hp: number;
  public isFacingRight: boolean;
  readonly playerImage: HTMLImageElement;
  private isAttacking: boolean;
  private xSpeed: number;
  private ySpeed: number;

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = TILE_SIZE;
    this.height = TILE_SIZE;
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.hp = 10;
    this.isFacingRight = true;
    this.playerImage = playerImage;
    this.isAttacking = false;
  }

  draw (context: CanvasRenderingContext2D, frameX: number) {
    context.beginPath();
    context.arc(this.x + this.width/2 + 1, this.y + this.height/2 + 1, this.width/3, 0, Math.PI * 2);
    context.stroke();
    context.drawImage(this.playerImage, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 32, 32);

    //sword animations
    if (this.isAttacking) {
      if (this.isFacingRight) {
        swordImage.src = swordSwingRight;
        context.drawImage(swordImage,frameX * 32, 0, 32, 32, this.x + 16, this.y, 32, 32);
      } else {
        swordImage.src = swordSwingLeft;
        context.drawImage(swordImage,frameX * 32, 0, 32, 32, this.x - 16, this.y, 32, 32);
      }
    } else {
      if (this.isFacingRight) {
        swordImage.src = swordRight;
        context.drawImage(swordImage, this.x + 16, this.y, 32, 32);
      } else {
        swordImage.src = swordLeft;
        context.drawImage(swordImage, this.x - 16, this.y, 32, 32);
      }
    }
  }

  update(input: InputHandler, enemies: Enemy[], context: CanvasRenderingContext2D, frameX: number) {
    //input and collision
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (input.keys.indexOf('ArrowRight') > -1) {
      for (let i = 0; i < map1.collision.length; i++) {
        const rectX = Number(Object.keys(map1.collision[i])[0].split('-')[0]) * TILE_SIZE;
        const rectY = Number(Object.keys(map1.collision[i])[0].split('-')[1]) * TILE_SIZE;
        const collided = RectangleCollision(
          { x: this.x + MOVEMENT_SPEED, y: this.y, w: this.width, h: this.height },
          { x: rectX, y: rectY, w: TILE_SIZE, h: TILE_SIZE});
        if (collided) {
          this.xSpeed = 0;
          break;
        } else this.xSpeed = 3;
      }
    } else if (input.keys.indexOf('ArrowLeft') > -1) {
      for (let i = 0; i < map1.collision.length; i++) {
        const rectX = Number(Object.keys(map1.collision[i])[0].split('-')[0]) * TILE_SIZE;
        const rectY = Number(Object.keys(map1.collision[i])[0].split('-')[1]) * TILE_SIZE;
        const collided = RectangleCollision(
          { x: this.x - MOVEMENT_SPEED, y: this.y, w: this.width, h: this.height },
          { x: rectX, y: rectY, w: TILE_SIZE, h: TILE_SIZE});
        if (collided) {
          this.xSpeed = 0;
          break;
        } else this.xSpeed = -3;
      }
    }
    else this.xSpeed = 0;

    if (input.keys.indexOf('ArrowDown') > -1) {
      for (let i = 0; i < map1.collision.length; i++) {
        const rectX = Number(Object.keys(map1.collision[i])[0].split('-')[0]) * TILE_SIZE;
        const rectY = Number(Object.keys(map1.collision[i])[0].split('-')[1]) * TILE_SIZE;
        const collided = RectangleCollision(
          { x: this.x, y: this.y + MOVEMENT_SPEED, w: this.width, h: this.height },
          { x: rectX, y: rectY, w: TILE_SIZE, h: TILE_SIZE});
        if (collided) {
          this.ySpeed = 0;
          break;
        } else this.ySpeed = 3;
      }
    }
    else if (input.keys.indexOf('ArrowUp') > -1) {
      for (let i = 0; i < map1.collision.length; i++) {
        const rectX = Number(Object.keys(map1.collision[i])[0].split('-')[0]) * TILE_SIZE;
        const rectY = Number(Object.keys(map1.collision[i])[0].split('-')[1]) * TILE_SIZE;
        const collided = RectangleCollision(
          { x: this.x, y: this.y - MOVEMENT_SPEED, w: this.width, h: this.height },
          { x: rectX, y: rectY, w: TILE_SIZE, h: TILE_SIZE});
        if (collided) {
          this.ySpeed = 0;
          break;
        } else this.ySpeed = -3;
      }
    }
    else this.ySpeed = 0;

    this.isAttacking = input.keys.indexOf(' ') > -1;

    //animations
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