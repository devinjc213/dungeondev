interface Circle {
  x: number
  y: number
  r: number
}

interface Rectangle {
  x: number
  y: number
  h: number
  w: number
}

type Vector = [number, number];

export function RectangleCollision(rect1: Rectangle, rect2: Rectangle) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  )
}

export function CircleRectangleCollision(circle: Circle, rect: Rectangle) {
  const distX = Math.abs(circle.x - rect.x-rect.w/2);
  const distY = Math.abs(circle.y - rect.y-rect.h/2);

  if (distX > (rect.w/2 + circle.r)) { return false; }
  if (distY > (rect.h/2 + circle.r)) { return false; }

  if (distX <= (rect.w/2)) { return true; }
  if (distY <= (rect.h/2)) { return true; }

  const dx = distX-rect.w/2;
  const dy = distY-rect.h/2;
  return (dx*dx+dy*dy<=(circle.r*circle.r));
}

export function CircleCollision(circle1: Circle, circle2: Circle) {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circle1.r + circle2.r;
}

export function DotProduct(vec1: Vector, vec2: Vector) {
  return vec1[0] * vec2[0] + vec1[1] * vec2[1]
}

export function UnitVectorCollisionProjection(vec1: Vector, vec2: Vector) {
  return [DotProduct(vec1, vec2) * vec2[0], DotProduct(vec1, vec2) * vec2[1]]
}