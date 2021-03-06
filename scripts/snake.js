import { getInputDirection } from "./input.js";

export let SNAKE_SPEED = 7;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  addSegments();
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    snakeElement.setAttribute("id", "snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, idx) => {
    if (ignoreHead && idx === 0) {
      return false;
    }
    return equalPositions(segment, position);
  });
}

function equalPositions(position1, position2) {
  return position1.x === position2.x && position1.y === position2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

export function speedUpSnake(amount) {
  SNAKE_SPEED += amount;
}

export function changeSnakeColor(classToAdd) {
  const snakeColor = document.querySelectorAll("#snake");
  console.log(snakeColor);
  snakeColor.forEach((part) => {
    // part.classList.remove("snake--cherry");
    // part.classList.remove("snake--banana");
    // part.classList.remove("snake--grapes");
    // part.classList.remove("snake");
    part.classList.add(`${classToAdd}`);
    console.dir(snakeColor);
  });
}
