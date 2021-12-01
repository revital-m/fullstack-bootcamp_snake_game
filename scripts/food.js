import { randomGridPosition } from "./grid.js";
import { expandSnake, onSnake, speedUpSnake } from "./snake.js";

let food = getRandomFoodPosition();

const EXPANSION_RATE = 3;
const foods = ["food--cherry", "food--banana", "food--grapes"];
let foodClass = foods[0];

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    speedUpSnake(1);
    foodClass = getRandomFoodClass();
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
//   foodElement.classList.add("food");
  foodElement.classList.add(`${foodClass}`);
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

function getRandomFoodClass() {
  let idx = Math.floor(Math.random() * foods.length);
  return foods[idx];
}
