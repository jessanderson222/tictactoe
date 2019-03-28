// const startButton = document.querySelector("button");
// const squareTwo = document.querySelector("square-2");
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector("button");
  const squareTwo = document.querySelector("square-2");
  console.log("loaded");
  startButton.addEventListener("click", eventHandler);
});

function eventHandler(e) {
  e.preventDefault();
  startGame();
}

function startGame() {
  score = {
    X: 0,
    O: 0
  };
  moves = 0;
  turn = "X";
}
