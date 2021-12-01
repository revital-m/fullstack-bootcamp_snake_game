import { randomGridPosition } from "./grid.js";
import {
  expandSnake,
  onSnake,
  speedUpSnake,
  changeSnakeColor,
} from "./snake.js";

let food = getRandomFoodPosition();

const EXPANSION_RATE = 3;
const foods = [
  {
    foodClassToAdd: "food--cherry",
    snakeClassToAdd: "snake--cherry",
  },
  {
    foodClassToAdd: "food--banana",
    snakeClassToAdd: "snake--banana",
  },
  {
    foodClassToAdd: "food--grapes",
    snakeClassToAdd: "snake--grapes",
  },
];
let foodsIdx = getRandomFoodIdx();

let foodClass = foods[foodsIdx].foodClassToAdd;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    speedUpSnake(1);
    let lastFoodIdx = foodsIdx;
    foodsIdx = getRandomFoodIdx();
    foodClass = foods[foodsIdx].foodClassToAdd;
    food = getRandomFoodPosition();
    changeSnakeColor(foods[lastFoodIdx].snakeClassToAdd);
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
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

function getRandomFoodIdx() {
  return Math.floor(Math.random() * foods.length);
}
