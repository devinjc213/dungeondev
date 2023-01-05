import goblinIdleAnimation from '../assets/enemies/goblin/goblin_idle_spritesheet.png';
import slimeIdleAnimation from '../assets/enemies/slime/slime_idle_spritesheet.png';

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 16;

const goblinImage = new Image();
goblinImage.src = goblinIdleAnimation;

const slimeImage = new Image();
slimeImage.src = slimeIdleAnimation;

export default class Enemy {
  constructor(gameWidth, gameHeight, monster, x, y) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = monster === 'goblin' ? goblinImage : slimeImage;
    this.width = 32;
    this.height = 32;
    this.x = x;
    this.y = y;
    this.isFacingRight = true;
  }

  draw(context, frameX) {
    context.beginPath();
    context.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2);
    context.stroke();
    context.drawImage(this.image, frameX * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 32, 32);
  }
}
